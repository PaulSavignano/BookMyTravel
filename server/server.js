Meteor.startup(function() {
  smtp = {
    username: 'paul.savignano@gmail.com',
    password: 'pepper911',
    server: 'mail.gmail.com',
    port: 22
  }
  process.env.MAIL_URL = 'smtp://' +
  encodeURIComponent(smtp.username) + ':' +
  encodeURIComponent(smtp.password) + '@' +
  encodeURIComponent(smtp.server) + ':' + smtp.port;
});

Meteor.startup(function() {
  Accounts.emailTemplates.from = 'Email Support <support@bookMyTravel.com';
  Accounts.emailTemplates.siteName = "Book My Travel";
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address';
  };
  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return 'click on the following link to verify your email address: ' + url;
  };
});
