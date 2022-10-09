import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaInternetExplorer,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { SiNintendoswitch, SiMacos } from "react-icons/si";

const platformObj = {
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
  pc: <FaWindows />,
  nintendo: <SiNintendoswitch />,
  mac: <SiMacos />,
  web: <FaInternetExplorer />,
  linux: <FaLinux />,
  ios: <FaApple />,
  android: <FaAndroid />,
};

export default function platformGeneretor(platforms) {
  const result = platforms.reduce((platformIcons, platFormItem) => {
    platformIcons.push(platformObj[platFormItem.platform.slug]);
    return platformIcons;
  }, []);
  return result;
}
