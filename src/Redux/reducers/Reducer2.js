const initState = 4;

const ChangeNewNumber = (state = initState, action) =>{

 switch (action.type){
      case "DIVISION" : return state / 2;
      case "MULTIPLICATION" : return state * 4;
      default : return state
 }
}

export default ChangeNewNumber;