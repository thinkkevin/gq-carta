import { shallow } from "enzyme";
import { VenueList, VenueItem } from "../venue";
const venues = require("./venue-data.json");

describe("Test VenueList Display", () => {
  it("validate VenueItem component", () => {
    let venue = venues.response.venues[0];
    let comp = shallow(<VenueItem {...venue} />);

    expect(comp.exists(".item")).toEqual(true);
    expect(comp.exists(".name")).toEqual(true);
    expect(comp.exists(".address")).toEqual(true);
    expect(comp.exists(".category")).toEqual(false);

    expect(comp.html()).toMatchSnapshot();
  });

  it("validate VenueList component", () => {
    let comp = shallow(<VenueList data={venues.response.venues} />);
    expect(comp.exists(".list")).toEqual(true);
    expect(comp.find(".list").children().length).toEqual(3); // has venue item as direct children
    expect(comp.find("VenueItem").length).toEqual(3); // has VenueItem as children
  });
});
