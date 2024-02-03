import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./config/theme";
import Write from "./pages/Diary/Write";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/base.css'
import './styles/main.css'
import './styles/layout.css'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element = {<Write />}></Route>
                    </Routes>
                    
                </BrowserRouter>
            </div>
        </ThemeProvider>
    )
}

export default App
