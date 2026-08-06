import { Link } from "react-router-dom";

function Button() {
  const file = "/Sara-Mohamed-Abdullah-CV.pdf";
  const HandleDownloading = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="flex py-4 gap-4">
      <Link
        className="flex m-0 lg:justify-between cursor-pointer gap-2 text-lg text-white font-semibold lg:text-start  bg-[var(--color-burgundy-dark)] rounded-xl px-8 py-3 transition-all duration-100 ease-in hover:scale-[105%]"
        to={"https://github.com/saramohamed124" }
        target="_blank">
        View my work
      </Link>

      <button
        className="flex m-0 lg:justify-between gap-2 text-lg text-[var(--color-burgundy-dark)] font-semibold lg:text-start border  border-[var(--color-burgundy-dark)] rounded-xl px-8 py-3 transition-all duration-100 ease-in hover:scale-[105%]"
        onClick={() => {
          HandleDownloading(file);
        }}>
      Download CV
      </button>

    </div>
  );
}
export default Button;
