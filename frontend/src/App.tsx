import { useEffect, useState } from "react";
import { getAllUsers, getUserById, setNewUser } from "./requests/getAllUsers";
import { userData } from "./requests/types";
import { UserInterface } from "./components/UserInterface";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Onboarding from "./pages/onboarding";
import Footer from "./components/Footer";

const App = () => {
  const [users, setUsers] = useState<userData[]>([]);
  const [users, setUsers] = useState<userData[]>([]);

  // ***PURELY FOR EXAMPLE***
  useEffect(() => {
    // open browser console to see result
    const getUsers = async () => {
      const response = await getAllUsers();
  // ***PURELY FOR EXAMPLE***
  useEffect(() => {
    // open browser console to see result
    const getUsers = async () => {
      const response = await getAllUsers();

      if (response.success) {
        console.log(response.data as userData[]);
      } else {
        // create error notification wth Chakra
      }
    };

    getUsers();
    console.log("users", users);
  },[]);

  useEffect(() => {
    const getUser = async () => {
      const userId = "64e7ef5cc67e2ffd4fc5d286";
      const response = await getUserById(userId);
  
       if (response.success) {
        console.log(response.data);
      } else {
        console.log('no data returned');
      }
    };
    getUser();
  }, []);

 useEffect(() => {
  const registerUserData = async () => {
    const userData = {
    //add userData
  }
    const response = await setNewUser(userData)

    if(response.success) {
      console.log(response.data)
    }else{
      console.log('No data recieved')
    }
  }
  registerUserData()
 }, [])

  return (
    <Router>
      <UserInterface />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="explore" element={<h1>Explore</h1>} />
        <Route path="products" element={<h1>Products</h1>} />
        <Route path="mentors" element={<h1>Mentors</h1>} />
        <Route path="profile" element={<Profile />} />

        {/* The 404 route must always be last */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
