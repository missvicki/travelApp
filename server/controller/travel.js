"use strict";
const TravelService = require("../api/travel");
const TravelController = {
  fetchAllTravels(req, res) {
    const allTravels = TravelService.fetchAllTravels();
    return res
      .json({
        status: "success",
        data: allTravels
      })
      .status(200);
  },
  addATravel(req, res) {
    const newTravel = req.body;
    const createdTravel = TravelService.addnewTravel(newTravel);
    return res
      .json({
        status: "success",
        data: createdTravel
      })
      .status(201);
  },
  getSingleTravel(req, res) {
    const id = req.params.id;
    const foundTravel = TravelService.getATravel(id);
    return res
      .json({
        status: "success",
        data: foundTravel
      })
      .status(200);
  }
};

module.exports = TravelController;
