import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import icons from '~/utils/icons'

const Button = ({
	children,
	className,
	onClick,
	type = 'button',
	disabled,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={twMerge(
				clsx(
					'px-3 py-2 text-white bg-main-700 rounded-md flex justify-center gap-3 items-center',
					disabled && 'opacity-60',
					className,
				),
			)}
		>
			{disabled && (
				<span className='animate-spin'>
					<icons.ImSpinner2 />
				</span>
			)}
			{children}
		</button>
	)
}

export default Button
