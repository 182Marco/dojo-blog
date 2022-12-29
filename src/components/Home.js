import Bloglist from "./Bloglist";
import ChooseAuthor from "./ChooseAuthor";
import Loading from "./Loading";
import useFetch from "../costomHooks/UseFetch";
import useLocalStorage from "./useLocalStorage";

const Home = () => {
  // VARS
  const [chosenAut, setChosenAut] = useLocalStorage('author','');
  // comming from costum hook
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  // TEMPLATE
  return (
    <div className="home">
      {isPending && <Loading />}
      {error && <div className="error">{error}</div>}
      {!isPending && (
        <ChooseAuthor setChosenAut={setChosenAut} chosenAut={chosenAut} />
      )}
      {blogs && (
        <Bloglist
          classList="bolgEl"
          blogs={blogs}
          chosenAut={chosenAut}
          title="I componimenti"
        />
      )}
    </div>
  );
};
export default Home;

// TO CREATE A LOCAL SERVER THAT RETURNS data/db -> npx json-server --watch data/db.json --port 8000
