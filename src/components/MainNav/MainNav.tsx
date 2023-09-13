"use client";

import { FC } from "react";
import Link from "next/link";
import { pages } from "@/constants/pages";
import { usePathname } from "next/navigation";

import styles from "./MainNav.module.css";

const MainNav: FC = () => {
  const pathname = usePathname();

  return (
    <div className={styles.wrapNav}>
      <ul className={styles.listNav}>
        {pages.map((page) => {
          const isActive = pathname === page.url;

          return (
            <li key={page.name}>
              <Link
                className={styles.elementNav}
                href={page.url}
                data-active={isActive}
              >
                {page.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainNav;
