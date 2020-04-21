import HighLightText, { HighLightContext } from "../high-light";
import React from "react";
import { renderToString } from "react-dom/server";

describe("Test hight light text", () => {
  let child = <HighLightText value={"Hello Ella"} />;
  it("test hight light text with empty value", () => {
    let comp1 = (
      <HighLightContext.Provider value={""}>{child}</HighLightContext.Provider>
    );
    expect(renderToString(comp1)).toEqual("<span>Hello Ella</span>");
  });

  it("test highlight text single time", () => {
    let comp1 = (
      <HighLightContext.Provider value={"ello"}>
        {child}
      </HighLightContext.Provider>
    );
    expect(renderToString(comp1)).toEqual("<span>H<em>ello</em> Ella</span>");
  });

  it("test highlight text multiple times w/ uppercase", () => {
    let comp1 = (
      <HighLightContext.Provider value={"ell"}>
        {child}
      </HighLightContext.Provider>
    );
    expect(renderToString(comp1)).toEqual(
      "<span>H<em>ell</em>o <em>Ell</em>a</span>"
    );
  });
});
