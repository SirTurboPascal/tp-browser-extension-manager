'use client';

import { ChangeEvent, useEffect } from 'react';

import IconToggleButton from '@/components/IconToggleButton';

import { ThemeName } from '@/model/types/ThemeName';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function () {
	const [theme, setTheme] = useLocalStorage<ThemeName>('theme', 'light');

	const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target;

		setTheme(checked ? 'dark' : 'light');
	};

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	return <IconToggleButton id='toggle-theme-button' active={theme === 'dark'} iconSet={{ onIcon: 'sun', offIcon: 'moon' }} name='theme' onToggle={handleToggle} />;
}
