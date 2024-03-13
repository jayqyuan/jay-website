import Image from "next/image";
import EastIcon from '@mui/icons-material/East';

export default function About() {
	return (
		<div id='about-me'>
			<h1 className='mt-36 font-bold text-gray-700 text-5xl dark:text-teal-300'>
				ABOUT JAY YUAN
			</h1>
			<div className='font-bold text-xl my-10'>
				<p>
					I am a recent coding bootcamp graduate from New York City with a zest
					for creating impactful software and applications. I am passionate
					about designing user-centric applications and am currently learning to
					develop with Java and Python.
				</p>
				<br />
				<p>
					When I do decide to touch some grass, I like to play volleyball,
					explore fictional worlds, and learn through a good book.
				</p>
				<button>
					<a
						href='#contact'
						className='text-2xl border-2 border-teal-500 rounded-lg p-1 hover:scale-105 hover:border-teal-400 dark:hover:bg-teal-800 transition mt-36 flex item-center p-3'
					>
						GET IN TOUCH
						<span className='ml-2'>
							<EastIcon />
						</span>
					</a>
				</button>
			</div>
			<div
				className='relative'
				id='bg-img'
				style={{ width: '100%', height: '500px' }}
			>
				<Image
					src='/background-2.jpg'
					layout='fill'
					objectPosition='center bottom'
					sizes='100vw'
					alt='picture of a laptop'
					objectFit='cover'
					className='mt-5'
				/>
			</div>
		</div>
	);
}
