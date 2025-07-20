import Logo from '@/components/Logo.component';
import ToggleThemeButton from '@/components/ToggleThemeButton.component';

const Header = () => {
	return (
		<header className='bg-neutral-0 flex items-center justify-between rounded-[8px] p-[12px] shadow-md dark:bg-neutral-700'>
			<Logo />

			<ToggleThemeButton />
		</header>
	);
};

export default Header;
