import NavBar from "./NavBar";

type WrapperProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: WrapperProps) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    );
}