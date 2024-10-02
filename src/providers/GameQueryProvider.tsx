import GameQueryContext from "@/contexts/gameQueryContext";
import gameQueryReducer from "@/reducers/gameQueryReducer";
import { PropsWithChildren, useReducer } from "react";

const GameQueryProvider = ({ children }: PropsWithChildren) => {
  const [gameQuery, dispatch] = useReducer(gameQueryReducer, {});

  return (
    <GameQueryContext.Provider value={{ gameQuery, dispatch }}>
      {children}
    </GameQueryContext.Provider>
  );
};

export default GameQueryProvider;
