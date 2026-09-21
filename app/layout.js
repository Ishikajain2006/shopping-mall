import "./globals.css";

export const metadata = {
  title: "Mall3D | Interactive Shopping Mall",
  description: "Interactive 3D shopping mall full-stack web project"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
