import { Heart, X, DollarSign, Package, ShoppingBag } from "lucide-react";
import { useFavorites } from "../contexts/FavoritesContext";

export default function FavoriteItems() {
	const { favorites, totalAmount, removeFromFavorites } = useFavorites();

	return (
		<div className="bg-white rounded-xl p-6 shadow-md  hover-shadow transition-all duration-300">
			<div className="flex items-center justify-center border-b border-gray-200 pb-4 mb-6">
				<h3 className="text-lg font-semibold flex items-center text-black">
					<Heart
						className="h-5 w-5 mr-2 text-red-500 animate-pulse-slow"
						fill="currentColor"
					/>
					Favorite Items
				</h3>
			</div>
			<div className="space-y-4 min-h-[200px] mt-4">
				{favorites.length === 0 ? (
					<div className="py-8 text-center">
						<div className="flex justify-center mb-4">
							<ShoppingBag className="h-16 w-16 text-gray-300" />
						</div>
						<p className="text-black mb-2 font-medium">No favorites yet</p>
						<p className="text-sm text-black">
							Click the heart icon on any item to add to your favorites
						</p>
					</div>
				) : (
					<div className="space-y-4 max-h-[450px] overflow-y-auto pr-1">
						{favorites.map((item, index) => (
							<div
								key={item.id}
								className="flex justify-between items-center p-3 border border-gray-200 rounded hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="flex items-center">
									<div className="w-14 h-14 rounded overflow-hidden">
										<img
											src={item.image}
											alt={item.title}
											className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
											loading="lazy"
										/>
									</div>
									<div className="ml-3">
										<h4 className="font-medium text-sm text-black hover:text-[#F8CB66] transition-colors duration-300">
											{item.title}
										</h4>
										<div className="text-sm text-black">
											${item.currentBidPrice}
										</div>
									</div>
								</div>
								<button
									className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-all duration-300 transform hover:scale-110"
									onClick={() => removeFromFavorites(item.id)}
									aria-label="Remove from favorites"
								>
									<X className="h-5 w-5" />
								</button>
							</div>
						))}
					</div>
				)}
			</div>

			<div className="mt-6 pt-4 border-t border-gray-200">
				<div className="flex justify-between items-center">
					<span className="font-medium text-black">Total bids Amount</span>
					<span className="font-bold text-black text-lg bg-yellow-50 px-3 py-1 rounded-full">
						${totalAmount.toFixed(0)}
					</span>
				</div>
			</div>
		</div>
	);
}
