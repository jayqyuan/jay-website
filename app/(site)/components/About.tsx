import Image from 'next/image';
import EastIcon from '@mui/icons-material/East';

export default function About() {
	return (
		<div
			id='about-me'
			className='flex flex-wrap items-center justify-center'
		>
			<div className='max-w-lg mx-auto px-4 py-8'>
				<h1 className='mt-36 font-bold text-gray-700 text-5xl dark:text-teal-300'>
					ABOUT JAY YUAN
				</h1>
				<div className='text-xl my-10'>
					<h3 className='text-xl font-bold'>Hi, I am Jay.</h3>
					<br />
					<p>
						I am a full-stack developer from New York City. While working as a
						data analyst, spending most of my time fiddling and tinkering with
						applications, I became fascinated with how these apps worked.
					</p>
					<br />
					<p>
						My coding journey began with self-learning basic computer science
						principles through the CS50 course. I have learned most of my
						programming knowledge through online courses, coding bootcamp, and
						personal projects.
					</p>
					<br />
					<p>
						I became passionate about software engineering when I fell in love
						with learning about programming and the process&apos;s struggle,
						headache, and ultimate gratification. The satisfaction of having
						what you built to be used by users is like no other, and I want to
						bring this passion to whatever product I work on.
					</p>
					<br />
					<p>
						When I do decide to touch some grass, I like to play volleyball,
						explore fictional worlds, and learn about random facts.
					</p>
				</div>
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
			<div className='max-w-lg mx-auto px-4 py-8'>
				<div className='h-3/4 rounded-lg overflow-hidden'>
					<Image
						src='/self_portrait.jpg'
						alt='picture of me'
						width={350}
						height={350}
						className='object-cover'
					/>
				</div>
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
