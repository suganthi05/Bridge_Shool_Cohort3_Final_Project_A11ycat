import * as actions from './location-rating.actions'
import * as types from './location-rating.types'

describe('actions', () => {
    it('should add a accessibility feature to a location', () => {
      const location = { name: 'Place test', lat: 1, lon: 2 }
      const feature = 'accessibleParking'
      const expectedAction = {
        type: types.toggleFeature,
        payload: feature
      }
      expect(actions.toggleFeature(feature)).toEqual(expectedAction)
    })
  })
