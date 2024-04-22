import React, {useState, useEffect} from 'react';

const App = () => {
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [path, setPath] = useState('');
    const [timeLeft, setTimeLeft] = useState(300);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setTitle(params.get('title') || 'Standard Title');
        setInstructions(params.get('instructions') || 'Follow the instructions...');
        setPath(params.get('path'));

        // Set up timer
        const timer = setInterval(() => {
            setTimeLeft((prevTimeLeft) => {
                if (prevTimeLeft <= 1) {
                    clearInterval(timer);
                    return 0; // Stop the timer at 0
                }
                return prevTimeLeft - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    });

    const iframeUrl = `${process.env.REACT_APP_HOSTNAME}${path}`;

    return (
        <div className="app" style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
            <div style={{flex: "0 0 50px"}}><h1>{title}</h1></div>
            <div style={{flex: "1 0 auto"}}>
                <iframe src={iframeUrl} title="iframe" style={{display:(path ?"block":"none"), width: '100%', height: '100%', boxSizing: "border-box", border: "none"}}/>
            </div>
            <div style={{flex: "0 0 50px"}}>
                <p>{instructions}</p>
                <div>
                    <p>Timer: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</p>
                </div>
            </div>
        </div>
    );
}

export default App;
