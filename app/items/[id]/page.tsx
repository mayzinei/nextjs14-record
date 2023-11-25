import React from "react";
import { Metadata } from "next";

//Dynamic Metadata depands on dynamic informations

type Props = {
	params: {
		id: string;
		title: string;
	};
};

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const title = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(`iPhone ${params.id}`);
		}, 100);
	});
	return {
		title: `Product : ${title}`,
	};
};

export default function ItemDetail({ params }: Props) {
	return (
		<div>
			<h1>This is item no : {params.id}</h1>
		</div>
	);
}
