export interface GameQuery {
  genreId?: number | null;
  platformId?: string | null;
  sortOrder?: string | null;
  searchText?: string | null;
}

interface GenreQuery {
  type: "FILTER_BY_GENRE";
  genreId: number;
}

interface PlatformQuery {
  type: "FILTER_BY_PLATFORM";
  platformId: string | null;
}

interface SortOrder {
  type: "SORT";
  sortOrder: string;
}

interface SearchQuery {
  type: "SEARCH";
  searchText: string;
}

export type GameQueryAction =
  | GenreQuery
  | PlatformQuery
  | SortOrder
  | SearchQuery;

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
  if (action.type === "SEARCH") {
    return { searchText: action.searchText };
  }

  return gameQuery;
};

export default gameQueryReducer;
