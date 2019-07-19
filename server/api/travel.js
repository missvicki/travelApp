import dummydata from "../utils/dummy_data";
import Travel from "../models/travel";

class TravelService {
  fetchAllTravels() {
    const validdata = dummydata.travels.map(travel => {
      const newTravel = new Travel();
      newTravel.id = travel.id;
      newTravel.name = travel.name;
      newTravel.cost = travel.cost;
      newTravel.bus = travel.bus;
      newTravel.date = travel.date;
    });
    return validdata;
  }
  addnewTravel(travel) {
    const travelLength = dummydata.travels.length;
    const lastid = dummydata.travels[travelLength - 1].id;
    const newId = lastid + 1;

    travel.id = newId;
    dummydata.travels.push(travel);
    return travel;
  }
  getATravel() {
    const travel = dummydata.travels.find(travel => (travel.id = id));
    return travel;
  }
}

export default TravelService;
