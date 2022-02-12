import Link from "next/link";

const NavBar = () => (
    <nav className="flex justify-around py-5 mx-auto bg-gradient-to-r from-blue-600 via-blue-900 to-black">
        <div>
            <h3 className="text-2xl font-medium text-white">BitzPrice</h3>
        </div>
        <div className="space-x-8 text-white">
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
        </div>    
    </nav>
)

export default NavBar;