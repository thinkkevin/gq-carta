import CurrentLocation, {
  UserLocationContext,
  IPLocation,
  UserLocation,
} from "../user-location";

import * as useHooks from "../hooks/use-ip-location";

import { shallow } from "enzyme";
describe("Test user-location components", () => {
  it("verify UserLocation Component", () => {
    let comp = (
      <UserLocation>
        <UserLocationContext.Consumer>
          {(location) => {
            return (
              <div>
                {location.display}({location.latitude}, {location.longitude})
              </div>
            );
          }}
        </UserLocationContext.Consumer>
      </UserLocation>
    );
    let html = shallow(comp).html();
    expect(html).toContain("Current Location"); // use "Current Location" as hard-coded text when using UserLocation
    expect(html).toMatchSnapshot();
  });

  it("verify IPLocation using result from useIPLocation", () => {
    let mock = jest.spyOn(useHooks, "useIPLocation");
    mock.mockImplementation(() => {
      return {
        latitude: 37.55649948120117,
        longitude: -121.97046661376953,
        display: "Fremont, CA",
        city: "Fremont",
        state: "CA",
        country: "United States",
        error: null,
      };
    });
    let comp = (
      <IPLocation>
        <UserLocationContext.Consumer>
          {(location) => {
            return (
              <div>
                {location.display}({location.latitude}, {location.longitude})
              </div>
            );
          }}
        </UserLocationContext.Consumer>
      </IPLocation>
    );

    let html = shallow(comp).html();
    expect(html).toContain("Fremont, CA"); // use "Current Location" as hard-coded text when using UserLocation
    expect(html).toMatchSnapshot();
    mock.mockRestore();
  });

  it("verify CurrentLocation Component will use UserLocation first", () => {
    let comp = (
      <CurrentLocation>
        <UserLocationContext.Consumer>
          {(location) => {
            return (
              <div>
                {location.display}({location.latitude}, {location.longitude})
              </div>
            );
          }}
        </UserLocationContext.Consumer>
      </CurrentLocation>
    );
    let html = shallow(comp).html();
    expect(html).toContain("Current Location"); // use "Current Location" as hard-coded text when using UserLocation
    expect(html).toMatchSnapshot();
  });
});
