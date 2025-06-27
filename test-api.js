// Тестування API для Eco Yard Care
const fetch = require('node-fetch');

const testData = {
  name: "Test User",
  email: "test@example.com",
  phone: "+1234567890",
  service: "lawn-mowing"
};

async function testAPI() {
  console.log('🧪 Testing Eco Yard Care API...');
  
  try {
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData),
    });
    
    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ API Test Successful!');
      console.log('Response:', result);
    } else {
      console.log('❌ API Test Failed!');
      console.log('Status:', response.status);
      console.log('Response:', result);
    }
  } catch (error) {
    console.log('❌ API Test Error:', error.message);
  }
}

// Запуск тесту
testAPI(); 