import platformGeneretor from "../../constants/platform";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ gameItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <Link
        to={`/detail/${gameItem.id}`}
        className="border border-white text-white flex flex-col rounded-xl h-80 cursor-pointer"
      >
        {/* card img */}
        <div className="h-1/2 w-full">
          <img
            src={gameItem.background_image}
            alt={`pic_${gameItem.name}`}
            className="h-full w-full object-cover object-top rounded-t-xl"
          />
        </div>
        {/* card info */}
        <div className="pt-3 pl-3">
          <div className="flex flex-row gap-x-2">
            {platformGeneretor(gameItem.parent_platforms).map((icon) => {
              return (
                //this to add a key to every icon to avoid the key error
                <div key={`icon:${gameItem.id}:${icon.type.name}`}>{icon}</div>
              );
            })}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
