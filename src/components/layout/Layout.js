import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div style={{ display: 'flex' }}>
            {/* Sidebar component */}
            <Sidebar />

            {/* Main content area */}
            <main className='flex-1 bg-gray-100 p-6 min-h-screen'>
                <Outlet />
            </main>
        </div>
    );
};