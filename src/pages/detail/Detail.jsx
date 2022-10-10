import Animated from "../layout/Animated";
import { useParams } from "react-router-dom";
import { getGameById } from "../../features/games/gamesSlice";
import { useSelector } from "react-redux";

const Detail = () => {
  //get the game id
  const { id } = useParams();
  const game = useSelector((state) => getGameById(state, Number(id)));

  return (
    <Animated>
      <div className="bg-theme-black text-white flex justify-center items-center w-[80vw] h-full">
        Detail
      </div>
    </Animated>
  );
};

export default Detail;
