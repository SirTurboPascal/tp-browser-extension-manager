'use client';

import Image from 'next/image';

import { eq } from 'lodash';
import { useEffect, useState } from 'react';

import Theme from '@/model/types/Theme.type';

const ToggleThemeButton = () => {
	const [theme, setTheme] = useState<Theme>('light');

	const handleButtonClick = () => {
		setTheme(eq(theme, 'dark') ? 'light' : 'dark');
	};

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	return (
		<button className='cursor-pointer rounded-[8px] bg-neutral-100 p-[8px] dark:bg-neutral-600' onClick={handleButtonClick}>
			<Image alt='Icon' height={24} src={`/images/icon-${eq(theme, 'light') ? 'moon' : 'sun'}.svg`} width={24} />
		</button>
	);
};

export default ToggleThemeButton;
