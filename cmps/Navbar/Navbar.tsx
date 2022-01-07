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
          <Link passHref href={"/"}>
            <a>
              <Image
                layout="responsive"
                width={50}
                height={50}
                src={"/img/logo.png"}
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div className=" navbar__user">
          {!user ? (
            <Link href="/api/auth/login">
              <a className="navbar__user__login">Login</a>
            </Link>
          ) : (
            <>
              <div className="navbar__user__dropdown">
                <div className="navbar__user__dropdown__image">
                  <Image
                    src={user.picture ?? ""}
                    width={40}
                    height={40}
                    layout="responsive"
                    alt="name"
                  ></Image>
                </div>

                <span>Hello {user && user.nickname}</span>
                <div className="navbar__user__dropdown--menu">
                  <ul>
                    <li>
                      {" "}
                      <Link href={"/orders"}>Orders</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href={"/api/auth/logout"}>
                        <a>Logout</a>
                      </Link>
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
