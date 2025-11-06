import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://<BACKEND_PUBLIC_DNS_OR_ALB_DNS>/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error connecting to backend'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🌐 AWS Full Stack App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
