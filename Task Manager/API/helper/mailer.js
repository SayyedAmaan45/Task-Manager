let {transport}=require("../init/mailConfig");

async function sendMail(params){
    if(typeof(params.to) !="string" || typeof(params.from)!="string"){
        return {error:"Please Provide to & From of mail as String "}
    }
    let send=await transport.sendMail(params).catch((error)=>{
        return {error}
    })
    if(!send || (send && send.error)){
        return {error:"Internal Server Error"}
    }
    return {data:send}
}

module.exports={sendMail}
