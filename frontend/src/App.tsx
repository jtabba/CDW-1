import { UserInterface } from "./components/UserInterface";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profile";
import Onboarding from "./pages/onboarding";
import Explore from "./pages/explore";
import Footer from "./components/Footer";
import { Flex } from "@chakra-ui/react";
import { Header } from "./components/header/Header";
import Mentors from "./pages/mentors";

const App = () => {
  return (
    <Router>
        <Header />
        <Flex bg="grey" minHeight="100vh" justifyContent="column" mb={0} pb={0}>
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
    </Router>
  );
};

export default App;
