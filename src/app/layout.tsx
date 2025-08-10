import { Metadata } from 'next';
import { ReactNode } from 'react';

import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'Browser Extension Manager',
};

type Props = {
	children: ReactNode;
};

export default function ({ children }: Props) {
	return (
		<html className='gradient-light dark:gradient-dark'>
			<body className='min-h-dvh'>{children}</body>
		</html>
	);
}
