import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "./config/theme";
import Write from "./pages/Diary/Write";

import './styles/base.css'
import './styles/main.css'
import './styles/layout.css'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="container">
                <Write />
            </div>
        </ThemeProvider>
    )
}

export default App
