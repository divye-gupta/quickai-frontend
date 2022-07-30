export const initialState = {
  flight: null,
  hotel: null,
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

    case "ADD_TO_HOTEL":
      console.log("Add to hotel");
      return {
        ...state,
        hotel: action.item,
      };

    default:
      return {
        ...state,
        flight: null,
        hotel: null,
      };
  }
};

export default reducer;
