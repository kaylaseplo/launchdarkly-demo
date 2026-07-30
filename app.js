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
    renderCheckout(flagValue, context);
  });

  // Listen for flag changes in real-time
  client.on('change:new-checkout-flow', () => {
    const flagValue = client.variation('new-checkout-flow', false);
    renderCheckout(flagValue, context);
  });

  client.start();
}

// Shared sample cart shown in both experiences
const cart = [
  { item: 'Pro Plan (Annual)', price: '$144.00' },
  { item: 'Extra Seats × 3', price: '$36.00' }
];
const cartTotal = '$180.00';

// Fire the checkout_completed conversion event for the experiment
function trackConversion() {
  if (!client) return;
  const context = client.getContext();
  client.track('checkout_completed', {
    name: context.name,
    plan: context.plan,
    accountType: context.accountType
  });
  client.flush();
  console.log(
    `📊 Conversion tracked: checkout_completed — ${context.name} (${context.plan} plan)`
  );
}
window.trackConversion = trackConversion;

function renderCheckout(enabled, context) {
  const content = document.getElementById('feature-content');
  content.innerHTML = enabled
    ? premiumCheckout(context)
    : standardCheckout(context);
}

// ─────────────────────────────────────────────────────────────
// Flag ON: modern multi-step checkout (new-checkout-flow)
// ─────────────────────────────────────────────────────────────
function premiumCheckout(context) {
  const input = `width: 100%; padding: 12px 14px; margin: 6px 0 14px; border: 1px solid #d6d9e0; border-radius: 8px; font-size: 14px; box-sizing: border-box; font-family: inherit;`;
  const label = `font-size: 12px; font-weight: 600; color: #4a5068; text-transform: uppercase; letter-spacing: 0.5px;`;

  const step = (n, name, active) => `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1;">
      <div style="width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700;
        ${active
          ? 'background: rgba(255,255,255,0.95); color: #667eea;'
          : 'background: rgba(255,255,255,0.25); color: white;'}">${n}</div>
      <span style="font-size: 12px; color: rgba(255,255,255,0.9);">${name}</span>
    </div>`;

  return `
    <div style="max-width: 520px; margin: 20px auto; font-family: -apple-system, 'Segoe UI', Roboto, sans-serif; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 40px rgba(102,126,234,0.35); background: white;">

      <!-- Gradient header with progress steps -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px 28px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <span style="font-size: 18px;">🚀</span>
              <span style="color: white; font-weight: 700; font-size: 15px; letter-spacing: 0.3px;">Northwind Cloud</span>
            </div>
            <h2 style="margin: 0; color: white; font-size: 21px;">Complete Your Order</h2>
            <div style="color: rgba(255,255,255,0.75); font-size: 12px; margin-top: 3px;">Fast, secure checkout</div>
          </div>
          <span style="background: rgba(255,255,255,0.2); color: white; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 20px; letter-spacing: 0.5px;">🔒 SECURE</span>
        </div>
        <div style="display: flex; align-items: flex-start;">
          ${step(1, 'Shipping', false)}
          <div style="height: 2px; background: rgba(255,255,255,0.4); flex: 1; margin-top: 15px;"></div>
          ${step(2, 'Payment', true)}
          <div style="height: 2px; background: rgba(255,255,255,0.4); flex: 1; margin-top: 15px;"></div>
          ${step(3, 'Review', false)}
        </div>
      </div>

      <div style="padding: 28px;">
        <!-- User banner -->
        <div style="display: flex; align-items: center; gap: 12px; background: #f4f5fb; border-radius: 10px; padding: 12px 16px; margin-bottom: 22px;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #667eea, #764ba2); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700;">${context.name.charAt(0)}</div>
          <div>
            <div style="font-weight: 600; color: #1f2437;">${context.name}</div>
            <div style="font-size: 12px; color: #7a7f95;">${context.accountType} account · ${context.email}</div>
          </div>
        </div>

        <!-- Saved payment methods -->
        <div style="${label}">Saved payment methods</div>
        <div style="display: flex; gap: 10px; margin: 8px 0 18px;">
          <div style="flex: 1; border: 2px solid #667eea; border-radius: 10px; padding: 12px 14px; background: #f4f5fb; cursor: pointer;">
            <div style="font-weight: 600; color: #1f2437; font-size: 14px;">💳 Visa •••• 4242</div>
            <div style="font-size: 12px; color: #7a7f95;">Expires 08/28 · Default</div>
          </div>
          <div style="flex: 1; border: 2px solid transparent; border-radius: 10px; padding: 12px 14px; background: #1a73e8; cursor: pointer; box-shadow: 0 2px 8px rgba(26,115,232,0.35);">
            <div style="font-weight: 600; color: white; font-size: 14px;">🔵 Google Pay</div>
            <div style="font-size: 12px; color: rgba(255,255,255,0.85);">Fast, secure checkout</div>
          </div>
          <div style="flex: 1; border: 1px dashed #c4c8d8; border-radius: 10px; padding: 12px 14px; color: #667eea; font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; cursor: pointer;">＋ Add new card</div>
        </div>

        <div style="${label}">Billing details</div>
        <input style="${input}" placeholder="Cardholder name" value="${context.name}" />
        <div style="display: flex; gap: 12px;">
          <input style="${input}" placeholder="MM / YY" />
          <input style="${input}" placeholder="CVC" />
        </div>

        <!-- Order summary -->
        <div style="border-top: 1px solid #eceef4; margin-top: 6px; padding-top: 16px;">
          ${cart.map(c => `
            <div style="display: flex; justify-content: space-between; font-size: 14px; color: #4a5068; margin-bottom: 8px;">
              <span>${c.item}</span><span>${c.price}</span>
            </div>`).join('')}
          <div style="display: flex; justify-content: space-between; font-weight: 700; color: #1f2437; margin-top: 10px; font-size: 16px;">
            <span>Total</span><span>${cartTotal}</span>
          </div>
        </div>

        <button onclick="window.trackConversion()" style="width: 100%; margin-top: 20px; padding: 14px; border: none; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 15px; font-weight: 700; cursor: pointer; box-shadow: 0 6px 18px rgba(102,126,234,0.4);">
          Complete Purchase →
        </button>

      </div>

      <!-- Integrated trust footer -->
      <div style="display: flex; justify-content: center; gap: 22px; padding: 14px 28px; background: #f4f5fb; border-top: 1px solid #eceef4; font-size: 12px; color: #7a7f95;">
        <span>🔒 256-bit encryption</span>
        <span>⚡ One-click reorder</span>
        <span>↩︎ Free returns</span>
      </div>
    </div>`;
}

