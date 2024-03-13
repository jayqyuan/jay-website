import Image from 'next/image';
import EastIcon from '@mui/icons-material/East';

export default function About() {
	return (
		<div id='about-me'>
			<h1 className='mt-36 font-bold text-gray-700 text-5xl dark:text-teal-300'>
				ABOUT JAY YUAN
			</h1>
			<div className='text-xl my-10'>
				<h3 className='text-2xl font-bold'>Hi, I am Jay.</h3>
				<br />
				<p>
					I am a full-stack developer from New York City. While working as a
					data analyst in media strategy, I developed a fascination for tech.
				</p>
				<br />
				<p>
					My coding journey began with watching the CS50 course on YouTube. I
					have learned most of my programming knowledge through online courses,
					coding bootcamp, and personal projects.
				</p>
				<br />
				<p>
					The main reasons I decided to become a software engineer are the
					challenges, continuous learning, thrill of problem-solving,
					collaboration, and satisfaction of creation via code.
				</p>
				<br />
				<p>
					When I do decide to touch some grass, I like to play volleyball,
					explore fictional worlds, and learn through a good book.
				</p>
				<button>
					<a
						href='#contact'
						className='text-2xl border-2 border-teal-500 rounded-lg p-1 hover:scale-105 hover:border-teal-400 dark:hover:bg-teal-800 transition mt-5 flex item-center p-3'
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
