import React, { useEffect, useRef, useState } from "react";
import "./DiaDasMulheresPremium.css";

import foto1 from "./assets/eu-e-mae.jpeg";
import foto2 from "./assets/eu-e-nam.jpeg";
import foto3 from "./assets/so-mae1.jpeg";
import foto4 from "./assets/so-mae2.jpeg";
import foto5 from "./assets/so-nam1.jpeg";
import foto6 from "./assets/so-nam2.jpeg";
import foto7 from "./assets/todos.jpeg";

const musica = "/musica.mp3";

export default function DiaDasMulheresPremium() {
  const [cartaAberta, setCartaAberta] = useState(false);
  const [siteLiberado, setSiteLiberado] = useState(false);
  const [fadeSaida, setFadeSaida] = useState(false);
  const audioRef = useRef(null);

  const iniciarExperiencia = async () => {
    setFadeSaida(true);

    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.7;
      try {
        await audio.play();
      } catch (error) {
        console.log("Não foi possível iniciar a música automaticamente.", error);
      }
    }

    setTimeout(() => {
      setSiteLiberado(true);
    }, 900);
  };

  const irParaHomenagens = () => {
    const secao = document.getElementById("homenagens");
    if (secao) {
      secao.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (siteLiberado) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [siteLiberado]);

  return (
    <div className="pagina">
      <audio ref={audioRef} loop>
        <source src={musica} type="audio/mpeg" />
      </audio>

      {!siteLiberado && (
        <div className={`tela-entrada ${fadeSaida ? "fade-out" : ""}`}>
          <div className="entrada-brilho brilho-1"></div>
          <div className="entrada-brilho brilho-2"></div>

          <div className="entrada-card">
            <p className="entrada-tag">Uma surpresa especial 💖</p>

            <h1>
              Tenho uma homenagem
              <span> para duas mulheres muito importantes na minha vida</span>
            </h1>

            <p className="entrada-texto">
              Preparei esse momento com muito carinho. Clique abaixo para abrir
              essa pequena surpresa e ver tudo o que eu quis expressar.
            </p>

            <button className="botao-abrir" onClick={iniciarExperiencia}>
              Clique para abrir
            </button>
          </div>
        </div>
      )}

      {siteLiberado && (
        <>
          <div className="petalas">
            <span>❤</span>
            <span>❤</span>
            <span>❤</span>
            <span>❤</span>
            <span>❤</span>
            <span>❤</span>
            <span>❤</span>
            <span>❤</span>
            <span>❤</span>
            <span>❤</span>
            <span>❤</span>
            <span>❤</span>
          </div>

          <header className="hero aparecer-suave">
            <div className="hero-texto">
              <p className="tag-topo">Dia das Mulheres • homenagem especial</p>

              <h1>
                Um presente feito com carinho
                <span> para minha mãe e minha namorada</span>
              </h1>

              <p className="hero-descricao">
                Hoje eu quis transformar sentimento em algo visível. Um espaço
                bonito, delicado e cheio de amor, para homenagear duas mulheres
                que tornam minha vida muito mais especial.
              </p>

              <div className="hero-botoes">
                <button onClick={irParaHomenagens}>Ver homenagem</button>
                <button
                  className="botao-secundario"
                  onClick={() => setCartaAberta(true)}
                >
                  Abrir carta
                </button>
              </div>
            </div>

            <div className="hero-fotos">
              <div className="foto-polaroid destaque">
                <div className="card-foto">
                  <img src={foto7} alt="Família" />
                </div>
                <p>Minha família perfeita</p>
              </div>

              <div className="grade-polaroids">
                <div className="foto-polaroid inclinada-esquerda">
                  <div className="card-foto">
                    <img src={foto3} alt="Minha mãe" />
                  </div>
                  <p>Minha rainha</p>
                </div>

                <div className="foto-polaroid inclinada-direita">
                  <div className="card-foto">
                    <img src={foto5} alt="Minha namorada" />
                  </div>
                  <p>Minha princesa</p>
                </div>
              </div>
            </div>
          </header>

          <div className="divisor-romantico">
            <span>❤</span>
          </div>

          <section id="homenagens" className="secao-titulo aparecer-suave delay-1">
            <p className="tag-topo">Minhas homenageadas</p>
            <h2>Uma lembrança cheia de amor</h2>
            <p>
              Cada detalhe aqui foi pensado para transmitir carinho, admiração
              e gratidão.
            </p>
          </section>

          <section className="blocos-homenagem">
            <div className="bloco-homenagem aparecer-suave delay-2">
              <div className="bloco-texto">
                <p className="subtag">Força, cuidado e amor em cada detalhe</p>
                <h3>Minha Mãe 🌷</h3>
                <p>
                  Mãe, hoje eu quero te agradecer por tudo. Obrigado por sempre
                  estar ao meu lado, pelo seu cuidado, pela sua força e por todo
                  amor que você sempre me deu. Você é uma mulher incrível,
                  guerreira e cheia de luz. Tenho muito orgulho de ser seu filho
                  e de ter você como exemplo na minha vida. Sua presença
                  significa muito para mim, e neste Dia das Mulheres eu quero te
                  lembrar o quanto você é especial.

                  Como diz Provérbios 31:25–26: “Reveste-se de força e dignidade;
                  sorri diante do futuro. Fala com sabedoria, e a instrução da
                  bondade está na sua língua.”
                  Mãe, quando leio esse versículo penso imediatamente em você.
                  Sua força, sua sabedoria e o amor em cada conselho moldaram
                  quem eu sou hoje. Obrigado por ser meu exemplo todos os dias.
                </p>
              </div>

              <div className="bloco-fotos">
                <div className="foto-polaroid maior">
                  <div className="card-foto">
                    <img src={foto4} alt="Minha mãe" />
                  </div>
                  <p>Minha mãe, minha rainha, meu porto seguro.</p>
                </div>

                <div className="foto-polaroid menor inclinada-direita">
                  <div className="card-foto">
                    <img src={foto1} alt="Eu e minha mãe" />
                  </div>
                  <p>Mãe, você é a forma que Deus encontrou de cuidar de mim todos os dias.</p>
                </div>
              </div>
            </div>

            <div className="bloco-homenagem aparecer-suave delay-3">
              <div className="bloco-texto">
                <p className="subtag">Beleza, carinho e felicidade nos meus dias</p>
                <h3>Minha Namorada 💖</h3>
                <p>
                  Meu amor, hoje é mais um dia para lembrar o quanto você é
                  maravilhosa. Você é uma mulher linda, forte, especial e muito
                  importante na minha vida. Sou muito feliz por ter você ao meu
                  lado, compartilhando momentos, sorrisos e sentimentos.
                  Obrigado por todo carinho, companheirismo e por ser essa
                  pessoa tão incrível. Neste Dia das Mulheres, quero que você
                  saiba o quanto eu te admiro e o quanto você merece o melhor.

                  Como diz Eclesiastes 4:9: “É melhor ter companhia do que estar
                  sozinho, porque maior é a recompensa do trabalho de duas pessoas.”
                  Amor, esse versículo me lembra que caminhar ao seu lado torna tudo
                  melhor. Obrigado por estar comigo, por me apoiar, me ouvir e
                  dividir a vida comigo todos os dias.
                </p>
              </div>

              <div className="bloco-fotos">
                <div className="foto-polaroid maior">
                  <div className="card-foto">
                    <img src={foto6} alt="Minha namorada" />
                  </div>
                  <p>Minha namorada, meu amor, minha melhor escolha.</p>
                </div>

                <div className="foto-polaroid menor inclinada-esquerda">
                  <div className="card-foto">
                    <img src={foto2} alt="Todos juntos" />
                  </div>
                  <p>Amor, você é um dos maiores presentes que Deus me deu.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="divisor-romantico">
            <span>❤</span>
          </div>

          <section className="especiais aparecer-suave delay-4">
            <div className="especiais-card">
              <p className="tag-topo">Por que vocês são especiais para mim?</p>

              <div className="especiais-grid">
                <div className="especial-item">
                  <h3>Minha Mãe 🌷</h3>
                  <ul>
                    <li>Por ser meu maior exemplo de força</li>
                    <li>Por todo amor e cuidado de sempre</li>
                    <li>Por estar ao meu lado em todos os momentos</li>
                  </ul>
                </div>

                <div className="especial-item">
                  <h3>Minha Namorada 💖</h3>
                  <ul>
                    <li>Por deixar meus dias mais leves e felizes</li>
                    <li>Por todo carinho e companheirismo</li>
                    <li>Por ser uma pessoa tão especial na minha vida</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="frase-emocionante aparecer-suave delay-4">
            <div className="frase-emocionante-card">
              <p>
                Algumas pessoas tornam a vida mais bonita simplesmente por existirem.
              </p>
              <h3>Minha mãe e minha namorada são duas delas. ❤️</h3>
            </div>
          </section>

          <div className="divisor-romantico">
            <span>❤</span>
          </div>

          <section className="mensagem-final aparecer-suave delay-4">
            <div className="mensagem-final-card">
              <h3>Com todo meu carinho ✨</h3>
              <p>
                Hoje eu celebro duas mulheres que fazem minha vida ser mais
                bonita. Minha mãe, por toda a força, amor e cuidado de sempre.
                Minha namorada, por todo carinho, leveza e felicidade que traz
                para os meus dias. Essa homenagem é uma forma de registrar, com
                todo meu coração, o quanto vocês são especiais para mim.
              </p>
            </div>
          </section>

          <footer className="rodape aparecer-suave delay-4">
            Com todo meu carinho,
            <br />
            Caio ❤️
          </footer>

          {cartaAberta && (
            <div className="modal-overlay" onClick={() => setCartaAberta(false)}>
              <div className="envelope-carta" onClick={(e) => e.stopPropagation()}>
                <div className="envelope-topo"></div>

                <div className="modal-carta">
                  <div className="topo-carta">
                    <h3>Uma carta para vocês</h3>
                    <p>Escrita com carinho neste Dia das Mulheres</p>
                  </div>

                  <div className="conteudo-carta">
                    <p>
                      Hoje eu só quero agradecer. Agradecer por ter na minha
                      vida duas mulheres tão especiais, cada uma com sua
                      importância, sua beleza e sua força.
                    </p>
                    <p>
                      À minha mãe, por todo amor, cuidado, dedicação e por ser
                      meu exemplo de força todos os dias. E à minha namorada,
                      por ser essa pessoa tão especial, que deixa minha vida
                      mais leve, mais feliz e mais bonita.
                    </p>
                    <p>
                      Esse site é uma forma simples de transformar sentimento em
                      homenagem. Que este dia seja cheio de carinho,
                      reconhecimento e alegria, porque vocês merecem tudo de
                      melhor.
                    </p>
                    <p className="assinatura-carta">Com todo meu amor. ❤️</p>
                  </div>

                  <button
                    className="botao-fechar"
                    onClick={() => setCartaAberta(false)}
                  >
                    Fechar carta
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}