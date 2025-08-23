import { ReactNode } from 'react';

type Props = {
	children: ReactNode;

	onClick: () => void;
};

export default function ({ children, onClick }: Props) {
	return (
		<button className='dark:text-neutral-0 h-[38px] cursor-pointer rounded-full border-[1px] border-neutral-300 px-200 text-neutral-900 select-none dark:border-neutral-600' onClick={onClick}>
			{children}
		</button>
	);
}
