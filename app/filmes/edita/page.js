import { Filme } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function editaFilme(formData) {
    'use server';

    const id = formData.get('id');
    const titulo = formData.get('titulo');
    const descricao = formData.get('descricao');
    const ano = formData.get('ano');

    const filme = await Filme.findByPk(id);
    filme.titulo = titulo;
    filme.descricao = descricao;
    filme.ano = ano;

    await filme.save();

    redirect('/filmes');
}

async function TelaEditaFilme({ searchParams }) {
    const id = searchParams.id;
    const filme = await Filme.findByPk(id);
    return (
        <>
            <h1>Editando o filme</h1>

            <form action={editaFilme}>

                <input type="hidden" name="id" defaultValue={filme.id} />

                <label htmlFor="titulo">Título</label><br />
                <input type="text" name="titulo" defaultValue={filme.titulo} /> <br />

                <label htmlFor="descricao">Descrição</label><br />
                <input type="text" name="descricao" defaultValue={filme.descricao} /> <br />

                <label htmlFor="ano">Ano</label><br />
                <input type="text" name="ano" defaultValue={filme.ano} /> <br />

                <button>Salvar</button>

            </form>
        </>
    );
}

export default TelaEditaFilme;