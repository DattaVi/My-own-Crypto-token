import React from "react";
import { dtoken_backend } from "../../../declarations/dtoken_backend/";
import {Principal}  from '@dfinity/principal';

function Transfer() {
  const [tac,stac]=React.useState("");
  const [tam,stam]=React.useState("");
  const [h,sh]=React.useState(false);
  const [pv,spv]=React.useState("");
  const [ph,sph]=React.useState(true);
  
  async function handleClick() {
    let ctac=Principal.fromText(tac);
    let ctam=Number(tam);
   const v= await dtoken_backend.transfer(ctac,ctam);
   spv(v);
    sh(true);
    sph(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={tac}
                onChange={(e)=>stac(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
              type="number"
                id="amount"
                value={tam}
                onChange={(e)=>stam(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={h} >
            Transfer
          </button>
        </p>
        <p hidden={ph}>{pv}</p>
      </div>
    </div>
  );
}

export default Transfer;
