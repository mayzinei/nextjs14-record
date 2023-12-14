import React from "react";
import Link from "next/link";

export default function Items() {
	const productId = 100;
	return (
		<div className="flex flex-col gap-2 p-8">
			<Link href="/" className="font-bold">
				Home
			</Link>
			<h1>Item Lists</h1>
			<h2>
				<Link href="items/1">Item 1</Link>
			</h2>
			<h2>
				<Link href="items/2">Item 2</Link>
			</h2>
			{/* "Replace" can go back to home page */}
			<h2>
				<Link href="items/3" replace>
					Item 3
				</Link>
			</h2>
			<h2>
				<Link href={`items/${productId}`}>Product {productId}</Link>
			</h2>
		</div>
	);
}
