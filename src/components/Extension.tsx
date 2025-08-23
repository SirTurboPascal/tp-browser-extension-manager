import Image from 'next/image';

import Button from '@/components/Button';

import { IExtension } from '@/model/interfaces/IExtension';

type Props = {
	extension: IExtension;

	onRemove: (id: string) => void;
};

export default function ({ extension, onRemove }: Props) {
	const { description, id, imageUrl, name } = extension;

	return (
		<div className='bg-neutral-0 rounded-20 flex h-[200px] flex-col justify-between border-[1px] border-neutral-200 p-250 dark:border-neutral-600 dark:bg-neutral-800'>
			<div className='flex flex-row gap-200'>
				<div className='relative size-[60px] shrink-0'>
					<Image alt={`Logo of ${name}`} src={imageUrl} fill unoptimized />
				</div>

				<div className='flex flex-col gap-100'>
					<h4 className='dark:text-neutral-0 text-[20px] font-bold -tracking-[0.2px] text-neutral-900'>{name}</h4>
					<p className='text-[16px] -tracking-[0.5px] text-neutral-600 dark:text-neutral-300'>{description}</p>
				</div>
			</div>

			<div className='shrink-0'>
				<Button onClick={() => onRemove(id)}>Remove</Button>
			</div>
		</div>
	);
}
