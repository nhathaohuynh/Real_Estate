import { useAppStore } from '~/stores/useAppStore'

const Modal = () => {
	const contentModal = useAppStore((state) => state.contentModal)
	const setModel = useAppStore((state) => state.setModel)
	return (
		<div
			onClick={() => setModel(false, null)}
			className='absolute top-0 left-0 right-0 bottom-0 w-screen h-screen overflow-x-hidden z-[999] bg-[rgba(0,0,0,0.4)]'
		>
			{contentModal}
		</div>
	)
}

export default Modal
