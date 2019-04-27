
const initialState = {
    name:'No value has been assigned',
    api_data:'Loading'
};

function LearningDemoReducer(state = initialState, action) {
    console.log("-----------LearningDemoReducer----------")
  switch (action.type) {
    case "PRINT_TEXT":
    console.log("-----------LearningDemoReducer----PRINT_TEXT------")
    return {...state,name:action.data}
    case "API_DEMO_SUCCESS":
      return {...state,api_data:JSON.stringify(action.payload)}
    
    


    default:
      return state;
  }
}

export default LearningDemoReducer;
