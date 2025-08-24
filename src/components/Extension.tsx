import Image from 'next/image';

import Button from '@/components/Button';
import Switch from '@/components/Switch';
import Typography from '@/components/Typography';

import { IExtension } from '@/model/interfaces/IExtension';

type Props = {
	extension: IExtension;

	onDisable: (id: string) => void;
	onRemove: (extension: IExtension) => void;
};

export default function ({ extension, onDisable, onRemove }: Props) {
	const { active, description, id, imageUrl, name } = extension;

	return (
		<div className='bg-neutral-0 rounded-20 flex h-[200px] flex-col justify-between border-[1px] border-neutral-200 p-250 dark:border-neutral-600 dark:bg-neutral-800'>
			<div className='flex flex-row gap-200'>
				<div className='relative size-[60px] shrink-0'>
					<Image alt={`Logo of ${name}`} src={imageUrl} fill unoptimized />
				</div>

				<div className='flex flex-col gap-100'>
					<Typography variant='h4'>{name}</Typography>
					<Typography variant='p'>{description}</Typography>
				</div>
			</div>

			<div className='flex shrink-0 items-center justify-between'>
				<Button onClick={() => onRemove(extension)} variant='contained'>
					Remove
				</Button>

				<Switch checked={active} onChange={() => onDisable(id)} />
			</div>
		</div>
	);
}
