import genres from "../data/genres.ts";

const useGenresStatic = () => ({ data: genres, error: null, isLoading: false });

export default useGenresStatic;
