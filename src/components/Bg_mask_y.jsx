// import { bg_blue } from "../assets/image";

function Bg_mask_y({ children }) {
  return (
    <div
      className={`mask-y-from-85% mask-y-to-95% bg-[url(https://nafhiyrnophnkpixobey.supabase.co/storage/v1/object/public/images/bg_blue.webp)] bg-cover bg-no-repeat h-500 md:h-440 pt-70`}
    >
      {children}
    </div>
  );
}
export default Bg_mask_y;
