# LaunchDarkly SE Technical Exercise
 
A demonstration of LaunchDarkly feature flags with real-time targeting, showcasing safe feature releases and targeted user experiences.
 
## Overview
 
This project demonstrates two core LaunchDarkly capabilities:
 
### Part 1: Release & Remediate
- **Feature Flags**: Toggle features on/off without redeployment
- **Instant Updates**: Real-time flag changes with SDK listeners (no page reload required)
- **Safe Rollback**: Quickly disable problematic features with zero downtime
### Part 2: Target
- **Individual Targeting**: Enable features for specific users
- **Rule-Based Targeting**: Target users based on custom attributes (plan, company size, etc.)
- **Real-World Scenarios**: Demonstrates targeting enterprise vs. freemium customers
## Quick Start
 
### Prerequisites
- Node.js 22+ and npm 10+ (this project's dependencies require Node `^22.22.2`, `^24.15.0`, or `>=26.0.0`)
- LaunchDarkly account (free trial at https://launchdarkly.com/start-trial/)
### Setup
 
1. **Clone and install dependencies**
```bash
git clone https://github.com/kaylaseplo/launchdarkly-demo.git
cd launchdarkly-demo
npm install
```
 
2. **Get your LaunchDarkly SDK key**
   - Log in to your LaunchDarkly account
   - Go to Settings → SDK keys
   - Choose your project and the **Test** environment
   - Copy your **Client-side ID** under "Client-side IDs"
3. **Create the feature flag**
   - In your LaunchDarkly dashboard, go to **Flags** and create a new flag with the key: `new-checkout-flow`
   - Flag type: **Boolean**
   - Open the flag's **Targeting** tab for your Test environment and turn **targeting ON**
   - Set up the individual target (this is illustrative only — a standalone example of individual targeting that isn't tied to either demo button, since both demo users are meant to follow the plan-based rule instead):
     - Under **individual targets**, find the row for the `true` variation
     - In the **Context key** field, type `user-123`
     - Set **Kind** to `user`, confirm **Variation** is `true`, and click **Add**
   - Add Rule 1:
     - Click the **+** button to add a new rule and choose **Build a custom rule**
     - Set **Context kind** to `user`
     - Set **Attribute** to `plan`
     - Set **Operator** to `is one of`
     - In **Values**, type `premium` and press enter to add it as a tag
     - Set **Serve** to `true`
   - Set the default rule (the fallback for everyone who doesn't match the above):
     - Find the **Default rule** row and click **Edit**
     - Set **Serve** to `false`
     - Save your changes
   - Click **Review and save**
4. **Update the SDK key in `app.js`**
   - Replace `'6a6a6f71c0abbe0a98ecd74e'` with your actual Client-side ID
5. **Start the dev server**
```bash
npm run dev
```
 
6. **Open your browser**
   - Navigate to `http://localhost:1234`
## How to Use
 
### Testing Part 1: Release & Remediate
 
1. **Click "Test Enterprise Customer"** to load an enterprise user
2. You should see: **"✅ New Checkout Flow (ENABLED)"**
3. Go to LaunchDarkly dashboard → Flags → `new-checkout-flow`
4. **Toggle the flag On/Off** — watch your app update instantly (no reload needed)
5. This demonstrates safe feature releases and instant rollback
### Testing Part 2: Target
 
1. **Click "Test Enterprise Customer"** (plan: premium)
   - Should see: **ENABLED** (matches Rule 1: if plan === 'premium')
2. **Click "Test Freemium Customer"** (plan: free)
   - Should see: **DISABLED** (falls to default rule: false)
3. Go to LaunchDarkly dashboard to see how the targeting works:
   - **Individual Target**: `user-123` always gets `true` — shown as a standalone example of individual targeting; this key isn't used by either demo button
   - **Rule 1**: if user plan is 'premium' → serve `true`
   - **Default Rule**: serve `false` to everyone else
## Feature Flag Configuration Reference
 
The `new-checkout-flow` flag should be configured in LaunchDarkly with:
 
**Targeting Rules:**
- Individual target: `user-123` → `true` (standalone example of individual targeting; not tied to either demo button)
- Rule 1: if `user.plan` is one of `'premium'` → `true`
- Default rule: → `false`
**Context Attributes Used:**
- `plan` (free/premium) — determines feature access
- `accountType` (Freemium/Enterprise) — for display
- `companySize` (small/large) — example custom attribute
## Screenshots
 
**Flag Configuration in LaunchDarkly Dashboard**
![Flag Configuration](screenshots/flag-config.png)
- Shows individual targeting, rule-based targeting, and default fallback
**Enterprise Customer (Premium) - Feature ENABLED**
![Premium Checkout](screenshots/premium-checkout.png)
- Sarah Chen sees the new checkout flow with premium styling, progress indicators, and Google Pay integration
- Matched by: Rule 1 (plan === 'premium')
**Freemium Customer (Free) - Feature DISABLED**
![Standard Checkout](screenshots/standard-checkout.png)
- Alex Morgan sees the standard checkout flow with minimal styling and basic card form
- Falls through to default rule (false)
**Experimentation Setup**
![Experiment Setup](screenshots/experiment-setup.png)
- A/B test configuration with 90/10 treatment/control split for premium users
## Code Structure
 
```
launchdarkly-demo/
├── app.js              # Main LaunchDarkly SDK integration
├── index.html          # Simple UI with buttons to test scenarios
├── package.json        # Dependencies (LaunchDarkly SDK, Parcel)
├── README.md           # This file
└── TALK_TRACK.md       # Presentation script and talking points
```
 
### Key Code: Flag Evaluation
 
```javascript
// Evaluate the flag and update UI
const flagValue = client.variation('new-checkout-flow', false);
updateFeature(flagValue, context);
 
// Listen for real-time changes
client.on('change:new-checkout-flow', () => {
  const flagValue = client.variation('new-checkout-flow', false);
  updateFeature(flagValue, context);
});
```
 
## What This Demonstrates
 
✅ **Feature flag fundamentals**: Toggling features on/off safely  
✅ **Instant rollback**: Disable features without redeployment  
✅ **Individual targeting**: Enable features for specific users  
✅ **Rule-based targeting**: Target based on user attributes  
✅ **Real-time listeners**: Updates without page reloads  
✅ **Production-ready patterns**: Context attributes, flag evaluation, error handling
 
## Next Steps (Extra Credit)
 
To extend this project:
- **Experimentation**: Create A/B tests with metrics
- **AI Configs**: Manage LLM prompts and models via feature flags
- **Integrations**: Connect to Slack, DataDog, or other services
## Notes
 
- The SDK key shown is a placeholder — replace it with your own Client-side ID before running the app
- This uses LaunchDarkly's free trial account
- The app runs entirely client-side (no backend required)
- Flag values are evaluated locally by the SDK for performance
## Resources
 
- [LaunchDarkly Documentation](https://docs.launchdarkly.com/)
- [JavaScript SDK Guide](https://docs.launchdarkly.com/sdk/client-side/javascript)
- [Feature Flags Best Practices](https://launchdarkly.com/blog/)
## Contact
 
Questions? Reach out to the LaunchDarkly team or check their support docs.
 
