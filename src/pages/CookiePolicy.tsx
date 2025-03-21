import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CookiePolicy() {
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
          <h1>Política de Cookies</h1>
          
          <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <h2>1. O que são Cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você 
            visita nosso site. Eles nos ajudam a fazer o site funcionar melhor e fornecer uma 
            experiência mais personalizada.
          </p>

          <h2>2. Tipos de Cookies que Utilizamos</h2>
          
          <h3>2.1. Cookies Essenciais</h3>
          <p>
            São necessários para o funcionamento básico do site. Incluem cookies que permitem que você 
            navegue pelo site e use seus recursos essenciais.
          </p>

          <h3>2.2. Cookies de Desempenho</h3>
          <p>
            Nos ajudam a entender como os visitantes interagem com o site, coletando informações 
            anônimas sobre as páginas visitadas e os erros que podem ocorrer.
          </p>

          <h3>2.3. Cookies de Funcionalidade</h3>
          <p>
            Permitem que o site lembre de escolhas que você faz (como seu nome de usuário, idioma ou 
            região) e forneça recursos aprimorados e mais personalizados.
          </p>

          <h3>2.4. Cookies de Marketing</h3>
          <p>
            São usados para rastrear visitantes em diferentes sites. A intenção é exibir anúncios 
            relevantes e envolventes para usuários individuais.
          </p>

          <h2>3. Como Gerenciar Cookies</h2>
          <p>
            Você pode controlar e/ou excluir cookies como quiser. Você pode excluir todos os cookies 
            já existentes em seu dispositivo e pode configurar a maioria dos navegadores para impedir 
            que sejam adicionados. Porém, se você fizer isso, talvez tenha que ajustar manualmente 
            algumas preferências sempre que visitar um site e alguns serviços e funcionalidades podem 
            não funcionar.
          </p>

          <h3>3.1. Como Desativar Cookies</h3>
          <p>Para desativar cookies através do seu navegador:</p>
          <ul>
            <li>Chrome: Menu → Configurações → Privacidade e segurança → Cookies</li>
            <li>Firefox: Menu → Opções → Privacidade → Histórico</li>
            <li>Safari: Preferências → Privacidade</li>
            <li>Edge: Menu → Configurações → Privacidade e serviços</li>
          </ul>

          <h2>4. Cookies de Terceiros</h2>
          <p>
            Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas. 
            Não temos controle sobre esses cookies. Eles são gerenciados pelos terceiros de acordo 
            com suas próprias políticas.
          </p>

          <h2>5. Atualizações na Política</h2>
          <p>
            Podemos atualizar esta Política de Cookies periodicamente. Recomendamos que você revise 
            esta página regularmente para se manter informado sobre quaisquer alterações.
          </p>

          <h2>6. Mais Informações</h2>
          <p>
            Para mais informações sobre como usamos seus dados, consulte nossa{' '}
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
          </p>

          <h2>7. Contato</h2>
          <p>
            Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato:
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