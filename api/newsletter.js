// KIT (ConvertKit) API Proxy Endpoint
// This can be deployed as a serverless function (Vercel, Netlify) or Express server

// For serverless deployment (Vercel/Netlify)
export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        // Get environment variables
        const KIT_API_KEY = process.env.KIT_API_KEY;
        const KIT_FORM_ID = process.env.KIT_FORM_ID;

        if (!KIT_API_KEY || !KIT_FORM_ID) {
            console.error('Missing KIT API credentials');
            res.status(500).json({ error: 'Server configuration error' });
            return;
        }

        // Extract and validate form data
        const { email, first_name, company, use_case, source_page = 'llms_txt_tool' } = req.body;

        if (!email || !first_name) {
            res.status(400).json({ error: 'Email and first name are required' });
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            res.status(400).json({ error: 'Invalid email format' });
            return;
        }

        // Prepare KIT API request
        const kitApiUrl = `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`;
        
        const subscriberData = {
            api_key: KIT_API_KEY,
            email: email.toLowerCase().trim(),
            first_name: first_name.trim(),
            fields: {
                company: company?.trim() || '',
                use_case: use_case || 'not_specified',
                source_page: source_page,
                signup_date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
                lead_source: 'llms_txt_tool_landing'
            },
            tags: [
                'llms_txt_tool_signup',
                'ai_tool_user',
                use_case ? `use_case_${use_case.toLowerCase().replace(/\s+/g, '_')}` : 'use_case_unknown'
            ]
        };

        console.log('Submitting to KIT:', { email, first_name, use_case, source_page });

        // Make request to KIT API
        const kitResponse = await fetch(kitApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'LLMs.txt-Tool/1.0'
            },
            body: JSON.stringify(subscriberData)
        });

        const kitResult = await kitResponse.json();

        if (kitResponse.ok) {
            console.log('KIT subscription successful:', kitResult);
            
            res.status(200).json({
                success: true,
                message: 'Successfully subscribed to newsletter',
                subscriber_id: kitResult.subscription?.id
            });
        } else {
            console.error('KIT API error:', kitResult);
            
            // Handle specific KIT errors
            if (kitResult.error && kitResult.error.includes('already subscribed')) {
                res.status(200).json({
                    success: true,
                    message: 'Email already subscribed - welcome back!',
                    already_subscribed: true
                });
            } else {
                res.status(400).json({
                    error: 'Subscription failed',
                    details: kitResult.error || 'Unknown error'
                });
            }
        }

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'Please try again or contact support'
        });
    }
}

// For Express server deployment
// Uncomment the following if deploying as Express server instead of serverless

/*
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/newsletter', async (req, res) => {
    // Use the same logic as the handler function above
    await handler(req, res);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Newsletter API server running on port ${PORT}`);
});
*/