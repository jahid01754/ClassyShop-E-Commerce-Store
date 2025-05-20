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

  const categories = [
    {
      title: "Fashion",
      subCategories: [
        {
          title: "Apparel",
          items: [
            "Smart Tablet",
            "Crepe T-Shirt",
            "Leather Watch",
            "Rolling Diamond",
          ],
        },
      ],
    },
    {
      title: "Electronics",
      subCategories: [
        {
          title: "Mobiles",
          items: ["Apple", "Samsung", "OPPO", "VIVO", "Techno"],
        },
      ],
    },
  ];

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

      {/* ----------------------practise Part start--------------------------- */}
      <div className="scroll">
        <ul className="w-full relative">
          {categories.map((category, categoryIndex) => (
            <li
              key={categoryIndex}
              className="list-none flex items-center relative flex-col"
            >
              <Button
                component={Link}
                href="/"
                className="w-full !text-left !justify-start px-3 !text-gray-700 !font-[500]"
              >
                {category.title}
              </Button>

              {subMenuIndex === categoryIndex ? (
                <FaAngleUp
                  className="absolute top-[10px] right-[15px] cursor-pointer "
                  onClick={() => openSubMenu(categoryIndex)}
                />
              ) : (
                <FaAngleDown
                  className="absolute top-[10px] right-[15px] cursor-pointer"
                  onClick={() => openSubMenu(categoryIndex)}
                />
              )}

              {subMenuIndex === categoryIndex && (
                <ul className="submenu  w-full px-3">
                  {category.subCategories.map(
                    (subCategory, subCategoryIndex) => (
                      <li key={subCategoryIndex} className="list-none relative">
                        <Button
                          component={Link}
                          href="/"
                          className="w-full !text-left !justify-start px-3 !text-gray-700 !font-[500]"
                        >
                          {subCategory.title}
                        </Button>

                        {innerSubMenuIndex === subCategoryIndex ? (
                          <FaAngleUp
                            className="absolute top-[10px] right-[15px] cursor-pointer"
                            onClick={() => openInnerSubMenu(subCategoryIndex)}
                          />
                        ) : (
                          <FaAngleDown
                            className="absolute top-[10px] right-[15px] cursor-pointer"
                            onClick={() => openInnerSubMenu(subCategoryIndex)}
                          />
                        )}

                        {innerSubMenuIndex === subCategoryIndex && (
                          <ul className="inner_submenu w-full px-3">
                            {subCategory.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Button
                                  component={Link}
                                  href="/"
                                  className="w-full !text-left !justify-start px-3 !text-gray-700 !font-[500]"
                                >
                                  {item}
                                </Button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* ----------------------paractise Part end--------------------------- */}

      {/* ----------------------Tutorial Part start--------------------------- */}
      {/* <div className="scroll">
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
                      className="absolute top-[10px] right-[15px] cursor-pointer !transition duration-300"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  ) : (
                    <FaAngleDown
                      className="absolute top-[10px] right-[15px] cursor-pointer !transition duration-300"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  )}

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
      </div> */}
      {/* ----------------------Tutorial Part End--------------------------- */}
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
