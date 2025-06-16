import Games from "@/components/Games";
import { getGames } from "@/utils/actions";

const Home = async ({ searchParams }) => {
  const { category } = searchParams;
  const gamesCategory = category || "all";
  // const games = await getGames(gamesCategory);

  return <Games data={null} />;
};

export default Home;
