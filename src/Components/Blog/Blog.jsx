import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto gap-3">
      <div className="blog bg-violet-400 p-2 rounded-lg lg:w-6/12 sm:w-12/12 mx-auto mb-3">
        <h2 className="text-3xl font-semibold"> What is cors?</h2>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </div>

      {/*  */}
      <div className="blog bg-violet-400 p-2 rounded-lg lg:w-6/12 sm:w-12/12 mx-auto mb-3">
        <h2 className="text-3xl font-semibold">
          Why are you using `firebase`? What other options do you have to
          implement authentication?
        </h2>
        <p>
          Most apps need to know the identity of a user. Knowing a user's
          identity allows an app to securely save user data in the cloud and
          provide the same personalized experience across all of the user's
          devices. Firebase Authentication provides backend services,
          easy-to-use SDKs, and ready-made UI libraries to authenticate users to
          your app. It supports authentication using passwords, phone numbers,
          popular federated identity providers like Google, Facebook and
          Twitter, and more. Firebase Authentication integrates tightly with
          other Firebase services, and it leverages industry standards like
        </p>
      </div>

      {/*  */}

      <div className="blog bg-violet-400 p-2 rounded-lg lg:w-6/12 sm:w-12/12 mx-auto mb-3">
        <h2 className="text-3xl font-semibold">
          How does the private route work?
        </h2>
        <p>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in)
        </p>
      </div>
      <div className="blog bg-violet-400 p-2 rounded-lg lg:w-6/12 sm:w-12/12 mx-auto mb-3">
        <h2 className="text-3xl font-semibold">
          What is Node? How does Node work?
        </h2>
        <p>
          Node. js is a JavaScript runtime environment that achieves low latency
          and high throughput by taking a “non-blocking” approach to serving
          requests. In other words, Node. js wastes no time or resources on
          waiting for I/O requests to return.
        </p>
      </div>
    </div>
  );
};

export default Blog;
