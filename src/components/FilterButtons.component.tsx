import { FC, ReactNode } from 'react';

interface IFilterButtonsProps {
	children: ReactNode;
}

const FilterButtons: FC<IFilterButtonsProps> = ({ children }) => {
	return <div className='flex shrink-0 justify-center gap-2'>{children}</div>;
};

export default FilterButtons;
