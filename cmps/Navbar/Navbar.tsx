import Image from "next/image";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { useRef } from "react";
const Navbar = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="navbar">
      <div className=" navbar__actions">
        <div className=" navbar__logo">
          <Link href={"/"}>
            <Image
              layout="responsive"
              width={50}
              height={50}
              src={"/img/logo.png"}
            />
          </Link>
        </div>
        <div className=" navbar__user">
          {!user ? (
            <a className="navbar__user__login" href="/api/auth/login">
              Login
            </a>
          ) : (
            <>
              <div className="navbar__user__dropdown">
                <div className="navbar__user__dropdown__image">
                  <Image
                    src={user.picture ?? ""}
                    width={40}
                    height={40}
                    layout="responsive"
                    alt={user.email}
                  ></Image>
                </div>

                <span>Hello {user.nickname}</span>
                <div className="navbar__user__dropdown--menu">
                  <ul>
                    <li>
                      {" "}
                      <Link href={"/orders"}>Orders</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/api/auth/logout">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
