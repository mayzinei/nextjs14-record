"use client";

import React from "react";

export default function ErrorBoundry({ error }: { error: Error }) {
	return (
		<div>
			<h1>{error.message}</h1>
		</div>
	);
}
