
import './App.css'
import heroImg from './assets/background-hero.png'
import logoSenai from './assets/logo-senai.png'

import simbolo from './assets/1simbo.png'
import simbolo2 from './assets/2simbo.png'
import simbolo3 from './assets/3simbo.png'
import simbolo4 from './assets/4simbo.png'
import simbolo5 from './assets/5simbo.png'
import simbolo6 from './assets/6simbo.png'
import cursoImg from './assets/curso.png'
import curso1 from './assets/tagram.png'
import curso2 from './assets/link.png'
import curso3 from './assets/face.png'
import curso4 from './assets/you.png'

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
            para estimular a inovação e a competitividade da indústria,
            por meio de serviços de educação, consultorias, pesquisas
            aplicadas e serviços tecnológicos.
          </p>

          <div className="indicadores">

            <article className="indicador">
              <span className="icone">
                <img src={simbolo} alt="Alunos formados" />
              </span>
              <strong>Mais de 2.800.000 alunos</strong>
              <p>Formados</p>
            </article>

            <article className="indicador">
              <span className="icone">
                <img src={simbolo2} alt="Educação profissional" />
              </span>
              <strong>Maior referência de educação profissional</strong>
              <p>Da América Latina</p>
            </article>

            <article className="indicador">
              <span className="icone">
                <img src={simbolo3} alt="Referência mundial" />
              </span>
              <strong>Referência mundial</strong>
              <p>em qualidade de ensino</p>
            </article>

            <article className="indicador">
              <span className="icone">
                <img src={simbolo4} alt="Alunos SENAI" />
              </span>
              <strong>Alunos SENAI</strong>
              <p>Mais oportunidades para o futuro</p>
            </article>

          </div>

          {/* DOIS CARDS GRANDES */}

          <div className="areas">

            <article className="card" id="voce">

              <img
                src={simbolo5}
                alt="Ícone Para você"
                className="simbolo5"
              />

              <h2>Para você</h2>

              <p>
                Cursos profissionalizantes, graduações e especializações
                desenhadas para acelerar sua carreira na indústria.
              </p>

              <a href="#cursos" className="curso">
                <strong>Educação Profissional</strong>
                <span>
                  Formação para quem deseja construir carreira na indústria.
                </span>
              </a>

              <a href="#cursos" className="curso">
                <strong>Ensino Superior</strong>
                <span>
                  Formação superior voltada para qualificar profissionais
                  na indústria.
                </span>
              </a>

            </article>

            <article className="card" id="empresas">

              <img
                src={simbolo6}
                alt="Ícone Para empresas"
                className="simbolo6"
              />

              <h2>Para empresas</h2>

              <p>
                Capacitações personalizadas e outras soluções inovadoras
                para impulsionar a competitividade do seu negócio.
              </p>

              <a href="#cursos" className="curso">
                <strong>Educação Corporativa</strong>
                <span>
                  Capacitações customizadas para melhorar a produtividade
                  da sua empresa.
                </span>
              </a>

              <a href="#cursos" className="curso">
                <strong>Inovação e Tecnologia</strong>
                <span>
                  PD&I, consultorias e metrologia para uma indústria
                  mais competitiva.
                </span>
              </a>

            </article>

          </div>

          {/* BANNER INFERIOR */}

          <section className="banner-cursos" id="cursos">

            <div className="texto-banner">

              <h2>Seu próximo curso a um clique</h2>

              <p>
                Conheça o portal com as ofertas de cursos de Educação
                Profissional e Ensino Superior do SENAI.
              </p>

              <a href="#voce" className="botao">
                Garanta sua vaga
              </a>

            </div>

            <img
              src={cursoImg}
              alt="Cursos SENAI"
              className="imagem-curso"
            />

          </section>

        </section>
      </main>

      <footer id="rodape">

        <img src={logoSenai} alt="Logo SENAI" />

        <div className="redes">
          <a href="https://www.instagram.com/" aria-label="Instagram">
            <img src={curso1} alt="Instagram" />
          </a>

          <a href="https://www.linkedin.com/" aria-label="LinkedIn">
            <img src={curso2} alt="LinkedIn" />
          </a>

          <a href="https://www.facebook.com/" aria-label="Facebook">
            <img src={curso3} alt="Facebook" />
          </a>

          <a href="https://www.youtube.com/" aria-label="YouTube">
            <img src={curso4} alt="YouTube" />
          </a>
        </div>
      </footer>

    </div>
  )
}

export default App
