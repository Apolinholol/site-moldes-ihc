<template>
  <div class="flex flex-col">
    <section id="SectionIntro">
      <h1 class="text-3xl font-black text-black leading-tight w-fit fascinate-inline-regular mb-4">
        Ferramentas Utilizadas no Projeto
      </h1>
      <p class="merriweather-body text-lg text-gray-700 leading-relaxed">
        Durante o desenvolvimento da aplicação foram usadas ferramentas de avaliação de desempenho,
        acessibilidade e seleção de cores. A seguir estão descritas as principais que influenciaram
        o design e a implementação da interface:
      </p>
    </section>

    <section id="SectionFerramentas" class="my-6">
      <div class="grid md:grid-cols-2 gap-6">
        <article class="border-4 border-orange-900 bg-orange-200 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] p-6">
          <header>
            <h2 class="text-orange-900 font-black text-xl leading-tight w-fit fascinate-inline-regular">
              Lighthouse do Navegador
            </h2>
          </header>
          <p class="merriweather-body text-lg text-orange-800 mt-2 leading-relaxed">
            A ferramenta de auditoria embutida nos navegadores Chrome e Edge permite gerar
            relatórios automáticos sobre desempenho, acessibilidade, melhores práticas e SEO. Ela
            foi utilizada durante as revisões para identificar pontos de melhoria como tempo de
            carregamento, contraste de cores e presença de ARIA. O relatório gerado também serviu de
            orientação para corrigir avisos de acessibilidade e renderização.
          </p>
          <p class="merriweather-body text-lg mt-2 leading-relaxed">
            <span class="text-orange-800 font-black">Link: </span>
            <a href="https://developers.google.com/web/tools/lighthouse" target="_blank"
              class="text-orange-600 underline hover:text-orange-700">https://developers.google.com/web/tools/lighthouse</a>
          </p>
        </article>

        <article class="border-4 border-cyan-900 bg-cyan-200 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] p-6">
          <header>
            <h2 class="text-cyan-900 font-black text-xl leading-tight w-fit fascinate-inline-regular">
              ColorShark.io
            </h2>
          </header>
          <p class="merriweather-body text-lg text-cyan-800 mt-2 leading-relaxed">
            Serviço online para explorar paletas de cores acessíveis e compatíveis com WCAG.
            Utilizamos o ColorShark para escolher combinações de texto e fundo que cumprissem os
            requisitos de contraste e para exportar as cores em formatos CSS. Essa ferramenta
            acelerou a definição da identidade visual e garantiu legibilidade em diferentes temas.
          </p>
          <p class="merriweather-body text-lg mt-2 leading-relaxed">
            <span class="text-cyan-800 font-black">Link: </span>
            <a href="https://colorshark.io" target="_blank"
              class="text-sky-600 underline hover:text-sky-700">https://colorshark.io</a>
          </p>
        </article>

        <article class="border-4 border-lime-900 bg-lime-200 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] p-6">
          <header>
            <h2 class="text-lime-900 font-black text-xl leading-tight w-fit fascinate-inline-regular">
              WAVE
            </h2>
          </header>
          <p class="merriweather-body text-lg text-lime-800 mt-2 leading-relaxed">
            O avaliador WAVE foi usado para inspecionar a página em busca de erros de
            acessibilidade, como imagens sem alt ou estruturas de cabeçalho inconsistentes. As
            correções foram aplicadas conforme indicado. Os relatórios mostraram apenas alguns
            avisos iniciais que foram rapidamente resolvidos, melhorando a qualidade do código.
          </p>
          <p class="merriweather-body text-lg mt-2 leading-relaxed">
            <span class="text-lime-800 font-black">Link: </span>
            <a href="https://wave.webaim.org/" target="_blank"
              class="text-green-600 underline hover:text-green-700">https://wave.webaim.org/</a>
          </p>
        </article>

        <article class="border-4 border-violet-900 bg-violet-200 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] p-6">
          <h2 class="text-violet-900 font-black text-xl leading-tight w-fit fascinate-inline-regular">
            Estudos e Referências
          </h2>
          <ul class="list-disc pl-5 mt-2 list-inside merriweather-body leading-relaxed text-lg">
            <li>
              <a href="https://medium.com/@uidesign0005/the-impact-of-user-interface-design-on-user-experience-and-productivity-bfa12ea89b11"
                target="_blank" class="text-indigo-600 underline hover:text-indigo-800">
                Impacto do design de interface na experiência e produtividade
              </a>
              <span class="text-violet-800">– Artigo que discute o efeito do design de UI na eficiência do
                usuário.</span>
            </li>

            <li>
              <a href="https://www.cyngn.com/blog/human-machine-interface-hmi-in-factory-automation-what-you-need-to-know#:~:text=HMIs%20are%20used%20to%20streamline,enhance%20both%20productivity%20and%20safety."
                target="_blank" class="text-indigo-600 underline hover:text-indigo-800">
                HMI na automação industrial
              </a>
              <span class="text-violet-800">– Menciona alertas em tempo real e ganhos de segurança.</span>
            </li>
            <li>
              <a href="https://guia-wcag.com/" target="_blank" class="text-indigo-600 underline hover:text-indigo-800">
                Guia WCAG
              </a>
              <span class="text-violet-800">– Tradução em PTBR da WCAG 2.2 com explicações e exemplos de diferentes
                níveis de
                acessibilidade</span>
            </li>
          </ul>
        </article>

      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FerramentasView',
}
</script>

<style scoped>
/* não há estilos adicionais além dos utilitários Tailwind */
</style>
