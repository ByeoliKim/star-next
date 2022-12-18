import Image from 'next/image'

export default function MainVisual () {
    return(
        <>
            <section>
                <div className='imgBox'>
                    <Image
                        src="/profile_star.png" alt="프로필 사진"
                        width={390}
                        height={500}
                    />
                </div>
            </section>
            <style jsx>
                {`
                    section { 
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh; }
                    section img { width:300px; }
                `}
            </style>
        </>
    )
}