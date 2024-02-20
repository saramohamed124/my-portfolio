import Button from "../Components/Home/Button";
import Contents from "../Components/Home/Contents";

function Home() {
  return (
    <div className="bg-purple-600 p-5 lg:block flex flex-col h-[100vh] justify-center items-center">
      <Contents />
      <Button />
    </div>
  );
}
export default Home;
