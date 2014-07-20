Properties = new Meteor.Collection('properties'); 
//key info: id, customer name, address, schedule(contract length, frequency), area, gate size, service fee, fee deadline, estimated completion time, pictures, thumbnail, commerical/residentia;
//summer and winter
//employee comments
//customer comments
//search by id, name, address

if (Meteor.isServer) {
    Meteor.startup(function () {
    
    });
}
