import { useState } from "react";

export default function SignUpForm({setToken}) {
    const [username, setUsername] =useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmitForm = async (e) => {
        try{
            e.preventDefault();
            const res = await fetch("https://fsa=jwt-practice.herokuapp.com/signup", {
                method: "POST",
                body: JSON.stringify({username, password})
            })
            console.log(res);
            const json = await res.json();
            console.log(json);
            setToken(json.token);
        } catch (err) {

        }
    }
    
    return (
    <>
    <h2>Sign Up!</h2>;
    <form>
        <label> 
            Username: {" "}
             <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            </label>
            <label>
                Password:
                <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />
            </label>
            <button>Submit</button>
    </form>
    </>
    );
}