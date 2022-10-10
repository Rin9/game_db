import { useSelector } from "react-redux";
import { getAllGames } from "../../features/games/gamesSlice";
import Loader from "../../components/loader/Loader";
import Card from "../../components/card/Card";

const Home = () => {
  const games = useSelector(getAllGames);
  return (
    <main className="bg-theme-black w-screen sm:w-[80vw] flex flex-col justify-start">
      {/* main page title  */}
      <section className="mt-10">
        <h1 className="text-title-small text-center sm:text-left sm:text-title-big font-bold text-white">
          New and trending
        </h1>
        <h3 className="text-sm text-center sm:text-base sm:text-left text-white">
          Based on player counts and release date
        </h3>
      </section>
      {/* main page game cards */}
      <section className="mt-10 w-full">
        {games.length === 0 ? (
          <div className="flex justify-center items-center h-screen">
            <Loader />
          </div>
        ) : (
          <div className="grid pl-10 sm:pl-0 grid-cols-1 sm:grid-cols-3 pr-10 gap-10">
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
