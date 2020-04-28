'use strict';

/**
 * Sample transaction
 * @param {org.example.checkit.CreateManufacturer} data
 * @transaction
 */

//Transfer transaction
function transfer(data){
    let namespace = 'org.example.checkit.Phone';
    return getAssetRegistry(namespace)
        .then(function(assetRegistry){
            // let factory = getFactory();
            // let manufacturer = getParticipantRegistry('org.example.checkit.Manufacturer');
            // let wholesaler = getParticipantRegistry('org.example.checkit.Wholesaler');
            // let retailer = getParticipantRegistry('org.example.checkit.Retailer');
            // let dist = dist_parts.get(input_data.distributor);
            // let manu = manu_parts.get(input_data.manufacturer);
            // if(assetRegistry.exists(order_id)){
            //     dist.cashInAccount -= input_data.value;
            //     manu.cashInAccount += input_data.value;
            //     dist_parts.update(dist);
            //     manu_parts.update(manu);
            // }else{
            //     console.log('Denied');
            // }
            return assetRegistry.get(data.id);
        })
        .then(function(phone){
            phone.oldOwner.cash += phone.cashValue;
            phone.newOwner.cash -= phone.cashValue;
            phone.update(phone);
        });
}
