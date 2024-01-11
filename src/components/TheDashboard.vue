<script>
  export default {
    data: () => ({
      show: false,
      showAma: false,
      idioma: localStorage.getItem("lng"),
      cinza: "grayscale hover:grayscale-0 cursor-pointer",
      selecionado: "grayscale-0 border-2 border-black"
    }),
    methods: {
        handleLanguage(idm){
            localStorage.setItem("lng", idm)
            location.reload()
        },
        openInNewTab(url) {
            window.open(url, '_blank', 'noreferrer');
        },
        downloadPdf() {
            // create element <a> for download PDF
            const nomePDF = this.idioma == "pt" ? "Antonio Fabricio - Desenvolvedor Pleno.pdf" : "Antonio Fabricio - Mid Developer.pdf"
            const link = document.createElement('a');
            link.href = `./${nomePDF}`;
            link.target = '_blank';
            link.download = nomePDF;

            // Simulate a click on the element <a>
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
  }
</script>

<template>
    <v-container class="language">
        <div>
            <v-img
                :width="60"
                aspect-ratio="1/1"
                cover
                src="./pt.png"
                class="h-[40px] rounded-lg"
                :class="[idioma == 'eng' ? cinza : selecionado]"
                @click="() => handleLanguage('pt')"
                >
                <v-tooltip
                    activator="parent"
                    location="top"
                >Português</v-tooltip></v-img>
        </div>
        <div>
            <v-img
                :width="60"
                aspect-ratio="1/1"
                cover
                src="./eng.png"
                class="h-[40px] rounded-lg"
                :class="[idioma == 'pt' ? cinza : selecionado]"
                @click="() => handleLanguage('eng')"
                >
                <v-tooltip
                    activator="parent"
                    location="top"
                >Inglês</v-tooltip></v-img>
        </div>
    </v-container>
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
                <h3 class="aboutme">{{$t("message.sobre")}}</h3>
            </div>
            <div>
                <h3 class="nome">Antônio Fabrício</h3>
                <h3>fabricio.a.s@hotmail.com</h3>
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
                            {{ $t("message.titulo") }}
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
                            {{ $t("message.formacao") }}
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
                            {{ $t("message.interesse") }}
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
                            {{ $t("message.busca") }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </v-container>
    <v-container class="flex justify-center">
        <div class="contatos">
            <div class="cursor-pointer">
                <v-img
                    :width="40"
                    aspect-ratio="1/1"
                    cover
                    src="./linkedin.png"
                    class="h-[40px] mt-[3px]"
                    @click="openInNewTab('https://www.linkedin.com/in/antoniofabricio/')"
                    ><v-tooltip
                        activator="parent"
                        location="top"
                    >Abrir LinkedIn</v-tooltip></v-img>
            </div>
            <div class="cursor-pointer">
                <v-img
                    :width="40"
                    aspect-ratio="1/1"
                    cover
                    src="./zap.png"
                    class="h-[40px] mt-[3px]"
                    @click="openInNewTab('https://wa.me/5586988409105')"
                    ><v-tooltip
                        activator="parent"
                        location="top"
                    >Enviar Mensagem</v-tooltip></v-img>
            </div>
            <div class="cursor-pointer">
                <v-img
                    :width="40"
                    aspect-ratio="1/1"
                    cover
                    src="./gith.png"
                    class="h-[40px] mt-[3px]"
                    @click="openInNewTab('https://github.com/afabricioa')"
                    ><v-tooltip
                        activator="parent"
                        location="top"
                    >Abrir GitHub</v-tooltip></v-img>
            </div>
        </div>
    </v-container>
    <v-container>
        <div class="flex justify-center">
            <v-btn elevation="8" @click="downloadPdf">{{ $t("message.curriculo") }}</v-btn>
        </div>
    </v-container>
    <v-container>
        <v-timeline>
            <v-timeline-item
                dot-color="purple-lighten-2"
                fill-dot
            >
            <template v-slot:opposite>
                2012 - 2018
            </template>
            <v-card>
                <v-card-title>
                    <h2 class="font-weight-light">
                        {{$t("message.graduacao")}}
                    </h2>
                </v-card-title>
                <v-card-text>
                    {{$t("message.textoGraduacao")}}
                </v-card-text>
            </v-card>
            </v-timeline-item>

            <v-timeline-item
                dot-color="amber-lighten-1"
                fill-dot
                size="x-small"
                >
                <template v-slot:opposite>
                    {{ $t("message.tempoAsatec") }}
                </template>
                <v-card>
                    <v-card-title class="bg-amber-lighten-1 justify-end">
                    <h2 class="me-4 font-weight-light">
                        {{$t("message.asatec")}}
                    </h2>
                    </v-card-title>
                    <v-card-text>
                        {{$t("message.textoAsatec")}}
                    </v-card-text>
                </v-card>
            </v-timeline-item>

            <v-timeline-item
                dot-color="cyan-lighten-1"
                fill-dot
            >
            <template v-slot:opposite>
                {{ $t("message.tempoRav") }}
            </template>
            <v-card>
                <v-card-title class="bg-cyan-lighten-1">
                <h2 class="font-weight-light">
                    {{$t("message.rav")}}
                </h2>
                </v-card-title>
                <v-card-text>
                    {{$t("message.textoRav")}}
                </v-card-text>
            </v-card>
            </v-timeline-item>

            <v-timeline-item
            dot-color="red-lighten-1"
            fill-dot
            size="x-small"
            >
            <template v-slot:opposite>
                {{ $t("message.tempoLider") }}
            </template>
            <v-card>
                <v-card-title class="bg-red-lighten-1 justify-end">
                <h2 class="me-4 font-weight-light">
                    {{$t("message.lider")}}
                </h2>
                </v-card-title>
                <v-card-text>
                    {{$t("message.textoLider")}}
                </v-card-text>
            </v-card>
            </v-timeline-item>

            <v-timeline-item
            dot-color="green-lighten-1"
            fill-dot
            >
            <template v-slot:opposite>
                {{ $t("message.temposAtuais") }}
            </template>
            <v-card>
                <v-card-text>
                    {{$t("message.diasAtuais")}}
                </v-card-text>
            </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
    <v-container class="flex flex-col justify-center align-center text-center">
        <div class="text-[22px] text-justify">
            {{ $t("message.tecs") }}
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
                    {{ $t("message.frontend") }}
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
                    {{ $t("message.backend") }}
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
                <h4 class="mt-4 font-bold text-[18px]">{{ $t("message.banco") }}</h4>
                <div class="mt-4 h-[40%]">
                    {{ $t("message.database") }}
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
                <div class="mt-4 h-[40%]">
                    {{ $t("message.cicd") }}
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
            {{ $t("message.projetos") }}
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
                    {{ show ? $t("message.verMenos") : $t("message.verMais") }}
                </v-btn>

                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>
                        <v-card-text>
                            {{ $t("message.pcli") }}
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
                                {{ $t("message.repositorio") }}
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
            <v-card class="cardProjeto">
                <v-img
                    src="./ama.png"
                    height="200px"
                ></v-img>

                <v-card-title>
                    AMA - API SpringBoot
                </v-card-title>

                <v-btn
                    color="indigo-darken-2"
                    size="small"
                    @click="showAma = !showAma"
                    class="text-white"
                >
                    {{ showAma ? $t("message.verMenos") : $t("message.verMais") }}
                </v-btn>

                <v-expand-transition>
                    <div v-show="showAma">
                        <v-divider></v-divider>
                        <v-card-text>
                            {{ $t("message.ama") }}
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
                            <a href="https://github.com/afabricioa/ama-desafio" target="_blank">
                                {{ $t("message.repositorio") }}
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
                            <a href="http://54.147.166.247:8080/swagger-ui/index.html" target="_blank">
                                Deploy
                            </a>
                        </h5>
                    </div>
                </div>
            </v-card>
        </div>
    </v-container>
</template>