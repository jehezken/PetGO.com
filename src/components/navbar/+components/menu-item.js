import React from "react";
import { Link } from "@nextui-org/react";

export default function MenuItem({ url, label }) {
	return (
		<li className="group/menu-item">
			<Link
				href={url}
				className="group-hover/menu-item:text-purple-600 text-neutral-600"
			>
				{label}
			</Link>
		</li>
	);
}
