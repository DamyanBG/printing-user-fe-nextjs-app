import Link from "next/link";

import { LayoutProps } from "@/types/propTypes";
import classes from "./header.module.css"

function Layout(props: LayoutProps) {
    return (
        <>
            <header className={classes.header}>
                <Link href="/">
                    <h1>Апликация за принтинг</h1>
                </Link>
                <nav>
                    <ul>
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
                </nav>
            </header>
            <main>{props.children}</main>
        </>
    );
}

export default Layout;
