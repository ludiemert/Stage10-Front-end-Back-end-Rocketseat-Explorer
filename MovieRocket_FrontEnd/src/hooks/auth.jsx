import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }){
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
  try {
    const response = await api.post("/sessions", { email, password });
    const { client, token } = response.data;

    localStorage.setItem("@movierocket:client", JSON.stringify(client));
    localStorage.setItem("@movierocket:token", token);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({ client, token });

    } catch (error) {
      if (error) {
        alert(error.response.data.message);
      } else {
        alert("Could not enter....");
      }
    }

  };

  function signOut(){
    localStorage.removeItem("@movierocket:token");
    localStorage.removeItem("@movierocket:client");

    setData({});
  }

  async function updateProfile({ client, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/clients/avatar", fileUploadForm);
        client.avatar = response.data.avatar;
      }

      await api.put("/clients", client);
      
      localStorage.setItem("@movierocket:client",JSON.stringify(client));

      setData({ 
        client, 
        token: data.token
       });
      alert("Updated profile!!!! : ) ");


    } catch (error) {
      if (error) {
        alert(error.response.data.message);
      } else {
        alert("profile cannot be updated....");
      }
    }

  }


  useEffect(() => {
    const token = localStorage.getItem("@movierocket:token");
    const client = localStorage.getItem("@movierocket:client");

    if (token && client) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        client: JSON.parse(client)
      });
      
    }
  }, []);


   

  return (
    <AuthContext.Provider value={{
       signIn, 
       signOut,
       updateProfile,
       client: data.client,      
        }}
        >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }