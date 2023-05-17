import React from "react";
import { dtoken_backend } from "../../../declarations/dtoken_backend";
function Faucet() {
    const [bc,sbc]=React.useState("gimme gimme");
    const [a,sa]=React.useState(false);
  async function handleClick(event) {
    const f= await dtoken_backend.pao();
     sbc(f);
     sa(true);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={a}>
          {bc}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
