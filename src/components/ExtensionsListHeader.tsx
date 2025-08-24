import FilterButtons from '@/components/FilterButtons';
import Typography from '@/components/Typography';

export default function () {
	return (
		<div className='mb-400 flex flex-col items-center gap-300 md:flex-row md:justify-between'>
			<Typography variant='h1'>Extensions List</Typography>

			<FilterButtons />
		</div>
	);
}
