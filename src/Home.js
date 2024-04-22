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
                    return 0;
                }
                return prevTimeLeft - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    });

    const iframeUrl = `${process.env.REACT_APP_HOSTNAME}${path}`;

    return (
        <div className="app" style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
            <div className="header-bar" style={{display: "flex", flexDirection: "row", flex: "0 0 50px"}}>
                <h1>{title}</h1>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                    </svg>
                    <strong>{Math.floor(timeLeft / 60)}m {('0' + (timeLeft % 60)).slice(-2)}s</strong>
                </div>
            </div>
            <div style={{flex: "1 0 auto"}}>
                <iframe src={iframeUrl} title="iframe" style={{
                    display: (path ? "block" : "none"),
                    width: '100%', height: '100%', boxSizing: "border-box", border: "none"
                }}/>
            </div>
            <div className="footer-bar" style={{flex: "0 0 50px"}}>
                <p>{instructions}</p>
                <button type="button" tabIndex="1" autoFocus="true" className="button">Continue</button>
            </div>
        </div>
    );
}

export default App;
