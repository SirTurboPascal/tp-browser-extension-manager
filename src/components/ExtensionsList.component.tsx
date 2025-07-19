'use client';

import { eq, gt, map, size } from 'lodash';
import { useEffect, useState } from 'react';

import Extension from '@/components/Extension.component';
import IExtension from '@/model/interfaces/IExtension.interface';

const ExtensionsList = () => {
	const [extensions, setExtensions] = useState<IExtension[]>([]);

	const handleDisable = (extension: IExtension) => {
		const { id } = extension;

		setExtensions(
			extensions.map((extension) => {
				return eq(extension.id, id) ? { ...extension, enabled: !extension.enabled } : extension;
			}),
		);
	};

	const handleRemove = (extension: IExtension) => {
		const { id, name } = extension;

		if (window.confirm(`Do you really want to remove ${name} from your extensions list?`)) {
			setExtensions(extensions.filter((extension) => extension.id !== id));
		}
	};

	useEffect(() => {
		fetch('/data/data.json').then((response) => {
			response.json().then((json) => {
				setExtensions(json);
			});
		});
	}, []);

	return (
		<div className='flex flex-col'>
			<h1 className='desktop:text-left my-[32px] shrink-0 cursor-default text-center text-[36px] font-bold text-neutral-900 select-none'>Extensions List</h1>

			{gt(size(extensions), 0) ? (
				<ul className='desktop:grid-cols-3 grid grid-cols-1 gap-4'>
					{map(extensions, (extension) => {
						return <Extension key={extension.id} extension={extension} onDisable={handleDisable} onRemove={handleRemove} />;
					})}
				</ul>
			) : (
				<div className='flex justify-center py-[32px]'>
					<p className='cursor-default text-[14px] text-neutral-600 select-none'>Nothing here to see...</p>
				</div>
			)}
		</div>
	);
};

export default ExtensionsList;
