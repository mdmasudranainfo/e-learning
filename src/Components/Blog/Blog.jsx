import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container mx-auto gap-3">
      {/*  */}
      <div className="dark:bg-gray-800 dark:text-gray-100 mb-4">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between"></div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What is cors?
            </Link>
            <p className="mt-2">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div></div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="dark:bg-gray-800 dark:text-gray-100 mb-4">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between"></div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              Why are you using `firebase`? What other options do you have to
              implement authentication?
            </Link>
            <p className="mt-2">
              Most apps need to know the identity of a user. Knowing a user's
              identity allows an app to securely save user data in the cloud and
              provide the same personalized experience across all of the user's
              devices. Firebase Authentication provides backend services,
              easy-to-use SDKs, and ready-made UI libraries to authenticate
              users to your app. It supports authentication using passwords,
              phone numbers, popular federated identity providers like Google,
              Facebook and Twitter, and more. Firebase Authentication integrates
              tightly with other Firebase services, and it leverages industry
              standards like
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div></div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="dark:bg-gray-800 dark:text-gray-100 mb-4">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between"></div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              How does the private route work?
            </Link>
            <p className="mt-2">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in)
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div></div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="dark:bg-gray-800 dark:text-gray-100 mb-4">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between"></div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              What is Node? How does Node work?
            </Link>
            <p className="mt-2">
              Node. js is a JavaScript runtime environment that achieves low
              latency and high throughput by taking a “non-blocking” approach to
              serving requests. In other words, Node. js wastes no time or
              resources on waiting for I/O requests to return.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div></div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
    </div>
  );
};

export default Blog;
