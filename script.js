//======================================
// Detecta se o foco veio da tecla TAB
//======================================

let tabPressionado = false;

document.addEventListener("keydown", function(event){

    if(event.key === "Tab"){

        tabPressionado = true;

    }

});

//======================================
// Fala o elemento focado
//======================================

document.addEventListener("focusin", function(event){

    if(!tabPressionado) return;

    tabPressionado = false;

    speechSynthesis.cancel();

    let elemento = event.target;
    const tabIndexAtual = document.activeElement.tabIndex;

    let texto = "";

    switch(elemento.tagName){

        case "H1":
        case "H2":
        case "H3":

            texto = "Título. " + elemento.innerText;
            break;

        case "P":

            texto = "Texto. " + elemento.innerText;
            break;

        case "FOOTER":

            texto = "Rodapé da página. " + elemento.innerText;
            break;

        case "FIGCAPTION":

            texto = "Texto da imagem. " + elemento.innerText;
            break;

        case "IMG":

            texto = "Imagem";
            break;

        case "BUTTON":

            texto = "Botão. " + elemento.innerText;
            break;

        case "DIV":

            if (tabIndexAtual == "23"){
               texto = "Leitor de Libras. ";
               break;
            }

        case "A":

            texto = "Link. " + elemento.innerText;
            break;

        case "INPUT":

            let label = document.querySelector(
                "label[for='" + elemento.id + "']"
            );

            if (label) {
                texto = "Campo " + label.innerText;
            } else {
                texto = "Campo de texto";
            }

            break;

    }

    if(texto !== ""){

        let fala = new SpeechSynthesisUtterance(texto);

        fala.lang = "pt-BR";
        fala.rate = 1;
        fala.pitch = 1;

        speechSynthesis.speak(fala);

    }

});

/* ==========================================
   AUMENTAR O TAMANHO DA FONTE
   ========================================== */

// Define o tamanho inicial da fonte em 18 pixels.
let tamanho = 18;

// Obtém o botão "A+" e executa a função quando ele for clicado.
document.getElementById("fonteMais").onclick = function () {

    // Aumenta o tamanho da fonte em 2 pixels.
    tamanho += 2;

    // Aplica o novo tamanho da fonte ao corpo da página.
    document.body.style.fontSize = tamanho + "px";

};


/* ==========================================
   DIMINUIR O TAMANHO DA FONTE
   ========================================== */

// Obtém o botão "A-" e executa a função quando ele for clicado.
document.getElementById("fonteMenos").onclick = function () {

    // Diminui o tamanho da fonte em 2 pixels.
    tamanho -= 2;

    // Atualiza o tamanho da fonte em toda a página.
    document.body.style.fontSize = tamanho + "px";

};


/* ==========================================
   ATIVAR/DESATIVAR O ALTO CONTRASTE
   ========================================== */

// Obtém o botão "Alto Contraste".
document.getElementById("contraste").onclick = function () {

    // Adiciona ou remove a classe "altoContraste"
    // sempre que o botão for pressionado.
    document.body.classList.toggle("altoContraste");
};


/* ==========================================
   ATIVAR/DESATIVAR O MODO ESCURO
   ========================================== */

// Obtém o botão "Modo Escuro".
document.getElementById("escuro").onclick = function () {

    // Adiciona ou remove a classe "dark",
    // alterando as cores da página.
    document.body.classList.toggle("dark");
};

/* ==========================================
   LEITURA COMPLETA DA PÁGINA
   ========================================== */

// Função para ler toda a página
function lerPagina() {

    // Interrompe qualquer leitura anterior
    speechSynthesis.cancel();

    // Seleciona os elementos que normalmente contêm texto
    const elementos = document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, footer, button, div"
    );

    let textoCompleto = "";
    let tipo = "";

    // Junta todos os textos em uma única string
    elementos.forEach(function(elemento){

        let texto = elemento.innerText.trim();

        switch(elemento.tagName){

            case "H1":
                tipo = "Título principal ";
                break;

            case "H2":
                tipo = "Título ";
                break;

            case "P":
                tipo = "Parágrafo ";
                break;

            case "BUTTON":
                tipo = "Botão ";
                break;

            case "FOOTER":

                tipo = "Rodapé da página ";
                break;

            case "DIV":

               if (elemento.className == "Libras"){
                  tipo = "Elemento ";
                  texto = "Leitor de Libras ";
               }

               break;

            default:
                tipo = "Elemento ";
        }

        if(texto !== ""){
            textoCompleto += tipo + texto + ". ";
        }

    });

    // Cria o objeto de fala
    const fala = new SpeechSynthesisUtterance(textoCompleto);

    fala.lang = "pt-BR";
    fala.rate = 1;     // velocidade
    fala.pitch = 1;    // tom
    fala.volume = 1;   // volume

    // Inicia a leitura
    speechSynthesis.speak(fala);
}

