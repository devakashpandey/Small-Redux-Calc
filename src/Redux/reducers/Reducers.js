const initState = 0;

const ChangeNumber = (state = initState, action) =>{

 switch (action.type){
      case "INCREMENT" : return state + 1;
      case "DECREMENT" : return state - 1;
      default : return state
 }
}

export default ChangeNumber;