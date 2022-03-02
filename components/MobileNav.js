/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { RiPlantLine } from "react-icons/ri";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import CheckBox from "./CheckBox";
import { families } from "../data/families";

export default function MobileNav({ selectedFamilies, addOrRemoveFamily }) {
  return (
    <Popover className="max-w-7xl mx-auto z-50 sticky top-0 bg-opacity-50 dark:bg-opacity-75 bg-green-100 dark:bg-gray-900 backdrop-filter backdrop-blur">
      <div className="w-full px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 dark:border-slate-400 py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Popover.Button className="bg-white dark:bg-slate-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="flex -mr-2 -my-2">
            <div className="mr-5 pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 left-0 w-80 p-2 pr-0 transition transform origin-top-right max-h-[calc(100vh_-_70px)] overflow-y-scroll"
        >
          <div className="rounded-lg h-full shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-slate-700 divide-y-2 divide-gray-50 dark:divide-slate-900">
            <div className="pt-5 pb-6 px-5 h-full">
              <div className="flex items-center justify-between">
                <div>
                  <Popover.Button className="bg-white dark:bg-slate-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 h-full">
                <nav className="grid gap-y-6">
                  {Object.keys(families).map((item, index) => {
                    return (
                      <a
                        key={"nav_" + item}
                        href={"#"}
                        className="-m-3 p-3 border-t-2 flex items-center hover:bg-gray-50 dark:hover:bg-slate-600"
                      >
                        <RiPlantLine
                          style={{ color: "lightgreen", fontSize: "1.25rem" }}
                        />
                        <div className="flex justify-between items-center w-full">
                          <span className="ml-3 text-base font-medium text-gray-900 dark:text-slate-200">
                            {families[item].name}
                          </span>
                          <CheckBox
                            addOrRemoveFamily={addOrRemoveFamily}
                            family={item}
                            isChecked={selectedFamilies.includes(item)}
                          />
                        </div>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
