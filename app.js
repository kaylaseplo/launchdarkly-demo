import * as LDClient from '@launchdarkly/js-client-sdk';

let client;

// Real-world user scenarios for testing the new checkout feature
const users = {
  enterpriseCustomer: {
    kind: 'user',
    key: 'acme-corp-user',
    email: 'sarah@acme.com',
    name: 'Sarah Chen',
    plan: 'premium',
    accountType: 'Enterprise',
    companySize: 'large'
    // Enterprise customers get access to new features first
  },
  regularCustomer: {
    kind: 'user',
    key: 'indie-startup-user',
    email: 'alex@startup.dev',
    name: 'Alex Morgan',
    plan: 'free',
    accountType: 'Freemium',
    companySize: 'small'
    // Freemium users see the stable, proven checkout experience
  }
};

async function initializeClient(userType) {
  if (client) {
    client.close();
  }
  
  const context = users[userType];
  client = LDClient.createClient('6a6a6f71c0abbe0a98ecd74e', context);

  client.on('ready', () => {
    const flagValue = client.variation('new-checkout-flow', false);
    updateFeature(flagValue, context);
  });

  // Listen for flag changes in real-time
  client.on('change:new-checkout-flow', () => {
    const flagValue = client.variation('new-checkout-flow', false);
    updateFeature(flagValue, context);
  });

  client.start();
}

function updateFeature(enabled, context) {
  const content = document.getElementById('feature-content');
  const userName = context.name;
  const accountType = context.accountType;
  
  if (enabled) {
    content.innerHTML = `
      <h2>✅ New Checkout Flow (ENABLED)</h2>
      <p><strong>${userName}</strong> (${accountType}) is seeing the new checkout experience</p>
    `;
  } else {
    content.innerHTML = `
      <h2>❌ Standard Checkout Flow (DISABLED)</h2>
      <p><strong>${userName}</strong> (${accountType}) is using the proven checkout flow</p>
    `;
  }
}

// Make function global for button clicks
window.initializeClient = initializeClient;

// Start with enterprise customer
initializeClient('enterpriseCustomer');

// Add buttons with better labels
document.body.innerHTML += `
  <div style="margin-top: 20px; padding: 10px;">
    <button onclick="window.initializeClient('enterpriseCustomer')" style="padding: 10px 15px; margin: 5px; background: #007bff; color: white; border: none; cursor: pointer; border-radius: 4px;">
      Test Enterprise Customer (Premium)
    </button>
    <button onclick="window.initializeClient('regularCustomer')" style="padding: 10px 15px; margin: 5px; background: #6c757d; color: white; border: none; cursor: pointer; border-radius: 4px;">
      Test Freemium Customer (Free)
    </button>
  </div>
`;