const animais = [
  {
    id: 1,
    nome: 'Heitor Martins',
    email: 'heitor@gmail.com',
  },
  {
    id: 2,
    nome: 'Heitor Nogueira',
    email: 'heitor.nogueira@gmail.com',
  },
  {
    id: 3,
    nome: 'Heitor Nogueira Martins',
    email: 'heitor.nogueira.martins@gmail.com',
  },
];

// Lista todos os animais
const listarTodosAnimais = async () => {
  return animais;
};

// Busca um animal específico pelo ID
const buscarAnimalPorId = async (id) => {
  const animal = animais.find((item) => item.id === Number(id));
  return animal || null;
};

// Criar um novo animal
const criarAnimal = async ({ nome, email }) => {
  if (!nome || !email) {
    throw new Error('Nome e e-mail são obrigatórios.');
  }
  const novoAnimal = {
    id: animais.length + 1,
    nome,
    email,
  };
  animais.push(novoAnimal);
  return novoAnimal;
};

module.exports = { listarTodosAnimais, buscarAnimalPorId, criarAnimal };
