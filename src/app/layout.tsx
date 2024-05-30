import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import TopNav from "~/app/_components/topnav";


export const metadata = {
  title: "MyMovies",
  description: "App to save your movies",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
