import clsx from 'clsx';

import { TypographyVariant } from '@/model/types/TypographyVariant';
import { ReactNode } from 'react';

const baseClassName = 'font-noto-sans select-none cursor-default antialiased';
const variantClassNames: Record<TypographyVariant, string> = {
	h1: 'dark:text-neutral-0 text-[34px] font-bold -tracking-[1px] text-neutral-900',
	h4: 'dark:text-neutral-0 text-[20px] font-bold -tracking-[0.2px] text-neutral-900',
	p: 'text-[16px] -tracking-[0.5px] text-neutral-600 dark:text-neutral-300',
};

type Props = {
	className?: string;

	children: ReactNode;
	variant: TypographyVariant;
};

export default function ({ children, className, variant }: Props) {
	const Component = variant;

	return <Component className={clsx(baseClassName, variantClassNames[variant], className)}>{children}</Component>;
}
