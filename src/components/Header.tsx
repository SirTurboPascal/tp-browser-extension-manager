import Logo from '@/components/Logo';
import ToggleThemeButton from '@/components/ToggleThemeButton';

export default function () {
	return (
		<header className='bg-neutral-0 rounded-10 md:rounded-20 mb-500 flex h-[66px] flex-row items-center justify-between border-[1px] border-neutral-200 px-150 md:mb-800 md:h-[74px] md:px-200 dark:border-neutral-600 dark:bg-neutral-800'>
			<Logo />

			<ToggleThemeButton />
		</header>
	);
}
