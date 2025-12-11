import "../css/listagem.css";

import { Filme } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletaFilme(formData) {
    'use server';
    const id = formData.get('id');
    const filme = await Filme.findByPk(id);
    await filme.destroy();
    redirect('/filmes');
}

async function Filmes() {
    const filmes = await Filme.findAll();
    return (
        <div>
            <h1>Lista de filmes</h1>
            <a href="/filmes/novo">Criar filme</a>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TÍTULO</th>
                        <th>DESCRIÇÃO</th>
                        <th>ANO</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filmes.map(function (fil) {
                            return (
                                <tr key={fil.id}>
                                    <td>{fil.id}</td>
                                    <td>{fil.titulo}</td>
                                    <td>{fil.descricao}</td>
                                    <td>{fil.ano}</td>
                                    <td>
                                        {/* <div> */}
                                            <form action={'/filmes/edita'}>
                                                <input type="hidden" name="id" defaultValue={fil.id} />
                                                <button>Editar</button>
                                            </form>
                                            <form action={deletaFilme}>
                                                <input type="hidden" name="id" defaultValue={fil.id} />
                                                <button>Excluir</button>
                                            </form>
                                        {/* </div> */}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Filmes;