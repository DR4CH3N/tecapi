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

// inserindo alunos

function inserir (aluno, res) {
    // o caractere "?" é um caractere coringa
    // o trecho "SET ?" esta vindo do mysql2 e a ? recebe os dados e atribui na ordem, ele vai saber o que fazer
    // ele ja tem proteção contra injection e tratamento de strings vindos do modulo MYSQL2
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, aluno, (erro) => {
        if (erro) {
            res.status(400).json(erro.code);
            // 400 - requisição invalida e informa o codigo do erro
        } else {
            res.status(201).json({"status": "aluno inserido!"});
            // criado e apresenta a mensagem "aluno inserido!"
        }
    })
}

// função que exibe UM aluno

function lerUm(id, res) {
    const sql = "SELECT * FROM alunos WHERE id = ?";
    // ele vai selecionar tudo da tabela alunos e vai pegar o ID


    conexao.query(sql, id, (erro, resultados) => {
        // checando se tem conteudo
        if (resultados.length === 0) {
            res.status(204).end();
            return;
        }


        if (erro) {
            res.status(400).json(erro.code);
            // codigo 400 - BAD REQUEST/requisição invalida    
        } else {
            res.status(200).json(resultados)
            // codigo 200 - OK!
        }
    }) 
}

// ATUALIZAR aluno
// essa função vai receber um ID, os dados do aluno, res.

function atualizar(id, aluno, res) {
    const sql = "UPDATE alunos SET ? WHERE id = ?";

    // ao passar mais de 1 parametro voce deve usar um array, caso contrario ele não ira funcionar
    // ATENÇÃO: AQUI A ORDEM **IMPORTA** 
    // passe a mesma ordem do SQL quando voce fizer o codigo do update dentro dos colchetes 
    
    conexao.query(sql, [aluno, id], (erro, resultados) => {
        if (erro) {
            res.status(400).json(erro.code)
        } else {
            // res.status(200).json(${"status" : "atualizado com sucesso!"})

            // apread operator (operador de "espalhamento" de objeto)
            res.status(200).json({...aluno, id})
        }
    });
}

export { ler, lerUm, inserir, atualizar };