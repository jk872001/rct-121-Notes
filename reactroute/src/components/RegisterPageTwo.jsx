import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";




export const RegisterPageTwo = () => {

    const { handleAuth,isAuth }= useContext(AuthContext);

const navigate = useNavigate();


    return (
    <div>
     <h1>Register Page Two</h1>
    <input type="text" placeholder="address" />{" "}
    <input type="text" placeholder="phone number" />
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
{<button style={{display:"block"}} onClick={()=>{navigate("/login")}}>Prev</button>}
   {isAuth?<button onClick={()=>{navigate("/dashboard")}}>Next</button>:null}
    </div>
    );
    };
    