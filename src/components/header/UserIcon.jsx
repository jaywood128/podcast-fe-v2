import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
// eslint-disable-next-line import/no-useless-path-segments
import AuthService from "../../services/auth.service";
// eslint-disable-next-line import/no-useless-path-segments
import UserService from "../../services/user.service";

const linkStyle = {
  padding: "10px 20px",
  lineHeight: "10px",
  textAlign: "center",
  fontSize: "16px !important",
  fontFamily: "Poppins",
  margin: "0px 25px",
  color: "#FFFFFF",
  backgroundColor: "#181818",
  borderColor: "#FFFFFF",
  borderWidth: "3px",
  borderRadius: "20px",
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
          <div>
            <Link style={linkStyle} href="/signout" onClick={logout}>
              Log out
            </Link>
          </div>
        );
      }
      return (
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
          }}
        >
          <Link style={linkStyle} to="/signin">
            Log-in
          </Link>
          <Link style={linkStyle} to="/signup">
            Sign up
          </Link>
        </div>
      );
    };

    return renderAuthButton();
  }
}
export default UserIcon;
