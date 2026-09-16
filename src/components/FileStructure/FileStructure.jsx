import React ,{useState} from "react"
import json from "../../data.json"

const List =(props)=>{
    const {list,isFolder,addFile,deleteFile}=props;
    const [isExpand, setExpand]=useState({})
    return(
        <div className="p-1 pl-3">
            {
                list.map((node) => {
                    return (
                        <div key={node.id}>
                            <div className="flex gap-2">
                                    {
                                        node?.isFolder && 
                                            <span className="cursor-pointer text-sm font-medium " onClick={()=>setExpand((prev)=>
                                                {
                                                return { ...prev, [node.name]: !prev[node.name]}
                                                //return !prev
                                                })}>
                                                {isExpand?.[node.name]?"-":"+"}
                                            </span>
                                    } 
                                    {node.name} 
                                {
                                    node?.isFolder && <img src="https://cdn-icons-png.flaticon.com/512/4732/4732392.png" alt="add file" className="w-7 h-7 cursor-pointer" onClick={()=>addFile(node.id)} />
                                }
                                {
                                    node?.isFolder && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuQQpW_xB7RvHe6st7CIoVdQ-PImPQrdYT-0RbZT1D5Kom--F82MRmORXPkHqzqNrhn2g6nx9t6P6wdHoVGPwE7uQax2l&s&ec=121585077" alt="delete file" className="w-7 h-7 cursor-pointer" onClick={()=>deleteFile(node.id)}/>
                                } 
                            </div>
                                {
                                    isExpand?.[node.name] && node?.children && 
                                        <List list={node.children} addFile={addFile} deleteFile={deleteFile} />
                                }
                        </div>
                    )
                })
            }
        </div>
    )
}
const FileStructure = () =>{
    const [data,setData] = useState(json)

    const addFile=(parentId)=>{
        const name=prompt("Enter Folder")
       // alert(parentId)
       const updateData = (list) =>{
        return list.map((node)=>{
            if(node.id === parentId){
                    return {
                        ...node, 
                        children:[
                            ...node.children,
                            {
                                id:Date.now().toString(),
                                name:name,
                                isFolder:true,
                                children:[]
                            },
                        ],
                    };
            }
            if(node.childer){
                return {
                    ...node, children:updateData(node.children)
                };
            }
            return node;

        })

       }
       setData((prev)=>{
                return updateData(prev)
       })

    }
    const deleteFile = (itemId)=>{
        
        const updateData =(list)=>{
            return list.filter((node)=>{
                return node.id !== itemId
            }).map((node)=>{
                 if(node.childer){
                return {
                    ...node, children:updateData(node.children)
                };
            }
            return node;
            })

        }

        setData((prev)=>{
            return updateData(prev)
        })

    }
    return (
        <>
        <div className="max-w-xl mx-auto mt-5">
                <div className="font-bold text-lg mb-5 text-center">File Structure / VS Sidebar</div>
                <List list={data} isFolder={false} addFile={addFile} deleteFile={deleteFile}/>
                
        </div>
        
        </>
        
    )
}
export default FileStructure