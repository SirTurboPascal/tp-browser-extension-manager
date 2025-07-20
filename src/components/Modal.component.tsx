import { AnimatePresence, motion, Variants } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface IModelProps {
	open: boolean;

	children: ReactNode;

	onClose: () => void;
}

const backdropVariants: Variants = {
	exit: { opacity: 0 },
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const modalVariants: Variants = {
	exit: { opacity: 0, translateY: -20 },
	hidden: { opacity: 0, translateY: -20 },
	visible: { opacity: 1, translateY: 0 },
};

const Modal: FC<IModelProps> = ({ children, onClose, open }) => {
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					className='fixed inset-0 flex items-center justify-center bg-neutral-800/90 backdrop-blur-md'
					animate='visible'
					exit='exit'
					initial='hidden'
					onClick={onClose}
					variants={backdropVariants}
				>
					<motion.div
						className='bg-neutral-0 desktop:w-[560px] flex w-[340px] flex-col gap-4 overflow-hidden rounded-[8px] p-[16px] shadow-md dark:bg-neutral-700'
						animate='visible'
						exit='exit'
						initial='hidden'
						onClick={(event) => event.stopPropagation()}
						variants={modalVariants}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
