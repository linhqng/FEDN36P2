// Register user
export const register = ({
  name,
  username,
  email,
  phone,
  image,
  password,
}) => async (dispatch) => {
  try {
    const url = "/users";
    const body = { name, username, email, phone, password };
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseData = await response.json();
    if (response.ok) {
      const { user } = responseData;
      user && setUser(user);
      if (image) dispatch(uploadImage(user._id, image)); // Upload image
      dispatch({ type: REGISTER_SUCCESS, payload: responseData });
      dispatch(setAlert("Register Success", "success", 5000));
    }
    if (responseData._message) {
      dispatch({ type: REGISTER_FAIL });
      dispatch(setAlert(responseData.message, "error", 5000));
    }
  } catch (error) {
    dispatch({ type: REGISTER_FAIL });
    dispatch(setAlert(error.message, "error", 5000));
  }
};
