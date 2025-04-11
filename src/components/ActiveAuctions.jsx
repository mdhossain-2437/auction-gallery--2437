import { useState, useEffect } from "react";
import { Heart, Clock, Award } from "lucide-react";
import FavoriteItems from "./FavoriteItems";
import { useFavorites } from "../contexts/FavoritesContext";

export default function ActiveAuctions() {
	const { addToFavorites, isItemInFavorites } = useFavorites();
	const [auctionItems, setAuctionItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchAuctionData = async () => {
			try {
				const response = await fetch("/data/auctionItems.json");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				// Assuming the JSON structure is { "items": [...] }
				setAuctionItems(data.items || []);
			} catch (e) {
				console.error("Failed to fetch auction data:", e);
				setError("Failed to load auction items.");
			} finally {
				setLoading(false);
			}
		};

		fetchAuctionData();
	}, []);

	const handleAddToFavorites = (item) => {
		addToFavorites(item);
	};

	if (loading) {
		return <div className="text-center py-10">Loading auction items...</div>;
	}

	if (error) {
		return <div className="text-center py-10 text-red-500">{error}</div>;
	}

	if (auctionItems.length === 0) {
		return <div className="text-center py-10">No active auctions found.</div>;
	}

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="mb-10 animate-fade-in">
				<h2 className="text-2xl font-bold text-gray-900 flex items-center">
					<Award className="h-6 w-6 text-[#F8CB66] mr-2" />
					Active Auctions
				</h2>
				<p className="text-gray-600">Discover and bid on extraordinary items</p>
			</div>

			<div className="flex flex-col lg:flex-row gap-8">
				{/* Auction Items Table - Responsive with Figma Design - Desktop Only */}
				<div className="w-full lg:w-2/3 hidden sm:block animate-slide-up">
					<div className="bg-white rounded-xl shadow-md overflow-hidden hover-shadow transition duration-300">
						<div className="overflow-x-auto">
							<table className="min-w-full">
								<thead className="bg-white border-b-2 border-gray-300">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Items
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Current Bid
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Time Left
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Bid Now
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{auctionItems.map((item, index) => (
										<tr
											key={item.id}
											className="hover:bg-gray-50 transition duration-150"
											style={{ animationDelay: `${index * 0.1}s` }}
										>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="flex-shrink-0 h-14 w-14 overflow-hidden rounded">
														<img
															className="h-14 w-14 object-cover transition-transform duration-500 hover:scale-110"
															src={item.image}
															alt={item.title}
															loading="lazy"
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 hover:text-[#F8CB66] transition-colors duration-300">
															{item.title}
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm font-medium text-gray-900">
													${item.currentBidPrice}
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900 flex items-center">
													<Clock className="h-3 w-3 mr-1 text-gray-500" />
													{item.timeLeft}
												</div>
											</td>
											<td className="px-6 py-4 text-center whitespace-nowrap">
												<button
													className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
														isItemInFavorites(item.id)
															? "text-red-500 bg-red-50 cursor-not-allowed"
															: "text-gray-400 hover:text-red-500 hover:bg-red-50"
													}`}
													onClick={() => handleAddToFavorites(item)}
													disabled={isItemInFavorites(item.id)}
													style={{
														cursor: isItemInFavorites(item.id)
															? "not-allowed"
															: "pointer",
													}}
												>
													<Heart
														className={`h-5 w-5 ${
															isItemInFavorites(item.id)
																? "animate-pulse-slow"
																: ""
														}`}
														fill={
															isItemInFavorites(item.id)
																? "currentColor"
																: "none"
														}
													/>
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				{/* Mobile display for small screens - showing only up to 6 items */}
				<div className="w-full sm:hidden animate-slide-up">
					<div className="bg-white rounded-xl shadow-md overflow-hidden hover-shadow transition duration-300">
						<h3 className="px-4 py-3 bg-gray-50 border-b border-gray-200 font-medium flex items-center">
							<Award className="h-4 w-4 text-[#F8CB66] mr-2" />
							Active Auctions
						</h3>
						<ul className="divide-y divide-gray-200">
							{auctionItems.slice(0, 6).map((item, index) => (
								<li
									key={item.id}
									className="py-4 px-4 hover:bg-gray-50 transition duration-150"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<div className="flex items-center space-x-4">
										<div className="flex-shrink-0 overflow-hidden rounded">
											<img
												className="h-14 w-14 object-cover transition-transform duration-500 hover:scale-110"
												src={item.image}
												alt={item.title}
												loading="lazy"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-gray-900 truncate hover:text-[#F8CB66] transition-colors duration-300">
												{item.title}
											</p>
											<p className="text-sm text-gray-900">
												${item.currentBidPrice}
											</p>
											<p className="text-xs text-gray-500 flex items-center">
												<Clock className="h-3 w-3 mr-1 text-gray-500" />
												{item.timeLeft}
											</p>
										</div>
										<div>
											<button
												className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
													isItemInFavorites(item.id)
														? "text-red-500 bg-red-50 cursor-not-allowed"
														: "text-gray-400 hover:text-red-500 hover:bg-red-50"
												}`}
												onClick={() => handleAddToFavorites(item)}
												disabled={isItemInFavorites(item.id)}
												style={{
													cursor: isItemInFavorites(item.id)
														? "not-allowed"
														: "pointer",
												}}
											>
												<Heart
													className="h-5 w-5"
													fill={
														isItemInFavorites(item.id) ? "currentColor" : "none"
													}
												/>
											</button>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Favorite Items Section */}
				<div
					className="w-full lg:w-1/3 mt-8 lg:mt-0 animate-slide-up"
					style={{ animationDelay: "0.2s" }}
				>
					<FavoriteItems />
				</div>
			</div>
		</div>
	);
}
