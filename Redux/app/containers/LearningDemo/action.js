export function printText(data) {
    console.log("Action is being fired");
    return {
      type: "PRINT_TEXT",
      data: data,
    };
  }




  export function demoApiCall(data){
    console.info("API_DEMO_SUCCESS");
    return {
      type : "API_DEMO_SUCCESS",
      payload:data
    }
  }
  