'use client';

import { eq, gt, isNull, map, size } from 'lodash';
import { ChangeEvent, useEffect, useState } from 'react';

import Button from '@/components/Button.component';
import Extension from '@/components/Extension.component';
import FilterButton from '@/components/FilterButton.component';
import FilterButtons from '@/components/FilterButtons.component';
import Modal from '@/components/Modal.component';
import ModalBody from '@/components/ModalBody.component';
import ModalHeader from '@/components/ModalHeader.component';
import IExtension from '@/model/interfaces/IExtension.interface';
import ModalFooter from './ModalFooter.component';

const ExtensionsList = () => {
	const [extensions, setExtensions] = useState<IExtension[]>([]);
	const [extensionForRemoval, setExtensionForRemoval] = useState<IExtension | null>(null);
	const [filter, setFilter] = useState('all');
	const [modelOpen, setModalOpen] = useState(false);

	const handleCloseModal = () => {
		setExtensionForRemoval(null);
		setModalOpen(false);
	};

	const handleConfirmRemove = () => {
		if (!isNull(extensionForRemoval)) {
			setExtensions(
				extensions.filter((extension) => {
					return extension.id !== extensionForRemoval.id;
				}),
			);
		}

		setExtensionForRemoval(null);
		setModalOpen(false);
	};

	const handleDisable = (extension: IExtension) => {
		const { id } = extension;

		setExtensions(
			extensions.map((extension) => {
				return eq(extension.id, id) ? { ...extension, enabled: !extension.enabled } : extension;
			}),
		);
	};

	const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFilter(event.target.value);
	};

	const handleRemove = (extension: IExtension) => {
		setExtensionForRemoval(extension);
		setModalOpen(true);
	};

	useEffect(() => {
		fetch('/data/data.json').then((response) => {
			response.json().then((json) => {
				setExtensions(json);
			});
		});
	}, []);

	const filteredExtensions = eq(filter, 'all')
		? extensions
		: extensions.filter((extension) => {
				return extension.enabled === eq(filter, 'active');
			});

	return (
		<>
			<div className='flex flex-col'>
				<div className='desktop:flex-row my-[32px] flex flex-col justify-between gap-4'>
					<h1 className='desktop:text-left shrink-0 cursor-default text-center text-[36px] font-bold tracking-[-1px] text-neutral-900 select-none'>Extensions List</h1>

					<FilterButtons>
						<FilterButton checked={eq(filter, 'all')} label='All' name='filter' onChange={handleFilterChange} value='all' />
						<FilterButton checked={eq(filter, 'active')} label='Active' name='filter' onChange={handleFilterChange} value='active' />
						<FilterButton checked={eq(filter, 'inactive')} label='Inactive' name='filter' onChange={handleFilterChange} value='inactive' />
					</FilterButtons>
				</div>

				{gt(size(filteredExtensions), 0) ? (
					<ul className='desktop:grid-cols-3 grid grid-cols-1 gap-4'>
						{map(filteredExtensions, (extension) => {
							return <Extension key={extension.id} extension={extension} onDisable={handleDisable} onRemove={handleRemove} />;
						})}
					</ul>
				) : (
					<div className='flex justify-center py-[32px]'>
						<p className='cursor-default text-[14px] text-neutral-600 select-none'>Nothing here to see...</p>
					</div>
				)}
			</div>

			<Modal onClose={handleCloseModal} open={modelOpen}>
				<ModalHeader>
					<h1 className='grow cursor-default text-[24px] font-bold select-none'>Remove extension</h1>
				</ModalHeader>

				<ModalBody>
					<p>Do you really want to remove {isNull(extensionForRemoval) ? 'this extension' : extensionForRemoval.name} from the list? This cannot be undone.</p>
				</ModalBody>

				<ModalFooter>
					<Button onClick={handleConfirmRemove} variant='primary'>
						Yes, remove
					</Button>

					<Button onClick={handleCloseModal} variant='secondary'>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default ExtensionsList;
