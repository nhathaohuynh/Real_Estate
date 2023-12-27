import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputRadio = ({
	style = '',
	containerClassName,
	label,
	id,
	register,
	title,
	errors,
	inputClassName,
	validate,
	options,
}) => {
	return (
		<div className={twMerge(clsx('flex flex-col mb-2', containerClassName))}>
			<span className='mb-2'>{title}</span>
			<div className='flex gap-10'>
				{options.map((el) => (
					<div
						key={crypto.randomUUID()}
						className='flex justify-start gap-2 items-center'
					>
						<input
							type='radio'
							id={el?.id}
							name={el?.id}
							value={el?.value}
							defaultChecked={el?.checked}
							autoComplete={label}
							className={twMerge(clsx(style, inputClassName))}
							{...register(id, validate)}
						/>

						<label
							className='text-[14px] text-gray-900 font-normal cursor-pointer'
							htmlFor={el?.id}
						>
							{el?.value}
						</label>
					</div>
				))}
			</div>
			{errors && errors[id] && (
				<small className='text-red-500 mt-2'>{errors[id]?.message}</small>
			)}
		</div>
	)
}

export default InputRadio
