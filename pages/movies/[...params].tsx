import { useRouter } from "next/router"
import Seo from "../../components/Seo";

export default function Detail({params}) {
    const router = useRouter();
    // console.log(router)
    const [title, id] = params || [];
    return (
        <>
            <Seo title={title} />
            <p>영화 {title} 상세 페이지입니다.</p>
            <style jsx>
                {`
                    p { padding:10px 20px; font-size:24px; }
                `}
            </style>
        </>
    );
}

export function getServerSideProps({params: {params}}) {
    // 단순히 영화 제목과 ID 를 얻을 수 있다~
    return {
        props: {
            params,
        },
    }
}