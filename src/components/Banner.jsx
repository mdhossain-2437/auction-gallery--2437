import { Sparkles, Search, ArrowRight } from "lucide-react";

export default function Banner() {
	return (
		<div
			className="relative h-[400px] md:h-[350px] bg-cover bg-center transition-transform duration-700"
			style={{
				backgroundImage: "url('https://i.ibb.co/218Y6StR/Banner-min.jpg')",
			}}
		>
			<div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-start">
				<div className="max-w-7xl mx-4 sm:mx-6 md:mx-16 lg:mx-32 px-4 sm:px-6 lg:px-8 text-white">
					<h1 className="text-3xl  md:text-4xl font-bold mb-3 leading-tight animate-fade-in">
						<span className="flex items-center">
							<Sparkles className="h-6 w-6 text-[#F8CB66] mr-2 animate-pulse-slow" />
							Bid on Unique Items from
						</span>
						<br className="hidden md:block" />
						<span
							className="animate-slide-up inline-block"
							style={{ animationDelay: "0.3s" }}
						>
							Around the World
						</span>
					</h1>
					<p
						className="text-base md:text-lg mb-8 max-w-2xl animate-fade-in"
						style={{ animationDelay: "0.5s" }}
					>
						Discover rare collectibles, luxury goods, and vintage treasures in
						our curated auctions
					</p>
					<button
						className="bg-[#F8CB66] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#f5c04f] transition-all duration-300 shadow-md hover:shadow-lg hover-lift group animate-fade-in"
						style={{ animationDelay: "0.7s" }}
					>
						<span className="flex items-center">
							Explore Auctions
							<ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
