import NavBar from "../components/Navbar";
import SendMSG from "../components/SendMSG";
import ChatBox from "../components/chatBox";

export default function ChatApp (){

    return(
        <>
         <NavBar/>
         <ChatBox/>
         <SendMSG/>
        </>
    )
}