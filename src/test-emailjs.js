// EmailJS Configuration Test
// Run this in the browser console to test your EmailJS setup

const testEmailJS = () => {
  const config = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  };

  console.log('Testing EmailJS Configuration:');
  console.log('Service ID:', config.serviceId);
  console.log('Template ID:', config.templateId);
  console.log('Public Key:', config.publicKey ? 'SET' : 'NOT SET');

  // Test data
  const testData = {
    from_name: 'Test User',
    from_email: 'test@example.com',
    subject: 'Test Message',
    message: 'This is a test message from your portfolio contact form.',
    to_phone: '7226011969'
  };

  console.log('Sending test email...');
  
  return window.emailjs.send(
    config.serviceId,
    config.templateId,
    testData,
    config.publicKey
  ).then((result) => {
    console.log('✅ SUCCESS! EmailJS is working correctly:', result.text);
    return result;
  }).catch((error) => {
    console.error('❌ FAILED! EmailJS error:', error);
    throw error;
  });
};

// To run this test, paste the following in your browser console:
// testEmailJS();

export default testEmailJS;