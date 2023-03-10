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

//TODO: form display ingredients correctly
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

      <div className="w-full h-screen flex flex-col items-center">
        {/*Green Section*/}
        <div
          style={{
            backgroundColor: "rgb(74, 222, 128)",
            backgroundImage:
              "radial-gradient(at 100% 29%, rgb(217, 249, 157) 0, transparent 89%), radial-gradient(at 28% 21%, rgb(74, 222, 128) 0, transparent 35%), radial-gradient(at 47% 170%, rgb(4, 120, 87) 0, transparent 45%)",
          }}
          className="w-full h-[30em] rounded-bl-[5em] flex justify-center"
        >
          <div className={"xl:max-w-7xl max-w-5xl w-full p-5"}>
            <Image
              src={mealmasterLogo}
              alt={"mealmaster logo"}
              width={150}
              height={100}
            />

            <div className={"flex gap-2 my-10 w-full"}>
              <div className={"basis-1/3 flex flex-col flex-1 gap-2 my-10"}>
                <h3
                  className={
                    "font-proxima opacity-40 font-semibold uppercase tracking-wider"
                  }
                >
                  AI POWERED
                </h3>
                <h1 className={"font-bold text-3xl"}>
                  Say goodbye to meal planning stress with MealMaster
                </h1>
                <p className={"my-2"}>
                  Some text goes here Some text goes here Some text goes here
                  Some text goes here Some text goes here
                </p>
                <LoginButton text={"Open mealmaster"} />
              </div>

              <div className={"basis-2/3 relative"}>
                <Image
                  className={
                    "absolute xl:translate-y-0 translate-y-10 translate-x-10 scale-110"
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
          className={
            "w-full h-screen flex flex-col items-center my-16 xl:mt-32"
          }
        >
          <div className={"xl:max-w-7xl max-w-5xl w-full p-5"}>
            <h1 className={"text-3xl font-bold"}>How it works</h1>

            <div className={"flex flex-row w-full gap-3"}>
              {/*  Item 1 */}
              <div className={"flex flex-row gap-10 w-full basis-1/3"}>
                <div className={"flex flex-col justify-start"}>
                  <Image
                    className={"my-10 shadow-lg rounded-xl"}
                    src={mealScheduleImage}
                    alt={"choose your meal schedule"}
                    width={700}
                    quality={100}
                  />
                  <h2 className={"font-bold text-lg"}>
                    Choose your meal schedule
                  </h2>
                  <p className={"opacity-60 my-2 text-lg"}>
                    Some text some text some text some text
                  </p>
                </div>
              </div>
              {/*  Item 2 */}
              <div className={"flex flex-row gap-10 w-full basis-1/3"}>
                <div className={"flex flex-col justify-start"}>
                  <Image
                    className={"my-10 shadow-lg rounded-xl"}
                    src={ownRecipesImage}
                    alt={"choose your meal schedule"}
                    width={700}
                    quality={100}
                  />
                  <h2 className={"font-bold text-lg"}>
                    Add your own meals and recipes
                  </h2>
                  <p className={"opacity-60 my-2 text-lg"}>
                    Some text some text some text some text
                  </p>
                </div>
              </div>

              {/*  Item 3 */}
              <div className={"flex flex-row gap-10 w-full basis-1/3"}>
                <div className={"flex flex-col justify-start"}>
                  <Image
                    className={"my-10 shadow-lg rounded-xl"}
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
                    Some text some text some text some text
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Gray Section*/}
        <div
          className={
            "w-full h-screen flex flex-col items-center my-16 bg-[#010F18] bg-opacity-5"
          }
        >
          <div className={"xl:max-w-7xl max-w-5xl w-full p-5 flex py-20 gap-4"}>
            <div className={"basis-1/3"}>
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

            {/*Meal Input*/}
            <div className={"basis-1/3"}>
              <LandingAIForm />

              {/*<div*/}
              {/*  className={*/}
              {/*    "bg-white shadow-xl border border-gray-200 w-full h-full rounded-xl p-3"*/}
              {/*  }*/}
              {/*>*/}
              {/*  <div*/}
              {/*    className={*/}
              {/*      "w-full h-12 border border-gray-200 px-4 flex items-center justify-center"*/}
              {/*    }*/}
              {/*  >*/}
              {/*    <input*/}
              {/*      className={"w-full pr-4"}*/}
              {/*      placeholder={"What would you like to eat?"}*/}
              {/*      value={mealInput}*/}
              {/*      onChange={(e) => setMealInput(e.target.value)}*/}
              {/*    />*/}
              {/*    {mealInput.length > 0 && <button>Generate</button>}*/}
              {/*  </div>*/}

              {/*  <p className={"text-sm opacity-50 text-center px-4 my-2"}>*/}
              {/*    Alex understands everything, from simple cues to comples*/}
              {/*    demands. Try stuff like: &quot;breakfast&quot;, &quot;asian*/}
              {/*    soup&quot;, &quot;dinner meal with steak&quot;, &quot;healthy*/}
              {/*    snack&quot;.*/}
              {/*  </p>*/}
              {/*</div>*/}
            </div>

            {/*Chef Image*/}
            <div className={"basis-1/3"}>
              <Image src={chefImage} alt={"chef"} width={700} height={700} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
