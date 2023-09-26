import Link from "next/link";
import Image from 'next/image'

import { LayoutProps } from "@/types/propTypes";
import classes from "./header.module.css"

function Layout(props: LayoutProps) {
    return (
        <>
            <header className={classes.header}>
                <Link href="/">
                    <div style={{
                        display: "flex"
                    }}>
                        <Image
                            src='/images/3d-print-w.png'
                            alt='Logo'
                            width={40}
                            height={40}
                        />
                        <h1>3D PRINTING WORKSHOP</h1>
                    </div>
                </Link>
                <nav className={classes.navWide}>
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
