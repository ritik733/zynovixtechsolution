import Link from "next/link";

interface Props{
    href:string;
    children:React.ReactNode;
}

export default function Button({
    href,
    children
}:Props){

    return(

        <Link
            href={href}
            className="
            inline-flex
            items-center
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-7
            py-3
            font-semibold
            transition
            duration-300
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(37,99,235,.4)]
            "
        >
            {children}
        </Link>

    )

}