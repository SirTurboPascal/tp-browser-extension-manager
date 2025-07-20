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

			<button className='bg-neutral-0 dark:text-neutral-0 peer-checked:text-neutral-0 pointer-events-none h-[36px] rounded-full border-[1px] border-neutral-300 px-[18px] peer-checked:bg-red-700 dark:border-neutral-600 dark:bg-neutral-700'>
				{label}
			</button>
		</label>
	);
};

export default FilterButton;
