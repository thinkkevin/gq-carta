import { sanitize } from "../sanitize";

describe("test sanitize", () => {
  it("should remove tags", () => {
    expect(sanitize("<script>a</script>")).toEqual("");
    expect(sanitize("<div>X</div>")).toEqual("");
    expect(sanitize("<div>X</div>Y")).toEqual("Y");
    expect(sanitize("<div>X")).toEqual("X");
    expect(sanitize("<divX")).toEqual("<divX");
  });
});
