import { Link } from 'react-router-dom'


const NAVLINK = [
    { id: 1, menu: "Outdoor Collection", link: '/oasi-collection' },
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
                                    <li key={it.id}><Link to={it.link}>{it.menu}</Link></li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/logologo.svg'} alt="제냐" />
                    </Link>
                </h1>
                <div className="icon">
                    <Link to='/'><i className='xi-search'></i></Link>
                </div>
            </div>
        </header >
    )
}


export default Header;



