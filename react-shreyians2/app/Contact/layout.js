import "../globals.css";

export const metadata = {
  title: "React Part-2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>You are welcomed on contact page.{children}</body>
    </html>
  );
}
