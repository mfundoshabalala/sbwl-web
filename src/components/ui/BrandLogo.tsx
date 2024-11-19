import Link from 'next/link';
import React from 'react';

const BrandLogo = () => {
	const brand = 'SBWL';
	return (
		<Link href="/">
			<h1 className="flex text-4xl font-black text-gray-800">
				{[...brand].map((char, index) => (
					<span
						key={index}
						className={`animate-bounce delay-${index * 200}ms`}
						style={{
							animationDelay: `${index * 200}ms`,
							animationTimingFunction: 'ease-in-out',
							display: 'inline-block',
						}}>
						{char}
					</span>
				))}
			</h1>
		</Link>
	);
};

export default BrandLogo;