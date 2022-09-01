import mysql from 'mysql2';

// configurando a conexão
const conexao = mysql.createConnection({
    // LOCAL

    /*host: 'localhost', 
    user: 'root',
    password: '',
    database: 'escola'
    */

    // REMOTO

    host: 'srv28.prodns.com.br', 
    user: 'webmaio1_escmatt',
    password: 'G4MNed192022',
    database: 'webmaio1_escolamatheus'
});

// conectando ao banco de dados
// conexao.connect();

conexao.connect(erro => {
    if (erro) {
        console.error(`erro ao conectar: ${erro.message}`)
    } else {
        // aqui ele vai mostrar aonde ele vai estar conectado (local ou host)
        console.log(`banco de dados conectado em: ${conexao.config.host}`);
    }
});

export default conexao;