import Link from "next/link";
import Image from "next/image";
import Search from "../Search";

export default function Header() {
  return (
    <>
      <header>
        <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-200">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="col1 w-[50%]">
                <p className="text-[12px] font-[500]">
                  Get upt to 50% off new season styles, limited time only
                </p>
              </div>

              <div className="col2 flex items-center justify-end">
                <ul className="flex items-center  gap-3">
                  <li className="list-none">
                    <Link
                      href="/HelpCenter"
                      className="text-[13px] font-[500] link transition duration-200"
                    >
                      Help Center
                    </Link>
                  </li>

                  <li className="list-none">
                    <Link
                      href="/OrderTracking"
                      className="text-[13px] font-[500] link transition duration-200"
                    >
                      Order Tracking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header py-3">
          <div className="container flex  items-center justify-between gap-3">
            <div className="col1 w-[25%]">
              <Link href="/Home">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  height={100}
                  width={100}
                  className="w-full h-auto"
                />
              </Link>
            </div>
            <div className="col2 w-[45%]">
              <Search />
            </div>
            <div className="col3 w-[30%]"></div>
          </div>
        </div>
      </header>
    </>
  );
}
