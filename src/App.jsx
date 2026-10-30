
import './App.css'
import heroImg from './assets/background-hero.png'
import logoSenai from './assets/logo-senai.png'

function App() {
  return (
    <div className="pagina">

      <header>
        <div className="barra-superior">
          <span>FIESC</span>
          <span>CIESC</span>
          <span>SESI</span>
          <span>SENAI</span>
          <span>IEL</span>
        </div>

        <nav className="menu">
          <img src={logoSenai} alt="Logo SENAI" />

          <div className="menu-links">
            <a href="#instituicao">Institucional</a>
            <a href="#voce">Para você</a>
            <a href="#empresas">Para empresas</a>
            <a href="#cursos">Já sou aluno</a>
            <a href="#rodape">Transparência</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="banner">
          <img src={heroImg} alt="SENAI Educação Corporativa" />
        </section>

        <section className="conteudo" id="instituicao">
          <h1>
            A instituição que tem o <span>DNA da indústria</span>
          </h1>

          <p className="subtitulo">
            Referência no país inteiro, o SENAI trabalha todos os dias
            para impulsionar a competitividade da indústria por meio
            da educação profissional, inovação e tecnologia.
          </p>

          <div className="indicadores">
            <article className="indicador">
              <span className="icone">♙</span>
              <strong>Mais de 2.800.000 alunos</strong>
              <p>Formados</p>
            </article>

            <article className="indicador">
              <span className="icone">♧</span>
              <strong>Maior referência de educação profissional</strong>
              <p>Da América Latina</p>
            </article>

            <article className="indicador">
              <span className="icone">◎</span>
              <strong>Referência mundial</strong>
              <p>Em qualificação da indústria</p>
            </article>

            <article className="indicador">
              <span className="icone">✧</span>
              <strong>Alunos SENAI</strong>
              <p>Mais oportunidades para o futuro</p>
            </article>
          </div>

          <div className="areas">
            <article className="card" id="voce">
              <div className="icone-card">♙</div>
              <h2>Para você</h2>

              <p>
                Cursos profissionalizantes, especializações e
                capacitações para transformar sua carreira na indústria.
              </p>

              <a href="#cursos" className="curso">
                <strong>Educação Profissional</strong>
                <span>
                  Formação para desenvolver sua carreira na indústria.
                </span>
              </a>

              <a href="#cursos" className="curso">
                <strong>Ensino Superior</strong>
                <span>
                  Formação superior para qualificar sua atuação.
                </span>
              </a>
            </article>

            <article className="card" id="empresas">
              <div className="icone-card">♙</div>
              <h2>Para empresas</h2>

              <p>
                Capacitações personalizadas e soluções inovadoras
                para impulsionar a competitividade do seu negócio.
              </p>

              <a href="#cursos" className="curso">
                <strong>Educação Corporativa</strong>
                <span>
                  Capacitação para melhorar a produtividade da empresa.
                </span>
              </a>

              <a href="#cursos" className="curso">
                <strong>Inovação e Tecnologia</strong>
                <span>
                  Soluções tecnológicas para a indústria.
                </span>
              </a>
            </article>
          </div>

          <section className="banner-cursos" id="cursos">
            <h2>Seu próximo curso a um clique</h2>

            <p>
              Conheça o portal com as ofertas de cursos de Educação
              Profissional e Ensino Superior do SENAI.
            </p>

            <a href="#voce" className="botao">
              Conheça os cursos
            </a>
          </section>
        </section>
      </main>

      <footer id="rodape">
        <img src={logoSenai} alt="Logo SENAI" />

        <div className="redes">
          <a href="https://www.instagram.com/" aria-label="Instagram">◎</a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
          <a href="https://www.facebook.com/" aria-label="Facebook">f</a>
          <a href="https://www.youtube.com/" aria-label="YouTube">▶</a>
        </div>
      </footer>

    </div>
  )
}

export default App
