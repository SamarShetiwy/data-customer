import fetch from 'node-fetch';

async function createWebhook() {
  const response = await fetch('https://your-shop-name.myshopify.com/admin/api/2023-10/webhooks.json', {
    method: 'POST',
    headers: {
      'X-Shopify-Access-Token': 'your-access-token', // أدخل الـ Access Token هنا
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      webhook: {
        topic: 'customers/data_request',
        address: 'https://your-app.com/api/customer-data-request', // ضع عنوان الـ endpoint هنا
        format: 'json',
      },
    }),
  });
  const data = await response.json();
  console.log(data);
}

createWebhook();
