const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do pool de conexões com o banco de dados
const pool = mysql.createPool({
    host: 'sql.freedb.tech',
    user: 'freedb_bryanUser',
    password: 'Ak9mpE*fyvU@98$',
    database: 'freedb_myBanco',
    connectionLimit: 10 // limite máximo de conexões no pool
});

// Middleware para fazer o parse do corpo das requisições como JSON
app.use(bodyParser.json());

// Middleware to enable CORS
app.use(cors());

// Rota para inserir dados na tabela espSolar
app.post('/postDadosEsp', (req, res) => {
    const data = req.body;

    let SQL = 'INSERT INTO weatherWizard SET ?';
    pool.query(SQL, data, (error, results) => {
        if (error) {
            console.error('Erro ao inserir dados:', error);
            res.status(500).json({ message: 'Erro ao inserir dados' });
            return;
        }

        console.log('Dados inseridos com sucesso:', results);
        res.status(200).json({ message: 'Dados inseridos com sucesso' });
    });
});

app.get('/', (req, res) => {
    res.send("Bem-Vindo ao api-esp! Para mais informações envie um email para: bryanlucas_mendes@hotmail.com")
});

// Rota para recuperar dados da tabela espSolar
app.get('/getPages', (req, res) => {
    let SQL = 'SELECT * FROM weatherWizard';
    pool.query(SQL, (error, results) => {
        if (error) {
            console.error('Erro ao consultar dados:', error);
            res.status(500).json({ message: 'Erro ao consultar dados' });
            return;
        }

        // Envia os dados como resposta
        res.status(200).json(results);
    });
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
