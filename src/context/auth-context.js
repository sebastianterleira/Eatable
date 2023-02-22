import { createContext, useContext, useEffect, useState } from "react";
import { createUser, getUser } from "../services/user-services";
import * as auth from "../services/auth-services";
import axios from "axios";

const AuthContext = createContext();


function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(null)

  const getProductsUser = async()=> {
		await axios.get("https://react-eatable-api.herokuapp.com/products/")
		.then(response=>{
			setProducts(response.data);
		}).catch(error=>{
			console.log(error);
		})
	}
	
	useEffect(() => {
		getProductsUser();
	}, [])

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);
  
  function login(credentials) {
    auth.login(credentials).then(setUser).catch(console.log);
  }

  function logout() {
    auth.logout().then(() => setUser(null));
  }

  function signup(userData) {
    createUser(userData).then(setUser).catch(console.log);
  }

  const value = {
    products,
    user,
    setUser,
    login,
    logout,
    signup,
    setProducts,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
