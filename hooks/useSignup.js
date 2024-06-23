import axios from "axios";
const useSignup = () => {
  const signupUser = async (name, email, password) => {
    try {
      const response = await axios.post("/api/users/signup", {
        givenName: name,
        email,
        image: `https://ui-avatars.com/api/?name=${name}/?background=random`,
        password,
      });

      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        return { type: "error" };
      }
    } catch (error) {
      if (error.name === "TypeError") {
        throw new Error("Network error or invalid JSON");
      } else {
        throw new Error(error.message || "An unexpected error occurred");
      }
    }
  };
  return { signupUser };
};

export default useSignup;
