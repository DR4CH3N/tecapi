import mysql from 'mysql2';

// configurando a conexão
const conexao = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'escola'
});

// conectando ao banco de dados
// conexao.connect();

conexao.connect(erro => {
    if (erro) {
        console.error(`erro ao conectar: ${erro.message}`)
    } else {
        console.log(`banco de dados conectado com sucesso!`);
    }
});

export default conexao;