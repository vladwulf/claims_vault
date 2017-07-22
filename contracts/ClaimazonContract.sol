pragma solidity ^0.4.12;


contract ClaimazonContract {
    
    
    struct Claim {
        uint policy_id;
        uint claim_id;
        uint claim;
        string peril_type;
        string name;
        string loss_date;
        
    }
    
    
    struct Policy {
        uint id;
        uint agreed_claim;
        uint max_limit;
        uint premium;
        string start;
        string end;
        string policy_type;
        string status;
        bool isLive;
        
        mapping (uint => Claim) claimsAt;
        uint claimsCounter;
    }
    mapping (uint => Policy) policyAt;
    
    
    /*
        CREATION OF POLICY 
    */
    
    function proposePolicy(uint _id, string _start, string _end, string _type) {
        // Insured proposes a policy
        Policy policy = policyAt[_id];
        policy.id = _id;
        policy.start = _start;
        policy.end = _end;
        policy.policy_type = _type;
    }
    
    function proposePrice(uint _id, uint price) {
        // Insurer proposes a price after a policy has been submitted
        Policy policy = policyAt[_id];
        policy.max_price = price;
    }
    
    function acceptPolicy(uint _id) {
        // Insured accepts the price proposed by the Insurer => Policy effective !
        Policy policy = policyAt[_id];
        policy.isLive = true;
    }
    
    /*
        CLAIM OF POLICY 
    */
    
    
    
    /*
        ACTIONS ON POLICY 
    */
    
    // function actionOnPolicy(uint _id, )
    
    
    
    
    
    
    function getPolicy(uint _id) constant returns(uint, uint, uint, uint, 
        string, string, string, string, bool){
        Policy policy = policyAt[_id];
        return (
            policy.id,
            policy.claimed_price,
            policy.real_price,
            policy.max_price,
            policy.start,
            policy.end,
            policy.policy_type,
            policy.status,
            policy.isLive
        );
    }
}