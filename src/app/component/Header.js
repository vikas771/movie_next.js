import Image from "next/image";
import style from "../style/navbar.module.css";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className={style.main_header}>
        <div className={style.navbar_brand}>
          <Link href="/">
            <Image src="/logonew.png" alt="not found" height="40" width="150" />
          </Link>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Header;
