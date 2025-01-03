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

    return data; // Return data for further processing if needed
  } catch (error) {
    console.error(
      "Error saving user data:",
      error.response?.data || error.message
    );
    throw error; // Rethrow error for handling in the calling function
  }
};

// save img to imgBB and return photo url
export const savePhotoImgBB = async (formData, axios) => {
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  );
  const photoURL = data?.data?.url;
  return photoURL;
};
