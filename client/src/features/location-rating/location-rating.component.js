import React, { Component } from "react";
import { Button } from "../../ui-kit/button";

export class LocationRating extends Component {
  location = { name: 'Place name', lat: 1, lon: 2 };
  accessibilityFeatures = [
    {label: 'Accessible parking', state: 'accessibleParking'},
    {label: 'Ramp leading to the front door', state: 'rampToTheFrontDoor'},
    {label: 'Front door opens automatically', state: 'frontDoorOpensAutomatically'},
    {label: 'Signage is easily legible', state: 'signageEasilyLegible'},
    {label: 'Service animal is welcome', state: 'serviceAnimalWelcome'}
  ];

  render() {
    return (
      <div>
        <h1>{this.location.name}</h1>
        <div>
          {this.accessibilityFeatures.map((feature, index) => (
            <div key={index}>
              <input
                type="checkbox"
                onClick={() =>
                  this.props.onClickFeature(this.location, feature.state)
                }
              />{" "}
              {feature.label}{" "}
            </div>
          ))}
        </div>
        <div>
          <Button
            onClick={() =>
              alert(
                "I need to save the redux state in the database and go to the next page!"
              )
            }
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
