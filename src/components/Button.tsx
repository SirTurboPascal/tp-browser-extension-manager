import { clsx } from 'clsx';
import { ReactNode } from 'react';

import { ButtonVariant } from '@/model/types/ButtonVariant';

const baseClassName = 'shrink-0 h-[38px] px-250 rounded-full font-noto-sans cursor-pointer font-medium text-[16px] -tracking-[0.5px] border-[1px]';
const variantClassNames: Record<ButtonVariant, string> = {
	active: 'border-none bg-red-700 dark:bg-red-400 text-neutral-0 dark:text-neutral-900',
	contained: 'border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-0',
	filled: 'border-neutral-200 dark:border-neutral-600 bg-neutral-0 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-0',
};

type Props = {
	className?: string;

	children: ReactNode;
	variant: ButtonVariant;

	onClick: () => void;
};

export default function ({ children, className, onClick, variant }: Props) {
	return (
		<button className={clsx(baseClassName, variantClassNames[variant], className)} onClick={onClick}>
			{children}
		</button>
	);
}
