import Head from "next/head";

type Props = {
    title: React.ReactNode;
}
export default function Seo({title}:Props) {
    return <Head>
        <title>{title} | 별이의 넥스트</title>
        
    </Head>
}
//더 많은 prop 들을 넣어서 Head(SEO) component 를 개인화 할 수 있음.