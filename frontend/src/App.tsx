import { UserInterface } from "./components/UserInterface";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profile";
import Onboarding from "./pages/onboarding";
import Explore from "./pages/explore";
import Footer from "./components/Footer";
import { VStack, Flex } from "@chakra-ui/react";
import { Header } from "./components/header/Header";
import Mentors from "./pages/mentors";
import "./App.css";

const App = () => {
  return (
    <Router>
      {/* <VStack m="0" bg="grey" minHeight={"100dvh"} justifyContent={"space-between"}> */}
        <Header />
        <Flex bg="grey" width="100%" minHeight="100vh" justifyContent="column" m="0">
          <Routes >
            <Route path="/" element={<UserInterface />}>
              <Route path="/" element={<Home />}/>
              <Route path="onboarding" element={<Onboarding />} />
              <Route path="explore" element={<Explore />} />
              <Route path="products" element={<h1>Products</h1>} />
              <Route path="mentors" element={<Mentors />} />
              <Route path="profile" element={<Profile />} />

              {/* The 404 route must always be last */}
              <Route path="*" element={<h1>404: Page Not Found</h1>} />
            </Route>
          </Routes>
        </Flex>

        <Footer />
      {/* </VStack> */}
      {/* </VStack> */}
    </Router>
  );
};

export default App;
