# Email Setup Instructions

The contact form uses EmailJS to send emails. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

## Step 2: Add Email Service

**IMPORTANT**: If you're using Gmail, you may encounter authentication scope issues. Here are two options:

### Option A: Use EmailJS's Built-in Email Service (Recommended - Easiest)

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **EmailJS** (the default service, not Gmail)
4. This service uses EmailJS's own email infrastructure - no OAuth setup needed!
5. Copy your **Service ID** (e.g., `service_xxxxx`)

### Option B: Use Gmail (Requires OAuth Setup)

If you prefer Gmail, you need to set up OAuth2 properly:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Gmail API**:
   - Go to "APIs & Services" → "Library"
   - Search for "Gmail API" and enable it
4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URIs (EmailJS will provide this)
5. In EmailJS dashboard:
   - Go to **Email Services**
   - Click **Add New Service**
   - Choose **Gmail**
   - Enter your OAuth credentials
   - Make sure to grant all required scopes
6. Copy your **Service ID** (e.g., `service_xxxxx`)

**Note**: For most users, Option A (EmailJS service) is much easier and works perfectly fine!

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. In the **To Email** field, enter your email: `ariyan.hossain2208@gmail.com`
5. Save the template and copy the **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and fill in your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

3. Replace the placeholder values with your actual credentials

## Step 6: Restart Development Server

After adding the environment variables, restart your Next.js development server:

```bash
npm run dev
```

## Testing

1. Go to the contact page on your portfolio
2. Fill out the contact form
3. Submit the form
4. Check your email inbox (`ariyan.hossain2208@gmail.com`) for the message

## Troubleshooting

### "Insufficient authentication scopes" Error

If you see this error with Gmail:
- **Solution 1**: Switch to EmailJS's built-in email service (Option A above) - no OAuth needed!
- **Solution 2**: If using Gmail, ensure you've:
  - Enabled Gmail API in Google Cloud Console
  - Created OAuth 2.0 credentials properly
  - Granted all required scopes in the OAuth consent screen
  - Added the correct redirect URI from EmailJS

### Other Common Issues

- Make sure all environment variables are prefixed with `NEXT_PUBLIC_` (required for client-side access)
- Restart the dev server after adding/changing environment variables
- Check the browser console for any error messages
- Verify your EmailJS service and template IDs are correct
- Make sure your email service is properly connected in EmailJS
- If emails aren't arriving, check your spam folder

## Email Recipient

All contact form submissions will be sent to: **ariyan.hossain2208@gmail.com**

This is configured in `data/profile.ts` under `personalInfo.email`.

