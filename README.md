CREATE TABLE sua_tabela (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tensaoRede INT,
    correnteRede INT,
    tensaoPlaca INT,
    correntePlaca INT,
    bateria INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
