import { FC, ReactNode } from 'react';

interface IContainerProps {
	children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
	return <div className='desktop:max-w-[1400px] mx-auto flex max-w-[360px] grow flex-col py-[16px]'>{children}</div>;
};

export default Container;
