import Link from "next/link";
export default function Home() {
	return (
		<div className="flex flex-col gap-4">
			<h1>Hello World</h1>
			{/* NextJs Navigation is file base routing */}

			<div className="p-6 flex flex-col gap-3 font-bold">
				<Link href="/about">About</Link>
				<Link href="/items">Items</Link>
			</div>
		</div>
	);
}
