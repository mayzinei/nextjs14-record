"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
	const router = useRouter();
	const orderHandler = () => {
		// router.push("/items"); //navigate to the next page
		router.replace("/"); // same with push()
		// router.back(); // navigate back to the privious page in the browser's history
		// router.forword(); // navigate back to the next page in the browser's history
	};
	return (
		<div>
			<h1>Order Products</h1>
			<button
				onClick={orderHandler}
				className="px-4 py-2 font-bold bg-purple-200 rounded-md"
			>
				Order Now
			</button>
		</div>
	);
}
