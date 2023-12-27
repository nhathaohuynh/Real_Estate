import clsx from 'clsx'
import { Link } from 'react-router-dom'
import usePathName from '~/hooks/usePathName'
import { links } from '~/utils/constant'
import icons from '~/utils/icons'
import path from '~/utils/path'

const TopHeader = () => {
	const { pathName } = usePathName()
	return (
		<div
			className={clsx(
				pathName !== `/${path.HOME}` ? 'bg-main-700' : 'bg-transparent',
				' h-[85px] fixed top-0 left-0 z-50 w-full',
			)}
		>
			<div className='flex justify-between items-center font-thin px-[100px] py-[26px] text-[12px] h-full'>
				<div className='flex gap-1 items-center'>
					<icons.AiOutlineMail className='text-[14px]' />
					<span>
						<span>Email us at: </span>
						<span>realestate@gmail.com</span>
					</span>
				</div>
				<div className='flex gap-2 items-center'>
					<ul className='flex gap-2 items-center'>
						{links.map((link) => (
							<Link
								key={crypto.randomUUID()}
								target='_blank'
								to={link.path}
								className='p-2 text-[14px] border rounded transition-all border-transparent hover:border-main-600 hover:text-white '
							>
								<link.icon size={14} />
							</Link>
						))}
					</ul>
					<span className='w-[1px] h-[12px] bg-main-50'></span>
					<span className='flex gap-2 items-center'>
						<icons.FiPhone className='text-[14px]' />
						<span>123-456789</span>
					</span>
				</div>
			</div>
		</div>
	)
}

export default TopHeader
