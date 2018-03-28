import {LOCATION_RATING_TYPES} from "./location-rating.types";

export function updateLocationRatingAction({ name, lat, lon }, feature) {
  return {
    type: LOCATION_RATING_TYPES.toggleFeature,
    payload: feature
  }
}

  