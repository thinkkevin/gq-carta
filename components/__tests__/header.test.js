import React from "react";
import Header from "../header";
import Search from "../search";
import { shallow } from "enzyme";

describe("Test Header", () => {
  it("validates the header content using snapshot", () => {
    let comp = shallow(<Header />);
    expect(comp.html()).toMatchSnapshot();
    expect(comp.exists(".header")).toEqual(true); // check header class is set
    expect(comp.exists(Search)).toEqual(true);
  });
});
