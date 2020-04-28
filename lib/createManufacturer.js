'use strict';

/**
 * Sample transaction
 * @param {org.example.checkit.CreateManufacturer} data
 * @transaction
 */

function createManufacturer(data){
    let namespace = 'org.example.checkit.Manufacturer';
    return getParticipantRegistry(namespace)
        .then(function(participantRegistry){
            let factory = getFactory();
            if(!(participantRegistry.exists(data.id))){
                let manufacturer = factory.newResource(namespace, 'Manufacturer', data.id);
                manufacturer.id_ = data.id;
                manufacturer.name = data.name;
                manufacturer.address = data.address;
                return participantRegistry.add(manufacturer);
            }else{ 
                console.log('Participant in exsistence');
            }
        });
}