import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/navbar.jsx';
import './components/styles_css/topLevel.css'
import Workport from './components/workport.jsx';

const root = createRoot(document.body);
root.render(<Workport />);
