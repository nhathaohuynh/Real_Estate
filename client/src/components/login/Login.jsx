import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { apiLogin, apiRegister } from '~/apis/auth.api'
import { useAppStore } from '~/stores/useAppStore'
import { useUserStore } from '~/stores/useUserStore'
import { radioInput } from '~/utils/constant'
import icons from '~/utils/icons'
import { Button, InputRadio } from '..'
import InputText from '../inputs/InputText'

const Login = () => {
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
		getValues,
	} = useForm()

	// const [loading, setLoading] = useState(false)
	const [tab, setTab] = useState(0)

	const setModel = useAppStore((state) => state.setModel)
	const setToken = useUserStore((state) => state.setToken)

	const { mutate: mutateLogin, isPending: loadingLogin } = useMutation({
		mutationFn: (payload) => {
			return apiLogin(payload)
		},
		onSuccess: (data) => {
			if (data.code === 1) {
				setModel(false, null)
				toast.success(data.message)
				setToken(data?.metaData?.accessToken)
			} else {
				toast.error(data.message)
			}
		},
	})

	const { mutate: mutateRegister, isPending: isLoadingRegister } = useMutation({
		mutationFn: (payload) => {
			return apiRegister(payload)
		},
		onSuccess: (data) => {
			if (data.code === 1) {
				setModel(false, null)
				toast.success(data.message)
			} else {
				toast.error(data.message)
			}
		},
	})

	const onSubmitLogin = async (data) => {
		mutateLogin(data)
	}

	const onSubmitRegister = async (data) => {
		const payload = {
			email: data?.email,
			fullName: data?.fullName,
			password: data?.password,
			phone: data?.phone,
			role: data?.role === 'User' ? '0000' : '1111',
		}

		mutateRegister(payload)
	}

	useEffect(() => {
		reset()
	}, [tab])
	return (
		<div className='flex justify-center items-center mt-[40px] overflow-y-auto'>
			<div
				className='w-[30%] rounded-sm bg-white p-4'
				onClick={(e) => e.stopPropagation()}
			>
				<h1 className='text-[32px] font-semibold text-main-500 text-center mb-3'>
					Welcome to Real Estate
				</h1>
				<div className='flex gap-2 font-thin relative'>
					<span
						onClick={() => setTab(0)}
						className={clsx(
							tab === 0 && 'text-main-500 relative',
							' px-2 py-1 cursor-pointer transition-all',
						)}
					>
						Sign in
						{tab === 0 && (
							<div className='absolute bottom-0 left-0 h-[1px] w-full bg-main-500 rounded-sm z-10'></div>
						)}
					</span>
					<span
						className={clsx(
							tab === 1 && 'text-main-500 relative',
							' px-2 py-1 cursor-pointer transition-all',
						)}
						onClick={() => setTab(1)}
					>
						New account
						{tab === 1 && (
							<div className='absolute bottom-0 left-0 h-[1px] w-full bg-main-500 rounded-sm z-10'></div>
						)}
					</span>
					<div className='absolute bottom-0 left-0 h-[1px] w-full bg-main-100 rounded-sm'></div>
				</div>
				{tab === 0 && (
					<form className='w-full mx-auto mt-2 p-4'>
						<InputText
							register={register}
							label='Phone number'
							id='phone'
							placeholder='Enter your phone number'
							validate={{
								required: 'Phone number is required',
								pattern: {
									value: /^0\d{9}$/,
									message: 'Invalid phone number format',
								},
							}}
							errors={errors}
							inputClassName=' border border-main-100 rounded-sm focus:border-main-500 outline-none text-[13px] py-2 px-2 w-full'
						/>
						<InputText
							register={register}
							label='password'
							id='password'
							type='password'
							placeholder='Enter your password'
							validate={{
								required: 'Password is required',
								pattern: {
									value:
										/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
									message:
										'Your password contains at least 8 characters, including at least one lowercase letter, one uppercase letter, and one special character',
								},
							}}
							errors={errors}
							inputClassName=' border border-main-100 rounded-sm focus:border-main-500 outline-none text-[13px] py-2 px-2 w-full'
						/>

						<Button
							onClick={handleSubmit(onSubmitLogin)}
							disabled={loadingLogin}
							className='w-full bg-main-500 text-white px-4 py-2 rounded-sm mt-3 text-[14px]'
						>
							Sign in
						</Button>
						<h5 className='text-main-500  text-center w-full my-3 cursor-pointer'>
							Forgot your password?
						</h5>
						<div className='h-[0.5px] shadow bg-main-100'></div>
						<span className='block w-full text-center my-3'>
							Or connect with:
						</span>
						<Button className='w-full bg-blue-500 text-white px-4 py-2 rounded-sm mt-3 flex items-center'>
							<icons.FaFacebookF size={16} />
							<p className='text-center w-full text-[14px]'>
								Continute with Facebook
							</p>
						</Button>
						<Button className='w-full bg-yellow-500 text-white px-4 py-2 rounded-sm mt-3 flex items-center'>
							<icons.FaGoogle size={14} />
							<p className='text-center w-full text-[14px]'>
								Continue with Google
							</p>
						</Button>
					</form>
				)}

				{tab === 1 && (
					<form className='w-full mx-auto mt-2 p-4'>
						<InputText
							register={register}
							label='Full name'
							id='fullName'
							placeholder='Enter your full Name'
							validate={{
								required: 'Full name field cannot empty',
							}}
							errors={errors}
							inputClassName='border border-main-100 rounded-sm focus:border-main-500 outline-none text-[13px] py-2 px-2 w-full'
						/>

						<InputText
							register={register}
							label='Email'
							id='email'
							placeholder='Enter your email'
							validate={{
								required: 'Email field cannot empty',
								pattern: {
									value:
										/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
									message: 'Invalid email format',
								},
							}}
							errors={errors}
							inputClassName=' border border-main-100 rounded-sm focus:border-main-500 outline-none text-[13px] py-2 px-2 w-full'
						/>

						<InputText
							register={register}
							label='Phone number'
							id='phone'
							placeholder='Enter your phone number'
							validate={{
								required: 'Phone number is required',
								pattern: {
									value: /^0\d{9}$/,
									message: 'Invalid phone number format',
								},
							}}
							errors={errors}
							inputClassName=' border border-main-100 rounded-sm focus:border-main-500 outline-none text-[13px] py-2 px-2 w-full'
						/>
						<InputText
							register={register}
							label='Password'
							id='password'
							type='password'
							placeholder='Enter your password'
							validate={{
								required: 'Password is required',
								pattern: {
									value:
										/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
									message:
										'Your password contains at least 8 characters, including at least one lowercase letter, one uppercase letter, and one special character',
								},
							}}
							errors={errors}
							inputClassName=' border border-main-100 rounded-sm focus:border-main-500 outline-none text-[13px] py-2 px-2 w-full'
						/>

						<InputText
							register={register}
							label='Confirm password'
							id='confirm-password'
							type='password'
							placeholder='confirm your password'
							validate={{
								required: 'Confirm password is required',

								validate: (value) =>
									value === getValues('password') || 'Passwords do not match',
							}}
							errors={errors}
							inputClassName=' border border-main-100 rounded-sm focus:border-main-500 outline-none text-[13px] py-2 px-2 w-full'
						/>

						<InputRadio
							register={register}
							title='Role'
							id='role'
							options={radioInput}
							inputClassName=' border border-main-100 rounded-sm focus:border-main-500 outline-none text-[13px]'
						/>

						<Button
							onClick={handleSubmit(onSubmitRegister)}
							disabled={isLoadingRegister}
							className='w-full bg-main-500 text-white px-4 py-2 rounded-sm mt-3 text-[14px]'
						>
							Sign up
						</Button>
					</form>
				)}
			</div>
		</div>
	)
}

export default Login
