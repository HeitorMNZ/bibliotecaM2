// MIDDLEWARE DE AUTENTICAÇÃO: Verifica se o solicitante tem permissão.
// Funciona como o segurança na porta da Clinica-Heitor:
// sem crachá, sem entrada.
//
// ATENÇÃO: Esta é uma implementação SIMPLIFICADA para fins didáticos.
// A partir da Aula 44, utilizaremos JWT (JSON Web Tokens) de verdade.

// Chave de acesso vinda de variável de ambiente
const CHAVE_ACESSO = process.env.CHAVE_ACESSO;

if (!CHAVE_ACESSO) {
  throw new Error('A variável CHAVE_ACESSO não foi definida no arquivo .env');
}

const autenticar = (req, res, next) => {
  const authHeader = req.get('Authorization') || req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      erro: 'Acesso negado. Crachá de identificação não encontrado.',
      dica: 'Envie o cabeçalho: Authorization: Bearer <chave>',
    });
  }

  const [scheme, token] = authHeader.split(' ');

  if (!scheme || scheme.toLowerCase() !== 'bearer' || !token) {
    return res.status(401).json({
      erro: 'Cabeçalho de autorização inválido.',
      dica: 'Use Authorization: Bearer <chave>',
    });
  }

  if (token !== CHAVE_ACESSO) {
    return res.status(403).json({
      erro: 'Acesso proibido. Crachá inválido ou vencido.',
    });
  }

  next();
};

module.exports = autenticar;
