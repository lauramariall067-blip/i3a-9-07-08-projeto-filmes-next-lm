function Home() {
    console.log('home...');
    const nome = 'Roberto';
    return (
        <>
            <h1 style={style}>Novo Teste</h1>
            <p style={{ color: 'blue', backgroundColor: 'red' }}>Teste de parágrafo.</p>
            <p>Olá, {nome}</p>
            <img src="../images/galo.jpg" />
        </>
    );
}

const style = {
    textAlign: 'center',
    border: '0.4px solid red'
};

export default Home;