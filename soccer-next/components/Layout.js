import style from "../styles/Layout.module.css";
import Nav from "./Nav";
export default function Layout({ children }){
    return (
        <>
        <Nav/>
            <div className={style.contatiner}>
                <main className={style.main}>{children}</main>
            </div>
        </>
    );
};