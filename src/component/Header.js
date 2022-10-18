import { Link, NavLink } from 'react-router-dom'


const NAVLINK = [
    { id: 1, menu: "Oasi Cashmere 컬렉션", link: '/oasi-collection' },
    { id: 2, menu: "신제품", link: '/new-in' },
    { id: 3, menu: "레디 투 웨어", link: '/ready-to-wear' },
    { id: 4, menu: "제냐의 세계", link: '/our-world' },
]


const Header = () => {
    return (
        <header className='Header'>
            <div className="hd_wrap">
                <nav className='Gnb'>
                    <ul>
                        {
                            NAVLINK.map((it, idx) => {
                                return (
                                    <li key={it.id}><NavLink to={it.link}>{it.menu}</NavLink></li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <h1><a href="/"><img src={process.env.PUBLIC_URL + "/assets/Logo_Zegna.png"} alt="제냐" /></a></h1>
                <div className="icon">
                    <a href=""> <i className='xi-search'></i></a>
                </div>
            </div>
        </header>
    )
}


export default Header;



