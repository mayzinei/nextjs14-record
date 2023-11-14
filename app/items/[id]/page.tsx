import React from "react";

export default function ItemDetail({ params }: { params: { id: string } }) {
	return (
		<div>
			<h1>This is item no : {params.id}</h1>
		</div>
	);
}
