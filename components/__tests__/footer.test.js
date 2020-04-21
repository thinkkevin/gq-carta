import React from "react";
import Footer from "../footer";
import { shallow } from "enzyme";

describe("Test Footer", () => {
  it("validates the footer content using snapshot", () => {
    let comp = shallow(<Footer />);
    expect(comp.html()).toMatchSnapshot();
    expect(comp.exists(".footer")).toEqual(true); // check footer class is set
  });
});
