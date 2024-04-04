import "./globals.css";

export const metadata = {
  title: "Etalks",
  description: "The ultimate resource sharing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
