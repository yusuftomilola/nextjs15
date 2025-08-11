import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/themeProvider";

export const metadata: Metadata = {
  title: {
    default: "NextJS 15 Tutorial",
    template: "%s | NextJS",
  },
  description: "Learning basic to advanced nextjs 15",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <header
            style={{
              backgroundColor: "lightblue",
              padding: "1rem",
            }}
          >
            <p>Header Section</p>
          </header>
          <main>{children}</main>
          <footer
            style={{
              backgroundColor: "ghostwhite",
              padding: "1rem",
            }}
          >
            <p>Footer Section</p>
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
