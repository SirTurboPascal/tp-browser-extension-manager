import { FC, ReactNode } from 'react';

interface IButtonProps {
	children: ReactNode;

	onClick: () => void;
}

const Button: FC<IButtonProps> = ({ children, onClick }) => {
	return (
		<button className='h-[36px] shrink-0 cursor-pointer rounded-[18px] border-1 border-neutral-300 px-[18px] text-[14px] select-none' onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
