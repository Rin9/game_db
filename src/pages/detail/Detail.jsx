import Animated from "../layout/Animated";
import { useParams } from "react-router-dom";
import { getGameById } from "../../features/games/gamesSlice";
import { useSelector } from "react-redux";
import platformGeneretor from "../../constants/platform";
import Loader from "../../components/loader/Loader";

const Detail = () => {
  //get the game id
  const { id } = useParams();
  const game = useSelector((state) => getGameById(state, Number(id)));
  console.log(game);

  return (
    <Animated>
      {game ? (
        <div className="bg-theme-black text-white w-[100vw] sm:w-[80vw] h-full flex flex-col sm:flex-row">
          {/* left side section */}
          <div className="w-full sm:w-1/2 flex flex-col gap-y-4 pl-2 pt-2 sm:p-0">
            {/* platform icons */}
            <div className="flex flex-row gap-x-2">
              {platformGeneretor(game.parent_platforms).map((icon) => {
                return (
                  //this to add a key to every icon to avoid the key error
                  <div key={`icon:${game.id}:${icon.type.name}`}>{icon}</div>
                );
              })}
            </div>
            {/* game title */}
            <h1 className="text-title-small sm:text-title-big">{game.name}</h1>
          </div>
          {/* right side section */}
          <div className="w-full sm:w-1/2">right half</div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen w-[100vw] sm:w-[80vw]">
          <Loader />
        </div>
      )}
    </Animated>
  );
};

export default Detail;
