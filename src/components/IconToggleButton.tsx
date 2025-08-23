import { ChangeEvent } from 'react';

import Icon from '@/components/Icon';

import { IIconSet } from '@/model/interfaces/IIconSet';

type Props = {
	active: boolean;
	id: string;
	name: string;

	iconSet: IIconSet;

	onToggle: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function ({ active, iconSet, id, name, onToggle }: Props) {
	return (
		<label className='rounded-10 flex size-[50px] cursor-pointer items-center justify-center bg-neutral-100 dark:bg-neutral-700' htmlFor={id}>
			<input id={id} className='sr-only' checked={active} name={name} onChange={onToggle} type='checkbox' />

			<Icon size={22} name={active ? iconSet.onIcon : iconSet.offIcon} />
		</label>
	);
}
