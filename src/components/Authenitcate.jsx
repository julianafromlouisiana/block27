
import { useState } from "react";



export default function Authenticate({ token }) {
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);
    const handleClick = async () => {
        try{
            const res = await fetch(
                "https://fsa=jwt-practice.herokuapp.com/authenticate",
            { 
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        );
            const json = await res.json();
            console.log(json);
            if(json.success) {
                setSuccessMessage(json.message)
            }
        } catch(err) {
            console.log(err);
            setError(err.message);

        }
    }
    
    
    return (
        <div>
          <h2>Authenticate</h2>
          {successMessage && <p>{successMessage}</p>}
          {error && <p>{error}</p>}
          <button onClick={handleClick}>Authenticate Token!</button>
        </div>
      );
    }

    