import { create } from 'zustand'

export const useAppStore = create((set) => ({
	isShowModel: false,
	contentModal: null,
	setModel: (isShowModel, contentModal) =>
		set(() => ({ isShowModel, contentModal })),
}))
