import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TestPage from './TestPage';

const App = () => {
    return (
        <div style={{width: '100%', height: '100%'}}>
            <Router>
                <Routes>
                    <Route path="/test" element={ <TestPage/>}>
                    </Route>
                    <Route path="/" element={<Home/>}>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;