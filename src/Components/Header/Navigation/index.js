"use client";

import { Button } from "@mui/material";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";

import Link from "next/link";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";

export default function Navigation() {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCategoryPanel(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center gap-8">
          <div className="col_1 w-[20%]">
            <Button
              className=" gap-4 w-full !capitalize !font-semibold !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200"
              onClick={openCategoryPanel}
            >
              <HiOutlineMenuAlt1 className="text-[30px]" />
              <p>Shop By Categories</p>
              <FaAngleDown className="text-[15px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link href="/">
                  <Button className=" !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize">
                    Home
                  </Button>
                </Link>
              </li>

              <li className="list-none relative">
                <Link href="/">
                  <Button className="link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link href="/" className="w-full">
                        <Button className=" !text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none">
                          Men
                        </Button>

                        <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full ">
                              <Link href="/" className="w-full">
                                <Button className=" !text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none">
                                  Men
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link href="/" className="w-full">
                                <Button className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none">
                                  Women
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link href="/" className="w-full">
                                <Button className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none">
                                  Kids
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link href="/" className="w-full">
                                <Button className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none">
                                  Girls
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link href="/" className="w-full">
                                <Button className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none">
                                  Boys
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    <li className="list-none w-full">
                      <Link href="/" className="w-full">
                        <Button className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none w-full">
                      <Link href="/" className="w-full">
                        <Button className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none w-full">
                      <Link href="/" className="w-full">
                        <Button className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none w-full">
                      <Link href="/" className="w-full">
                        <Button className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link href="/">
                  <Button className="link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize">
                    Electronics
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link href="/">
                  <Button className="!link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize">
                    Bags
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link href="/">
                  <Button className="!link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize">
                    Footwear
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link href="/">
                  <Button className="!link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize">
                    Groceries
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link href="/">
                  <Button className="!link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize">
                    Beauty
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link href="/">
                  <Button className="!link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize">
                    Wellness
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link href="/">
                  <Button className="!link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[20%] ">
            <p className="text-[15px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px] " />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel
        setIsOpenCategoryPanel={setIsOpenCategoryPanel}
        isOpenCategoryPanel={isOpenCategoryPanel}
      />
    </>
  );
}
