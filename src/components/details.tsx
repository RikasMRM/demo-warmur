import React from "react";
import Subscribe from "./atoms/subscribe";

export default function Details() {
  return (
    <>
      <section className="body-font items-center w-full bg-gray-300 pt-20">
        <div className=" relative max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <p className="my-4 text-lg">Create a warmur home</p>
          <p className="mb-4 text-lg">
            witha few questions and less than 5 minutes of your time.
            <br />
            Warmur can provide you with a bespoke soltion your home.
            <br />
            home. It is easy, try our calculator now.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 font-medium transition duration-500 ease-in-out transform bg-transparent border border-mate-black rounded-full bg-gray-900"
              href="https://www.warmur.co.uk/"
            >
              <span className="justify-center">See your savings</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
