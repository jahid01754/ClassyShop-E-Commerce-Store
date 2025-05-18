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
          {/* Side Bar panel section */}
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

          {/* Drop down Nav bar section */}
          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Button className=" !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize">
                  Home
                </Button>
              </li>

              <li className="list-none relative">
                <Button
                  className="link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize"
                  component={Link}
                  href="/"
                >
                  Fashion
                </Button>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <Button
                        className=" !text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none"
                        component={Link}
                        href="/"
                      >
                        Men
                      </Button>

                      <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                          <li className="list-none w-full ">
                            <Button
                              className=" !text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none"
                              component={Link}
                              href="/"
                            >
                              T-Shirt
                            </Button>
                          </li>

                          <li className="list-none w-full">
                            <Button
                              className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none"
                              component={Link}
                              href="/"
                            >
                              Jeans
                            </Button>
                          </li>

                          <li className="list-none w-full">
                            <Button
                              className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none"
                              component={Link}
                              href="/"
                            >
                              FootWear
                            </Button>
                          </li>

                          <li className="list-none w-full">
                            <Button
                              className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none"
                              component={Link}
                              href="/"
                            >
                              Watch
                            </Button>
                          </li>

                          <li className="list-none w-full">
                            <Button
                              className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none"
                              component={Link}
                              href="/"
                            >
                              Pants
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="list-none w-full">
                      <Button
                        className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none"
                        component={Link}
                        href="/"
                      >
                        Women
                      </Button>
                    </li>

                    <li className="list-none w-full">
                      <Button
                        className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none"
                        component={Link}
                        href="/"
                      >
                        Kids
                      </Button>
                    </li>

                    <li className="list-none w-full">
                      <Button
                        className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none"
                        component={Link}
                        href="/"
                      >
                        Girls
                      </Button>
                    </li>

                    <li className="list-none w-full">
                      <Button
                        className="!text-gray-700 w-full !text-left !justify-start !font-semibold !rounded-none"
                        component={Link}
                        href="/"
                      >
                        Boys
                      </Button>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Button
                  className="link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize"
                  component={Link}
                  href="/"
                >
                  Electronics
                </Button>
              </li>

              <li className="list-none">
                <Button
                  className="!link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize"
                  component={Link}
                  href="/"
                >
                  Bags
                </Button>
              </li>

              <li className="list-none">
                <Button
                  className="!link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize"
                  component={Link}
                  href="/"
                >
                  Footwear
                </Button>
              </li>

              <li className="list-none">
                <Button
                  className="!link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize"
                  component={Link}
                  href="/"
                >
                  Groceries
                </Button>
              </li>

              <li className="list-none">
                <Button
                  className="!link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize"
                  component={Link}
                  href="/"
                >
                  Beauty
                </Button>
              </li>

              <li className="list-none">
                <Button
                  className="!link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize"
                  component={Link}
                  href="/"
                >
                  Wellness
                </Button>
              </li>

              <li className="list-none">
                <Button
                  className="!link  !text-[15px] !font-semibold  !text-gray-700 hover:!text-[#ff5252] hover:!transition hover:!duration-200 !capitalize"
                  component={Link}
                  href="/"
                >
                  Jewellery
                </Button>
              </li>
            </ul>
          </div>

          {/* Free International delivery section */}
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
