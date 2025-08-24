import { capitalize } from 'lodash';

import Button from '@/components/Button';

import { FilterName } from '@/model/types/FilterName';
import { useFilterContext } from '@/hooks/useFilterContext';

const filterNames: FilterName[] = ['all', 'active', 'inactive'];

export default function () {
	const { filterName, setFilterName } = useFilterContext();

	const handleClick = (filterName: FilterName) => {
		setFilterName(filterName);
	};

	return (
		<div className='flex items-center gap-150'>
			{filterNames.map((f) => {
				const variant = f === filterName ? 'active' : 'contained';

				return (
					<Button key={f} onClick={() => handleClick(f)} variant={variant}>
						{capitalize(f)}
					</Button>
				);
			})}
		</div>
	);
}
