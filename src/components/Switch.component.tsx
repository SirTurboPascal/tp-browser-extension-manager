import { FC } from 'react';

interface ISwitchProps {
	checked: boolean;

	name: string;

	onChange: () => void;
}

const Switch: FC<ISwitchProps> = ({ checked, name, onChange }) => {
	return (
		<label className='flex shrink-0 cursor-pointer items-center gap-2 select-none' htmlFor={name}>
			<input id={name} className='peer sr-only' checked={checked} name={name} onChange={onChange} type='checkbox' />

			<div className='after:bg-neutral-0 relative h-[24px] w-[44px] shrink-0 rounded-full bg-neutral-300 transition-colors peer-checked:bg-red-700 after:absolute after:top-[2px] after:left-[2px] after:size-[20px] after:rounded-full after:transition-transform peer-checked:after:translate-x-full' />
		</label>
	);
};

export default Switch;
