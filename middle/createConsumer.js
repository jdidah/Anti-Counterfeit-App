'use strict';

const namespace = 'org.example.checkit';
const transactionType = 'CreateConsumer';

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
    var id_ = '1';
    let cash = 20000;
    let name = 'Asd Klj';
    let transaction = factory.newTransaction(namespace,transactionType,id_);
    transaction.setPropertyValue('name', name);
    transaction.setPropertyValue('id_', id_);
    transaction.setPropertyValue('cash', cash);
    return bnUtil.connection.submitTransaction(transaction).then(()=>{
        console.log("6. Transaction Submitted/Processed Successfully!!")
        bnUtil.disconnect();
    }).catch((error)=>{
        console.log(error);
        bnUtil.disconnect();
    });
}