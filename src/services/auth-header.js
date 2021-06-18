const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authoriazation: "Bearer" + user.accessToken };
  } else {
    return {};
  }
};

export default authHeader;
