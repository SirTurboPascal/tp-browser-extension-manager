'use client';

import { eq } from 'lodash';
import { useEffect, useState } from 'react';

import Extension from '@/components/Extension';
import ExtensionsListHeader from '@/components/ExtensionsListHeader';

import { IExtension } from '@/model/interfaces/IExtension';
import { useFilterContext } from '@/hooks/useFilterContext';

export default function () {
	const { filterName } = useFilterContext();

	const [extensions, setExtensions] = useState<IExtension[]>([]);

	const handleDisable = (id: string) => {
		const newExtensions = [...extensions];

		const extension = newExtensions.find((e) => e.id === id);
		if (extension === undefined) {
			console.warn(`No extension with id ${id} found.`);

			return;
		}

		extension.active = !extension.active;
		setExtensions(newExtensions);
	};

	const handleRemove = (extension: IExtension) => {
		const { id, name } = extension;

		if (window.confirm(`Are you sure you want to remove ${name} from this list?`)) {
			setExtensions(extensions.filter((e) => e.id !== id));
		}
	};

	useEffect(() => {
		fetch('/data/browser-extensions.json')
			.then((response) => response.json())
			.then((json) => {
				setExtensions(json);
			});
	}, []);

	const filteredExtensions =
		filterName === 'all'
			? extensions
			: extensions.filter((e) => {
					return e.active === eq(filterName, 'active');
				});

	return (
		<div>
			<ExtensionsListHeader />

			<ul className='grid grid-cols-1 gap-150 md:grid-cols-2 lg:grid-cols-3'>
				{filteredExtensions.map((extension) => {
					return <Extension key={extension.id} extension={extension} onDisable={handleDisable} onRemove={handleRemove} />;
				})}
			</ul>
		</div>
	);
}
