// SERVICE: Gerencia a lógica de consultas da aplicação.
// Esta camada simula um banco de dados em memória.
const consultas = [
  {
    id: 1,
    data: '2026-04-20',
    hora: '09:00',
    tutorId: 1,
    animalId: 1,
    descricao: 'Consulta de rotina',
  },
  {
    id: 2,
    data: '2026-04-21',
    hora: '14:30',
    tutorId: 2,
    animalId: 2,
    descricao: 'Reconsulta após vacinação',
  },
];

const listarTodasConsultas = async () => {
  return consultas;
};

const buscarConsultaPorId = async (id) => {
  const consulta = consultas.find((item) => item.id === Number(id));
  return consulta || null;
};

const criarConsulta = async ({ data, hora, tutorId, animalId, descricao }) => {
  if (!data || !hora || !tutorId || !animalId || !descricao) {
    throw new Error('Data, hora, tutorId, animalId e descrição são obrigatórios.');
  }

  const novaConsulta = {
    id: consultas.length + 1,
    data,
    hora,
    tutorId: Number(tutorId),
    animalId: Number(animalId),
    descricao,
  };

  consultas.push(novaConsulta);
  return novaConsulta;
};

module.exports = { listarTodasConsultas, buscarConsultaPorId, criarConsulta };
