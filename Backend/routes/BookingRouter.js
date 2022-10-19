const express = require("express");
const HotelBooking = require("../Model/HotelBooking");
const router = new express.Router();

router.get("/hotel", async (req, res) => {
  try {
    const bookingList = await HotelBooking.find({});

    res.status(201).send({ bookingList });
  } catch (error) {
    res.status(500).send(e);
  }
});

router.post("/hotel", async (req, res) => {
  const hotelBooking = new HotelBooking(req.body);

  try {
    await hotelBooking.save();

    res
      .status(201)
      .send({ message: "Successfully saved booking to database", error: null });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
