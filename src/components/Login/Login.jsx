import React ,{useContext, useState} from "react";
import { appCxt } from "../../appContext/appContext";

const Login =()=> {
    const {state,dispatch}  =  useContext(appCxt);
    const [data,setData]=useState({
        name:'',
        password:''
    });
    const handleChange=(event)=>{
        const {id,value}=event.target;
       // console.log(value);
        setData((prev)=>(
            {
                ...prev,
                [id]:value
            }
        ))
        // setData(
        //     {
        //         ...data,
        //         [id]:value
        //     });

    }

    const handleLogin = async () =>{
        
        const {name,password} = data;
        if(!name || !password){
            alert("Please enter User Name and Password");
            return

        }
        try {

            //setLoading(true);

            const response = await fetch(
                "https://dummyjson.com/auth/users",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name:data.username,
                        password:data.password
                    })
                }
            );

            const result = await response.json();
            console.log(result)

            if (!response.ok) {
                throw new Error(result.message);
            }

            console.log("API Response:", result);

            // Login successful
            dispatch({
                type: "Login",
                payload: true
            });

            alert("Login successful");

        } catch (error) {

            console.error(error);

            alert(error.message || "Login failed");

        } finally {

            //setLoading(false);
        }

       //alert(JSON.stringify(data)) 
        //or
        // alert(
        //     `use name :${data.name} \n password : ${data.password}`
        // )
        //console.log(data);
    }
    return <>
    <div>
        <h1 className="text-lg font-bold text-center">Login</h1>
        <div className="text-center">
            <div className="mb-2.5">
                <input type="text" id="name" className="p-2 border border-solid rounded-sm text-sm" placeholder="Enter Name" onChange={(eve)=>handleChange(eve)}/>
            </div>
            <div className="mb-2.5">
                 <input type="password" id="password" className="p-2 border border-solid rounded-sm text-sm" placeholder="Enter Password" onChange={(eve)=>handleChange(eve)}/>

            </div>
            <div>
                <button className="bg-blue-600 text-white p-2 rounded-sm text-sm cursor-pointer" onClick={()=>handleLogin()}>Login</button>
            </div>
        </div>
        
    </div>
    </>

}
export default Login