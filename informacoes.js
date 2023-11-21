const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
const arryQuestions = [
  {
    question: "O que é o transtorno do Espectro Autista (TEA) ?",
    answer: 'É uma condição neuropsiquiátrica que afeta o desenvolvimento cerebral e impacta a maneira como uma pessoa se comunica, interage socialmente e apresenta comportamentos. O TEA é caracterizado por uma ampla variedade de sintomas e níveis de gravidade, resultando em uma "espectro" de manifestações.'
  },
  {
    question: "Como é confirmado o diagnóstico de TEA ?",
    answer: 'Geralmente é realizado por uma equipe de profissionais de saúde, como psiquiatras, psicólogos, neurologistas ou pediatras, com experiência em avaliação infantil. O processo de diagnóstico envolve várias etapas, e é importante que seja abrangente e leve em consideração diferentes áreas do desenvolvimento.'
  },
  {
    question: "O que são as estereotipias presentes no TEA ?",
    answer: 'São comportamentos repetitivos, sem propósito aparente, que podem ser observados em pessoas com Transtorno do Espectro Autista (TEA). Esses comportamentos são uma das características comportamentais do TEA e podem manifestar-se de diversas formas.'
  },
  {
    question: "TEA tem cura, existe tratamento ?",
    answer: 'Atualmente, não há cura conhecida para o Transtorno do Espectro Autista (TEA). O TEA é uma condição neurobiológica complexa e permanente que afeta o desenvolvimento do cérebro, impactando a comunicação, o comportamento, as habilidades sociais e a interação com o ambiente.'
  },
  {
    question: "Quais são os direitos e benefícios sociais dos autistas ?",
    answer: 'Os direitos e benefícios sociais para pessoas com Transtorno do Espectro Autista (TEA) podem variar de acordo com o país e a legislação local. Aqui estão algumas considerações gerais sobre direitos e benefícios que podem ser aplicáveis em muitos lugares: /n   Educação Inclusiva, Assistência Médica, Benefícios Financeiros, Leis de Proteção e Igualdade, Acesso a Terapias e Intervenções, Transporte Acessível, Apoio à Empregabilidade e Acesso a Recursos Sociais e Comunitários. '
  },
  {
    question: "Como é confirmado o diagnóstico do TEA ?",
    answer: 'É complexo e geralmente envolve uma equipe multidisciplinar de profissionais de saúde. O processo de diagnóstico pode incluir os seguintes passos: \n    Avaliação inicial, Avaliação do Desenvolvimento, Avaliação Psicológica, Entrista e Observações, Critérios Diagnósticos, Avaliação Sensorial e Comportamental, Avaliação Médica e Colaboração entre Profissionais.'
  }

]



for(let i = 0; i < arryQuestions.length; i++){
  
  //manipular um elemento 

  div.getElementsByClassName.faq.innerHTML = `
  
    <div class="question${i + 1}">
      <h3>${arryQuestions[i].question}</h3>
                  
      <svg width="15" height="10" viewBox="0 0 42 25">
        <path d="M3 3L21 21L39 3 " stroke="white" stroke-width="7" stroke-linecap="round"/></path>
      </svg>
    </div>
    <div class="answer">
      <p>${arryQuestions[i].answer}</p>
    </div>
  

  `

  //Adicionar o elemento a página
  let section = document.querySelector("section");
  section.appendChild(div.className.faq);

}
