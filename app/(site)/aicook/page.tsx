'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
	const router = useRouter();

	useEffect(() => {
		// Ensure code runs only on the client side
		if (typeof window !== 'undefined') {
			// Client-side code
			router.push('https://ai-cookbook.vercel.app/');
		}
	}, []);

	// Return null or a loading indicator while redirecting
	return null;
}