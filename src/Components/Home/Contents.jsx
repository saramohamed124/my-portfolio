import header_img from "./assets/imgs/header.gif";
function Contents() {
  return (
    <div className="parent-header  my-[20px] mx-auto text-white flex lg:flex-row-reverse flex-col-reverse lg:justify-around  items-center gap-6 p-5 pt-3 pb-0 mb-0">
      <img
        className="max-w-full lg:w-1/2 w-3/4"
        src={header_img}
        alt="header"
      />
      <div className="content lg:text-start text-center lg:block flex justify-center items-center flex-col">
        <h1 className="lg:text-4xl text-3xl pb-6 ">
          I'm{" "}
          <span className=" bg-yellow-2000 px-3 lg:text-5xl text-xl">
            Sara Mohamed
          </span>
        </h1>
        <p className=" w-4/5 lg:text-xl text-sm" style={{ color: "#eee" }}>
          I'm a Front-end web Developer, I love to create beautiful and
          functional websites. my goal is to learn new thing every day.
        </p>
      </div>
    </div>
  );
}
export default Contents;
