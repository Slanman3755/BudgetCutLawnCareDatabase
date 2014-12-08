Properties = new Meteor.Collection('properties'); 

if (Meteor.isClient) {
    
    Router.onRun(function() {
        Session.set('searchQuery', "");
    });
}
