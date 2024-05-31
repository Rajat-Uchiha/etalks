import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const metadata = {
  title: "Etalks | Fun and knowledge at the same place",
  description: "The ultimate resource sharing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#FF0000" height={6} /> {children}
      </body>
    </html>
  );
}
