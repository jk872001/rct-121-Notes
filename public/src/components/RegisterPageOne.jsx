import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";




export const RegisterPageOne = () => {

    const { handleAuth,isAuth }= useContext(AuthContext);

const navigate = useNavigate();


    return (
    <div>
    <h1>Register Page</h1>
    <input type="text" placeholder="username"  required={"true"}/ >
    <input type="text" placeholder="password" />
    <button
onClick={() => {
// make network req POST req.in/api/login with email and pass
// token
// change state of isAuth. to true.
handleAuth(true);
// imperative.

}}>
Submit
</button>
<div>

   {isAuth?<button onClick={()=>{navigate("/registerpagetwo")}}>Next</button>:null}
   </div>
    </div>
    );
    };
    