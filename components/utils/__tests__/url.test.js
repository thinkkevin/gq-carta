import { venueUrl, formalize } from "../url";

describe("test URL function", () => {
  it("should formalize the name to a SEO friendly string", () => {
    expect(formalize("Mr. Purple")).toEqual("mr-purple");
    expect(formalize("Mr#  Purple")).toEqual("mr-purple");
  });

  it("should generate a venue url", () => {
    expect(
      venueUrl({ name: "Mr. Purple", id: "5642aef9498e51025cf4a7a5" })
    ).toEqual("/v/mr-purple/5642aef9498e51025cf4a7a5");
  });
});
