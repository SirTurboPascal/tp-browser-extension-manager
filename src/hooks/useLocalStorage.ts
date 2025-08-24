'use client';

import { useEffect, useState } from 'react';

import { LocalStorageKey } from '@/model/types/LocalStorageKey';

export function useLocalStorage<T>(key: LocalStorageKey, initialValue: T) {
	const [storeValue, setStoreValue] = useState<T>(initialValue);

	useEffect(() => {
		const item = window.localStorage.getItem(key);

		if (item === null) {
			window.localStorage.setItem(key, JSON.stringify(initialValue));
			setStoreValue(initialValue);

			return;
		}

		setStoreValue(JSON.parse(item));
	}, [key]);

	const setValue = (value: T) => {
		window.localStorage.setItem(key, JSON.stringify(value));
		setStoreValue(value);
	};

	return [storeValue, setValue] as const;
}
