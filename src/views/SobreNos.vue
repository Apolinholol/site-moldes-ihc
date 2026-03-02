<template>
  <main class="min-h-screen bg-yellow-300 p-6 md:p-12">
    <div class="max-w-5xl mx-auto">
      <header class="mb-12">
        <h1 class="text-4xl md:text-6xl font-black uppercase mb-4 border-b-8 border-black inline-block leading-tight">
          Sobre Nós
        </h1>
        <p class="text-xl text-black font-black uppercase tracking-tight">
          A união entre Tecnologia, Design e Humanidade.
        </p>
      </header>

      <div class="grid gap-8">
        <section class="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_black] hover:shadow-[8px_8px_0_0_black] transition-all">
          <h2 class="text-3xl font-black mb-6 uppercase tracking-tighter border-l-8 border-blue-600 pl-4">
            Nossa Missão Acadêmica
          </h2>
          <div class="font-serif text-black text-xl leading-relaxed space-y-4">
            <p>
              Este portal é uma iniciativa de pesquisa e desenvolvimento conduzida por alunos do curso de
              <strong>Bacharelado em Sistemas de Informação</strong> do
              <strong>IFF (Instituto Federal Fluminense)</strong>.
            </p>
            <p>
              No 7º período, mergulhamos na disciplina de <strong>Interação Homem-Máquina (IHC)</strong> para entender que software de alta performance não é apenas código otimizado, mas sim aquele que serve ao usuário com eficiência, satisfação e segurança.
            </p>
          </div>
        </section>

        <section class="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_black] hover:shadow-[8px_8px_0_0_black] transition-all">
          <h2 class="text-3xl font-black mb-6 uppercase tracking-tighter border-l-8 border-green-500 pl-4">
            O Projeto
          </h2>
          <div class="font-serif text-black text-xl leading-relaxed space-y-4">
            <p>
              Através de uma interface baseada no estilo <strong>Neo-brutalista</strong>, buscamos transformar conceitos complexos — como as 10 Heurísticas de Nielsen e a Psicologia da Gestalt — em uma experiência de aprendizado fluida e visualmente impactante.
            </p>
            <p>
              Nosso foco foi aplicar o <strong>Design Centrado no Usuário</strong> para garantir que cada componente deste site respire as boas práticas que ensinamos na nossa documentação.
            </p>
          </div>
        </section>

        <section class="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_black] hover:shadow-[8px_8px_0_0_black] transition-all">
          <h2 class="text-3xl font-black mb-6 uppercase tracking-tighter border-l-8 border-purple-600 pl-4">
            Compromisso com a Usabilidade
          </h2>
          <div class="font-serif text-black text-xl leading-relaxed">
            <p>
              Como futuros profissionais de SI, acreditamos que a ponte entre a tecnologia e a sociedade é construída através de interfaces intuitivas. Este projeto reafirma o compromisso do <strong>IFF</strong> com a formação de desenvolvedores que priorizam a usabilidade e a acessibilidade como pilares fundamentais da engenharia de software moderna.
            </p>
          </div>
        </section>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
          <div class="border-4 border-black p-4 text-center bg-white shadow-[4px_4px_0_0_black]">
            <p class="text-[10px] font-black uppercase opacity-60">Instituição</p>
            <p class="font-black text-lg uppercase tracking-tighter">IFF Itaperuna</p>
          </div>
          <div class="border-4 border-black p-4 text-center bg-white shadow-[4px_4px_0_0_black]">
            <p class="text-[10px] font-black uppercase opacity-60">Curso</p>
            <p class="font-black text-lg uppercase tracking-tighter">Sistemas Inf.</p>
          </div>
          <div class="border-4 border-black p-4 text-center bg-white shadow-[4px_4px_0_0_black]">
            <p class="text-[10px] font-black uppercase opacity-60">Disciplina</p>
            <p class="font-black text-lg uppercase tracking-tighter">IHC</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.font-serif {
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
}

section {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
</style>
