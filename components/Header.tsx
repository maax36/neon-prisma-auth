import Link from "next/link";

export function Header() {
    const pages = [
        { href: '/', title: 'Home' },
        { href: '/auth-test', title: 'Auth test' }
    ];

    return (
        <header>
            <nav>
                <ul>
                    {
                        pages.map(({href, title})=>(
                            <li><Link href={href}>{title}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}