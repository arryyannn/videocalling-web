import  React  from "react";
import {useParams} from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";


function Room() {
    const { roomId } = useParams();

    const  myMeeting = async(element) => {
        const appID =1154770105 ;
        const serverSecret = "302df43882058420021e14a4afcfe0dc";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(  appID,
             serverSecret ,
              roomId,
              
            Date.now().toString(),"Aryan");
        
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
        container: element,
    scenario:{ mode: ZegoUIKitPrebuilt.VideoConference,},
    }); };
    return (  <div className="room"><div ref = {myMeeting}/> 
     </div>
);
}
    

export default Room