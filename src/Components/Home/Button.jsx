function Button() {
  const file = "/Sara-Mohamed-Abdullah-CV.pdf";
  console.log(file)
  const HandleDownloading = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    // console.log(aTag.click() === true);
    aTag.remove();
  };
  return (
    <button
      className="flex m-5 lg:justify-between gap-2 text-lg text-purple-800 font-semibold lg:text-start  bg-yellow-500 rounded-badge px-8 py-4 transition-all duration-100 ease-in hover:scale-[105%]"
      onClick={() => {
        HandleDownloading(file);
      }}
    >
      Download CV{""}
      <svg
        class="w-6 h-6 text-purple-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
        />
      </svg>
    </button>
  );
}
export default Button;
