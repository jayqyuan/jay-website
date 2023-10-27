import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
export default function Contact() {
    return(
        <div>
            <h2 className='mt-24 font-bold text-gray-700 text-3xl dark:text-slate-200'>Get in touch</h2>
            <h4>I am seeking an entry-level software engineer position, looking to work on a purposeful product to improve people&apos;s lives.</h4>
            <h3>Follow along</h3>
            <Link href='https://www.linkedin.com/in/jayqyuan/'>
                <LinkedInIcon/>
            </Link>
            {''}
            <Link href='https://github.com/jayqyuan'>
                <GitHubIcon/>
            </Link>
        </div>
    )
}