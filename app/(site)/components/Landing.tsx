'use client';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function Landing() {
	const descriptions = [
		' full stack developer.',
		' software engineer.',
		' gamer.',
		' volleyball player.',
		' home cook.',
		' cat dad.',
	];

	return (
		<div
			id='home'
			className='my-48'
		>
			<h1 className='text-8xl font-bold dark:text-teal-400'>
				Hello, I&apos;m{' '}
				<span className='bg-gradient-to-r from-orange-400 via-purple-600 to-teal-400 bg-clip-text text-transparent'>
					Jay Yuan,
				</span>
			</h1>
			<h1 className=' text-4xl large:text-4xl font-extra dark:text-slate-200 mt-1 flex flex-wrap'>
				and I am a <span> </span>
				<span className='ml-2'>
					<Typewriter
						options={{
							strings: descriptions,
							autoStart: true,
							loop: true,
							delay: 50,
							deleteSpeed: 1, // Adjust the delay as needed
						}}
					/>
				</span>
			</h1>
		</div>
	);
}
