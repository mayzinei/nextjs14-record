"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
	{ name: "Register", href: "/register" },
	{ name: "Login", href: "/login" },
	{ name: "Forgot Password", href: "/forgot-pw" },
];

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const [input, setInput] = useState();
	return (
		<div className="p-10 w-[400px] mx-auto bg-blue-100 flex flex-col items-center gap-6">
			<input value={input} onChange={(e: any) => setInput(e.target.value)} />
			{navLinks.map((link) => {
				const isActive = pathname.startsWith(link.href);
				return (
					<Link
						href={link.href}
						key={link.name}
						className={isActive ? "text-blue-500 font-bold text-lg" : ""}
					>
						{link.name}
					</Link>
				);
			})}
			{children}
		</div>
	);
}

// ========== template.tsx (significant of new app router)
// Withing the auth group, use "template.tsx" insted of "layout.tsx"

// layout.tsx
//			template.tsx
//						page.tsx
