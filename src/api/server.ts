import express from 'express';
const app = express();

app.use(express.json());

app.post('/api/customer-data-request', (req, res) => {
  // هنا يتم إضافة كود طلب بيانات العميل
  const customerData = {
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main Street',
  };

  res.json({ success: true, customerData });
});

app.post('/api/customer-data-erasure', (req, res) => {
  const customerId = req.body.customerId;

  // هنا يتم حذف بيانات العميل بناءً على الـ customerId
  deleteCustomerData(customerId);

  res.json({ success: true, message: 'Customer data erased successfully' });
});

function deleteCustomerData(customerId: string) {
  // هنا يتم حذف بيانات العميل من النظام
  console.log(`Deleting data for customer with ID: ${customerId}`);
}

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
