import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  

  return (
    <div className="shadow-b sticky top-0 z-50 border-gray-400 bg-stone-200 shadow-xl">
      <div className="align-end mx-8 flex flex-row justify-between">
        <Link href={"/"} className="w-full my-4">
            <div className="flex flex-row space-x-6">
                <FontAwesomeIcon
                    icon={faShapes}
                    className="hover:cursor-pointer"
                />
                <button className="m-4 px-4 font-bold text-xl text-black">
                    Tic-Tac-Toe
                </button>
            </div>
        </Link>
        <button className="m-4 rounded bg-stone-300 w-48 py-1 px-4 font-bold text-black hover:bg-stone-400">
            Change Theme
        </button>

      </div>
    </div>
  );
};

export default Navbar;