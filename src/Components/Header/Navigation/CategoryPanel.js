"use client";

//General imports
import Link from "next/link";
import { useState } from "react";

//package
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

//react icons
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

export default function CategoryPanel(props) {
  const [subMenuIndex, setSubMenuIndex] = useState(null);

  const openSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const openInnerSubMenu = (index) => {
    if (innerSubMenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        "& button": {
          textTransform: "capitalize",
        },
      }}
      role="presentation"
      className="categoryPanel"
      // onClick={() => props.setIsOpenCategoryPanel(false)}
      //  it will work when i will click on the sidebar panel
    >
      <h3 className="flex items-center justify-between p-3 text-[20px] font-[500]">
        Shop By Categories{" "}
        <IoClose
          onClick={() => props.setIsOpenCategoryPanel(false)}
          className="mt-2 cursor-pointer"
        />
      </h3>

      <div className="scroll">
        {/* 1st Layer */}
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link href="/" className="w-full">
              <Button className="w-full !text-left !justify-start px-3 !text-gray-700 !font-[500]">
                Fashion
              </Button>
            </Link>

            {subMenuIndex === 0 ? (
              <FaAngleUp
                className="absolute top-[10px] right-[15px] cursor-pointer "
                onClick={() => openSubMenu(0)}
              />
            ) : (
              <FaAngleDown
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubMenu(0)}
              />
            )}

            {/* 2nd Layer */}
            {subMenuIndex === 0 && (
              <ul className="submenu  w-full px-3">
                <li className="list-none relative">
                  <Link href="/" className="w-full">
                    <Button className="w-full !text-left !justify-start px-3 !text-gray-700 !font-[500]">
                      Apperal
                    </Button>
                  </Link>

                  {innerSubMenuIndex === 0 ? (
                    <FaAngleUp
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  ) : (
                    <FaAngleDown
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  )}

                  {/* 3rd Layer */}
                  {innerSubMenuIndex === 0 && (
                    <ul className="inner_submenu w-full px-3">
                      <li className="list-none relative mb-1">
                        <Link
                          href="/"
                          className="link w-full !text-left !justify-start px-3 transition duration-200 text-[15px]"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          href="/"
                          className="link w-full !text-left !justify-start px-3 transition duration-200 text-[15px]"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          href="/"
                          className="link w-full !text-left !justify-start px-3 transition duration-200 text-[15px]"
                        >
                          Leather Watch
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link
                          href="/"
                          className="link w-full !text-left !justify-start px-3 transition duration-200 text-[15px]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link href="/" className="w-full">
              <Button className="w-full !text-left !justify-start px-3 !text-gray-700 !font-[500]">
                Fashion
              </Button>
            </Link>

            {subMenuIndex === 1 ? (
              <FaAngleUp
                className="absolute top-[10px] right-[15px] cursor-pointer "
                onClick={() => openSubMenu(1)}
              />
            ) : (
              <FaAngleDown
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubMenu(1)}
              />
            )}

            {/* 2nd Layer */}
            {subMenuIndex === 1 && (
              <ul className="submenu  w-full px-3">
                <li className="list-none relative">
                  <Link href="/" className="w-full">
                    <Button className="w-full !text-left !justify-start px-3 !text-gray-700 !font-[500]">
                      Apperal
                    </Button>
                  </Link>

                  {innerSubMenuIndex === 1 ? (
                    <FaAngleUp
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  ) : (
                    <FaAngleDown
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  )}

                  {/* 3rd Layer */}
                  {innerSubMenuIndex === 1 && (
                    <ul className="inner_submenu  w-full px-3">
                      <li className="list-none relative mb-1">
                        <Link
                          href="/"
                          className="link w-full !text-left !justify-start px-3 transition duration-200 text-[15px]"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          href="/"
                          className="link w-full !text-left !justify-start px-3 transition duration-200 text-[15px]"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          href="/"
                          className="link w-full !text-left !justify-start px-3 transition duration-200 text-[15px]"
                        >
                          Leather Watch
                        </Link>
                      </li>
                      <li className="list-none relative">
                        <Link
                          href="/"
                          className="link w-full !text-left !justify-start px-3 transition duration-200 text-[15px]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer
        open={props.isOpenCategoryPanel}
        onClose={() => props.setIsOpenCategoryPanel(false)}
      >
        {DrawerList}
      </Drawer>
    </>
  );
}
