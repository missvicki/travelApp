import TravelService from "../api/travel";
class TravelController {
  fetchAllTravels(req, res) {
    const allTravels = TravelService.fetchAllTravels();
    return res
      .json({
        status: "success",
        data: allTravels
      })
      .status(200);
  }
  addATravel(req, res) {
    const newTravel = req.body;
    const createdTravel = TravelService.addATravel(newTravel);
    return res
      .json({
        status: "success",
        data: createdTravel
      })
      .status(201);
  }
  getSingleTravel(req, res) {
    const id = req.params.id;
    const foundTravel = TravelService.getSingleTravel(id);
    return res
      .json({
        status: "success",
        data: foundTravel
      })
      .status(200);
  }
}

export default TravelController;
