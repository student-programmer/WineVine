import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Conditions from './pages/Conditions/Conditions';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App/>,
//     },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <BrowserRouter>
            <App/>
            </BrowserRouter>
    </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//             <RouterProvider router={router} />
//     </React.StrictMode>
// );
