import { GameQuery, GameQueryAction } from "@/reducers/gameQueryReducer";
import React, { Dispatch } from "react";

interface GameQueryContextType {
  gameQuery: GameQuery;
  dispatch: Dispatch<GameQueryAction>;
}

const GameQueryContext = React.createContext<GameQueryContextType>(
  {} as GameQueryContextType
);

export default GameQueryContext;
