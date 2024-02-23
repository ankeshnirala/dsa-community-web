import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function NextUIProviders({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" enableSystem defaultTheme="system">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
