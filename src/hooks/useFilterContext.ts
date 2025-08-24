import { useContext } from 'react';
import FilterContext from '@/context/FilterContext';

export function useFilterContext() {
	const filterContext = useContext(FilterContext);

	if (filterContext === null) {
		throw new Error('Must be used inside of <FilterContext.Provider/>!');
	}

	return filterContext;
}
