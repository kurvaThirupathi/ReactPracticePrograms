export const reducer=(state,acton)=>{
    switch(isAction.type){
        case "Login":
            return{
                ...state,
                isLoggedIn:action.payload
            }
        default:
            return state
    }

}