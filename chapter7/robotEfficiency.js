const { findRoute, roadGraph } = require('./helpersFromChapter7');

// count length of route, routes without a pickup are weighed
const routeCounter = ({ route, packagePickup }) => {
  return route.length + (packagePickup ? 0 : 2);
};

const efficientRobot = ({place, parcels}, route) => {
  // console.log('initial route: ', route);
  // console.log('place: ', place, 'parcels: ', parcels);
  if (route.length == 0) {
    // create route for each parcel
    const routes = parcels.map(parcel => {
      if (parcel.place != place) {
        const result = {
          route: findRoute(roadGraph, place, parcel.place),
          packagePickup: true
        };
        // console.log('parcel: ', parcel, 'result: ', result)
        return result;
      } else {
        const result = {
          route: findRoute(roadGraph, place, parcel.address),
          packagePickup: false
        };
        // console.log('parcel: ', parcel, 'result: ', result)
        return result;
      }
    });
   
   // return route with smallest count, routes without pickup are weighed
   route = routes.reduce((route1, route2) => routeCounter(route1) < routeCounter(route2) ? route1 : route2).route;
   // console.log('routes: ', routes, 'chosen route: ', route);
  }

  return {direction: route[0], memory: route.slice(1)};
}

module.exports = efficientRobot;
