import Image from 'next/image';

const Logo = () => {
	return (
		<div className='relative h-[40px] w-[180px] shrink-0'>
			<Image alt='Logo' src='/images/logo.svg' fill />
		</div>
	);
};

export default Logo;
