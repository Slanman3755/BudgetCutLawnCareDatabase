if (Meteor.isClient) {
    Template.main.events({
        'click .login': function(){
            var username = $('.username').val();
            var password = $('.password').val();
            
            if(!Meteor.loginWithPassword(username, password)) {
                $('.username-addon').attr('warning', true);
                $('.password-addon').attr('warning', true);
            }
        },
        
        'click .logout': function(){
            Meteor.logout();
        },

        'keyup .search': function(){
            Session.set('searchQuery', $('.search').val());
        }
    });
}
