import Express from "express";
import { ler } from "./src/aluno.js";


const app = Express();
const porta = 3000;

// configurando suporte ao formato JSON
app.use(Express.json());

// configurando suporte a dados de formularios
app.use(Express.urlencoded({extended : true}) );

// configurando rotas

// rota (endpoint) para a raiz da API
app.get('/', (req, res) => {
    res.send('Raiz da aplicação...');
})

// rota (endpoint) para exibir todos os alunos
app.get('/alunos', (req, res) => {
    // res.send('exibindo TODOS os alunos');
    ler(res);
});

// rota (endpoint) para exibir um unico aluno
app.get('/alunos/:id', (req, res) => {
    res.send('exibindo dados de UM aluno');
});

// rota (endpoint) para inserir alunos 
app.post('/alunos', (req, res) => {
    res.send('INSERINDO alunos');
});

// rota (endpoint) para ATUALIZAR TODOS os dados do aluno
app.put('/alunos/id', (req, res) => {
    res.send('ATUALIZANDO TODOS os dados de um aluno');
});

// rota (endpoint) para ATUALIZAR TODOS/ALGUNS dos dados do aluno
app.patch('/alunos/id', (req, res) => {
    res.send('ATUALIZANDO TODOS/ALGUNS dos dados de um aluno');
});

// rota (endpoint) para EXCLUIR aluno
app.delete('/alunos/id', (req, res) => {
    res.send('EXCLUI aluno');
});



// configurando o server
app.listen(porta, () => {
    console.log('servidor express rodando....');
});