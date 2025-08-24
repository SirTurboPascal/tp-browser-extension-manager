'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import IconToggleButton from '@/components/IconToggleButton';

import { ThemeName } from '@/model/types/ThemeName';

export default function () {
	const [theme, setTheme] = useState<ThemeName>('light');

	const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target;

		setTheme(checked ? 'dark' : 'light');
	};

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	return <IconToggleButton id='toggle-theme-button' active={theme === 'dark'} iconSet={{ onIcon: 'sun', offIcon: 'moon' }} name='theme' onToggle={handleToggle} />;
}
