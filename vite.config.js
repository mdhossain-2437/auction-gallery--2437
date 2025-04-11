import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "dist",
		minify: "esbuild",
		emptyOutDir: true,
		sourcemap: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		port: 3000,
		strictPort: true,
		open: true,
		host: "localhost",
	},
	preview: {
		port: 3000,
		strictPort: true,
		host: "127.0.0.1",
	},
	optimizeDeps: {
		include: ["react", "react-dom"],
	},
});
