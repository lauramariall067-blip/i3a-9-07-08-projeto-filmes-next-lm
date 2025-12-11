import "../app/css/menu.css";

function Menu() {
    return (
        <nav>
            <div>
                <h1>Master Filmes</h1>
            </div>
            <div>
                <a href="/">Home</a>&nbsp;
                <a href="/filmes">Filmes</a>&nbsp;
                <a href="/atores">Atores</a>
            </div>
        </nav>
    );
}

export default Menu;