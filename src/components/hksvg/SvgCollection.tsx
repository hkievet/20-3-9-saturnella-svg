import url1, {
  ReactComponent as BadHeartsVerticalPattern
} from "../../assets/bad_heart_vertical_pattern.svg";
import { ReactComponent as MyGuy } from "../../assets/my_guy.svg";
import { MyGuyStillImage, MyGuyPattern } from "./paths/MyGuyPath";
import UntitledCardPathSVG, {
  UntitledCardPattern
} from "./paths/UntitledCardPath";

export { BadHeartsVerticalPattern };
export { MyGuy };

const collection = {
  myguy: {
    pattern: MyGuyPattern,
    still: MyGuyStillImage
  },
  untitled: {
    pattern: UntitledCardPattern,
    still: UntitledCardPathSVG
  }
};

export { collection as svgCollection };
export default collection;
