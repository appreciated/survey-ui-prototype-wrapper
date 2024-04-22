import React, { useState, useEffect } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [path, setPath] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTitle(params.get('title') || 'Standard Title');
    setInstructions(params.get('instructions') || 'Follow the instructions...');
    setPath(params.get('path') || '/');  // Default path is the root

    // Set up timer or other initializations here
  }, []);

  const iframeUrl = `${HOSTNAME}${path}`;

  return (
      <div className="app">
        <h1>{title}</h1>
        <iframe src={iframeUrl} title="iframe" style={{ width: '100%', height: '80vh' }} />
        <div>
          <p>{instructions}</p>
          {/* Timer or other components */}
        </div>
      </div>
  );
};

export default App;