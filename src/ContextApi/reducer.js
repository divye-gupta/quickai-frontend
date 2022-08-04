export const initialState = {
  flight: null,
  hotel: null,
  hotelList: null,
  hotelDataSelected: null,
};

const reducer = (state, action) => {
  console.log("type", action.item);
  switch (action.type) {
    case "ADD_TO_FLIGHT":
      console.log("Add");
      return {
        ...state,
        flight: action.item,
      };

    case "ADD_TO_HOTEL": {
      console.log("Add to hotel");
      return {
        ...state,
        hotel: action.item,
      };
    }

    case "ADD_TO_HOTEL_LIST": {
      console.log("add_to_hotel_list");
      return {
        ...state,
        hotelList: action.item,
      };
    }

    case "ADD_TO_HOTEL_DATA": {
      console.log("Add_to_hotel_data");
      return {
        ...state,
        hotelDataSelected: action.item,
      };
    }

    default:
      return {
        ...state,
        flight: null,
        hotel: null,
        hotelList: null,
        hotelDataSelected: null,
      };
  }
};

export default reducer;
