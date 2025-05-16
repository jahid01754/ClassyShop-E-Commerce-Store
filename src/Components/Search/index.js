import Button from "@mui/material/Button";
import { IoMdSearch } from "react-icons/io";

export default function Search() {
  return (
    <>
      <div className="searchBar w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] p-2 relative">
        <input
          type="text"
          placeholder="Search for Products"
          className="w-[100%] h-[35px] focus:outline-none p-2 text-[15px] placeholder:text-gray-400"
        />

        <Button className="!absolute top-[8px] right-[5px] z-50 !w-[35px] !min-w-[35px] !h-[35px] !rounded-full !text-black">
          <IoMdSearch className="text-2xl text-gray-400" />
        </Button>
      </div>
    </>
  );
}
