import { createContext } from 'react';

import { FilterName } from '@/model/types/FilterName';

type FilterContextValue = {
	filterName: FilterName;

	setFilterName: (filterName: FilterName) => void;
};

const FilterContext = createContext<FilterContextValue | null>(null);

export default FilterContext;
