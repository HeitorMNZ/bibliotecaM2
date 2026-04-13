// SERVICE: Aqui mora a lógica de negócio da aplicação.
// Esta camada não conhece Express, não conhece req, não conhece res.
// Simulação do acervo — em breve será uma query no Postgres
const acervo = [
  {
    id: 1,
    titulo: 'poodle',
    autor: 'natureza',
    disponivel: true,
  },
  {
    id: 2,
    titulo: 'labrador',
    autor: 'natureza',
    disponivel: false,
  },
  {
    id: 3,
    titulo: "golden retriever",
    autor: 'natureza',
    disponivel: true,
  },
];

// Lista todos os livros do acervo
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

// Criar um novo tutor no acervo
const criarTutor = async ({ titulo, autor }) => {
  // Regra de negócio: título e autor são obrigatórios
  if (!titulo || !autor) {
    throw new Error('Título e autor são obrigatórios.');
  }
  const novoTutor = {
    id: acervo.length + 1,
    titulo,
    autor,
    disponivel: true,
  };
  acervo.push(novoTutor);
  return novoTutor;
};

module.exports = { listarTodosTutores, buscarTutorPorId, criarTutor };
