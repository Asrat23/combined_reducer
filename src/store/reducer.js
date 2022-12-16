export const firstname=(state="",action)=>{
    switch(action.type){
        case 'addfName':
            return action.payload;
        default:
            return state    
    }

}

export const lastname=(state="",action)=>{
    switch(action.type){
        case 'addlName':
            return action.payload;
        default:
            return state    
    }

}
export const age=(state="",action)=>{
    switch(action.type){
        case 'addage':
            return action.payload;
        default:
            return state    
    }

}
export const gender=(state="",action)=>{
    switch(action.type){
        case 'addgender':
            return action.payload;
        default:
            return state    
    }

}
export const profesion=(state="",action)=>{
    switch(action.type){
        case 'addprofesion':
            return action.payload;
        default:
            return state    
    }

}