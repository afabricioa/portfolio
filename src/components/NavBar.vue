<script setup>
</script>

<template>
    <nav class="flex items-center justify-center p-4 pt-[2vw] text-bold text-white text-[18px] font-[600px] text-black">
        <ul class="whitespace-nowrap flex items-center justify-between gap-12">
            <li @click="$emit('scrollToSecao', 'sobre')" class="hover:text-gray-300 cursor-pointer">Sobre</li>
            <li @click="$emit('scrollToSecao', 'tecnologias')" class="hover:text-gray-300 cursor-pointer">Tecnologias</li>
            <li @click="$emit('scrollToSecao', 'projetos')" class="hover:text-gray-300 cursor-pointer">Projetos</li>
            <li @click="$emit('scrollToSecao', 'contato')" class="hover:text-gray-300 cursor-pointer">Contatos</li>
        </ul>
    </nav>
</template>