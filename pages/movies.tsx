import { useEffect, useState } from "react";
import Seo from '../components/Seo';
import Link from "next/link";
import { useRouter } from "next/router";

type Items = {
    id: number;
    original_title: string;
}

export default function Movies({ results }) {
    const router = useRouter();
    const onClick = (id, title) => {
        router.push(
            `/movies/${title}/${id}`
        );
    };
    return (
        <>
            <Seo title="Good" />
            {/* <div>
                헬로 넥스트~ {counter}
            </div>
            <button onClick={() => setCounter((prev) => prev+1)}>+</button> */}
            {/* {!movies && <h4>로딩 중</h4>} */}
            {/* <ul>
                {results?.map((movie) => (
                    <Link href={`/movies/${movie.id}`} key={movie.id}>
                        <li onClick={() => onClick(movie.id, movie.original_title)}>
                            <a>
                                <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="포스터 이미지" />
                                <h3>{movie?.original_title}</h3>
                                <h4>평점 ({movie.vote_average})</h4>
                            </a>
                        </li>
                    </Link>
                ))}
            </ul> */}
            <ul>
            {results?.map((movie) => (
                <li
                    onClick={() => onClick(movie.id, movie.original_title)}
                    key={movie.id}
                >
                    <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="포스터 이미지" />
                    <h3>
                        <Link
                            href={`/movies/${movie.original_title}/${movie.id}`}
                        >
                            <a>{movie?.original_title}</a>
                        </Link>
                    </h3>
                    <h4>평점 ({movie.vote_average})</h4>
                </li>
            ))}
            </ul>


            <style jsx>
                {`
                    ul { display:grid; grid-template-columns: 1fr 1fr; gap: 20px; margin:0; padding:20px; }
                    ul li { list-style:none; overflow:hidden; cursor:pointer; }
                    ul li img { width:100%; border-radius:10px; }
                    ul li h3 a { display:block; margin-top:30px; color:#fff; font-size:14px; font-weight:900; text-align:center; text-decoration:none; }
                    ul li h4 { margin-top:0; margin-bottom:14px; color:#fff; font-size:14px; font-weight:900; text-align:center; }
                `}
            </style>
        </>
    );
}

export async function getServerSideProps() {
    //오직 Sever Side 에서만 실행되는 코드
    //API Load 가 느리다면 유저가 아무것도 보지 못한 채로 오래 기다려야 한다는 단점
    // const [movies, setMovies] = useState();
    // useEffect(() => {
    //     (async () => {
            const { results } = await (
                await fetch(
                    `http://localhost:3000/api/movie`
                )
            ).json();
    //         setMovies(results);
    //         console.log(results);
    //     })();
    // },[]);
    return {
        props: {
            results,
        }
    }
}