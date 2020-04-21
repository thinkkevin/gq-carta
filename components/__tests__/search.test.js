import Search from "../search";
import { mount } from "enzyme";
import { replace } from "../__mocks__/next/router";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("Test Search component", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = replace; // reset to a new mock
  });
  afterEach(() => {
    mockFn.mockRestore();
  });

  it("validates initial value", async () => {
    let component = mount(<Search></Search>);
    let input = component.find("input");
    expect(input.prop("value")).toEqual("coffee"); // value defined in next/router mocks

    // simulate a change to a unsecure text
    input.simulate("change", { target: { value: "<script>" } });

    expect(component.state("term")).toEqual(""); // get sanitized
    await sleep(400); // after debounce
    expect(mockFn.mock.calls.length).toEqual(1);
    expect(mockFn.mock.calls[0]).toEqual(["/search"]); // url will be replaced to "/search" without any term

    // simulate a valid text change
    input.simulate("change", { target: { value: "dimsum" } });

    expect(component.state("term")).toEqual("dimsum"); // get sanitized
    await sleep(400); // after debounce
    expect(mockFn.mock.calls.length).toEqual(2);
    expect(mockFn.mock.calls[1]).toEqual(["/search?term=dimsum"]); // url will be replaced to "/search" with correct term parameter
  });
});
