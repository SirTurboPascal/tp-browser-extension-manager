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
		<html className='overflow-hidden'>
			<body className='font-noto-sans dark:text-neutral-0 light-gradient dark:dark-gradient h-dvh text-neutral-900 antialiased'>{children}</body>
		</html>
	);
};

export default Layout;
export { metadata };
