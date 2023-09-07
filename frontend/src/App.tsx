// import { useEffect, useState } from "react";
// import { getAllUsers } from "./requests/getAllUsers";
// import { userData } from "./requests/types";
import { UserInterface } from "./components/UserInterface";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profile";
import Onboarding from "./pages/onboarding";
import Explore from "./pages/explore";
import Footer from "./components/Footer";
import { VStack } from "@chakra-ui/react";

const App = () => {
  // const [users, setUsers] = useState<userData[]>([]);

  // ***PURELY FOR EXAMPLE***
  /* useEffect(() => {
    // open browser console to see result
    const getUsers = async () => {
      const response = await getAllUsers();

      if (response.success) {
        setUsers(response.data as userData[]);
      } else {
        // create error notification wth Chakra
      }
    };

    getUsers();
    console.log("users", users);
  }); */
  // ***PURELY FOR EXAMPLE***

  return (
    <Router>
      <VStack minHeight={"100dvh"} justifyContent={"space-between"}>
        <UserInterface />
        <VStack>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="onboarding" element={<Onboarding />} />
            <Route path="explore" element={<Explore />} />
            <Route path="products" element={<h1>Products</h1>} />
            <Route path="mentors" element={<h1>Mentors</h1>} />
            <Route path="profile" element={<Profile />} />

            {/* The 404 route must always be last */}
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </VStack>

        <Footer />
      </VStack>
    </Router>
  );
};

export default App;
