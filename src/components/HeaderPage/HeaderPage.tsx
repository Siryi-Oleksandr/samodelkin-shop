import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import iconHeart from "@/assets/icons/heart.svg";
import iconPerson from "@/assets/icons/person.svg";
import iconCart from "@/assets/icons/cart.svg";

import styles from "./HeaderPage.module.css";

const HeaderPage: FC = () => {
  return (
    <div className={styles.wrapHeader}>
      <Link href="/">Logo</Link>

      <div className={styles.wrapNavigate}>
        <Link href="/checkout">Оформлення замовлення</Link>

        <Link href="/contacts">Contacts</Link>

        <ul className={styles.wrapButton}>
          <li>
            <Link href="/favorites">
              <Image src={iconHeart} alt="icon" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="/account">
              <Image src={iconPerson} alt="icon" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <Image src={iconCart} alt="icon" width={24} height={24} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderPage;
