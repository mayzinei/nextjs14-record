"use client";

import React from "react";

export default function ErrorBoundry({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div>
			<h1>{error.message}</h1>
			<button onClick={reset} className="p-2 bg-slate-400 rounded-md">
				Try Again
			</button>
		</div>
	);
}
