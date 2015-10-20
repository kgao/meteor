if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.helloClient.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.helloClient.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log('Kev: your first meteor app is running now!')
  });

  // ReferenceError: Template is not defined on server
  //
  //Template.helloServer.helpers({
  //   counter: function () {
  //     return Session.get('counter');
  //   }
  // });
  //
  // Template.helloServer.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
  // });

}
