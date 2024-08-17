/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "15px",
		},

		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1400px",
		},

		fontFamily: {
			vazir: "Vazirmatn",
			oswald: "Oswald",
		},

		backgroundImage: {
			hero: "url('/assets/img/hero/bg.png')",
			membership: "url('/assets/img/membership/bg.jpg')",
		},

		extend: {
			colors: {
				primary: {
					DEFAULT: "#333",
					100: "#484848",
					200: "#151515",
					300: "#111",
				},
				accent: "#d4000d",
			},
		},
	},
	plugins: [],
};
