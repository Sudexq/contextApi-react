import "./App.css";
import AuthContext from "./context/auth-context.js"; //authContext i app.js e çektik
import Auth from "./Auth.js";
import { useState } from "react";

function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const loginAuth = () => {
    setAuthStatus(true);
  };
  //AutContext in içersindekilere useContext() kullanarak erişebilriz 
  return (
    <AuthContext.Provider value={{ status: authStatus, login: loginAuth }}>
      <Auth />
    </AuthContext.Provider> //<AuthContext.Provider> kullanımının ana amacı, AuthContext i tüm uygulama componentlerine iletmektir. 
    //status e authStus ü atadık ve onun değişimine göre butona basıldığında gelecek değerin değişmesi sağlandı
  );
}

export default App;
