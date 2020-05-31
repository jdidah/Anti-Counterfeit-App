export const users = [
  {id: 1, name: 'Haron Ongaki', email: 'ongakiharon@gmail.com', user_type: 'Super Admin'},
  {id: 2, name: 'John Doe', email: 'doe@gmail.com', user_type: 'Super Admin'},
  {id: 3, name: 'Timo Chinese', email: 'chinese@gmail.com', user_type: 'Super Admin'},
  {id: 3, name: 'Timo Chinese', email: 'chinese@gmail.com', user_type: 'Super Admin'},
  {id: 3, name: 'Timo Chinese', email: 'chinese@gmail.com', user_type: 'Super Admin'},
];

export const stakeholders = [
  {id: 1, name: 'Brookside', type: 1, description: 'description'},
  {id: 2, name: 'Tuskys', type: 2, description: 'description'},
  {id: 3, name: 'Alloyed milk', type: 3, description: 'description'},
];

export const stakeholder_types = [
  {id: 1, name: 'Manufacture', code: 'manufacture'},
  {id: 2, name: 'Retailer', code: 'retailer'},
  {id: 3, name: 'Distributor', code: 'distributor'},
];

export const assets = [
  {id: 1, name: 'Daima Milk', asset_no: 'DM4344544R', size: '500ml', manufacturer: 1, expiry: '2019-12-31', created_on: '2019-08-10'},
  {id: 2, name: 'Brookside Milk', asset_no: 'B4344544R', size: '500ml', manufacturer: 1, expiry: '2019-12-31', created_on: '2019-08-10'},
  {id: 3, name: 'Brookside Milk', asset_no: 'B4365544R', size: '500ml', manufacturer: 1, expiry: '2019-12-31', created_on: '2019-08-10'},
  {id: 4, name: 'Daima Milk', asset_no: 'DM43656544R', size: '500ml', manufacturer: 1, expiry: '2019-12-31', created_on: '2019-08-10'},
  {id: 5, name: 'Daima Milk', asset_no: 'DM43476444R', size: '500ml', manufacturer: 1, expiry: '2019-12-31', created_on: '2019-08-10'},
];

export const ledger = [
  {id: 1, asset: 'Brookside Milk', asset_no: 'DM4344544R', current_owner: 'Brookside', previous_owner: ''},
  {id: 2, asset: 'Brookside Milk', asset_no: 'B4344544R', current_owner: 'Brookside', previous_owner: 'Brookside'},
  {id: 3, asset: 'Daima Milk', asset_no: 'B4365544R', current_owner: 'Alloyed Milk', previous_owner: 'Daima'},
  {id: 4, asset: 'Brookside Milk', asset_no: 'DM43656544R', current_owner: 'Alloyed Milk', previous_owner: 'Brookside'},
  {id: 4, asset: 'Daima Milk', asset_no: 'DM43476444R', current_owner: 'Tuskys', previous_owner: 'Alloyed Milk'},
];
