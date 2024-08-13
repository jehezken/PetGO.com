"use client";

import React from "react";
import MenuItem from "./+components/menu-item";
import Brand from "./+components/brand";
import { Button, Link } from "@nextui-org/react";
import { Equal } from "lucide-react";
import { clsx } from "clsx";

export default function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);
	const modalRef = React.useRef(null);

	React.useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<header className="sticky top-0 left-0 w-full h-auto z-50">
			<div className="relative">
				<div className="container mx-auto p-4">
					<nav className="flex justify-between items-center">
						<div className="flex items-center gap-4">
							<Button
								isIconOnly
								variant="light"
								className="lg:hidden"
								onClick={() => setIsOpen(!isOpen)}
							>
								<Equal />
							</Button>
							<Link href="/">
								<Brand className="max-w-full h-14 object-cover" />
							</Link>
						</div>
						<ul className="hidden lg:flex items-center gap-8 mr-auto pl-24">
							<MenuItem url="/" label="Anasayfa" />
							<MenuItem url="/hizmetler" label="Hizmetler" />
							<MenuItem url="/kariyer" label="Kariyer" />
							<MenuItem url="/faq" label="S.S.S" />
							<MenuItem url="/iletisim" label="Bize Ulasin" />
						</ul>
						<Button>PetGO Walker Ol !</Button>
					</nav>
				</div>
				<div
					ref={modalRef}
					className={clsx(
						"absolute top-full left-0 w-full max-h-0 overflow-hidden transition-all bg-white z-50",
						{
							"max-h-[999px]": isOpen,
						}
					)}
				>
					<div className="container mx-auto p-4">
						<ul className="flex flex-col pl-3 gap-4">
							<MenuItem url="/" label="Anasayfa" />
							<MenuItem url="/hizmetler" label="Hizmetler" />
							<MenuItem url="/kariyer" label="Kariyer" />
							<MenuItem url="/faq" label="S.S.S" />
							<MenuItem url="/iletisim" label="Bize Ulasin" />
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}
