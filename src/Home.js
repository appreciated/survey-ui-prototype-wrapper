import React, {useEffect, useState} from 'react';
import {useShepherdTour} from "react-shepherd";
import "shepherd.js/dist/css/shepherd.css";
const tourOptions = {
    useModalOverlay: true,
    exitOnEsc: true
};

const steps = [
    {
        id: 'intro',
        beforeShowPromise: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    window.scrollTo(0, 0);
                    resolve();
                }, 500);
            });
        },
        buttons: [
            {
                classes: 'shepherd-button-secondary',
                text: 'Cancel',
                type: 'cancel'
            },
            {
                classes: 'shepherd-button-primary',
                text: 'Continue',
                type: 'next'
            }
        ],
        title: 'Welcome to the prototype evaluation!',
        text: ['In the following we would like to show you how to complete the evaluation.'],
    },
    {
        id: 'prototype',
        attachTo: {
            element: '.prototype',
            on: 'bottom'
        },
        buttons: [
            {
                classes: 'shepherd-button-secondary',
                text: 'Cancel',
                type: 'cancel'
            },
            {
                classes: 'shepherd-button-primary',
                text: 'Continue',
                type: 'next'
            }
        ],
        title: 'Here the prototype is being shown',
        text: ['...'],
    },
    {
        id: 'prototype',
        attachTo: {
            element: '.finish',
            on: 'top-start'
        },
        buttons: [
            {
                classes: 'shepherd-button-secondary',
                text: 'Cancel',
                type: 'cancel'
            },
            {
                classes: 'shepherd-button-primary',
                text: 'Start',
                type: 'next'
            }
        ],
        title: 'Take your time to evaluate the prototype',
        text: ['When you are finished or you run into trouble press here'],
    }
];
const App = () => {

    const tour = useShepherdTour({ tourOptions, steps: steps });

    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [path, setPath] = useState('');
    const [timeLeft, setTimeLeft] = useState(300);

    useEffect(() => {
        tour.start();
    }, []);

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
            <div className="bar-wrapper" style={{flex: "1 0 auto"}}>
                <div>
                    <iframe className="prototype" src={iframeUrl} title="iframe" style={{
                        display: (path ? "block" : "none"),
                        width: '100%', height: '100%', boxSizing: "border-box", border: "none"
                    }}/>
                </div>
            </div>
            <div className="bar-wrapper" style={{flex: "0 0 50px"}}>
                <div className="footer-bar">
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                        </svg>
                        <strong>{Math.floor(timeLeft / 60)}m {('0' + (timeLeft % 60)).slice(-2)}s</strong>
                    </div>
                    <button type="button" tabIndex="1" autoFocus={true} className="finish button"
                            onClick={() => window.close()}>Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
