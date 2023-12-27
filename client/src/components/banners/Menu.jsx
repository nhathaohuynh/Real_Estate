import clsx from 'clsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import usePathName from '~/hooks/usePathName'
import { itemMenu } from '~/utils/constant'
import path from '~/utils/path'

const Menu = () => {
	const navigate = useNavigate()
	const { pathName } = usePathName()

	return (
		<ul className='flex gap-4 text-[14px] uppercase'>
			{itemMenu.map((menu) => (
				<li
					key={crypto.randomUUID()}
					className={twMerge(
						clsx(
							pathName === `/${menu.path}` && 'font-semibold text-gray-900',
							pathName === `/${menu.path}` &&
								pathName === `/${path.HOME}` &&
								'font-semibold text-white',
							pathName === `/${path.HOME}`
								? 'hover:text-white '
								: 'hover:text-gray-900',
							' cursor-pointer',
						),
					)}
					onClick={() => navigate(`/${menu.path}`)}
				>
					{menu.text}
				</li>
			))}
		</ul>
	)
}

export default Menu
