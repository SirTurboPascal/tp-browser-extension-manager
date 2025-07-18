import Container from '@/components/Container.component';
import ExtensionsList from '@/components/ExtensionsList.component';
import Header from '@/components/Header.component';

const Page = () => {
	return (
		<Container>
			<Header />

			<ExtensionsList />
		</Container>
	);
};

export default Page;
