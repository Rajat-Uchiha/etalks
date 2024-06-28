const Signup = () => {
  return (
    <form method="POST">
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-gray-700 font-medium mb-2  "
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          placeholder="John"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-gray-700 font-medium mb-2 "
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          placeholder="Doe"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          placeholder="john.doe@example.com"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2  "
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          placeholder="••••••••"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2  "
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          placeholder="••••••••"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Sign Up
      </button>
      <div className="mt-6 text-center w-full  ">
        <p className="text-gray-600">or</p>
        <div className="tooltip w-full mt-4 " data-tip="Signup with Google">
          <button className="w-full bg-red-600 text-white py-3 font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signup;
