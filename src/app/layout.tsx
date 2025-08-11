import { Metadata } from 'next';
import { ReactNode } from 'react';

import Container from '@/components/Container';
import Header from '@/components/Header';

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
			<body className='min-h-dvh'>
				<Container>
					<Header />

					<main>{children}</main>
				</Container>
			</body>
		</html>
	);
}
