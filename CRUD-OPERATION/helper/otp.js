exports.generateOTP =()=>{ 
    return Math.floor((Math.random()*10000))
} 
// console.log(generateOTP());

exports.expireOtp=()=>{
   const new1= Date.now()+10*60*1000
   return new1

}
// console.log(expireOtp())

const moment =require("moment")
const vinit=moment().format();
console.log(vinit)