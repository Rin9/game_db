import { useSelector } from "react-redux";
import { getAllGames } from "../../features/games/gamesSlice";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Card from "../../components/card/Card";

const Home = () => {
  const games = useSelector(getAllGames);
  return (
    <main className="bg-theme-black w-[80%] flex flex-col justify-start">
      {/* main page title  */}
      <section className="mt-10">
        <h1 className="text-[72px] leading-[74px] font-bold text-white">
          New and trending
        </h1>
        <h3 className="text-white">Based on player counts and release date</h3>
      </section>
      {/* main page game cards */}
      <section className="mt-10 w-full">
        {games.length === 0 ? (
          <div className="flex justify-center items-center mt-10">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-3 pr-10 gap-10">
            {games?.results.map((gameItem) => {
              return <Card gameItem={gameItem} key={gameItem.id} />;
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
