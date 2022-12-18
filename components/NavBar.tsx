import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar () {
    const router = useRouter();
    //console.log(router);
    return (
        <>  
            <div className="top">
                <h1>개발자 김별이 ⭐️</h1>
                <nav>
                    <Link href="/">
                        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                    </Link>
                    <Link href="/portfoilo">
                        <a className={router.pathname === "/portfoilo" ? "active" : ""}>Portfoilo</a>
                    </Link>
                    <Link href="/movie">
                        <a className={router.pathname === "/movie" ? "active" : ""}>Movie</a>
                    </Link>
                </nav>
            </div>
            <style jsx>
                {`
                    div.top { position:sticky; top:0; left:0; display:flex; align-items:center; justify-content:space-between; width:100%; padding:10px 20px; background-color:rgba(255,255,255,0.3); box-sizing:border-box; z-index:10; }
                    h1 { color:#000; font-size:14px; font-weight:600; letter-spacing:-1px; cursor:default; }
                    nav { }
                    a { margin-left:20px; color:#fff; font-size:14px; font-weight:400; text-decoration:none; }
                    .active { color:#000; }
                `}
            </style>
        </>
    )
}