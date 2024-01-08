<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>

<template>
    <v-container ref="sobre" class="conteudo">
        <div>
            <v-img
                aspect-ratio="16/9"
                cover
                src="./me.jpeg"
                class="h-[250px] w-[250px] rounded-[200px]"
                ></v-img>
        </div>
        <div class="topicos">
            <div>
                <h3 class="aboutme">Sobre mim</h3>
            </div>
            <div>
                <h3 class="nome">Antônio Fabrício</h3>
            </div>
            <div class="text-[15px]">
                <ul class="grid gap-y-4">
                    <li class="flex">
                        <div>
                            <v-img
                            :width="25"
                            aspect-ratio="1/1"
                            cover
                            src="./work.png"
                            class="h-[25px]"
                            ></v-img>
                        </div>
                        <div class="descricao">
                            Desenvolvedor Pleno com experiência Full Stack desde 2020
                        </div>
                    </li>
                    <li class="flex">
                        <div>
                            <v-img
                            :width="25"
                            aspect-ratio="1/1"
                            cover
                            src="./education.png"
                            class="h-[25px]"
                            ></v-img>
                        </div>
                        <div class="descricao">
                            Formado em Ciência da Computação
                        </div>
                    </li>
                    <li class="flex">
                        <div>
                            <v-img
                            :width="25"
                            aspect-ratio="1/1"
                            cover
                            src="./bulb.png"
                            class="h-[25px]"
                            ></v-img>
                        </div>
                        <div class="descricao">
                            Interesse em front-end, back-end, estudando desenvolvimento Fullcycle
                        </div>
                    </li>
                    <li class="flex">
                        <div>
                            <v-img
                                :width="20"
                                aspect-ratio="1/1"
                                cover
                                src="./rocket.png"
                                class="h-[20px]"
                                ></v-img>
                        </div>
                        <div class="descricao">
                            Busco realocação para trabalhar como desenvolvedor
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </v-container>
    <v-container class="flex flex-col justify-center align-center text-center">
        <div class="text-[22px] text-justify">
            Tecnologias
        </div>
        <div class="tecnologias">
            <div class="w-auto bg-[#283593] rounded-lg flex justify-center align-center flex-col p-6">
                <div class="w-[50px] h-[50px] bg-[#6395f2] rounded-[50%] p-2">
                    <v-img
                        :width="40"
                        aspect-ratio="1/1"
                        cover
                        src="./frontend.png"
                        class="h-[40px]"
                        ></v-img>
                </div>
                <h4 class="mt-4 font-bold text-[18px]">Frontend</h4>
                <div class="mt-4 h-[45%]">
                    Desenvolvimento de sites, desde projetos simples até soluções complexas, garantindo uma experiência do usuário excepcional. Minha abordagem envolve a criação de sites responsivos, utilizando frameworks e bibliotecas modernas para alcançar padrões de alta qualidade.
                </div>
                <ul class="mt-4 grid grid-cols-4 gap-6">
                    <li>
                        <v-img
                            :width="40"
                            aspect-ratio="1/1"
                            cover
                            src="./css.png"
                            class="h-[40px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >CSS</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="40"
                            aspect-ratio="1/1"
                            cover
                            src="./js.png"
                            class="h-[40px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >JavaScript</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="40"
                            aspect-ratio="1/1"
                            cover
                            src="./react.png"
                            class="h-[40px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >ReactJS</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="40"
                            aspect-ratio="1/1"
                            cover
                            src="./next.png"
                            class="h-[40px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >NextJS</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="65"
                            aspect-ratio="1/1"
                            cover
                            src="./tailwind.png"
                            class="h-[40px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >Tailwind</v-tooltip>
                        </v-img>
                    </li>
                </ul>
            </div>
            <div class="w-auto bg-[#283593] rounded-lg flex justify-center align-center flex-col p-4">
                <div class="w-[50px] h-[50px] bg-[#6395f2] rounded-[50%] p-2">
                    <v-img
                        :width="40"
                        aspect-ratio="1/1"
                        cover
                        src="./backend.png"
                        class="h-[40px]"
                        ></v-img>
                </div>
                <h4 class="mt-4 font-bold text-[18px]">Backend</h4>
                <div class="mt-4 h-[45%]">
                    Construção de APIs, sistemas robustos e escaláveis, utilização de arquiteturas modernas e codificação limpa para facilitar manutenção utilizando uma variedade de tecnologias.
                </div>
                <ul class="mt-4 grid grid-cols-5 gap-6">
                    <li>
                        <v-img
                            :width="40"
                            aspect-ratio="1/1"
                            cover
                            src="./java.png"
                            class="h-[40px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >Java</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="40"
                            aspect-ratio="1/1"
                            cover
                            src="./grails.png"
                            class="h-[40px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >Grails</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="40"
                            aspect-ratio="1/1"
                            cover
                            src="./nest.png"
                            class="h-[40px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >NestJS</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="40"
                            aspect-ratio="1/1"
                            cover
                            src="./node.png"
                            class="h-[40px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >Node.js</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="40"
                            aspect-ratio="1/1"
                            cover
                            src="./springboot.png"
                            class="h-[40px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >SpringBoot</v-tooltip>
                        </v-img>
                    </li>
                </ul>
            </div>
            <div class="w-auto bg-[#283593] rounded-lg flex justify-center align-center flex-col p-4">
                <div class="w-[50px] h-[50px] bg-[#6395f2] rounded-[50%] p-2">
                    <v-img
                        :width="40"
                        aspect-ratio="1/1"
                        cover
                        src="./database.png"
                        class="h-[40px]"
                        ></v-img>
                </div>
                <h4 class="mt-4 font-bold text-[18px]">Database</h4>
                <div class="mt-4">
                    Experiência com banco dados relacionais participando da definição, criação, manipulação de dados e tabelas de acordo com a necessidade e as especificações da modelagem.
                </div>
                <ul class="mt-4 grid grid-cols-3 gap-6">
                    <li>
                        <v-img
                            :width="50"
                            aspect-ratio="1/1"
                            cover
                            src="./oracle.png"
                            class="h-[50px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >Oracle</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="50"
                            aspect-ratio="1/1"
                            cover
                            src="./mysql.png"
                            class="h-[50px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >MySQL</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="50"
                            aspect-ratio="1/1"
                            cover
                            src="./postgresql.png"
                            class="h-[50px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >PostgreSQL</v-tooltip>
                        </v-img>
                    </li>
                </ul>
            </div>
            <div class="w-auto bg-[#283593] rounded-lg flex justify-center align-center flex-col p-4">
                <div class="w-[50px] h-[50px] bg-[#6395f2] rounded-[50%] p-2">
                    <v-img
                        :width="40"
                        aspect-ratio="1/1"
                        cover
                        src="./devops.png"
                        class="h-[40px]"
                        ></v-img>
                </div>
                <h4 class="mt-4 font-bold text-[18px]">CI/CD</h4>
                <div class="mt-4">
                    Estudando tecnologias para integração e entrega da aplicação em ambientes de teste e produção, mergulhado e criando projetos utilizando as melhores ferramentas que facilitem o deploy da aplicação nos ambientes criados.
                </div>
                <ul class="mt-4 grid grid-cols-4 gap-6">
                    <li>
                        <v-img
                            :width="50"
                            aspect-ratio="1/1"
                            cover
                            src="./aws.png"
                            class="h-[50px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >AWS</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="50"
                            aspect-ratio="1/1"
                            cover
                            src="./docker.png"
                            class="h-[50px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >Docker</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="50"
                            aspect-ratio="1/1"
                            cover
                            src="./github.png"
                            class="h-[50px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >GitHub</v-tooltip>
                        </v-img>
                    </li>
                    <li>
                        <v-img
                            :width="50"
                            aspect-ratio="1/1"
                            cover
                            src="./gitlab.png"
                            class="h-[50px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >GitLab</v-tooltip>
                        </v-img>
                    </li>
                </ul>
            </div>
        </div>
    </v-container>
    <v-container class="flex flex-col justify-center align-center text-center mb-[20px]">
        <div class="text-[22px] text-justify">
            Projetos
        </div>
        <div class="projetos">
            <v-card class="cardProjeto">
                <v-img
                    src="./pcli.png"
                    height="200px"
                ></v-img>

                <v-card-title>
                    PCLI Elite Coders
                </v-card-title>

                <v-btn
                    color="indigo-darken-2"
                    size="small"
                    @click="show = !show"
                    class="text-white"
                >
                    Ver Mais
                </v-btn>

                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>
                        <v-card-text>
                            Replica de uma landing page feita com ReactJS e Tailwind, se comporta de forma responsiva para todas as principais resoluções
                        </v-card-text>
                    </div>
                </v-expand-transition>
                <div class="flex justify-around mt-4">
                    <div class="flex flex-row bg-white border-[1px] border-[#283593] p-[3px] rounded cursor-pointer">
                        <v-img
                            :width="20"
                            aspect-ratio="1/1"
                            cover
                            src="./github.png"
                            class="h-[20px]"
                            ></v-img>
                            <h5 class="ml-2 hover:font-bold">
                            <a href="https://github.com/afabricioa/pcli-elitecoders" target="_blank">
                                Repositório
                            </a>
                        </h5>
                    </div>
                    <div class="flex flex-row bg-white border-[1px] border-[#283593] p-[3px] rounded cursor-pointer">
                        <v-img
                            :width="20"
                            aspect-ratio="1/1"
                            cover
                            src="./aws.png"
                            class="h-[20px] mt-[3px]"
                            ></v-img>
                        <h5 class="ml-2 hover:font-bold">
                            <a href="https://pcli-elitecoders-challenge.s3.sa-east-1.amazonaws.com/index.html" target="_blank">
                                Deploy
                            </a>
                        </h5>
                    </div>
                </div>
            </v-card>
        </div>
    </v-container>
</template>