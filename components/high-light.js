import Reacrt, { useContext } from "react";
import { sanitize } from "./utils/sanitize";

export const HighLightContext = React.createContext();

export default function HighLightText({ value }) {
  let highLight = sanitize(useContext(HighLightContext)); // can be un-secured text (XSS), need to be sanitized;
  if (highLight && highLight.length >= 2) {
    //only for at least two consecutive characters
    let reg = new RegExp(highLight, "ig");
    let newValue = value.replace(reg, "<em>$&</em>"); // keep original case
    return <span dangerouslySetInnerHTML={{ __html: newValue }} />;
  } else {
    return <span>{value}</span>;
  }
}
