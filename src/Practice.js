import { useState, useEffect } from 'react'
import axios from 'axios'

const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogingUser = async () => {
    const user = await axios({
      method: "post",
      url: "http://localhost:8000/api/users/login",
      data: {
        email: "mel@mel.com",
        password: "melpassword"
      }
    });
    setUser(user.data.user);
    setIsLoggedIn(true);
  };
// Get Current User
  useEffect(() => {
    const fetchData = async () => {
      const user = await axios("http://localhost:8000/api/users/current");
      console.log(user);
      // setData(user)
    };
    // fetchData();
  }, []);