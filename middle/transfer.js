'use strict';

const namespace = 'org.example.checkit';
const transactionType = 'Transfer';

// 1. Connect to network
const bnUtil = require('./bn-connection-util');
bnUtil.connect(main);

function main(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    let bnDef =  bnUtil.connection.getBusinessNetwork();
    console.log("2. Received Definition from Runtime: ",
                   bnDef.getName(),"  ",bnDef.getVersion());
    let factory = bnDef.getFactory();
    let id = '';
    let phone_id = '';

    let pone = factory.newRelationship(namespace, 'Phone', phone_id);

    let transaction = factory.newTransaction(namespace,transactionType,id);
    transaction.setPropertyValue('phone_id', phone_id);
    return bnUtil.connection.submitTransaction(transaction).then(()=>{
        console.log("6. Transaction Submitted/Processed Successfully!!")
        bnUtil.disconnect();
    }).catch((error)=>{
        console.log(error);
        bnUtil.disconnect();
    });
}