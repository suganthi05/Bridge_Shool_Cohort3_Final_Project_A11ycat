import { LOCATION_RATING_TYPES } from './location-rating.types';

const INITIAL_STATE = {
  ratedLocations: {
      name: 'location',
      lat: '1',
      lon: '2',
      accessibleParking: false,
      rampToTheFrontDoor: false,
      frontDoorOpensAutomatically: false,
      signageEasilyLegible: false,
      serviceAnimalWelcome: false
  }
};

export const locationRatingReducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case LOCATION_RATING_TYPES.toggleFeature:
      return { ...state, ratedLocations: {...state.ratedLocations, [payload]: !state.ratedLocations[payload] }};
    default:
      return state;
  }
};
