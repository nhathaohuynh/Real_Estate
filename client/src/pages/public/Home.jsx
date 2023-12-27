import React from 'react'
import hero from '~/assets/hero.svg'

const Home = () => {
	return (
		<div className='bg-white w-[100%]'>
			<div className='w-full h-fit relative'>
				<img src={hero} alt='hero' className='w-full h-full object-contain' />
				<div className='absolute inset-0 flex flex-col justify-center items-center w-full'>
					<h2 className='text-3xl font-semibold text-[40px] p-4 text-white'>
						Find Your Dream House
					</h2>
					<span className='text-[14px]'>
						Discover your ideal home with REIS, where every detail is crafted to
						turn your
					</span>
					<span>vision of a perfect living space into a reality.</span>
				</div>
			</div>
		</div>
	)
}
export default Home
