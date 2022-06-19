import logo from '../images/logo-vezicky-color.png'   

function Header(){
    return (
        <header className="container bg-zinc-400">
            <img className="float-left" src={logo} alt="Logo bytového družstva" />
            <h1 className="text-center text-3xl font-bold">Bytové družstvo Porubská 552</h1>
            <h3>Informační portál bytového družstva</h3>
        </header>
    )
}

export default Header;