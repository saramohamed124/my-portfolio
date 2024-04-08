import whatsapp_icon from "./assets/icons/whatsapp_icon.svg"
function Whatsapp(){
    return(
        // background: white;
        // border-radius: 50%;
        // padding: 5px;
        // margin: 20px;
        <div className="whats fixed bottom-0 right-0 w-fit h-fit p-[6px] bg-white rounded-[50%] m-6">
          <a href="https://wa.me/201021135168" target="_blank">
          <img src={whatsapp_icon} alt="whatsapp"/>
          </a>
        </div>
    );
}
export default Whatsapp