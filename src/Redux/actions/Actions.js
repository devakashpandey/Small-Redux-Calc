// HERE WE WRITE ALL THE ACTIONS WHICH IS PERFORM BY THE APP 

export const incNum = () =>{
   return{       
       type: "INCREMENT"
   }
}

export const decNum = () =>{
   return {
       type: "DECREMENT"
   }
}

export const divNum = () =>{
      return {
          type: "DIVISION"
      }
}

export const multiNum = () =>{
    return {  
        type: "MULTIPLICATION"
    }
}