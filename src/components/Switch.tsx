import clsx from 'clsx';

import { ChangeEvent } from 'react';

type Props = {
	checked: boolean;

	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function ({ checked, onChange }: Props) {
	const className = clsx('relative h-[20px] w-[36px] shrink-0 cursor-pointer rounded-full', checked ? 'bg-red-700 dark:bg-red-400' : 'bg-neutral-300 dark:bg-neutral-600');

	return (
		<label className={className}>
			<input className='peer sr-only' checked={checked} onChange={onChange} type='checkbox' />

			<div className='bg-neutral-0 absolute top-[2px] left-[2px] size-[16px] rounded-full transition-transform peer-checked:translate-x-full' />
		</label>
	);
}
