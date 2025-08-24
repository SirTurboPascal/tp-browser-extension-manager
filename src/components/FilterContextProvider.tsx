'use client';

import { ReactNode, useState } from 'react';

import FilterContext from '@/context/FilterContext';

import { FilterName } from '@/model/types/FilterName';

type Props = {
	children: ReactNode;
};

export default function ({ children }: Props) {
	const [filterName, setFilterName] = useState<FilterName>('all');

	return <FilterContext.Provider value={{ filterName, setFilterName }}>{children}</FilterContext.Provider>;
}
