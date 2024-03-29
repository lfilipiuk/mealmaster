import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  useFormikContext,
} from "formik";
import React, { useState } from "react";

const LandingAIForm = () => {
  const [isSearching, setIsSearching] = useState(false);
  //TODO: remove it
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mealIdeas, setMealIdeas] = useState([""]);
  // const { resetForm } = useFormikContext();

  const reset = () => {
    setIsSearching(false);
    setError(false);
    setLoading(false);
    setMealIdeas([""]);
    // resetForm();
  };

  const submit = async (input: string) => {
    //Check if character limit is exceeded
    if (input.length > 50) {
      setError(true);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/ai/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      try {
        const suggestion: { result: string } = await res.json();
        const { result } = suggestion;
        console.log("result: ", result);
        const resultWithoutNewLines = result.replace(/\n/g, " ");
        const parsedResult = JSON.parse(resultWithoutNewLines);
        console.log(parsedResult);
        setMealIdeas(parsedResult);
      } catch (e) {
        setMealIdeas(["Something went wrong", "Please try again"]);
        console.log("Error parsing JSON: ", e);
        console.log("Response: ", res);
      }
    } catch (e) {
      setMealIdeas(["Something went wrong", "Please try again"]);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (values: any, actions: FormikHelpers<any>) => {
    setIsSearching(true);
    await submit(values.meal);
  };

  return (
    <>
      <div
        className={
          "flex flex-col items-center gap-2 bg-white w-full h-full border border-gray-200 rounded-xl p-3"
        }
      >
        <Formik initialValues={{ meal: "" }} onSubmit={handleSubmit}>
          {({ values, isSubmitting, resetForm }) => (
            <>
              <Form
                className={`w-full relative ${
                  !isSearching ? "block" : "hidden"
                }`}
              >
                <Field
                  className={
                    "w-full bg-white border border-gray-600 text-sm rounded-lg block mx-auto pr-20"
                  }
                  name="meal"
                  type="text"
                  autoComplete="off"
                  placeholder="What would you like to eat?"
                  maxLength={50}
                />

                <ErrorMessage name="meal" component="div" />
                {values.meal.length > 0 && (
                  <button
                    className={
                      "text-green absolute top-2 text-sm right-5 z-100 cursor-pointer"
                    }
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Generate
                  </button>
                )}
              </Form>
              {!isSearching && (
                <h3 className={"text-sm opacity-50 text-center px-4"}>
                  Alex understands everything, from simple cues to complex
                  demands. Try stuff like: “breakfast”, “asian soup”, “dinner
                  meal with steak”, “healthy snack”.
                </h3>
              )}
              {/*  Suggestions */}
              <div
                className={
                  "flex flex-col items-center justify-center h-full w-full"
                }
              >
                {mealIdeas.length > 1 ? (
                  <div className={"flex flex-col items-center gap-2 w-full"}>
                    <h1>Here are some ideas for you:</h1>
                    {mealIdeas.map((meal: any, index: number) => (
                      <div
                        key={index}
                        className={"text-sm bg-gray-100 p-2 rounded-lg w-full"}
                      >
                        {meal}
                      </div>
                    ))}
                    <button
                      className={
                        "bg-green py-2 px-4 text-white rounded-full font-semibold hover:-translate-y-0.5 transform transition duration-200 ease-in-out"
                      }
                      onClick={() => {
                        reset();
                        resetForm();
                      }}
                    >
                      Try again
                    </button>
                  </div>
                ) : (
                  <div>
                    {loading && (
                      <p className={"text-sm opacity-50"}>Loading...</p>
                    )}
                    {!loading && (
                      <p className={"text-sm opacity-50"}>
                        Suggestions will appear here
                      </p>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LandingAIForm;
