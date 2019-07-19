"use strict";
const { Router } = require("express");
const TravelController = require("../controller/travel");

const router = Router();
router.get("/", TravelController.fetchAllTravels);
router.get("/:id", TravelController.getSingleTravel);
router.post("/", TravelController.addATravel);

module.exports = router;
