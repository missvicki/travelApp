const dummydata = require("../utils/dummy_data");
const Travel = require("../models/travel");

("use strict");
const TravelService = {
  fetchAllTravels() {
    const validdata = dummydata.travels.map(travel => {
      const newTravel = new Travel();
      newTravel.id = travel.id;
      newTravel.name = travel.name;
      newTravel.cost = travel.cost;
      newTravel.bus = travel.bus;
      newTravel.date = travel.date;

      return newTravel;
    });
    return validdata;
  },
  addnewTravel(travel) {
    const travelLength = dummydata.travels.length;
    const lastid = dummydata.travels[travelLength - 1].id;
    const newId = lastid + 1;

    travel.id = newId;
    dummydata.travels.push(travel);
    return travel;
  },
  getATravel(id) {
    const travel = dummydata.travels.find(travel => travel.id == id);
    return travel || {};
  }
};

module.exports = TravelService;
