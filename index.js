import Express from "express";
import { ler, lerUm, inserir, atualizar } from "./src/aluno.js";


const app = Express();
const porta = 3000;

// configurando suporte ao formato JSON
app.use(Express.json());

// configurando suporte a dados de formularios
app.use(Express.urlencoded({extended : true}) );

// configurando rotas

// rota (endpoint) para a raiz da API
app.get('/', (req, res) => {
    res.send('aprendendo sobre apis');
})

// rota (endpoint) para exibir todos os alunos
app.get('/alunos', (req, res) => {
    // res.send('exibindo TODOS os alunos');
    ler(res);
});

// rota (endpoint) para exibir um unico aluno
app.get('/alunos/:id', (req, res) => {
    // res.send('exibindo dados de UM aluno');

    const id = parseInt(req.params.id);

    lerUm(id, res);
});

// rota (endpoint) para INSERIR alunos 
app.post('/alunos', (req, res) => {

    // capturando os dados a partir do corpo de requisição
    const novoAluno = req.body;

    // executando a função inserir e passando parametros
    inserir(novoAluno, res);
});

// rota (endpoint) para ATUALIZAR TODOS os dados do aluno
app.put('/alunos/:id', (req, res) => {
    res.send('ATUALIZANDO TODOS os dados de um aluno');
});

// rota (endpoint) para ATUALIZAR TODOS/ALGUNS dos dados do aluno
app.patch('/alunos/:id', (req, res) => {
    // res.send('ATUALIZANDO TODOS/ALGUNS dos dados de um aluno');

    // capturar ID
    const id = parseInt(req.params.id);

    const aluno = req.body;

    atualizar(id, aluno, res);
});

// rota (endpoint) para EXCLUIR aluno
app.delete('/alunos/id', (req, res) => {
    res.send('EXCLUI aluno');
});



// configurando o server
app.listen(porta, () => {
    console.log('servidor express rodando....');
});