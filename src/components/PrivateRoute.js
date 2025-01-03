import { Navigate } from 'react-router-dom';
import React from 'react';

export const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (isAuthenticated) {
        return children;
    }

    return <Navigate to="/giris" />;
};
