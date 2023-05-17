import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";

const init = async () => { 
  ReactDOM.render(<App />, document.getElementById("root"));
  // const authClient=await AuthClient.create();
  // if(await authClient.isAuthenticated()){
  //   handleA(authClient);
  // }else{
  //   await authClient.login({
  //     identityProvider:"https://identity.ic0.app/#authorize",
  //     onSuccess:()=>{
  //       handleA(authClient);
  //     }
  //   })
  // }
}

// async function handleA(authClient){
//   ReactDOM.render(<App/>,document.getElementById("root"));
// }

init();


