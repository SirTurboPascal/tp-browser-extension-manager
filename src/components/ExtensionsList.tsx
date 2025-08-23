'use client';

import { useEffect, useState } from 'react';

import Extension from '@/components/Extension';
import ExtensionsListHeader from '@/components/ExtensionsListHeader';

import { IExtension } from '@/model/interfaces/IExtension';

export default function () {
	const [extensions, setExtensions] = useState<IExtension[]>([]);

	const handleRemove = (id: string) => {
		const extension = extensions.find((extension) => extension.id === id);
		if (extension === undefined) {
			console.warn(`No extension with id ${id} found.`);
		}

		if (window.confirm('Are you sure you want to remove this extension?')) {
			setExtensions(extensions.filter((extension) => extension.id !== id));
		}
	};

	useEffect(() => {
		fetch('/data/browser-extensions.json')
			.then((response) => response.json())
			.then((json) => {
				setExtensions(json);
			});
	}, []);

	return (
		<div>
			<ExtensionsListHeader />

			<ul className='grid grid-cols-1 gap-150 md:grid-cols-2 lg:grid-cols-3'>
				{extensions.map((extension) => {
					return <Extension key={extension.id} extension={extension} onRemove={handleRemove} />;
				})}
			</ul>
		</div>
	);
}
