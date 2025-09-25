import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm border-b">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href='/' className="text-xl font-bold text-gray-900">
                        ALX project
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2">

                        Home
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                        About
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                        Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;