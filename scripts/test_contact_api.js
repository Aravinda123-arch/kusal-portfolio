// Automated test script to verify contact form validation, unconfigured error, and spam rejection
async function runTests() {
  const baseUrl = 'http://localhost:3000/api/contact';
  console.log('--- RUNNING CONTACT API VERIFICATION TESTS ---');

  // Test 1: GET status
  try {
    const res = await fetch(baseUrl);
    const data = await res.json();
    console.log('[Test 1: Health / Status Check]:', res.status, data);
  } catch (e) {
    console.error('[Test 1 Failed]:', e.message);
  }

  // Test 2: Validation failure (empty payload)
  try {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: '', email: 'invalid', subject: '', message: '' }),
    });
    const data = await res.json();
    console.log('[Test 2: Validation Failure]:', res.status, data.errors ? 'SUCCESS: Validation errors caught' : 'FAIL');
  } catch (e) {
    console.error('[Test 2 Failed]:', e.message);
  }

  // Test 3: Honeypot spam detection
  try {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Spam Bot',
        email: 'bot@spam.com',
        subject: 'Buy crypto',
        message: 'This is spam message content',
        honeypot: 'bot-filled-this',
      }),
    });
    const data = await res.json();
    console.log('[Test 3: Honeypot Trap]:', res.status, data.error === 'SPAM_DETECTED' ? 'SUCCESS: Spam rejected' : 'FAIL');
  } catch (e) {
    console.error('[Test 3 Failed]:', e.message);
  }

  // Test 4: Valid form submission without configured email service
  try {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'johndoe@example.com',
        subject: 'Project inquiry',
        message: 'Hello Kusal, I would love to discuss a project with you!',
      }),
    });
    const data = await res.json();
    console.log('[Test 4: Unconfigured Service Check]:', res.status);
    console.log('  Response Data:', data);
    if (res.status === 503 && data.error === 'EMAIL_SERVICE_NOT_CONFIGURED') {
      console.log('  SUCCESS: Server honestly reports 503 EMAIL_SERVICE_NOT_CONFIGURED instead of fake 200!');
    } else if (res.status === 200 && data.success) {
      console.log('  Email service is configured and message was sent!');
    } else {
      console.log('  Response:', res.status, data);
    }
  } catch (e) {
    console.error('[Test 4 Failed]:', e.message);
  }
}

runTests();
