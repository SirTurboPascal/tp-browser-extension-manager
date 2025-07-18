'use client';

import { map } from 'lodash';
import { useEffect, useState } from 'react';

import Extension from '@/components/Extension.component';
import IExtension from '@/model/interfaces/IExtension.interface';

const ExtensionsList = () => {
	const [extensions, setExtensions] = useState<IExtension[]>([]);

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

			<ul className='desktop:grid-cols-3 grid grid-cols-1 gap-4'>
				{map(extensions, (extension) => {
					return <Extension key={extension.id} extension={extension} />;
				})}
			</ul>
		</div>
	);
};

export default ExtensionsList;
