import { ChangeEvent, FC } from 'react';

interface IFilterButtonProps {
	checked: boolean;

	label: string;
	name: string;
	value: string;

	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FilterButton: FC<IFilterButtonProps> = ({ checked, label, name, onChange, value }) => {
	const id = `${name}_${value}`;

	return (
		<label className='cursor-pointer' htmlFor={id}>
			<input id={id} className='peer sr-only' checked={checked} onChange={onChange} type='radio' value={value} />

			<button className='bg-neutral-0 peer-checked:text-neutral-0 pointer-events-none h-[36px] rounded-full px-[18px] shadow-md peer-checked:bg-red-700'>{label}</button>
		</label>
	);
};

export default FilterButton;
