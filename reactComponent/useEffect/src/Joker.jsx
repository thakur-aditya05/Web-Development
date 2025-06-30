// useEffcet some basic example 
// that loader 

// asynch function 






import { useEffect } from "react";
import {useState} from "react";

export default function Joker(){
    
    let [joke,setJoke] = useState({});
    
    const url = 'https://official-joke-api.appspot.com/jokes/random' 

    const getNewJoke=async()=>{
        let response= await fetch(url);  // data is fetched  of non readable format 
        let jsonResponse = await response.json();  // 
        

        // for of every time jsonResponse value  will change hence not need to have 

        setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline});

    }

    // mam's way of writting 
    // useEffect(() => {
    // async function getFirstJoke() {
    //     let response = await fetch(URL);
    //     let jsonResponse = await response.json();
    //     console.log(jsonResponse);
    //     setJoke({ 
    //     setup: jsonResponse.setup, 
    //     punchline: jsonResponse.punchline 
    //     });
    // }

    // getFirstJoke();
    // }, []);


    useEffect(function joke(){
        getNewJoke();
    },[])







    return (
        <>
            <div>
                <h1>Joke!</h1>
                <h4>Set-up:</h4>
                <p>{joke.setup}</p>

                <h4>punchLine:</h4>
                <p>{joke.punchline}</p>

                <button onClick={getNewJoke} >New Joke!</button>


            </div>
        </>
    )




}