import { notFound } from "next/navigation";
import React from "react";

const getRandomInt = (count: number) => {
	return Math.floor(Math.random() * count);
};

export default function ReviewDetail({
	params,
}: {
	params: { id: string; reviewId: string };
}) {
	const random = getRandomInt(2);
	if (random === 1) {
		throw new Error("Error loading review");
	}
	if (parseInt(params.reviewId) > 500) {
		notFound();
	}
	return (
		<div>
			<h1>
				This is review {params.reviewId} for item no : {params.id}
			</h1>
		</div>
	);
}
