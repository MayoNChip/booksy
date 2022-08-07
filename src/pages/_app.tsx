import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../theme/theme";
import Document from "next/document";

function MyApp({ Component, pageProps }: AppProps) {
  {
    console.log("im here");
  }
  return (
    <div dir="rtl">
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
