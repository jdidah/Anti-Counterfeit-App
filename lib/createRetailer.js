'use strict';

/**
 * Sample transaction
 * @param {org.example.checkit.CreateRetailer} data
 * @transaction
 */

function createRetailer(data){
    let namespace = 'org.example.checkit.Retailer';
    return getParticipantRegistry(namespace)
        .then(function(participantRegistry){
            let factory = getFactory();
            if(!(participantRegistry.exists(data.id))){
                let retailer = factory.newResource(namespace, 'Retailer', data.id);
                retailer.id_ = data.id;
                retailer.name = data.name;
                reatiler.address = data.address;
                return participantRegistry.add(retailer);
            }else{ 
                console.log('Participant in exsistence');
            }
        });
}