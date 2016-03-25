Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function () {
    return Meteor.subscribe('allPosts');
  }
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function () {
    var postId = this.params._id;
    return Posts.findOne({_id: postId});
  }
});

Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function () {
  if (!Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
};

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
