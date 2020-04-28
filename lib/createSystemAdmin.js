'use strict';

/**
 * Sample transaction
 * @param {org.example.checkit.CreateSystemAdmin} data
 * @transaction
 */

function createSystemAdmin(data){
    let namespace = 'org.example.checkit.SystemAdmin';
    return getParticipantRegistry(namespace)
        .then(function(participantRegistry){
            let factory = getFactory();
            if(!(participantRegistry.exists(data.name))){
                let systemAdmin = factory.newResource(namespace, 'SystemAdmin', data.name);
                systemAdmin.name = data.name;
                return participantRegistry.add(systemAdmin);
            }else{ 
                console.log('Participant in exsistence');
            }
        });
}