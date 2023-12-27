import clsx from 'clsx'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation, TopHeader } from '~/components'
import usePathName from '~/hooks/usePathName'
import path from '~/utils/path'

const Layout = () => {
	const { pathName } = usePathName()
	return (
		<div className='text-main-100'>
			<TopHeader />
			<Navigation />
			<div className={clsx(pathName !== `/${path.HOME}` && 'mt-[170px]')}>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
