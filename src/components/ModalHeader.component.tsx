import { FC, ReactNode } from 'react';

interface IModalHeaderProps {
	children: ReactNode;
}

const ModalHeader: FC<IModalHeaderProps> = ({ children }) => {
	return <div className='flex items-center gap-2'>{children}</div>;
};

export default ModalHeader;
