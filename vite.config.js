import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				catalog: "catalog.html",
				blog: "blog.html",
				about: "about.html",
			},
		},
	},
	plugins: [
		viteImagemin({
			gifsicle: { optimizationLevel: 3 },
			optipng: { optimizationLevel: 3 },

			mozjpeg: {
				quality: 70,
				progressive: true,
			},

			pngquant: {
				quality: [0.6, 0.8],
				speed: 3,
			},

			svgo: {
				plugins: [
					{ name: "removeViewBox", active: false },
					{ name: "removeEmptyAttrs", active: false },
				],
			},
		}),
	],
});
