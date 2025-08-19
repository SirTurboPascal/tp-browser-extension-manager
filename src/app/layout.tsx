import { Metadata } from 'next';
import { ReactNode } from 'react';

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
		<html className='light-gradient dark:dark-gradient overflow-hidden'>
			<body className='min-h-dvh'>{children}</body>
		</html>
	);
}
