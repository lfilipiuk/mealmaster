import Head from "next/head";
import React, { useEffect } from "react";
import Link from "next/link";
import LoginButton from "../components/login/LoginButton";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import Image from "next/image";
import mealmasterLogo from "../public/logo.png";
import mockupImage from "../public/images/mockup.png";
import outOfIdeasImage from "../public/images/outofideas.png";
import ownRecipesImage from "../public/images/ownrecipes.png";
import mealScheduleImage from "../public/images/mealschedule.png";
import chefImage from "../public/images/chef landing.png";
import LandingAIForm from "../components/landing/LandingAIForm";

import iconCucumber from "../public/images/icon-cucumber.png";
import iconBanana from "../public/images/icon-banana.png";
import iconCarrot from "../public/images/icon-carrot.png";
import iconChocolate from "../public/images/icon-chocolate.png";
import iconCookie from "../public/images/icon-cookie.png";
import iconPizza from "../public/images/icon-pizza.png";

export default function Landing() {
  const { user, error: userError, isLoading } = useUser();
  const router = useRouter();
  const [mealInput, setMealInput] = React.useState("");

  useEffect(() => {
    if (user) {
      //navigate to home
      router.push("/home");
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>MealMaster</title>
        <meta name="description" content="Meal planning made simple" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section>
        {/*Green Section*/}
        <div
          style={{
            backgroundColor: "rgb(74, 222, 128)",
            backgroundImage:
              "radial-gradient(at 100% 29%, rgb(217, 249, 157) 0, transparent 89%), radial-gradient(at 28% 21%, rgb(74, 222, 128) 0, transparent 35%), radial-gradient(at 47% 170%, rgb(4, 120, 87) 0, transparent 45%)",
          }}
          className="w-full rounded-bl-[5em] flex justify-center"
        >
          <div
            className={
              "xl:max-w-7xl lg:max-w-5xl max-w-xl w-full h-full p-5 lg:mb-0 mb-52"
            }
          >
            <Image
              src={mealmasterLogo}
              alt={"mealmaster logo"}
              width={150}
              height={100}
            />

            <div className={"flex lg:flex-row flex-col lg:my-10 w-full"}>
              {/*Green section - LEFT*/}
              <div
                className={
                  "basis-1/3 max-w-lg flex flex-col flex-1 gap-2 my-10"
                }
              >
                <h3
                  className={
                    "font-proxima opacity-40 font-semibold uppercase tracking-wider"
                  }
                >
                  AI POWERED
                </h3>
                <h1 className={"font-bold text-3xl"}>
                  Say hello to effortless meal planning with MealMaster
                </h1>
                <p className={"my-2"}>
                  Simplify your kitchen routine and eat better with MealMaster
                </p>
                <LoginButton text={"Open mealmaster"} />
              </div>

              {/*Green section - RIGHT*/}
              <div className={"basis-2/3 relative"}>
                <Image
                  className={
                    "absolute xl:-translate-y-10 lg:translate-y-10 md:translate-y-0 translate-y-10 lg:translate-x-10 scale-110"
                  }
                  src={mockupImage}
                  alt={
                    "screen showing mealmaster on a computer screen and phone screen"
                  }
                  width={1200}
                  height={1200}
                />
              </div>
            </div>
          </div>
        </div>

        {/*White Section*/}
        <div
          className={"w-full h-full flex flex-col items-center my-16 xl:mt-32"}
        >
          <div className={"xl:max-w-7xl lg:max-w-5xl max-w-xl w-full p-5"}>
            <h1 className={"text-3xl font-bold lg:mt-0 mt-20"}>How it works</h1>

            <div className={"flex lg:flex-row flex-col w-full gap-3"}>
              {/*  Item 1 */}
              <div className={"flex flex-row gap-10 w-full basis-1/3"}>
                <div className={"flex flex-col justify-start"}>
                  <Image
                    className={"lg:my-10 my-5 shadow-lg rounded-xl"}
                    src={mealScheduleImage}
                    alt={"choose your meal schedule"}
                    width={700}
                    quality={100}
                  />
                  <h2 className={"font-bold text-lg"}>
                    Choose your meal schedule
                  </h2>
                  <p className={"opacity-60 my-2 text-lg"}>
                    Create a custom plan that works for you
                  </p>
                </div>
              </div>
              {/*  Item 2 */}
              <div className={"flex flex-row gap-10 w-full basis-1/3"}>
                <div className={"flex flex-col justify-start"}>
                  <Image
                    className={"lg:my-10 my-5 shadow-lg rounded-xl"}
                    src={ownRecipesImage}
                    alt={"choose your meal schedule"}
                    width={700}
                    quality={100}
                  />
                  <h2 className={"font-bold text-lg"}>
                    Add your own meals and recipes
                  </h2>
                  <p className={"opacity-60 my-2 text-lg"}>
                    Easily incorporate your favorite dishes into MealMaster
                  </p>
                </div>
              </div>

              {/*  Item 3 */}
              <div className={"flex flex-row gap-10 w-full basis-1/3"}>
                <div className={"flex flex-col justify-start"}>
                  <Image
                    className={"lg:my-10 my-5 shadow-lg rounded-xl"}
                    src={outOfIdeasImage}
                    alt={"choose your meal schedule"}
                    width={700}
                    quality={100}
                    text-lg
                  />
                  <h2 className={"font-bold text-lg"}>
                    Out of ideas? AI is here to help!
                  </h2>
                  <p className={"opacity-60 my-2 text-lg"}>
                    Let MealMaster suggest new and exciting meals based on your
                    preferences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Gray Section*/}
        <div
          className={
            "w-full h-full flex flex-col items-center my-16 bg-[#010F18] bg-opacity-5 pb-32"
          }
        >
          <div className="xl:max-w-7xl lg:max-w-5xl max-w-xl lg:h-full h-[150vh] p-5 flex lg:flex-row flex-col py-20 gap-4 items-center justify-center">
            <div className={"flex-1 basis-1/3"}>
              <h2
                className={
                  "font-proxima opacity-40 font-semibold uppercase tracking-wider"
                }
              >
                Try it yourself
              </h2>
              <h1 className={"font-bold text-3xl"}>
                Meet Alex Ingredient, our chef
              </h1>
              <p className={"my-2 flex flex-col gap-5 opacity-60"}>
                <span>
                  Get a taste of how mealmaster uses AI to come up with
                  delicious recipes. Give it a shot!
                </span>
                <span>
                  Enter what you&apos;d like to eat, and Alex will come up with
                  some suggestions.
                </span>{" "}
                <span>Like what you see?</span>
              </p>
              <LoginButton text={"Join mealmaster"} secondary />
            </div>

            <div className={"flex-1 basis-1/3 h-80"}>
              <LandingAIForm />
            </div>

            <div className={"flex-1 basis-1/3"}>
              <Image src={chefImage} alt={"chef"} width={300} height={300} />
            </div>
          </div>
        </div>

        {/*White Section*/}
        <div
          className={"w-full flex flex-col items-center bg-opacity-5 relative"}
        >
          <div
            className={
              "xl:max-w-7xl lg:max-w-5xl max-w-xl w-full p-5 rounded-xl bg-gradient-to-r from-[#021F31] to-[#03314E] h-80 flex absolute -top-40 lg:scale-100 scale-90"
            }
          >
            <div className={"basis-1/3 relative"}>
              <Image
                className={"absolute -bottom-10 right-10"}
                src={iconChocolate}
                alt={"chocolate"}
                width={100}
                height={100}
              />
              <Image
                className={"absolute bottom-0 left-0"}
                src={iconCarrot}
                alt={"carrot"}
                width={100}
                height={100}
              />
              <Image
                className={"absolute top-0 left-10"}
                src={iconCookie}
                alt={"cookie"}
                width={100}
                height={100}
              />
            </div>
            <div
              className={
                "basis-1/3 flex  flex-col text-center justify-center items-center gap-5"
              }
            >
              <h1 className={"lg:text-3xl text-2xl font-bold text-white"}>
                Take your meal planning to the next level
              </h1>
              <p className={"text-white text-lg opacity-80"}>
                Give mealmaster a shot for free today!
              </p>
              <LoginButton text={"Join mealmaster"} />
            </div>
            <div className={"basis-1/3 relative"}>
              <Image
                className={"absolute -bottom-10 right-0"}
                src={iconCucumber}
                alt={"cucumber"}
                width={100}
                height={100}
              />
              <Image
                className={"absolute bottom-0 left-0 top-1/2"}
                src={iconPizza}
                alt={"pizza"}
                width={100}
                height={100}
              />
              <Image
                className={"absolute top-0 left-1/2"}
                src={iconBanana}
                alt={"banana"}
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className={"mt-72 my-10 opacity-60"}>
            <h1>
              mealmaster 2023, made by{" "}
              <Link
                className={"font-semibold"}
                href={"https://www.lukaszfilipiuk.com"}
              >
                Łukasz Filipiuk
              </Link>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
