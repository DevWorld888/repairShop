import React from 'react';
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Template: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='animate-appear'>{children}</div>
    );
};

export default Template;