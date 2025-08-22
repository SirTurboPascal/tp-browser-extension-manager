import Image from 'next/image';

import { IExtension } from '@/model/interfaces/IExtension';

type Props = {
	extension: IExtension;
};

export default function ({ extension }: Props) {
	const { description, imageUrl, name } = extension;

	return (
		<div className='bg-neutral-0 rounded-20 flex h-[200px] flex-col border-[1px] border-neutral-200 p-200 dark:border-neutral-600 dark:bg-neutral-800'>
			<div className='flex flex-row gap-200'>
				<div className='relative size-[60px] shrink-0'>
					<Image alt={`Logo of ${name}`} src={imageUrl} fill unoptimized />
				</div>

				<div className='flex flex-col gap-100'>
					<h4 className='dark:text-neutral-0 text-[20px] font-bold -tracking-[0.2px] text-neutral-900'>{name}</h4>
					<p className='text-[16px] -tracking-[0.5px] text-neutral-600 dark:text-neutral-300'>{description}</p>
				</div>
			</div>
		</div>
	);
}
