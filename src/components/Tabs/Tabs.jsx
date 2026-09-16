import React,{useState} from "react"
import Profile from "../Profile/Profile"
import Interest from "../Interest/Interest"
import Settings from "../Settings/Settings"

const Tabs = () =>{
    const [activeTab, setActiveTab]=useState(0);
    const [data,setData]=useState({
        name:"Thirupathi",
        age:"20",
        email:"thirupathikurva@gmail.com",
        interest:["Css","Javascript"],
        theme:"dark"
    })
    const [errors,setErrors]=useState({})
    const TabsView= [
        {
            name:"Profile",
            component:Profile,
            validate:()=>{
                const err={}
                if(!data.name || data.length <10){
                    err.name="Name is required"
                }
                if(!data.age || data.age <18){
                    err.age="Age should be 18 0r above"
                }
                setErrors(err)
                return err.name || err.age ? false: true
            }
        },
        {
             name:"Interest",
            component:Interest,
             validate:()=>{
                return true
             }

        },
        {
             name:"Settings",
            component:Settings,
            validate:()=>{
                return true
             }

        }
    ]
    const changeTab=(ind)=>{
        setActiveTab(ind)

    }
    const previous=()=>{
         if(TabsView[activeTab].validate()){
        setActiveTab((prev)=> prev-1)
         }
    }
    const next=()=>{
        if(TabsView[activeTab].validate()){
            
            setActiveTab((prev)=> prev+1)
        }
        
    }
    const ActiveTabForm = TabsView[activeTab].component
    return (
        <div className="w-1/2 mx-auto">
        <div className="flex gap-2 mt-4 mx-auto">
            {
             TabsView.map((tabsData,ind) => {
               
               return  <div key={ind} className="border borer-solid border-gray-600 p-2 rounded-lg cursor-pointer" onClick={()=> TabsView[activeTab].validate() && changeTab(ind)}>{tabsData.name}</div>
              
             })   
            }
        </div>
        <div className="border border-solid border-gray-500 p-3 rounded-lg mt-3">
            <ActiveTabForm data={data} setData={setData} errors={errors} />
        </div>
        <div>
            {
               activeTab > 0 && activeTab < TabsView.length - 1 && <button type="button" className="border border-solid border-gray-600 px-3.5 py-1.5 mt-2 rounded-lg" onClick={previous}>Prev</button>
            }
            {
                activeTab < TabsView.length - 1 && <button className="border border-solid border-gray-600 px-3.5 py-1.5 mt-2 rounded-lg" onClick={next}>Next</button>
            }
            {
                activeTab === TabsView.length - 1 && <button className="border border-solid border-gray-600 px-3.5 py-1.5 mt-2 rounded-lg" >Submit</button>
                
            }
            
        </div>
        </div>
    )
}
export default Tabs