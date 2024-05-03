import { useContext } from "react";
import AuthContext from "./context/auth-context.js";

function Auth() {
  //   const auth = useContext(AuthContext);
  //   console.log(auth.status);       //bu şekilde de yapabiliriz

  const { status , login } = useContext(AuthContext); //useContext kullanılarak AuthContextten status alınır
  console.log(status);
  return (
    <div>
      <h1>Giriş yaptın mı?</h1>
      {status ? <p>ohooo çoktan!</p> : <p>hayır</p>}
      <button onClick={login}>Giriş Yap</button>
    </div>
  );
}

export default Auth;
