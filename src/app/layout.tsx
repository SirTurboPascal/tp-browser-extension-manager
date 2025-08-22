import { Metadata } from 'next';
import { ReactNode } from 'react';

import Container from '@/components/Container';
import Header from '@/components/Header';

import '@fontsource/geologica/600.css';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/500.css';
import '@fontsource/noto-sans/700.css';

import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'Browser Extension Manager',
};

type Props = {
	children?: ReactNode;
};

export default function ({ children }: Props) {
	return (
		<html className='light-gradient dark:dark-gradient'>
			<body className='font-noto-sans min-h-dvh antialiased'>
				<Container>
					<Header />

					<main>{children}</main>
				</Container>
			</body>
		</html>
	);
}
