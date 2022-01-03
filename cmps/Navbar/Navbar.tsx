import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
const Navbar = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="navbar">
      <div className=" navbar__actions">
        <div className=" navbar__logo">
          <Image
            objectFit="contain"
            width="128px"
            height="81px"
            src={'/img/logo.png'}
          />
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
                    src={user.picture ?? ''}
                    width={40}
                    height={40}
                    layout="responsive"
                  ></Image>
                </div>

                <span>Hello {user.nickname}</span>
                <div className="navbar__user__dropdown--menu">
                  <ul>
                    <li>Orders</li>
                    <li>
                      {' '}
                      <a href="/api/auth/logout">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <nav className=" navbar__links">
        <Link href={'#'}>
          <a className="navbar__link">
            {' '}
            <span>Home</span>{' '}
          </a>
        </Link>
        <Link href={'#'}>
          <a className="navbar__link">
            {' '}
            <span>About</span>{' '}
          </a>
        </Link>
        <Link href={'#'}>
          <a className="navbar__link">
            {' '}
            <span>Contact us</span>{' '}
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
