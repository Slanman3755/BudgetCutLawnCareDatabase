if (Meteor.isClient) {
    Handlebars.registerHelper('propertyResults', function(){
        return Properties.find( { address: {$regex: Session.get('searchQuery'), $options: 'i' } }, {sort: {name: 1}});
    });
}
