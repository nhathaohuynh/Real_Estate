import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/logo.svg'
import logo1 from '~/assets/logo1.svg'
import usePathName from '~/hooks/usePathName'
import { useAppStore } from '~/stores/useAppStore'
import { useUserStore } from '~/stores/useUserStore'
import path from '~/utils/path'
import { Button, Login } from '..'
import Menu from './Menu'

const Navigation = () => {
	const { pathName } = usePathName()
	const token = useUserStore((state) => state?.token)
	console.log(token)
	const setModel = useAppStore((state) => state.setModel)
	return (
		<div
			className={clsx(
				pathName !== `/${path.HOME}`
					? 'bg-white text-gray-700'
					: 'bg-transparent',
				' h-[85px] fixed z-50 top-[85px] w-full',
			)}
		>
			{pathName === `/${path.HOME}` && (
				<div className='h-[0.5px] w-full bg-gray-300 shadow'></div>
			)}
			<div className='flex justify-between items-center px-[100px] py-[26px] h-full'>
				<h1>
					<Link to={path.HOME}>
						<img
							src={pathName !== `/${path.HOME}` ? logo1 : logo}
							alt='logo'
							className='w-[120px] object-contain'
						/>
					</Link>
				</h1>
				<div className='flex items-center gap-4'>
					<Menu />
					{token
						? pathName === `/${path.HOME}` && (
								<Button className='bg-transparent border border-main-100 text-[14px] hover:border-main-600 transition'>
									Add Listing
								</Button>
						  )
						: pathName === `/${path.HOME}` && (
								<Button
									onClick={() => setModel(true, <Login />)}
									className='bg-transparent border border-main-100 text-[14px] hover:border-main-600 transition'
								>
									Sign in
								</Button>
						  )}
				</div>
			</div>
		</div>
	)
}

export default Navigation
