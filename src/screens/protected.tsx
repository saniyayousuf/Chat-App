import { useEffect, useState } from "react"
import react from '../Assets/react.svg'
import { useNavigate } from "react-router-dom";
import '../App.css'
import { FbAuth } from "../config/Firebase/firebasemethods"




export default function Protected(props: any) {

    const { Screen } = props
    const [loader, setloader] = useState<any>(true)
    const navigate = useNavigate()
    
    let checkAuth = () => {
        setloader(true)
        FbAuth().then(res => {
            setloader(false)
        }).catch(err => {
            setloader(true)
            navigate("/login")
        })

    }
    useEffect(() => {
        checkAuth()
    }, [])

    return loader ? <>
        <div >
            <img src={react} height={100} width={100} />
        </div>
    </>

        : <Screen />
}