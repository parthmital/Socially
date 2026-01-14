import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Socially – Modern Social Media App",
	description:
		"Socially is a modern social media platform built with Next.js, Clerk, and PostgreSQL. Create posts, follow users, interact with content, and enjoy a responsive, dynamic theme experience.",
	icons: {
		icon: "/favicon.png",
		apple: "/favicon.png",
	},
	openGraph: {
		title: "Socially – Modern Social Media App",
		description:
			"Socially is a modern social media platform built with Next.js, Clerk, and PostgreSQL. Share posts, follow users, and engage with content in a responsive, themeable UI.",
		type: "website",
		url: "https://socially-henna.vercel.app/",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
				alt: "Socially app interface screenshot",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Socially – Modern Social Media App",
		description:
			"Socially is a modern social media platform built with Next.js, Clerk, and PostgreSQL. Share posts, follow users, and engage with content in a responsive, themeable UI.",
		images: ["/og.png"],
	},
	themeColor: "#1ed760",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<div className="min-h-screen">
							<Navbar />
							<main className="py-8">
								<div className="max-w-7xl mx-auto px-4">
									<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
										<div className="hidden lg:block lg:col-span-3">
											<Sidebar />
										</div>
										<div className="lg:col-span-9">{children}</div>
									</div>
								</div>
							</main>
						</div>
						<Toaster />
						<script
							type="application/ld+json"
							dangerouslySetInnerHTML={{
								__html: JSON.stringify({
									"@context": "https://schema.org",
									"@type": "SocialNetworkingApplication",
									name: "Socially",
									applicationCategory: "SocialNetworkingApplication",
									operatingSystem: "Web",
									author: {
										"@type": "Person",
										name: "Parth Mital",
									},
									url: "https://socially-henna.vercel.app/",
									offers: {
										"@type": "Offer",
										price: "0",
										priceCurrency: "USD",
									},
									description:
										"Socially is a modern social media platform built with Next.js, Clerk, and PostgreSQL. Create posts, follow users, interact with content, and enjoy a responsive, dynamic theme experience.",
								}),
							}}
						/>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
