import React from "react"
import AuthService from "./../../services/auth.service";
import UserService from "./../../services/user.service";
import { Link } from "react-router-dom";
class UserIcon extends React.Component {

  render() {
    const logout = () => {
      AuthService.logout();
    };

    const renderAuthButton = () => {
      if (UserService.isAuth()) {
        return (
          <>
            <i className="fas fa-podcast fa-5x"></i>
                  <Link
                    href="/signout"
                    onClick={logout}
                  >
                    Log out
                  </Link>
          </>
        );
      } else {
        return (
          <>
                  <Link href="/signin">Log-in</Link>
                  <Link href="/signup">Sign up</Link>
          </>
        );
      }
    };

    return <div className="home-navbar-container">{renderAuthButton()}</div>;
  }
}
export default UserIcon;