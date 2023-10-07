import { useState } from "react"

export default function SendMSG (){
    const [ msgVal , setMsgVal] = useState("")
const sendmessage =(e:any)=>{
    e.preventDefault();
    console.log(msgVal)
    setMsgVal("")

}

    return<>
      <div className="bg-red-200  w-full py-0 shadow-lg css">
        <form onSubmit={sendmessage} action=""className="my-2">
            <input
            value={msgVal}
            onChange={(e)=>setMsgVal(e.target.value)} 
            className=" w-100 focus:outline:none bg-gray-100 rounded-r-none" type="text" />
            <button
             type="submit"
               className="w-auto bg-teal-500 text-black
            rounded-r-lg px-5 text-sm">send</button>
        </form>
      </div>
    </>
}