import React from "react";

export default function ReviewDetail({
	params,
}: {
	params: { id: string; reviewId: string };
}) {
	return (
		<div>
			<h1>
				This is review {params.reviewId} for item no : {params.id}
			</h1>
		</div>
	);
}
