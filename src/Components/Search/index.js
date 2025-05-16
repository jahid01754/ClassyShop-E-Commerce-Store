import Button from "@mui/material/Button";

export default function Search() {
  return (
    <>
      <div className="searchBar w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] p-2 relative">
        <input
          type="text"
          placeholder="Search for Products"
          className="w-[100%] h-[35px] focus:outline-none p-2 text-[15px] placeholder:text-gray-400"
        />

        <Button variant="contained" className="absolute -top-9.5 -right-5">
          Contained
        </Button>
      </div>
    </>
  );
}
