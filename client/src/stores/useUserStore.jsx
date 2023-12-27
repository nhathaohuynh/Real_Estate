import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { apiGetCurrentUser } from '~/apis/user.api'

export const useUserStore = create(
	persist(
		(set, get) => ({
			token: null,
			currentUser: null,
			setToken: (token) =>
				set(() => ({
					token: token,
				})),

			getCurrentUser: async () => {
				const user = await apiGetCurrentUser()
				console.log(user)
			},
		}),
		{
			name: 'real-estate',
			Storage: createJSONStorage(() => localStorage),
			partialize: (state) =>
				Object.fromEntries(
					Object.entries(state).filter(
						([key]) => ['token'].includes(key) || ['currentUser'].includes(key),
					),
				),
		},
	),
)
