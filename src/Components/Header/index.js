"use client";
import Link from "next/link";
import Image from "next/image";
import Search from "../Search";

import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

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

        <div className="header py-4 border-b-[1px]  border-gray-200">
          <div className="container flex  items-center justify-between gap-3">
            <div className="col1 w-[25%] flex items-center justify-start">
              <Link href="/Home">
                <Image
                  src="/shop_logo.jpg"
                  alt="Logo"
                  height={1000}
                  width={1000}
                  className="w-full h-auto"
                />
              </Link>
            </div>

            <div className="col2 w-[45%] flex items-center justify-center">
              <Search />
            </div>

            <div className="col3 w-[30%] flex items-center justify-end ">
              <ul className="flex  items-center gap-3">
                <li className="list-none">
                  <Link
                    href="/login"
                    className="link transition duration-200 text-[15px] font-[500]"
                  >
                    login
                  </Link>{" "}
                  | &nbsp;
                  <Link
                    href="/register"
                    className="link transition duration-200 text-[15px] font-[500]"
                  >
                    Register
                  </Link>
                </li>

                <li>
                  <Tooltip title="Compare">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <GoGitCompare />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                <li>
                  <Tooltip title="Wish List">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <FaRegHeart />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>

                <li>
                  <Tooltip title="Cart">
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <MdOutlineShoppingCart />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
