import React,{useState} from "react"

const ModalView = (props) =>{
    const {text,fnClose}=props;
    return (
        <>
        <div className="fixed inset-0 bg-gray-900 opacity-50" onClick={()=>fnClose()}></div>
        <div className="px-3 py-2 fixed inset-0 m-auto w-1/4 h-1/4 bg-white rounded-lg">
            <div className="mb-5">{text}</div>
            <div className="flex justify-end">
                <button className="bg-gray-900 px-2 py-1.5 rounded-lg text-white cursor-pointer" onClick={()=>fnClose()}>Close</button>
            </div>

        </div>
        </>
        
    )

}

const Modal = ()=>{
    const [showModal, setShowModal] = useState(false);
    const [text, setText]= useState('');
    const fnClose = () =>{
        setShowModal(false);
    }

    const modalShow = () =>{
            setShowModal(true);
            setText("Hai This is Modal view");
            //alert("hai")
    }
    return (
        <div>
            <div className="mt-4 m-auto flex justify-center items-center">
                <button className="bg-blue-600 text-white text-sm font-medium p-2 rounded-lg cursor-pointer" onClick={()=>modalShow()}>Show Modal</button>
            </div>
            {showModal && <ModalView   text={text} fnClose={fnClose}/>}
        </div>
    )
}

export default Modal