import React from "react";
import {Principal}  from '@dfinity/principal';
import {dtoken_backend} from '../../../declarations/dtoken_backend';

function Balance() {
  const [iv,siv]=React.useState("");  
  const [br,sbr]=React.useState("");
  const [s,ss]=React.useState("");
  const [h,sh]=React.useState(true);

  async function handleClick() {
    console.log(iv);
    const p=Principal.fromText(iv);
   const b= await dtoken_backend.cb(p);
   sbr(b.toLocaleString());
   const sy=await dtoken_backend.sym();
   ss(sy.toLocaleString());
   sh(false);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={iv}
          onChange={(e)=>siv(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={h}>This account has a balance of {br }{s}.</p>
    </div>
  );
}

export default Balance;
