import Copyright from "../Components/Footer/Copyright";
import Icons from "../Components/Footer/Icons";

function Footer() {
  return (
    <div className="bg-purple-950 text-white flex items-center justify-around gap-5 p-5">
      <Copyright />
      <Icons />
    </div>
  );
}
export default Footer;
