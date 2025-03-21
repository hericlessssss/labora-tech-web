import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-base text-white py-24">
      <div className="container">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          Voltar para a página inicial
        </Link>

        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1>Termos de Uso</h1>
          
          <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar o site da Labora Tech, você concorda em cumprir e estar vinculado a estes 
            Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar 
            o site ou usar nossos serviços.
          </p>

          <h2>2. Serviços Oferecidos</h2>
          <p>
            A Labora Tech oferece serviços de desenvolvimento web, design, marketing digital e consultoria 
            em tecnologia. Todos os serviços são prestados mediante contrato específico e acordo prévio 
            entre as partes.
          </p>

          <h2>3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente no site, incluindo mas não limitado a textos, gráficos, logos, 
            ícones, imagens, clips de áudio, downloads digitais e compilações de dados, é de propriedade 
            da Labora Tech ou de seus fornecedores de conteúdo e está protegido por leis brasileiras e 
            internacionais de direitos autorais.
          </p>

          <h2>4. Uso do Site</h2>
          <p>
            Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os 
            direitos de terceiros. É proibido:
          </p>
          <ul>
            <li>Usar o site para fins ilegais ou não autorizados</li>
            <li>Transmitir material malicioso ou tecnologicamente prejudicial</li>
            <li>Tentar obter acesso não autorizado aos nossos sistemas</li>
            <li>Interferir no funcionamento adequado do site</li>
          </ul>

          <h2>5. Privacidade</h2>
          <p>
            O uso de suas informações pessoais é regido por nossa{' '}
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>, que faz parte 
            integrante destes Termos de Uso.
          </p>

          <h2>6. Limitação de Responsabilidade</h2>
          <p>
            A Labora Tech não será responsável por quaisquer danos indiretos, incidentais, especiais, 
            consequenciais ou punitivos, incluindo perda de dados, lucros ou receita, decorrentes do 
            seu uso ou incapacidade de usar o site.
          </p>

          <h2>7. Modificações dos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão 
            em vigor imediatamente após sua publicação no site. O uso continuado do site após tais 
            alterações constitui sua aceitação dos novos termos.
          </p>

          <h2>8. Lei Aplicável</h2>
          <p>
            Estes termos são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa 
            relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
          </p>

          <h2>9. Contato</h2>
          <p>
            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do 
            e-mail: laborad.sign@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}