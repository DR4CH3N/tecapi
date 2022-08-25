import conexao from './banco.js';

// funçao que le a tabela alunos do banco de dados
function ler(res) {


// criando CRUD

const sql = "SELECT * FROM alunos ORDER BY nome";

// conectando o BD
// função query é como a função execute no PHP
conexao.query(sql, (erro, resultados) => {
    if (resultados.length === 0) {
        res.status(204).end(); // 204 = sem conteudo. o metodo .end() para qualquer comunicação.
        return; // die()
    }
    if (erro) {
        res.status(400).json(erro.code); // 400 BAD REQUEST = requisição invalida.
    } else {
        res.status(200).json(resultados); // deu certo, exibir os resultados
    }
    })

}

export { ler };