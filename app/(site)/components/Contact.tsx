"use client";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
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
		<div className='mx-10'>
			<h2 className='mt-24 font-bold text-gray-700 text-3xl dark:text-slate-200'>
				Get in touch
			</h2>
			<h4 className='text-l px-10'>
				I am seeking an entry-level software engineer position, looking to work
				on a purposeful product that will be impactful to people.
			</h4>
			<div className='my-10 max-w-3xl mx-auto flex justify-between'>
				<a target='_blank' href='https://www.linkedin.com/in/jayqyuan/'>
					<LinkedInIcon className='h-14 w-14 hover:scale-125 transition-all duration-500 cursor-pointer' />
				</a>
				{""}
				<a target='_blank' href='https://github.com/jayqyuan'>
					<GitHubIcon className='h-14 w-14 hover:scale-125 transition-all duration-500 cursor-pointer' />
				</a>
				<EmailIcon
					onClick={CopytoClipboard}
					className='h-14 w-14 hover:scale-125 transition-all duration-500 cursor-pointer'
					data-tooltip-id='email-copied'
					data-tooltip-content={isCopied?'Copied to clipboard':'Click to copy email!'}
					data-tooltip-place='top'
				/>
				<Tooltip id="email-copied"/>
				<style jsx global>{`
					.email-copied {
						background-color: #333;
						color: #fff;
						border-radius: 4px;
						padding: 8px;
					}
				`}</style>
			</div>
		</div>
	);
}
