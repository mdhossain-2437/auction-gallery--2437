import { Facebook, Instagram, Twitter, Gavel } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-white border-t border-gray-200">
			<div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-6 animate-fade-in">
					<h2 className="text-2xl font-bold hover-scale transition-all duration-300">
						<span className="text-black">Auction</span>
						<span className="text-[#F8CB66]">Gallery</span>
					</h2>
					<p className="text-gray-600 mt-1 text-sm flex items-center justify-center">
						<Gavel className="h-3 w-3 mr-1 text-[#F8CB66]" />
						Bid. Win. Own.
					</p>
				</div>

				<div className="flex justify-center gap-8 text-gray-600 mb-6">
					<a
						href="#"
						className="hover:text-[#F8CB66] transition-colors hover-lift"
					>
						Home
					</a>
					<a
						href="#"
						className="hover:text-[#F8CB66] transition-colors hover-lift"
					>
						Auctions
					</a>
					<a
						href="#"
						className="hover:text-[#F8CB66] transition-colors hover-lift"
					>
						Categories
					</a>
					<a
						href="#"
						className="hover:text-[#F8CB66] transition-colors hover-lift"
					>
						How to works
					</a>
				</div>

				<div className="flex justify-center space-x-6 mb-6">
					<a
						href="#"
						className="text-gray-500 hover:text-[#F8CB66] transition-colors hover:scale-110 transform duration-300 p-2 hover:bg-gray-50 rounded-full"
					>
						<span className="sr-only">Facebook</span>
						<Facebook className="h-5 w-5" />
					</a>
					<a
						href="#"
						className="text-gray-500 hover:text-[#F8CB66] transition-colors hover:scale-110 transform duration-300 p-2 hover:bg-gray-50 rounded-full"
					>
						<span className="sr-only">Instagram</span>
						<Instagram className="h-5 w-5" />
					</a>
					<a
						href="#"
						className="text-gray-500 hover:text-[#F8CB66] transition-colors hover:scale-110 transform duration-300 p-2 hover:bg-gray-50 rounded-full"
					>
						<span className="sr-only">Twitter</span>
						<Twitter className="h-5 w-5" />
					</a>
				</div>

				<div className="text-center text-gray-500 text-sm">
					© 2025 AuctionGallery. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
