// src/shopify-api.js

const fetch = require("node-fetch");

const query = `
  {
    customers(first: 5) {
      edges {
        node {
          id
          firstName
          lastName
          phone
          email
        }
      }
    }
  }
`;

const url = "https://{your-shop-name}.myshopify.com/admin/api/2024-10/graphql.json";
const accessToken = "your-access-token"; // احصل على التوكن من عملية OAuth

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": accessToken,
  },
  body: JSON.stringify({ query }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
