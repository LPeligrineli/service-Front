import Image from "next/image";
import Link from "next/link";
import { FC } from "react";


const Header: FC = () => {
    return (
        <header className="header">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
                <Link href="/">
                    <Image src='/5fda1a93a4cabe90c808943b_logo_lovyca_white.svg' width={150} height={200} alt="Link para a Home"/>
                </Link>
                <div className="flex items-center space-x-1">
                    <ul className="hidden space-x-2 md:inline-flex">
                        <li><Link href="/" className="px-4 py-2 font-semibold text-gray-600 rounded">Home</Link></li>
                        <li><Link href="/newService" className="px-4 py-2 font-semibold text-gray-600 rounded">Novo Serviço</Link></li>

                    </ul>
                    <div className="inline-flex md:hidden">
                        <button className="flex-none px-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header