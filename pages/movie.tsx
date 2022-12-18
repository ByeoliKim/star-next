import { useEffect, useState } from "react";
import Seo from '../components/Seo';

type Items = {
    id: number;
    original_title: string;
}

export default function Movie() {
    const [movies, setMovies] = useState();
    const API_KEY = "189978b586e381358bafab5d8d93fd22";
    useEffect(() => {
        (async () => {
            const { results } = await (
                await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                )
            ).json();
            setMovies(results);
            console.log(results);
        })();
    },[]);

    return (
        <>
            <Seo title="Good" />
            {/* <div>
                헬로 넥스트~ {counter}
            </div>
            <button onClick={() => setCounter((prev) => prev+1)}>+</button> */}
            {!movies && <h4>로딩 중</h4>}
            <ul>
                {movies?.map((movie) => (
                    <li key={movie.id}>
                        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="포스터 이미지" />
                        <h3>{movie?.original_title}</h3>
                        <h4>평점 ({movie.vote_average})</h4>
                    </li>
                ))}
            </ul>
            <style jsx>
                {`
                    ul { display:grid; grid-template-columns: 1fr 1fr; gap: 20px; margin:0; padding:20px; }
                    ul li { list-style:none; overflow:hidden; }
                    ul li img { width:100%; border-radius:10px; }
                    ul li h3 { margin-top:30px; color:#fff; font-size:14px; font-weight:900; text-align:center; }
                    ul li h4 { margin-top:0; margin-bottom:14px; color:#fff; font-size:14px; font-weight:900; text-align:center; }
                `}
            </style>
        </>
    );
}