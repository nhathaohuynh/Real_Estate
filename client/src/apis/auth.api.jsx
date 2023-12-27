import axios from '~/utils/axios'

export const apiRegister = (payload) =>
	axios({
		url: '/auth/register',
		method: 'post',
		data: payload,
	})

export const apiLogin = (payload) =>
	axios({
		url: '/auth/login',
		method: 'post',
		data: payload,
	})
