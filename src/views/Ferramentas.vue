<template>
  <div class="flex flex-col">
    <section id="SectionIntro" class="my-10">
      <h1 class="text-3xl font-black text-black leading-tight w-fit fascinate-inline-regular mb-4">
        Ferramentas Utilizadas no Projeto
      </h1>
      <p class="text-lg text-gray-700 leading-relaxed">
        Durante o desenvolvimento da aplicação foram usadas ferramentas de avaliação de desempenho,
        acessibilidade e seleção de cores. A seguir estão descritas as principais que influenciaram
        o design e a implementação da interface.
      </p>
    </section>

    <section id="SectionFerramentas" class="my-10">
      <div class="grid md:grid-cols-2 gap-6">
        <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-6">
          <header>
            <h2
              class="text-2xl font-black text-black leading-tight w-fit fascinate-inline-regular mb-4"
            >
              Lighthouse do Navegador
            </h2>
          </header>
          <p class="text-justify mb-4">
            A ferramenta de auditoria embutida nos navegadores Chrome e Edge permite gerar
            relatórios automáticos sobre desempenho, acessibilidade, melhores práticas e SEO. Ela
            foi utilizada durante as revisões para identificar pontos de melhoria como tempo de
            carregamento, contraste de cores e presença de ARIA. O relatório gerado também serviu de
            orientação para corrigir avisos de acessibilidade e renderização.
          </p>
          <p class="mb-2">
            Link:
            <a
              href="https://developers.google.com/web/tools/lighthouse"
              target="_blank"
              class="text-blue-600 underline"
              >https://developers.google.com/web/tools/lighthouse</a
            >
          </p>
        </article>

        <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-6">
          <header>
            <h2
              class="text-2xl font-black text-black leading-tight w-fit fascinate-inline-regular mb-4"
            >
              ColorShark.io
            </h2>
          </header>
          <p class="text-justify mb-4">
            Serviço online para explorar paletas de cores acessíveis e compatíveis com WCAG.
            Utilizamos o ColorShark para escolher combinações de texto e fundo que cumprissem os
            requisitos de contraste e para exportar as cores em formatos CSS. Essa ferramenta
            acelerou a definição da identidade visual e garantiu legibilidade em diferentes temas.
          </p>
          <p>
            Link:
            <a href="https://colorshark.io" target="_blank" class="text-blue-600 underline"
              >https://colorshark.io</a
            >
          </p>
        </article>

        <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-6">
          <header>
            <h2
              class="text-2xl font-black text-black leading-tight w-fit fascinate-inline-regular mb-4"
            >
              WAVE
            </h2>
          </header>
          <p class="text-justify mb-4">
            O avaliador WAVE foi usado para inspecionar a página em busca de erros de
            acessibilidade, como imagens sem alt ou estruturas de cabeçalho inconsistentes. As
            correções foram aplicadas conforme indicado. Os relatórios mostraram apenas alguns
            avisos iniciais que foram rapidamente resolvidos, melhorando a qualidade do código.
          </p>
          <p class="mb-2">
            Link:
            <a href="https://wave.webaim.org/" target="_blank" class="text-blue-600 underline"
              >https://wave.webaim.org/</a
            >
          </p>
        </article>
      </div>
    </section>

    <section
      id="SectionEstudos"
      class="px-6 my-10 border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-6"
    >
      <h2 class="text-2xl font-black text-black leading-tight w-fit fascinate-inline-regular mb-6">
        Estudos e Referências
      </h2>
      <ul class="list-disc list-inside space-y-3">
        <li>
          <a
            href="https://medium.com/@uidesign0005/the-impact-of-user-interface-design-on-user-experience-and-productivity-bfa12ea89b11"
            target="_blank"
            class="text-blue-600 underline"
          >
            Impacto do design de interface na experiência e produtividade
          </a>
          – Artigo que discute o efeito do design de UI na eficiência do usuário.
        </li>

        <li>
          <a
            href="https://www.cyngn.com/blog/human-machine-interface-hmi-in-factory-automation-what-you-need-to-know#:~:text=HMIs%20are%20used%20to%20streamline,enhance%20both%20productivity%20and%20safety."
            target="_blank"
            class="text-blue-600 underline"
          >
            HMI na automação industrial
          </a>
          – Menciona alertas em tempo real e ganhos de segurança.
        </li>
        <li>
          <a href="https://guia-wcag.com/" target="_blank" class="text-blue-600 underline">
            Guia WCAG
          </a>
          - Tradução em PTBR da WCAG 2.2 com explicações e exemplos de diferentes níveis de
          acessibilidade
        </li>
      </ul>
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
