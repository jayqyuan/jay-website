import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
export default function Contact() {
    return(
        <div className='mx-10'>
            <h2 className='mt-24 font-bold text-gray-700 text-3xl dark:text-slate-200'>Get in touch</h2>
            <h4 className='text-l px-10'>I am seeking an entry-level software engineer position, looking to work on a purposeful product that will be impactful to people.</h4>
            <h3 className='mt-10 text-3xl font-bold max-w-3xl mx-auto'>Follow along: </h3>
            <div className='my-10 max-w-3xl mx-auto'>
                <a target="_blank" href='https://www.linkedin.com/in/jayqyuan/'>
                    <LinkedInIcon className='h-14 w-14 mx-10 hover:scale-125 transition-all duration-500 cursor-pointer'/>
                </a>
                {''}
                <a target="_blank" href='https://github.com/jayqyuan'>
                    <GitHubIcon className='h-14 w-14 hover:scale-125 transition-all duration-500 cursor-pointer'/>
                </a>
            </div>
        </div>
    )
}