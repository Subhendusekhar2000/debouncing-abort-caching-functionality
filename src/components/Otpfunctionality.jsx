import  {React,useEffect,useRef,useState } from "react";


const Otpfunctionality=({otplength=6})=>{
 const[otpfield,setOtpfield]=useState(new Array(otplength).fill(""));
 const myref=useRef([]);

 useEffect(()=>{
    myref.current[0].focus();
 },[])
//  console.log(myref)
//  console.log(otpfield);

const otpHandler=(e,index)=>{
    let Key=e.key;
    const copyotp=[...otpfield];
 if(Key==="Backspace"){
    // console.log("djjedj");
    copyotp[index]=""
    setOtpfield(copyotp);
    if(index>0){
        myref.current[index-1].focus();
    }    
    return
 }
    if(isNaN(Key)){
        return;
    }
// console.log(Key,index);
// console.log(copyotp);
copyotp[index]=Key
if(index+1<otpfield.length){
    myref.current[index+1].focus();
}

setOtpfield(copyotp)

}
    return(
        <div>
        <h1 className="text-center mt-[20px] text-3xl">Otp functionality</h1>
           <div className="flex flex-row justify-center mt-[40px] ">
            {otpfield.map((item,index)=>{
                  return(<input type="text" key={index} value={item} id="first_name" className="bg-gray-50 w-[40px] h-[40px] mr-[10px] border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onKeyDown={(e)=>{otpHandler(e,index)}} 
                  ref={(currentinput)=>myref.current[index]=currentinput}/>)
            })}
           
          
           </div>
        </div>
    )
}
export default Otpfunctionality;