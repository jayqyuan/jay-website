import Image from "next/image";

export default function About() {
	return (
		<div id="about-me">
		<h1 className='mt-36 font-bold text-gray-700 text-5xl dark:text-teal-300'>
            ABOUT JAY YUAN
        </h1>
        <div className="font-bold text-2xl my-10">
        <p>
            I am a recent coding bootcamp graduate from New York City with a zest for creating impactful software and applications. I am passionate about designing user-centric applications and am currently learning to develop with Java and Python.
        </p>
        <br/>
        <p>
            When I do decide to touch some grass, I like to play volleyball, explore fictional worlds, and learn through a good book.
        </p>
        </div>
        <div className="relative" id="bg-img" style={{width: '100%', height:'500px'}}>
        <Image src='/background-2.jpg'
        layout="fill"
        objectPosition="center bottom"
        sizes="100vw"
        alt="picture of a laptop"
        objectFit="cover"
        className="mt-5"
        />
        </div>
		</div>
	);
}
