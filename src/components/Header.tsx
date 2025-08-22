import Logo from '@/components/Logo';

export default function () {
	return (
		<header className='bg-neutral-0 rounded-10 md:rounded-20 flex h-[66px] flex-row items-center px-150 shadow-md md:h-[74px] md:px-200 dark:bg-neutral-800'>
			<Logo />
		</header>
	);
}
