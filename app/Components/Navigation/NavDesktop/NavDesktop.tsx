"use client";

import { useState } from "react";
import styles from "./NavDesktop.module.scss";
import { usePathname } from "next/navigation";
import NavDesktopItem from "./NavDesktopItem/NavDesktopItem";
import Image from "next/image";
import LogOutTablet from "./LogOutTablet/LogOutTablet";
import Logo from "../../Logo/Logo";

const NavDesktop = () => {
  const data = [
    { title: "Home", href: "/", image: "/Image/Home.svg", key: "/" },
    {
      title: "Artists",
      href: "/artists",
      image: "/Image/Artist.svg",
      key: "/artists",
    },
    {
      title: "Playlists",
      href: "/playlists",
      image: "/Image/Albums.svg",
      key: "/playlists",
    },
    {
      title: "Albums",
      href: "/albums",
      image: "/Image/Playlist.svg",
      key: "/albums",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  const logOut = () => {
    console.log("Log Out");
  };
  return (
    <div className={styles.mainNavigation}>
      <div className={styles.lineContainer}>
        <div className={styles.line} onClick={toggleMenu}>
          <Image width={40} height={40} src="/Image/Line.svg" alt="Menu" />
        </div>
      </div>
      <div
        className={`${styles.navigationContainer}  ${
          isOpen ? styles.open : ""
        }`}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigationLine}>
            <Image
              width={40}
              height={40}
              onClick={toggleMenu}
              src="/Image/Line.svg"
              alt="Menu"
            />
          </div>
          {data.map((item) => (
            <NavDesktopItem
              key={item.key}
              image={item.image}
              title={item.title}
              href={item.href}
              active={
                item.key === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.key)
              }
            />
          ))}
          <div className={styles.logOutTablet}>
            <LogOutTablet
              onClick={logOut}
              image={"Image/LogOutIcon.svg"}
              title={"Log Out"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
