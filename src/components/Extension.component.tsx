import Image from 'next/image';

import { FC } from 'react';

import IExtension from '@/model/interfaces/IExtension.interface';

interface IExtensionProps {
	extension: IExtension;
}

const Extension: FC<IExtensionProps> = ({ extension }) => {
	const { description, logoUrl, name } = extension;

	return (
		<li className='bg-neutral-0 flex flex-col gap-4 rounded-[8px] p-[12px] shadow-sm'>
			<div className='flex gap-4'>
				<div className='relative size-[48px] shrink-0'>
					<Image alt={`Logo of ${name}`} src={logoUrl} fill />
				</div>

				<div className='flex flex-col gap-2'>
					<p className='text-[18px] font-bold text-neutral-900'>{name}</p>
					<p className='text-[14px] text-neutral-600'>{description}</p>
				</div>
			</div>
		</li>
	);
};

export default Extension;
