import React from "react";

const FaQ = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What dose Provides Skillshare Academy?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Skillshare Academy are Provides various course in reasonable
                  price. The course of this academy are top class. Million
                  people are very interested our courses.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is the Ethical Hacking tutorial ?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Ethical Hacking tutorial provides basic and advanced concepts
                  of Ethical Hacking. Our Ethical Hacking tutorial is developed
                  for beginners and professionals. It has been a very popular
                  career choice for students of all backgrounds(non-CS students
                  can also learn it easily and be equally good as CS students,
                  or even better than them). Since ethical hacking is about
                  compromising the systems, it assumes familiarity with how
                  those systems actually work.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is the best seller course of Skillshare Academy ?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  HTML and CSS With Fox is the best selling course of Skillshare
                  Academy. The author of this course are very famous for this
                  course.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaQ;
