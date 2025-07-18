import Logo from '@/components/Logo.component';

const Header = () => {
	return (
		<header className='bg-neutral-0 flex items-center justify-between rounded-[8px] p-[12px] shadow-md'>
			<Logo />
		</header>
	);
};

export default Header;
