import React from "react";
import Layout from "../layout";
import Header from "../header";
import Footer from "../footer";
import { shallow } from "enzyme";

describe("Test Layout", () => {
  it("validates the layout structure", () => {
    let comp = shallow(<Layout />);
    expect(comp.exists(".body")).toEqual(true);
    expect(comp.exists(Header)).toEqual(true);
    expect(comp.exists(Footer)).toEqual(true);
  });
});
