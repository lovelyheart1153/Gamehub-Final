import GameQueryContext from "@/contexts/gameQueryContext";
import { useContext } from "react";

const useGameQuery = () => useContext(GameQueryContext);

export default useGameQuery;
