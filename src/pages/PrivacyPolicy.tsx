import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <h1>Política de Privacidade</h1>
          
          <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <h2>1. Introdução</h2>
          <p>
            A Labora Tech está comprometida em proteger sua privacidade. Esta política descreve como 
            coletamos, usamos e protegemos suas informações pessoais quando você usa nosso site e 
            serviços.
          </p>

          <h2>2. Informações que Coletamos</h2>
          <h3>2.1. Informações fornecidas por você:</h3>
          <ul>
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Mensagens enviadas através de nossos formulários</li>
          </ul>

          <h3>2.2. Informações coletadas automaticamente:</h3>
          <ul>
            <li>Endereço IP</li>
            <li>Tipo de navegador</li>
            <li>Páginas visitadas</li>
            <li>Tempo gasto no site</li>
            <li>Cookies e tecnologias similares</li>
          </ul>

          <h2>3. Como Usamos suas Informações</h2>
          <p>Utilizamos suas informações para:</p>
          <ul>
            <li>Fornecer e melhorar nossos serviços</li>
            <li>Comunicar-nos com você sobre nossos serviços</li>
            <li>Enviar newsletters e materiais de marketing (com seu consentimento)</li>
            <li>Personalizar sua experiência no site</li>
            <li>Analisar e melhorar nosso site e serviços</li>
          </ul>

          <h2>4. Compartilhamento de Informações</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
          </p>
          <ul>
            <li>Com seu consentimento explícito</li>
            <li>Para cumprir obrigações legais</li>
            <li>Com prestadores de serviços que nos auxiliam (sob rigorosos termos de confidencialidade)</li>
          </ul>

          <h2>5. Segurança das Informações</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger 
            suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2>6. Seus Direitos</h2>
          <p>Você tem o direito de:</p>
          <ul>
            <li>Acessar suas informações pessoais</li>
            <li>Corrigir dados imprecisos</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Retirar seu consentimento para marketing</li>
            <li>Solicitar a portabilidade de seus dados</li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. 
            Para mais informações, consulte nossa{' '}
            <Link to="/politica-de-cookies">Política de Cookies</Link>.
          </p>

          <h2>8. Alterações na Política</h2>
          <p>
            Podemos atualizar esta política periodicamente. A versão mais recente estará sempre 
            disponível em nosso site, com a data da última atualização.
          </p>

          <h2>9. Contato</h2>
          <p>
            Para questões sobre esta política ou sobre suas informações pessoais, entre em contato:
            <br />
            E-mail: laborad.sign@gmail.com
            <br />
            Telefone: +55 (61) 99815-9297
          </p>
        </div>
      </div>
    </div>
  );
}