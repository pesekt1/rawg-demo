import platforms from "../data/platforms.ts";

const usePlatformsStatic = () => ({
  data: platforms,
  error: null,
  isLoading: false,
});

export default usePlatformsStatic;
