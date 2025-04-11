import {
	Bell,
	Menu,
	X,
	Home,
	ShoppingBag,
	Layers,
	HelpCircle,
	Heart,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-white shadow-sm sticky top-0 z-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo Section - Left */}
					<div className="flex-shrink-0">
						<h1 className="text-2xl font-bold hover-scale transition-all duration-300">
							<span className="text-black">Auction</span>
							<span className="text-[#F8CB66]">Gallery</span>
						</h1>
					</div>

					{/* Navigation Links - Center */}
					<div className="hidden sm:flex sm:items-center sm:justify-center flex-1 mx-8">
						<div className="flex space-x-8">
							<a
								href="#"
								className="border-b-2 border-transparent hover:border-[#F8CB66] text-black inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-300 hover:text-[#F8CB66]"
							>
								<Home className="h-4 w-4 mr-1" />
								Home
							</a>
							<a
								href="#"
								className="border-transparent text-gray-600 hover:text-[#F8CB66] hover:border-[#F8CB66] inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-all duration-300"
							>
								<ShoppingBag className="h-4 w-4 mr-1" />
								Auctions
							</a>
							<a
								href="#"
								className="border-transparent text-gray-600 hover:text-[#F8CB66] hover:border-[#F8CB66] inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-all duration-300"
							>
								<Layers className="h-4 w-4 mr-1" />
								Categories
							</a>
							<a
								href="#"
								className="border-transparent text-gray-600 hover:text-[#F8CB66] hover:border-[#F8CB66] inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-all duration-300"
							>
								<HelpCircle className="h-4 w-4 mr-1" />
								How it works
							</a>
							<a
								href="#"
								className="border-transparent text-gray-600 hover:text-[#F8CB66] hover:border-[#F8CB66] inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-all duration-300"
							>
								<Heart className="h-4 w-4 mr-1" />
								Favorite Items
							</a>
						</div>
					</div>

					{/* Profile & Notification - Right */}
					<div className="hidden sm:flex sm:items-center space-x-4">
						<button className="p-2 rounded-full text-gray-600 hover:text-[#F8CB66] transition-all duration-300 hover:bg-yellow-50 relative group">
							<span className="sr-only">View notifications</span>
							<Bell className="h-5 w-5" />
							<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
							<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping opacity-75"></span>
						</button>
						<div className="relative">
							<button
								type="button"
								className="bg-white rounded-full flex text-sm ring-2 ring-[#F8CB66] ring-opacity-25 hover:ring-opacity-100 transition-all duration-300"
								id="user-menu-button"
							>
								<span className="sr-only">Open user menu</span>
								<img
									className="h-8 w-8 rounded-full hover:scale-105 transition-transform duration-300"
									src="https://i.ibb.co/LzF2V0Yc/avater.png"
									alt="User profile"
								/>
							</button>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="flex items-center sm:hidden">
						<button
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#F8CB66] hover:bg-yellow-50 transition-all duration-300 focus:outline-none"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<span className="sr-only">Open main menu</span>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`sm:hidden ${
					isMenuOpen ? "animate-slide-up block" : "hidden"
				}`}
			>
				<div className="pt-2 pb-3 space-y-1 border-t border-gray-200">
					<a
						href="#"
						className="text-gray-600 hover:bg-yellow-50 hover:text-[#F8CB66] block pl-3 pr-4 py-2 text-base font-medium transition-colors duration-300 flex items-center"
					>
						<Home className="h-4 w-4 mr-2" />
						Home
					</a>
					<a
						href="#"
						className="text-gray-600 hover:bg-yellow-50 hover:text-[#F8CB66] block pl-3 pr-4 py-2 text-base font-medium transition-colors duration-300 flex items-center"
					>
						<ShoppingBag className="h-4 w-4 mr-2" />
						Auctions
					</a>
					<a
						href="#"
						className="text-gray-600 hover:bg-yellow-50 hover:text-[#F8CB66] block pl-3 pr-4 py-2 text-base font-medium transition-colors duration-300 flex items-center"
					>
						<Layers className="h-4 w-4 mr-2" />
						Categories
					</a>
					<a
						href="#"
						className="text-gray-600 hover:bg-yellow-50 hover:text-[#F8CB66] block pl-3 pr-4 py-2 text-base font-medium transition-colors duration-300 flex items-center"
					>
						<HelpCircle className="h-4 w-4 mr-2" />
						How it works
					</a>
					<a
						href="#"
						className="text-gray-600 hover:bg-yellow-50 hover:text-[#F8CB66] block pl-3 pr-4 py-2 text-base font-medium transition-colors duration-300 flex items-center"
					>
						<Heart className="h-4 w-4 mr-2" />
						Favorite Items
					</a>
				</div>
			</div>
		</nav>
	);
}
