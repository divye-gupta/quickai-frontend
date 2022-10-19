const mongoose = require("mongoose");
const validator = require("validator");

const hotelBookingSchema = new mongoose.Schema(
  {
    Status: String,
    HotelBookingStatus: String,
    ConfirmationNo: {
      type: String,
      required: true,
      unique: true,
    },
    BookingRefNo: {
      type: String,
      required: true,
      unique: true,
    },
    BookingId: Number,
    IsPriceChanged: Boolean,
    IsCancellationPolicyChanged: Boolean,
    // Owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    TravellerDetails: {
      firstname: {
        type: String,
        default: "",
      },
      lastname: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        default: "",
      },
      phoneNumber: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

const HotelBooking = mongoose.model("Hotelbooking", hotelBookingSchema);

module.exports = HotelBooking;
