import Image from 'next/image';
import Link from 'next/link';

import logoImage from '@/components/Logo/logo.svg';

export default function () {
	return (
		<Link className='group flex flex-row items-center gap-150' href='/'>
			<div className='relative size-[40px] shrink-0'>
				<Image alt='Logo' src={logoImage} fill unoptimized />
			</div>

			<span className='font-geologica dark:text-neutral-0 text-[24px] font-semibold -tracking-[0.5px] whitespace-nowrap text-neutral-900 group-hover:underline'>Extensions</span>
		</Link>
	);
}
