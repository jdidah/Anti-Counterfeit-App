'use strict';

/**
 * Sample transaction
 * @param {org.example.checkit.ManufacturePhone} data
 * @transaction
 */

function manufacturePhone(data){
    let namespace = 'org.example.checkit.Phone';
    return getAssetRegistry(namespace)
        .then(function(assetRegistry){
            let factory = getFactory();
            let manu = factory.newRelationship(namespace, 'Manufacturer', data.manufacturer);
            if(!(assetRegistry.exists(data.id))){
                let phone = factory.newResource(namespace, 'Phone', data.id);
                phone.serial = data.serial;
                phone.cashValue = data.value;
                phone.oldOwner = manu;
                return assetRegistry.add(phone);
            }else{ }
        });
}