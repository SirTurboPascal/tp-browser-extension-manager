import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

import '@/styles/globals.css';

const metadata: Metadata = {
	title: 'Browser Extension Manager',
};

interface ILayoutProps {
	children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<html className='overflow-hidden bg-neutral-200 dark:bg-neutral-900'>
			<body className='font-noto-sans h-dvh overflow-y-auto antialiased'>{children}</body>
		</html>
	);
};

export default Layout;
export { metadata };
