if (Meteor.isClient) {
  Meteor.startup(function () {
    var lang = window.navigator.userLanguage || window.navigator.language;
    lang = lang.toLowerCase();
    T9n.setLanguage(lang);
  });
}

if (Meteor.isServer) {
  ServiceConfiguration.configurations.remove({
    service: 'google'
  });
  ServiceConfiguration.configurations.upsert(
    {service: "google"},
    {
      $set: {
        clientId: "349190872149-mlpfmnj4ndiol21hjqa3da8istd3tvub.apps.googleusercontent.com",
        loginStyle: "popup",
        secret: "XesxNYdtDD3AankZdonqjkBD"
      }
    }
  );
}
