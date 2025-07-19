import { FC, ReactNode } from 'react';

interface IModalBodyProps {
	children: ReactNode;
}

const ModalBody: FC<IModalBodyProps> = ({ children }) => {
	return <div className='flex shrink-0 cursor-default flex-col text-[14px] text-neutral-600 select-none'>{children}</div>;
};

export default ModalBody;
