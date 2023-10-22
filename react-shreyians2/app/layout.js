import "./globals.css";
import MyContext from "@/Helper/Context";

export const metadata = {
  title: "React Part-2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyContext>{children}</MyContext>
      </body>
    </html>
  );
}
