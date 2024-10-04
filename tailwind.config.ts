import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

export default <Partial<Config>>{
	theme: {
		extend: {
			aspectRatio: {
				auto: "auto",
				square: "1 / 1",
				video: "16 / 9",
			},
			colors: {
				primary: {
					DEFAULT: "#0d588f",
					100: "#dbeafe",
					200: "#bfdbfe",
					500: "#3b82f6",
					600: "#2563eb",
					700: "#1d4ed8",
				},
				secondary: {
					DEFAULT: "#6b7280",
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					300: "#d1d5db",
					400: "#9ca3af",
					500: "#6b7280",
					600: "#475569",
					700: "#374151",
					800: "#1e293b",
					900: "#111827",
				},
				light: {
					DEFAULT: "#5ebbff",
					200: "#e2e8f0",
				},
				dark: {
					DEFAULT: "#026ebd",
				},
				white: {
					DEFAULT: "#ffffff",
				},
				indigo: {
					DEFAULT: "#6366f1",
					50: "#f0f5ff",
					500: "#6366f1",
					600: "#4f46e5",
					700: "#4338ca",
				},
				green: {
					DEFAULT: "#22c55e",
					100: "#dcfce7",
					200: "#bbf7d0",
					400: "#4ade80",
					500: "#22c55e",
					600: "#16a34a",
					700: "#15803d",
					800: "#166534",
					900: "#14532d",
				},
				yellow: {
					DEFAULT: "#eab308",
					50: "#fefce8",
					300: "#fde047",
				},
			},
		},
	},
	plugins: [
		iconsPlugin({
			// Select the icon collections you want to use
			// You can also ignore this option to automatically discover all individual icon packages you have installed
			// If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
			collections: getIconCollections(["carbon"]),
			// If you want to use all icons from @iconify/json, you can do this:
			// collections: getIconCollections("all"),
			// and the more recommended way is to use `dynamicIconsPlugin`, see below.
		}),
	]
};
