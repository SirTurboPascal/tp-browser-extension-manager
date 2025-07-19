import { FC, ReactNode } from 'react';

interface IModalFooterProps {
	children: ReactNode;
}

const ModalFooter: FC<IModalFooterProps> = ({ children }) => {
	return <div className='flex items-center justify-end gap-2'>{children}</div>;
};

export default ModalFooter;
