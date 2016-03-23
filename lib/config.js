if (Meteor.isClient) {
  Meteor.startup(function () {
    var lang = window.navigator.userLanguage || window.navigator.language;
    lang = lang.toLowerCase();
    T9n.setLanguage(lang);
  });
}
