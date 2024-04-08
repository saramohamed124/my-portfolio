import Copyright from "../Components/Footer/Copyright";
import Icons from "../Components/Footer/Icons";

function Footer() {
  return (
    // position: fixed;
    // bottom: 0;
    // right: 0;
    // width: fit-content;
    // height: fit-content;
    // padding: 20px;
    <div className=" 
    bg-darkblue-500 text-white flex items-center justify-around gap-5 p-5">
      <Copyright />
      <Icons />
    </div>
  );
}
export default Footer;
