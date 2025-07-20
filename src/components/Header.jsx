import { Logo } from "./Logo"

export const Header = () => {
    return(
        <header className="w-full flex items-center justify-between px-16 py-5">
            <Logo />
            <HeaderMenu />
            <a href="#" className="text-dark text-xl underline">Write an Article</a>
        </header>
    )
}


const HeaderMenu = () => {
    return(
        <nav className="w-fit">
            <ul className="list-none flex gap-3">
                <li className="text-xl font-medium font-sans border-r-2 border-gray-300 px-5">All articles</li>
                <li className="text-xl font-medium font-sans px-5">Topics</li>
                <li className="text-xl font-medium font-sans border-l-2 border-gray-300 px-5">Subscribe</li>
            </ul>
        </nav>
    )
}
