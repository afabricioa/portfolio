<script setup>
</script>

<template>
    <v-container ref="sobre" class="conteudo">
        <div>
            <v-img
                aspect-ratio="16/9"
                cover
                src="src/assets/me.jpeg"
                class="h-[250px] w-[250px] rounded-[200px]"
                ></v-img>
        </div>
        <div class="flex flex-col gap-4 w-[50%] text-justify">
            <div>
                <h3 class="text-[20px]">Sobre mim</h3>
            </div>
            <div>
                <h3 class="font-bold text-[25px]">Antônio Fabrício</h3>
            </div>
            <div class="text-[15px]">
                <ul class="grid gap-y-4">
                    <li class="flex">
                        <div>
                            <v-img
                            :width="25"
                            aspect-ratio="1/1"
                            cover
                            src="src/assets/work.png"
                            class="h-[25px]"
                            ></v-img>
                        </div>
                        <div class="ml-2">
                            Desenvolvedor Pleno com experiência Full Stack desde 2020
                        </div>
                    </li>
                    <li class="flex">
                        <div>
                            <v-img
                            :width="25"
                            aspect-ratio="1/1"
                            cover
                            src="src/assets/education.png"
                            class="h-[25px]"
                            ></v-img>
                        </div>
                        <div class="ml-2">
                            Formado em Ciência da Computação
                        </div>
                    </li>
                    <li class="flex">
                        <div>
                            <v-img
                            :width="25"
                            aspect-ratio="1/1"
                            cover
                            src="src/assets/bulb.png"
                            class="h-[25px]"
                            ></v-img>
                        </div>
                        <div class="ml-2">
                            Interesse em front-end, back-end, estudando desenvolvimento Fullcycle
                        </div>
                    </li>
                    <li class="flex">
                        <div>
                            <v-img
                                :width="20"
                                aspect-ratio="1/1"
                                cover
                                src="src/assets/rocket.png"
                                class="h-[20px]"
                                ></v-img>
                        </div>
                        <div class="ml-3">
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
            <div class="w-auto bg-[#434361] rounded-lg flex justify-center align-center flex-col p-6">
                <div class="w-[50px] h-[50px] bg-[#6395f2] rounded-[50%] p-2">
                    <v-img
                        :width="40"
                        aspect-ratio="1/1"
                        cover
                        src="src/assets/tecs/frontend.png"
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
                            src="src/assets/stacks/css.png"
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
                            src="src/assets/stacks/js.png"
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
                            src="src/assets/stacks/react.png"
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
                            src="src/assets/stacks/next.png"
                            class="h-[40px]"
                            >
                            <v-tooltip
                                activator="parent"
                                location="top"
                            >NextJS</v-tooltip>
                        </v-img>
                    </li>
                </ul>
            </div>
            <div class="w-auto bg-[#434361] rounded-lg flex justify-center align-center flex-col p-4">
                <div class="w-[50px] h-[50px] bg-[#6395f2] rounded-[50%] p-2">
                    <v-img
                        :width="40"
                        aspect-ratio="1/1"
                        cover
                        src="src/assets/tecs/backend.png"
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
                            src="src/assets/stacks/java.png"
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
                            src="src/assets/stacks/grails.png"
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
                            src="src/assets/stacks/nest.png"
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
                            src="src/assets/stacks/node.png"
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
                            src="src/assets/stacks/springboot.png"
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
            <div class="w-auto bg-[#434361] rounded-lg flex justify-center align-center flex-col p-4">
                <div class="w-[50px] h-[50px] bg-[#6395f2] rounded-[50%] p-2">
                    <v-img
                        :width="40"
                        aspect-ratio="1/1"
                        cover
                        src="src/assets/tecs/database.png"
                        class="h-[40px]"
                        ></v-img>
                </div>
                <h4 class="mt-4 font-bold text-[18px]">Database</h4>
                <div class="mt-4">
                    front-endfront-endfront-endfront-endfront-endfront-endfront-endfront-endfront-endfront-end
                </div>
                <ul class="mt-4 grid grid-cols-3 gap-6">
                    <li>
                        <v-img
                            :width="50"
                            aspect-ratio="1/1"
                            cover
                            src="src/assets/stacks/oracle.png"
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
                            src="src/assets/stacks/mysql.png"
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
                            src="src/assets/stacks/postgresql.png"
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
            <div class="w-auto bg-[#434361] rounded-lg flex justify-center align-center flex-col p-4">
                <div class="w-[50px] h-[50px] bg-[#6395f2] rounded-[50%] p-2">
                    <v-img
                        :width="40"
                        aspect-ratio="1/1"
                        cover
                        src="src/assets/tecs/devops.png"
                        class="h-[40px]"
                        ></v-img>
                </div>
                <h4 class="mt-4 font-bold text-[18px]">CI/CD</h4>
                <div class="mt-4">
                    front-endfront-endfront-endfront-endfront-endfront-endfront-endfront-endfront-endfront-end
                </div>
            </div>
        </div>
    </v-container>
</template>