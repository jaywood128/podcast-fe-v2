import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
// eslint-disable-next-line import/no-useless-path-segments
import AuthService from "../../services/auth.service";
// eslint-disable-next-line import/no-useless-path-segments
import UserService from "../../services/user.service";

const linkStyle = {
  // float: "left",
  padding: "14px 25px",
  lineHeight: "75px",
  textAlign: "center",
  margin: "1rem",
  color: "#B3B3B3",
  backgroundColor: "#181818",
  borderColor: "#FFFFFF",
  borderWidth: "5px",
  borderRadius: "200px",
  borderStyle: "solid",
};

// eslint-disable-next-line react/prefer-stateless-function
export class UserIcon extends React.Component {
  render() {
    const logout = () => {
      AuthService.logout();
    };

    const renderAuthButton = () => {
      if (UserService.isAuth()) {
        return (
          <>
            <Link style={linkStyle} href="/signout" onClick={logout}>
              Log out
            </Link>
          </>
        );
      }
      return (
        <>
          <Link style={linkStyle} href="/signin">
            Log-in
          </Link>
          <Link style={linkStyle} href="/signup">
            Sign up
          </Link>
        </>
      );
    };

    return renderAuthButton();
  }
}
export default UserIcon;
