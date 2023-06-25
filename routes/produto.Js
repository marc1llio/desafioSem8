const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'backend-ii-express-mysql',
});

// Função para estabelecer a conexão
const connect = () => {
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conexão estabelecida com o banco de dados');
    }
  });
};

// Função para encerrar a conexão
const disconnect = () => {
  connection.end((err) => {
    if (err) {
      console.error('Erro ao encerrar conexão com o banco de dados:', err);
    } else {
      console.log('Conexão encerrada com o banco de dados');
    }
  });
};

const findAll = async () => {
  connect();
  const [rows] = await connection.execute('SELECT * FROM produto');
  disconnect();
  return rows;
};

const update = async () => {
  connect();
  const [rows] = await connection.execute(`UPDATE clientes SET id = '1', nome = 'marc', sobrenome = 'illio',
    email = 'marc@gmail.com', idade = '19' WHERE id = '0'`);
  disconnect();
  return rows;
};

const save = async () => {
  connect();
  const [rows] = await connection.execute(`INSERT INTO clientes(id, nome, sobrenome,
    email, idade) VALUES ('1', 'jubileu', 'francisco', 'jubss@gmail.com', '14')`);
  disconnect();
  return rows;
};

const remove = async () => {
  connect();
  const [rows] = await connection.execute(`DELETE FROM clientes WHERE id = '0'`);
  disconnect();
  return rows;
};

module.exports = {
  findAll,
  save,
  remove,
  update,
};
