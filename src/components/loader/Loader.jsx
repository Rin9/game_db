import { Oval } from "react-loader-spinner";

const Loader = ({ height = 80, width = 80 }) => {
  return (
    <Oval
      height={height}
      width={width}
      color="#686963"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#575853"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;
