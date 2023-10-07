import { TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import { fbLogin } from "../config/Firebase/firebasemethods";
import NavBar from "../components/Navbar";

export default function Login() {
    const [model, setModel] = useState<any>({});

    const fillModel = (key: string, val: any) => {
        model[key] = val
        setModel({ ...model })
    }

    const LoginUser = () => {
        console.log(model)
        fbLogin(model).then((res) => {
            console.log(res)

        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
       
            <div className="main">
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
                    <Button onClick={LoginUser} >Log in</Button>

                </div>
            </div>
        </>
    )
}