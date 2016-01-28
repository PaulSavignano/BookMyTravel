Router.configure({
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});
Router.onBeforeAction('loading');


Router.route("/", {
  name: "home",
  layoutTemplate: "homeLayout",
  template: "home",
  yieldRegions: {
    travelSearch: {to: "search"}
  }
});

Router.route("/createtravel", {
  name: "createTravel",
  layoutTemplate: "createTravelLayout",
  template: "createTravel",
  yieldRegions: {
    travelSearch: {to: "search"}
  }
});
