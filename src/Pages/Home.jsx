import Button from "../Components/Home/Button";
import Contents from "../Components/Home/Contents";
import header_img from "../Components/Home/assets/imgs/header.png";

function Home() {
  return (
    <div
      className=" bg-[var(--bg-color)] p-5  flex flex-row h-[100vh] justify-center items-center pt-4"
      id="home"
    style={{    height: "fit-content",
      paddingTop: "3rem"}}>
        <div className="mx-4">
      <Contents />
      <Button />

        </div>
      <img
        className="max-w-full lg:w-1/2 w-3/4"
        src={header_img}
        alt="header"
      />
    </div>
  );
}
export default Home;
