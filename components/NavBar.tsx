import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar () {
    const router = useRouter();
    console.log(router);
    return (
        <>  
            <div className="top">
                <h1>프론트엔드 개발자 김별이 ⭐️</h1>
                <nav>
                    <Link href="/">
                        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                    </Link>
                    <Link href="/about ">
                        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                    </Link>
                    <Link href="/portfoilo ">
                        <a className={router.pathname === "/portfoilo" ? "active" : ""}>portfoilo</a>
                    </Link>
                </nav>
            </div>
            <style jsx>
                {`
                    div.top { display:flex; align-items:center; justify-content:space-between; padding:0 20px; background-color:#1458a0; }
                    h1 { color:#fff; }
                    nav { }
                    nav > a { margin-left:20px; }
                    a { color:#fff; font-size:18px; text-decoration:none; }
                    .active { color:#000; }
                `}
            </style>
        </>
    )
}