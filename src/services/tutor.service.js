// SERVICE: Aqui mora a lógica de negócio da aplicação.
// Esta camada não conhece Express, não conhece req, não conhece res.
// Simulação do acervo — em breve será uma query no Postgres
const acervo = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao@gmail.com',
  },
  {
    id: 2,
    nome: 'Maria Oliveira',
    email: 'maria@gmail.com',
  },
  {
    id: 3,
    nome: 'Pedro Santos',
    email: 'pedro@gmail.com',
  },
];

// Lista todos os tutores
const listarTodosTutores = async () => {
  return acervo;
};

// Busca um tutor específico pelo ID
const buscarTutorPorId = async (id) => {
  const tutor = acervo.find((item) => item.id === Number(id));
  // Regra de negócio: se não existe, retorna null.
  // O Controller decide o que fazer com o null.
  return tutor || null;
};

// Criar um novo tutor
const criarTutor = async ({ nome, email }) => {
  // Regra de negócio: nome e email são obrigatórios
  if (!nome || !email) {
    throw new Error('Nome e e-mail são obrigatórios.');
  }
  const novoTutor = {
    id: acervo.length + 1,
    nome,
    email,
  };
  acervo.push(novoTutor);
  return novoTutor;
};

module.exports = { listarTodosTutores, buscarTutorPorId, criarTutor };
