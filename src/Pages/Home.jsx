import Button from "../Components/Home/Button";
import Contents from "../Components/Home/Contents";

function Home() {
  return (
    <div
      className="bg-darkblue-500  p-5 lg:block flex flex-col h-[100vh] justify-center items-center pt-4"
      id="home"
    style={{    height: "fit-content",
      paddingTop: "3rem"}}>
      <Contents />
      <Button />
    </div>
  );
}
export default Home;
