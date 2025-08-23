import Image from 'next/image';

import { IconName } from '@/model/types/IconName';

import moonIcon from '@/components/Icon/moon.svg';
import sunIcon from '@/components/Icon/sun.svg';

const icons: Record<IconName, string> = {
	moon: moonIcon,
	sun: sunIcon,
};

type Props = {
	size: number;

	name: IconName;
};

export default function ({ name, size }: Props) {
	const icon = icons[name];

	return <Image className='select-none' alt='' height={size} src={icon} width={size} unoptimized />;
}
