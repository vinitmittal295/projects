exports.generateOTP =()=>{ 
    return Math.floor((Math.random()*10000))
} 

exports.expireOtp=()=>{
   const new1= Date.now()+10*60*1000
   return new1

}