"use client";
import React, { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import Typewriter from "typewriter-effect";

export default function Landing() {
	const descriptions = [
		" full stack developer.",
		" software engineer.",
		" volleyball player.",
		" gamer.",
		" cat dad.",
	];



	return (
		<div id='home' className='mt-36'>
			<h1 className='text-8xl font-bold dark:text-teal-400'>
				Hello, I&apos;m{" "}
				<span className='bg-gradient-to-r from-orange-400 via-purple-600 to-teal-400 bg-clip-text text-transparent'>
					Jay Yuan,
				</span>
			</h1>
			<h1 className=' text-4xl large:text-4xl font-extra dark:text-slate-200 mt-1 flex flex-wrap'>
				and I am a <span>{' '}</span>
				<span className="ml-2">
					<Typewriter
						options={{
							strings: descriptions,
							autoStart: true,
							loop: true,
							delay: 50, // Adjust the delay as needed
						}}
					/>
				</span>
			</h1>
			<button>
				<a
					href='#contact'
					className='text-2xl border-2 border-teal-500 rounded-lg p-1 hover:scale-105 hover:bg-teal-800 transition mt-36 flex item-center p-3'
				>
					GET IN TOUCH
					<span className='ml-2'>
						<EastIcon />
					</span>
				</a>
			</button>
		</div>
	);
}
