import Link from "next/link"
import styles from "../styles/Nav.module.css";

export default function Nav(){
    return (
        <nav className={styles.nav}>
            <u1>
                <li className={styles.li}> <Link href='/'>Home</Link></li>
                <li className={styles.li}> <Link href='/basic/calc'>Calculator</Link></li>
                <li className={styles.li}> <Link href='/basic/counter'>Counter</Link></li>
                <li className={styles.li}> <Link href='/basic/bmi'>Bmi</Link></li>
            </u1>
        </nav>
    );
};