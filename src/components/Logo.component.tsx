import Image from 'next/image';

const Logo = () => {
	return (
		<div className='relative h-[40px] w-[180px] shrink-0'>
			<Image className='dark:hidden' alt='Logo' src='/images/logo-light.svg' fill />
			<Image className='hidden dark:block' alt='Logo' src='/images/logo-dark.svg' fill />
		</div>
	);
};

export default Logo;
