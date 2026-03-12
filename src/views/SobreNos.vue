<template>
  <main class="min-h-screen bg-yellow-50 p-6 md:p-12">
    <div class="max-w-5xl mx-auto">
      <header>
        <h1 class="text-4xl font-black text-black leading-tight w-fit fascinate-inline-regular mb-4 uppercase">
          Sobre Nós
        </h1>
      </header>

      <div class="grid gap-8">
        <!-- bg-yellow-300 p-6 border-4 border-black mt-6 p-4 my-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] -->
        <section class="bg-gray-50 border-4 border-black p-8 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
          <h2
            class="text-3xl font-black text-black leading-tight w-fit fascinate-inline-regular mb-4 uppercase border-l-8 border-blue-600 pl-4">
            Nossa Missão Acadêmica
          </h2>
          <div class="font-serif merriweather-body text-base sm:text-2xl bg-gray-50 leading-relaxed">
            <p class="mb-3">
              Este portal é uma iniciativa de pesquisa e desenvolvimento conduzida por alunos do curso de
              <strong class="font-black">Bacharelado em Sistemas de Informação</strong> do
              <strong class="font-black">IFF (Instituto Federal Fluminense)</strong>.
            </p>
            <p>
              No 7º período, mergulhamos na disciplina de <strong class="font-black">Interação Homem-Máquina
                (IHC)</strong> para entender que software de alta performance não é apenas código otimizado, mas sim
              aquele que serve ao usuário com eficiência, satisfação e segurança.
            </p>
          </div>
        </section>

        <section class="bg-gray-50 border-4 border-black p-8 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
          <h2
            class="text-3xl font-black text-black leading-tight w-fit fascinate-inline-regular mb-4 uppercase border-l-8 border-green-500 pl-4">
            O Projeto
          </h2>
          <div class="font-serif merriweather-body text-base sm:text-2xl bg-gray-50 leading-relaxed">
            <p>
              Através de uma interface baseada no estilo <strong class="font-black">Neo-brutalista</strong>, buscamos
              transformar conceitos complexos — como as 10 Heurísticas de Nielsen e a Psicologia da Gestalt — em uma
              experiência de aprendizado fluida e visualmente impactante.
            </p>
            <p>
              Nosso foco foi aplicar o <strong class="font-black">Design Centrado no Usuário</strong> para garantir que
              cada componente deste site respire as boas práticas que ensinamos na nossa documentação.
            </p>
          </div>
        </section>

        <section class="bg-gray-50 border-4 border-black p-8 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
          <h2
            class="text-3xl font-black text-black leading-tight w-fit fascinate-inline-regular mb-4 uppercase border-l-8 border-purple-600 pl-4">
            Compromisso com a Usabilidade
          </h2>
          <div class="font-serif merriweather-body text-base sm:text-2xl bg-gray-50 leading-relaxed">
            <p>
              Como futuros profissionais de SI, acreditamos que a ponte entre a tecnologia e a sociedade é construída
              através de interfaces intuitivas. Este projeto reafirma o compromisso do <strong
                class="font-black">IFF</strong> com a formação de desenvolvedores que priorizam a usabilidade e a
              acessibilidade como pilares fundamentais da engenharia de software moderna.
            </p>
          </div>
        </section>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          <div class="border-4 border-black p-4 text-center bg-gray-50 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
            <p class="text-[10px] font-black uppercase opacity-60">Instituição</p>
            <p class="font-black text-lg uppercase tracking-tighter">IFF Itaperuna</p>
          </div>
          <div class="border-4 border-black p-4 text-center bg-gray-50 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
            <p class="text-[10px] font-black uppercase opacity-60">Curso</p>
            <p class="font-black text-lg uppercase tracking-tighter">Sistemas de Inf.</p>
          </div>
          <div class="border-4 border-black p-4 text-center bg-gray-50 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
            <p class="text-[10px] font-black uppercase opacity-60">Disciplina</p>
            <p class="font-black text-lg uppercase tracking-tighter">IHC</p>
          </div>
        </div>

        <section class="border-4 border-black p-6 text-center bg-gray-50 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
          <h2
            class="text-[10px] font-black uppercase opacity-60">
            Integrantes
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            <div class="py-2">
              <p class="font-black text-base uppercase tracking-tighter">Matheus Lopes Couto Neves</p>
            </div>
            <div class="py-2">
              <p class="font-black text-base uppercase tracking-tighter">Bruno Apolinário da Silva</p>
            </div>
            <div class="py-2">
              <p class="font-black text-base uppercase tracking-tighter">Luiz Phelippe S. A. de M. e Souza</p>
            </div>
            <div class="py-2">
              <p class="font-black text-base uppercase tracking-tighter">Gabriel de Souza Almeida</p>
            </div>
            <div class="py-2">
              <p class="font-black text-base uppercase tracking-tighter">Danilo Batista Reilly</p>
            </div>
            <div class="py-2">
              <p class="font-black text-base uppercase tracking-tighter">Rafael Carvalho Pinheiro</p>
            </div>
          </div>
        </section>
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
