export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{children}
			<h1>Group Layout is Working!!</h1>
		</>
	);
}
