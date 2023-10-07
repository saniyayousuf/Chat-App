import React, { useState } from 'react';
import { TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "../App.css";
import { fbSignup } from "../config/Firebase/firebasemethods";



export default function Signup() {

    const navigate = useNavigate();
    const [model, setModel] = useState<any>({});


    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    };

    const signUpUser = () => {
        console.log(model);
        fbSignup(model)
            .then((res) => {
                navigate("/login");
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        < >
            <div>
                <div className="py-2">
                    <TextField
                        value={model.userName}
                        onChange={(e: any) => fillModel("userName", e.target.value)}
                        label="User Name" />

                </div>
                <div className="py-2">
                    <TextField
                        value={model.email}
                        onChange={(e: any) => fillModel("email", e.target.value)}
                        label="Email" />

                </div>
                <div className="py-2">
                    <TextField
                        value={model.password}
                        onChange={(e: any) => fillModel("password", e.target.value)}
                        label="Password"
                    />

                </div>
                <div className="py-2">
                    <Button onClick={signUpUser} >Sign Up</Button>

                </div>
            </div>
        </>
    )
}