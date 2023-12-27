import axios from '~/utils/axios'

export const apiGetCurrentUser = () =>
	axios({
		url: '/user/current-user',
		method: 'get',
	})
