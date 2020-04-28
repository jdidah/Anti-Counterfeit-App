'use strict';

/**
 * Sample transaction
 * @param {org.example.checkit.CreateWholesaler} data
 * @transaction
 */

function createWholesaler(data){
    let namespace = 'org.example.checkit.Wholesaler';
    return getParticipantRegistry(namespace)
        .then(function(participantRegistry){
            let factory = getFactory();
            if(!(participantRegistry.exists(data.id))){
                let wholesaler = factory.newResource(namespace, 'Wholesaler', data.id);
                wholesaler.id_ = data.id;
                wholesaler.name = data.name;
                wholesaler.address = data.address;
                return participantRegistry.add(wholesaler);
            }else{ 
                console.log('Participant in exsistence');
            }
        });
}