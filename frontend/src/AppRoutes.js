import { Route } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}