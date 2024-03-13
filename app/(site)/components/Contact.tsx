"use client";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import Link from "next/link";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

export default function Contact() {
	const [isCopied, setIsCopied] = useState(false);
	const CopytoClipboard = async () => {
		try {
			await navigator.clipboard.writeText("jayqyuan@gmail.com");
			setIsCopied(true);
		} catch (error) {
			console.error("Failed to copy", error);
		}
	};

	return (
		<div className='mt-36 mb'>
			<h2 className='mt-24 font-bold text-gray-700 text-5xl dark:text-slate-200'>
				GET IN TOUCH
			</h2>
			<h4 className='text-l my-5'>
				I am currently seeking an entry-level full stack developer or software engineer position, looking to work
				on a purposeful product that will be impactful to people.
			</h4>
			<h2 className="text-l mt-5 mb-36">
				Reach out to me here : {' '} <span onClick={CopytoClipboard}
					className='dark:text-teal-400  font-bold text-2xl h-10 w-10 hover:scale-125 transition-all duration-500 cursor-pointer'
					data-tooltip-id='email-copied'
					data-tooltip-content={isCopied?'Copied to clipboard':'Click to copy email!'}
					data-tooltip-place='top'
					>jayqyuan@gmail.com</span>
			</h2>
            <div className="mx-10">
			<div className='my-10 max-w-3xl mx-auto flex justify-between flex-wrap'>
				<a target='_blank' href='https://www.linkedin.com/in/jayqyuan/'>
					<LinkedInIcon className='h-10 w-10 hover:scale-125 transition-all duration-500 cursor-pointer' />
				</a>
				{""}
				<a target='_blank' href='https://github.com/jayqyuan'>
					<GitHubIcon className='h-10 w-10 hover:scale-125 transition-all duration-500 cursor-pointer' />
				</a>
                <a target='_blank' href='https://calendly.com/jayqyuan/meet-with-jay'>
					<CalendarTodayIcon className='h-10 w-10 hover:scale-125 transition-all duration-500 cursor-pointer'
					data-tooltip-id='calendlyLink'
					data-tooltip-content='Click to reschedule a chat!'
					data-tooltip-place='top' />
				</a>
				<Tooltip id="calendlyLink"/>
				<EmailIcon
					onClick={CopytoClipboard}
					className='h-10 w-10 hover:scale-125 transition-all duration-500 cursor-pointer'
					data-tooltip-id='email-copied'
					data-tooltip-content={isCopied?'Copied to clipboard':'Click to copy email!'}
					data-tooltip-place='top'
				/>
				<Tooltip id="email-copied"/>
                
				<style jsx global>{`
					.calendlyLink,
					.email-copied {
						background-color: #333;
						color: #fff;
						border-radius: 4px;
						padding: 8px;
					}
				`}</style>
			</div>
            </div>
		</div>
	);
}
