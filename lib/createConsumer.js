'use strict';

/**
 * Sample transaction
 * @param {org.example.checkit.CreateConsumer} data
 * @transaction
 */

function createConsumer(data){
    let namespace = 'org.example.checkit.Consumer';
    return getParticipantRegistry(namespace)
        .then(function(participantRegistry){
            let factory = getFactory();
            if(!(participantRegistry.exists(data.name))){
                let consumer = factory.newResource(namespace, 'Consumer', data.name);
                consumer.name = data.name;
                return participantRegistry.add(consumer);
            }else{ 
                console.log('Participant in exsistence');
            }
        });
}