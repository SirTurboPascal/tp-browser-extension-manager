import Logo from '@/components/Logo.component';

const Header = () => {
	return (
		<header className='bg-neutral-0 mb-[32px] flex items-center rounded-[8px] p-[12px] shadow-md'>
			<Logo />
		</header>
	);
};

export default Header;
