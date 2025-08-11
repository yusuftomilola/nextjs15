"use client";
import { useTheme } from "@/components/themeProvider";

export default function testpage() {
  const theme = useTheme();
  return (
    <h1
      style={{
        color: theme.colors.Primary,
        backgroundColor: theme.colors.Secondary,
      }}
    >
      test page
    </h1>
  );
}
