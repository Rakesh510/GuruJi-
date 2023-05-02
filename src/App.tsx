import * as React from "react";
import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Landing} from "./Homepage/landing/landing";


const theme = extendTheme({
  fonts: {
    heading: "Sansation",
    body: "Sansation",
  },
})


export const App = () => (
  <ChakraProvider theme={theme}> 
  <Header />
  <Landing />
  <Footer />
   </ChakraProvider>
)
