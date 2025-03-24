const axios = require('axios');

async function generateTraffic() {
  const baseUrl = 'http://localhost:YOUR_PORT';
  const endpoints = [
    '/',
    '/api/YOUR_ENDPOINT_1',
    '/api/YOUR_ENDPOINT_2',
    // Add endpoints from your application
  ];
  
  for (let i = 0; i < 50; i++) {
    try {
      const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
      console.log(`Requesting: ${endpoint}`);
      await axios.get(`${baseUrl}${endpoint}`);
    } catch (error) {
      console.error(`Error requesting endpoint: ${error.message}`);
    }
    
    // Add a small delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

generateTraffic();