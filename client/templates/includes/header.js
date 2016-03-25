Template.header.helpers({
  pageTitle: function () {
    Session.set('pageTitle', 'Links');
    return Session.get('pageTitle');
  }
});
