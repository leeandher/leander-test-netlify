# leander-test-netlify

A Next.js + Netlify starter project with simple error throwing to test the Netlify integration with Sentry.

Original Starter Repo: https://github.com/netlify-templates/next-netlify-starter
Netlify Integration Repo: https://github.com/getsentry/sentry-netlify-build-plugin

## Setup

1. `npm install`
2. Configure sentry files:
   - `sentry.client.config.js`
   - `sentry.server.config.js`
   - `sentry.properties`
   - `.sentryclirc` (Not in VCS, use `.sentryclirc.example` for reference)
3. `npm run dev`