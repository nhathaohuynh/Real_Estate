import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputText = ({
	style = '',
	containerClassName,
	label,
	type = 'text',
	id,
	register,
	errors,
	inputClassName,
	validate,
	placeholder,
}) => {
	return (
		<div className={twMerge(clsx('flex flex-col gap-2 mb-2'))}>
			{label && (
				<label className='text-[14px] text-gray-900 font-normal' htmlFor={id}>
					{label}
				</label>
			)}
			<input
				type={type}
				id={id}
				autoComplete={label}
				placeholder={placeholder}
				className={twMerge(clsx(style, inputClassName))}
				{...register(id, validate)}
			/>
			{errors && errors[id] && (
				<small className='text-red-500'>{errors[id]?.message}</small>
			)}
		</div>
	)
}

export default InputText
