import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';

const Dashboard = lazy(() => import('./components/dasboard'));
const Login = lazy(() => import('./components/login'));
const Register = lazy(() => import('./components/register'));
const Foto = lazy(() => import('./pages/Foto'));
const Video = lazy(() => import('./pages/Video'));
const Upload = lazy(() => import('./pages/upload'));
function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/foto" element={<Foto />} />
                        <Route path="/video" element={<Video />} />
                        <Route path="/upload" element={<Upload />} />
                        {/* Add other routes here */}
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;