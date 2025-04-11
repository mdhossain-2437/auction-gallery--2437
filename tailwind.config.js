/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}", "./index.html"],
	theme: {
		extend: {
			animation: {
				"slide-up": "slideUp 0.3s ease-out",
				"fade-in": "fadeIn 0.3s ease-out",
			},
			keyframes: {
				slideUp: {
					"0%": { transform: "translateY(10px)", opacity: 0 },
					"100%": { transform: "translateY(0)", opacity: 1 },
				},
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			colors: {
				primary: "#F8CB66",
				secondary: "#333333",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
