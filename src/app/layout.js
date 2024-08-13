import ThemeProvider from "@/components/common/theme-provider";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
