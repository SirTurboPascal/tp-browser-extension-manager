import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export default function ({ children }: Props) {
	return <div className='mx-auto flex w-[344px] flex-col py-250 md:w-[704px] md:py-300 lg:w-[1170px] lg:py-500'>{children}</div>;
}
