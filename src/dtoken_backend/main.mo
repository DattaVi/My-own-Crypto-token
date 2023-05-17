import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";

actor Token{
  Debug.print("hello");
  Debug.print("helloo");
    var owner:Principal=Principal.fromText("l3v2p-k2zte-spfml-a26yw-2yirw-jtw42-mhb7l-rtcbs-2lgjn-vdkxw-jae");
    var tsp:Nat=1000000000;
    var symbol:Text="DATTA";

    private stable var ba: [(Principal,Nat)] = [];

    var balances=HashMap.HashMap<Principal,Nat>(1,Principal.equal,Principal.hash);
    
   if(balances.size() < 1){
   balances.put(owner,tsp);
   };

   public query func cb(who:Principal):async Nat{
    let balance:Nat=switch(balances.get(who)){
        case null 0;
        case (?result) result;
    };
    return balance;
   };

   public query func sym():async Text{
       return symbol;
   };

   public shared(msg) func pao():async Text{
     
     var amount=10000;
     if(balances.get(msg.caller)==null){
         Debug.print(debug_show(msg.caller));
         let result=await transfer(msg.caller,amount);
     //balances.put(msg.caller,amount);
     return result;
     }else{
        return "already claimed";
     };
  
   };

   public shared(msg) func transfer(to:Principal,amount:Nat):async Text{
     let fab=await cb(msg.caller);
     let tab=await cb(to);
     if(fab < amount){

        return "insufficient funds";
     }
     else{
        let nfab:Nat=fab-amount;
        balances.put(msg.caller,nfab);
        let ntab:Nat=tab+amount;
        balances.put(to,ntab);
      return "success";  
     };


   };

   system func preupgrade(){
    ba := Iter.toArray(balances.entries());
   };
   system func postupgrade(){
   balances := HashMap.fromIter<Principal,Nat>(ba.vals(),1,Principal.equal,Principal.hash);
   if(balances.size() < 1){
    balances.put(owner,tsp);
   }
   };

}