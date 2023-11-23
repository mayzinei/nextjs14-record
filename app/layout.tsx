import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Next App",
	description: "following tutorial from CODEVOLUTION",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header>
					<h1 className="h-20 bg-red-200">I'm Header</h1>
				</header>
				<main>{children}</main>
				<footer>
					<h1 className="h-20 bg-blue-200">I'm Footer</h1>
				</footer>
			</body>
		</html>
	);
}