// Para interromper a leitura
function pararLeitura(){
    speechSynthesis.cancel();
}

// Função JavaScript que recebe a URL e altera o src da imagem
function trocarImagem(escolha) {
    if (event.type === 'click' || event.key === 'Enter') {
    const imagemnova=document.getElementById('imagemPrincipal');
    switch(escolha){
        case "1":
          urlNova = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIO8wpToEyimkKKWGxcggxb6rQKeWHxlCmtjBfuX4LEA&s=10';
          textoprincipal.innerText= "fases da lua";
          texto.innerText= "São as diferentes formas que o satélite natural aparenta ter visto da Terra, mudando conforme a sua posição em relação ao Sol e ao nosso planeta. São elas: Lua Nova, Quarto Crescente, Lua Cheia e Quarto Minguante"
          descrevefigura.innerText= "fase da lua ";
          break;
        case "2":
          urlNova = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYz_Bh_du-kJAc_QcVEC9kIJo8lW4boOnKZYQfFg_4lFIjrqI';
          textoprincipal.innerText="Lua Nova ";
          texto.innerText= "Lua Nova: A Lua fica entre a Terra e o Sol. O lado iluminado está virado para o lado oposto, então a Lua fica escura e quase invisível.";
          descrevefigura.innerText="imagem da lua nova ";
          break;
        case "3":
          urlNova = 'https://static.todamateria.com.br/upload/qu/ar/quartominguante-cke.jpg';
          textoprincipal.innerText="Lua Crescente";
          texto.innerText="A lua crescente é a fase em que a iluminação da Lua começa a aumentar após a lua nova, caminhando em direção à lua cheia";
          descrevefigura.innerText="imagem da lua crescente";
          break;
        case "4":
          urlNova = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2011-03-19_Superl%C3%BAa.jpg/250px-2011-03-19_Superl%C3%BAa.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail';
          textoprincipal.innerText="Lua cheia";
          texto.innerText="A lua cheia é uma das fases da lua em que a sua face voltada para a Terra fica totalmente iluminada pelo Sol";
          descrevefigura.innerText="imagem da lua cheia ";
          break;
        case "5":
          urlNova = 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2020/09/11/ritual-lua-minguante.jpg';
          textoprincipal.innerText="Lua Minguante";
          texto.innerText="Lua Minguante é a última fase do ciclo lunar, quando a luz visível do satélite começa a diminuir após a Lua Cheia.";
          descrevefigura.innerText="imagem da lua minguante";
          break;
        default:
          urlNova = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UeNw3QGE20nJR2QnocMZRkuyqtD4gQzbI9gvCTUDPEhO7m0uwY1zfqAH&s=10';
          textoprincipal.innerText="A Lua tem Luz propria";
          texto.innerText="Não, a Lua não tem luz própria. O brilho que vemos no céu à noite é, na verdade, a luz do Sol que bate na superfície da Lua e é refletida em direção à Terra.";
          descrevefigura.innerText="imagem da luz refletida na terra";
          break;
        }
    imagemnova.src = urlNova;
    lerCartao(textoprincipal.innerText, texto.innerText, descrevefigura.innerText);
    document.getElementById('textoprincipal').focus();
    }
}


/* ==========================================
   LEITURA DOS ELEMENTOS DO FLASHCARD ESCOLHIDO
   ========================================== */

// Função para ler toda a página
function lerCartao(texto1, texto2, texto3) {

    // Interrompe qualquer leitura anterior
    speechSynthesis.cancel();

    let textoCompleto = texto1 + ". " + texto2 + ". " + texto3;

    // Cria o objeto de fala
    const fala = new SpeechSynthesisUtterance(textoCompleto);

    fala.lang = "pt-BR";
    fala.rate = 1;     // velocidade
    fala.pitch = 1;    // tom
    fala.volume = 1;   // volume

    // Inicia a leitura
    speechSynthesis.speak(fala);
}
