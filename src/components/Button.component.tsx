import clsx from 'clsx';

import { FC, ReactNode } from 'react';

import ButtonVariant from '@/model/types/ButtonVariant.type';

const baseClassName = 'h-[36px] shrink-0 cursor-pointer text-[14px] rounded-full px-[18px] select-none';
const buttonVariantClassNames: Record<ButtonVariant, string> = {
	primary: 'bg-neutral-900 text-neutral-0 font-bold',
	secondary: 'border-1 border-neutral-300 dark:text-neutral-0 dark:border-neutral-600',
};

interface IButtonProps {
	children: ReactNode;
	variant: ButtonVariant;

	onClick: () => void;
}

const Button: FC<IButtonProps> = ({ children, onClick, variant }) => {
	return (
		<button className={clsx(baseClassName, buttonVariantClassNames[variant])} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
