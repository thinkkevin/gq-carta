import { venueLocation, formalize } from "../location";

describe("Test venue location function", () => {
  it("should formalize", () => {
    expect(
      formalize({
        address: "180 Orchard St",
        city: "New York",
        state: "NY",
        country: "United States",
      })
    ).toEqual("180 Orchard St, New York, NY, United States");
    expect(
      formalize({
        address: "180 Orchard St",
        city: "New York",
        state: "NY",
      })
    ).toEqual("180 Orchard St, New York, NY");
    expect(
      formalize({
        address: "180 Orchard St",
        city: "New York",
      })
    ).toEqual("180 Orchard St, New York");
  });

  it("should format venueLocation", () => {
    let result1 = venueLocation({
      address: "180 Orchard St",
      city: "New York",
      state: "NY",
      country: "United States",
    });
    let result2 = venueLocation(
      {
        address: "180 Orchard St",
        city: "New York",
        state: "NY",
        country: "United States",
      },
      {}
    );
    let result3 = venueLocation(
      {
        address: "180 Orchard St",
        city: "New York",
        state: "NY",
        country: "United States",
      },
      {
        city: "New York",
        state: "NY",
        country: "United States",
      }
    );

    expect(result1).toEqual("180 Orchard St, New York, NY, United States");
    expect(result1).toEqual(result2);
    expect(result3).toEqual("180 Orchard St");
  });
});
