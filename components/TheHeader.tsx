import Link from "next/link"

const TheHeader = () => {
    return (
        <header>
            <Link href="/">Домой</Link> &nbsp;
            <Link href="/blog">Новости</Link> &nbsp;
            <Link href="/about">О нас</Link>
        </header>
    )
}

export {TheHeader};