// ─────────────────────────────────────────────────────────────
// Flag OFF: simple, proven single-form checkout
// ─────────────────────────────────────────────────────────────
function standardCheckout(context) {
  const input = `width: 100%; padding: 10px; margin: 4px 0 14px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; box-sizing: border-box; font-family: inherit;`;

  return `
    <div style="max-width: 460px; margin: 20px auto; font-family: Arial, Helvetica, sans-serif; border: 1px solid #ddd; border-radius: 6px; background: #fff;">
      <div style="padding: 16px 22px; border-bottom: 1px solid #e5e5e5; background: #f7f7f7; border-radius: 6px 6px 0 0;">
        <div style="font-size: 13px; font-weight: bold; color: #555; margin-bottom: 2px;">🚀 Northwind Cloud</div>
        <h2 style="margin: 0; font-size: 18px; color: #333;">Secure Checkout</h2>
        <div style="font-size: 13px; color: #777; margin-top: 4px;">
          ${context.name} · ${context.accountType} account
        </div>
      </div>

      <div style="padding: 22px;">
        <label style="font-size: 13px; color: #555;">Email
          <input style="${input}" value="${context.email}" />
        </label>
        <label style="font-size: 13px; color: #555;">Card number
          <input style="${input}" placeholder="1234 5678 9012 3456" />
        </label>
        <div style="display: flex; gap: 10px;">
          <label style="font-size: 13px; color: #555; flex: 1;">Expiry
            <input style="${input}" placeholder="MM / YY" />
          </label>
          <label style="font-size: 13px; color: #555; flex: 1;">CVC
            <input style="${input}" placeholder="123" />
          </label>
        </div>

        <div style="border-top: 1px solid #e5e5e5; padding-top: 14px;">
          ${cart.map(c => `
            <div style="display: flex; justify-content: space-between; font-size: 13px; color: #555; margin-bottom: 6px;">
              <span>${c.item}</span><span>${c.price}</span>
            </div>`).join('')}
          <div style="display: flex; justify-content: space-between; font-weight: bold; color: #333; margin-top: 8px; font-size: 15px;">
            <span>Order total</span><span>${cartTotal}</span>
          </div>
        </div>

        <button onclick="window.trackConversion()" style="width: 100%; margin-top: 18px; padding: 12px; border: none; border-radius: 4px; background: #2e7d32; color: white; font-size: 15px; font-weight: bold; cursor: pointer;">
          Complete Purchase
        </button>
        <div style="text-align: center; font-size: 12px; color: #999; margin-top: 10px;">🔒 Secure checkout</div>
      </div>
    </div>`;
}

// Make function global for button clicks
window.initializeClient = initializeClient;

// Start with enterprise customer
initializeClient('enterpriseCustomer');

// Add buttons with better labels
document.body.innerHTML += `
  <div style="margin-top: 20px; padding: 10px; text-align: center;">
    <button onclick="window.initializeClient('enterpriseCustomer')" style="padding: 10px 15px; margin: 5px; background: #007bff; color: white; border: none; cursor: pointer; border-radius: 4px;">
      Test Enterprise Customer (Premium)
    </button>
    <button onclick="window.initializeClient('regularCustomer')" style="padding: 10px 15px; margin: 5px; background: #6c757d; color: white; border: none; cursor: pointer; border-radius: 4px;">
      Test Freemium Customer (Free)
    </button>
  </div>
`;
