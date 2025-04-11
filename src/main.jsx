import React from "react";
import { createRoot } from "react-dom/client";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<FavoritesProvider>
			<App />
		</FavoritesProvider>
	</React.StrictMode>
);
