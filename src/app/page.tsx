import FilterContextProvider from '@/components/FilterContextProvider';
import ExtensionsList from '@/components/ExtensionsList';

export default function () {
	return (
		<FilterContextProvider>
			<ExtensionsList />
		</FilterContextProvider>
	);
}
