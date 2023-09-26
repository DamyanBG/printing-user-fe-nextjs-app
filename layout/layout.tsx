import Link from "next/link";
import Image from "next/image";

import { LayoutProps } from "@/types/propTypes";
import classes from "./header.module.css";

function Layout(props: LayoutProps) {
    return (
        <>
            <header className={classes.header}>
                <Link href="/">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <Image
                            src="/images/3d-print-w.png"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                        <h1>3D PRINTING WORKSHOP</h1>
                    </div>
                </Link>
                <input id="menu-toggle" type="checkbox" />
                <label className="menu-button-container" htmlFor="menu-toggle">
                    <div className="menu-button"></div>
                </label>
                
                    <ul className="menu">
                        <li>
                            <Link href="/samples">Примерни продукти</Link>
                        </li>
                        <li>
                            <Link href="/quoting">Направи запитване</Link>
                        </li>
                        <li>
                            <Link href="/contact">Контакт</Link>
                        </li>
                    </ul>
                
            </header>
            <main>{props.children}</main>
        </>
    );
}

export default Layout;
