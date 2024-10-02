export interface GameQuery {
  genreId?: number | null;
  platformId?: number | null;
  sortOrder?: string | null;
}

interface GenreQuery {
  type: "FILTER_BY_GENRE";
  genreId: number;
}

interface PlatformQuery {
  type: "FILTER_BY_PLATFORM";
  platformId: number;
}

interface SortOrder {
  type: "SORT";
  sortOrder: string;
}

export type GameQueryAction = GenreQuery | PlatformQuery | SortOrder;

const gameQueryReducer = (gameQuery: GameQuery, action: GameQueryAction) => {
  if (action.type === "FILTER_BY_GENRE") {
    return { ...gameQuery, genreId: action.genreId };
  }
  if (action.type === "FILTER_BY_PLATFORM") {
    return { ...gameQuery, platformId: action.platformId };
  }
  if (action.type === "SORT") {
    return { ...gameQuery, sortOrder: action.sortOrder };
  }

  return gameQuery;
};

export default gameQueryReducer;
