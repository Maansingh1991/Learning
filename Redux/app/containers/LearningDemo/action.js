import {takeEvery,put,takeLatest} from "redux-saga/effects";

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
  


  export function* demoAPICallWithSage(data){
    debugger;
    yield put( {
      type : "API_DEMO_SUCCESS",
      payload:data
    })
  }