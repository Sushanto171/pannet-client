export const saveUserData = async (currentUser, axiosSecure) => {
  try {
    // Prepare user data
    const userData = {
      name: currentUser.displayName,
      photo: currentUser.photoURL,
      email: currentUser.email,
      role: "Customer",
    };

    // Send user data to backend
    const { data } = await axiosSecure.post(
      `/users/${currentUser.email}`,
      userData
    );

    console.log("User data saved successfully:", data);
    return data; // Return data for further processing if needed
  } catch (error) {
    console.error(
      "Error saving user data:",
      error.response?.data || error.message
    );
    throw error; // Rethrow error for handling in the calling function
  }
};
