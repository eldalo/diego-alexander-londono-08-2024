<template>
  <header class="fixed bg-primary py-5 w-full z-10">
    <section class="container mx-auto px-4 md:px-0">
      <nav
        class="flex flex-col space-x-4 items-center justify-between md:flex-row"
      >
        <router-link
          to="/"
          class="font-pokemonHollow cursor-pointer title text-4xl text-white"
          tag="h1"
        >
          Pokemon
        </router-link>
        <ul class="flex space-x-4 mt-4 md:mt-0">
          <li>
            <router-link
              to="/team"
              class="cursor-pointer text-yellow-400 transition-all hover:underline hover:text-yellow-500"
            >
              My Team ({{ countTeam() }})
            </router-link>
          </li>
        </ul>
      </nav>
    </section>
  </header>
  <main class="h-full pt-32 md:pt-16">
    <section class="container mx-auto px-4 md:px-0">
      <router-view />
      <Toast v-if="toastMessage" :message="toastMessage" :type="toastType" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { useTeam } from './store/team';
import { useToast } from './store/toast';

import Toast from './components/toast/Toast.vue';

const { countTeam } = useTeam();
const { toastMessage, toastType } = useToast();
</script>
