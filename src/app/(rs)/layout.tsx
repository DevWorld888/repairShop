import Header from '@/components/Header';
import React from 'react';
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='mx-auto w-full max-7xl'>
            <Header />
            <div className='px-4 py-2'>{children}</div>
        </div>
    );
};

export default Layout;