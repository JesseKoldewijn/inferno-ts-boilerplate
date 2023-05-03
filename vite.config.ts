import { defineConfig } from "vite";
import inferno from "vite-plugin-inferno";

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: "./public",
	plugins: [inferno({ devtoolsInProd: true })],
});
