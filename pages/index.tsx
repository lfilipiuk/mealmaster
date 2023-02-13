import Head from "next/head";
import MenuItems from "../components/menu/MenuItems";
import { useSteps } from "../context/StepContext";
import SummaryButton from "../components/ui/buttons/SummaryButton";
import Modal from "../components/ui/modal/Modal";
import ModalContent from "../components/ui/modal/ModalContent";
import Calendar from "../components/calendar/Calendar";
import { MenuHeader } from "../components/menu/MenuHeader";
import React, { useEffect, useState } from "react";
import { useMenu } from "../context/MenuContext";
import { useUser } from "@auth0/nextjs-auth0/client";
import { GetStaticProps } from "next";
import { getAllMeals } from "../utils/mongo/api-util";
import { DUMMY_MENU } from "../utils/DUMMY_MENU";
import { LogoutButton } from "../components/ui/buttons/LogoutButton";

const { AnimatePresence } = require("framer-motion");

//FIXME: there is a problem, when I save the menu, new menus aren't fetched from the database
//TODO: loading screen when fetching data from the database
//TODO: login screen + ask for name (or get from Auth0)
//TODO: make dots over the calendar
//TODO: autosave + autoload
//TODO: useMemo i useCallback
//TODO: form display ingredients correctly
//TODO: AI save suggestions correctly...
//FIXME: when I add a new day, it overwrites the data
//TODO: shopping list
//TODO: have AI simplify shopping list on user request

export default function Home({ data }: any) {
  const {
    menuDate,
    setMenuDate,
    setMenuItems,
    menuItems,
    setWholeMenu,
    getMenuForDate,
  } = useMenu();
  const { modalOpen, setModalOpen, setCurrentStep } = useSteps();
  const [showCalories, setShowCalories] = useState(false);
  const { user, error: userError, isLoading } = useUser();
  const [calendarOpen, setCalendarOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };

  const formattedDate = menuDate.toDateString();

  useEffect(() => {
    async function fetchMenus() {
      const res = await fetch(`/api/menus/${user?.email}`);
      const data = await res.json();

      if (data && data.length > 0) {
        //map menu to array
        const mappedMenu = data.map((menu: any) => {
          return {
            id: menu._id,
            date: menu.date,
            menu: menu.menu,
          };
        });
        setWholeMenu(mappedMenu);

        //get menu for current date
        //FIXME: im getting menu for date here and in useEffect below
        // there should be one function for that
        const menuForDate = mappedMenu.find(
          (menu: any) => menu.date === formattedDate
        );
        if (menuForDate) {
          setMenuItems(menuForDate.menu);
        } else {
          setMenuItems(DUMMY_MENU);
        }

        return data;
      }

      return data;
    }

    if (user) {
      fetchMenus().then(() => {});
    }
  }, [user]);

  useEffect(() => {
    setMenuItems(getMenuForDate(menuDate).menu);
  }, [menuDate]);

  return (
    <>
      <Head>
        <title>MealMaster</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={"max-w-lg mx-auto my-16 flex flex-col"}>
        <MenuHeader
          formattedDate={formattedDate}
          onChange={() => setShowCalories(!showCalories)}
          checked={showCalories}
          disabled={modalOpen}
          onCalendarClick={() => setCalendarOpen(true)}
        />

        <AnimatePresence>
          {calendarOpen && (
            <Calendar onClose={() => setCalendarOpen(false)} value={menuDate} />
          )}
        </AnimatePresence>
        <MenuItems showCalories={showCalories} meals={menuItems} />

        {/* TODO: buttons in a relative/absolute section */}
        {!modalOpen && (
          <>
            <LogoutButton /> <SummaryButton />
          </>
        )}
      </div>

      <div className={"h-full w-screen"}>
        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={closeModal}>
              <ModalContent meals={data} menu={menuItems} />
            </Modal>
          )}
        </AnimatePresence>
      </div>

      <div className={"flex gap-2"}>
        {!user && (
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <a
            className={"p-2 w-16 bg-green text-white rounded-sm text-center"}
            href="/api/auth/login"
          >
            Login
          </a>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const meals = await getAllMeals();

  return {
    props: {
      data: meals,
    },
    revalidate: 30,
  };
};
