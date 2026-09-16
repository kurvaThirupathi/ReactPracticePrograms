import React, { useEffect, useRef, useState } from "react";
const Captcha=()=>{
    const [captcha,setCaptcha]=useState();
    const [data,setData]=useState();
    // qr code data start here
    //     const qrValue = useRef(null);
    //     const fnQrCode=()=>{
    //             const qrView= document.getElementById('qrcode');
    //    qrView.innerHTML='';
    //    const qrCodeView= new QRCode(qrView,{
    //     text:qrValue.current.value,
    //     width:128,
    //     height:128
    //    })
    //     }
       
    // qr code data end here
    
    const fnGenerateCaptcha=()=>{
            let char='';
            const randomChar="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for(let i=1;i<=5;i++){
                char +=randomChar.charAt(Math.random()*randomChar.length)
                    setCaptcha(char)
            }
    }
    useEffect(()=>{
            fnGenerateCaptcha();
    },[])
    const fnValidate=()=>{
            if(data===captcha){
                alert("valid data")
            }
            else{
                alert("invalid data")
            }
    }
    return(
        <>
        <div>
            <div className="mb-2.5">
                <div className="flex gap-2 items-center">
                    <span className="border border-solid border-gray-300 rounded-sm p-2 line-through">{captcha}</span>
                    <button className="btn bg-blue-700 text-white rounded-sm px-2 py-1 text-sm" onClick={fnGenerateCaptcha}>Refresh</button>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="text-sm">Enter Captcha</span>
                    <input type="text" className="p-2 text-sm border border-solid rounded-sm"  onChange={(e)=>{setData(e.target.value)}}/>
                    <button className="btn bg-blue-700 text-white rounded-sm px-2 py-1 text-sm" onClick={fnValidate}>Validate</button>
                </div>
            </div>
            {/* <div>
                <h4 className="text-md font-medium">QR Code</h4>
                <textarea row={4} ref={qrValue}  className="border border-solid rounded-sm p-2 resize-none" />
                <button className="btn bg-blue-700 text-white rounded-sm px-2 py-1 text-sm" onClick={fnQrCode}>Generate QRCode</button>
                <span id="qrcode" />
            </div> */}
        </div>
        </>
    )
}
export default Captcha