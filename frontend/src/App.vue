<script setup lang="ts">
import Header from "./components/HeaderComponent.vue";
import Main from "./components/MainComponent.vue";
import Aside from "./components/AsideComponent.vue";
import Item from "./components/ItemComponent.vue";
import Article from "./components/ArticleComponent.vue";
</script>

<template>
  <div class="flex grow flex-col justify-center gap-2 text-black">
    <Header class="flex justify-center bg-green-500 text-black"></Header>
    <div class="flex gap-4">
      <Main class="flex grow-2 flex-col items-center bg-gray-500 p-2">
        <div class="flex w-full flex-col gap-2">
          <Article class="grow bg-purple-500">
            <p>content</p>
          </Article>
          <Article class="grow bg-purple-500">
            <p>content</p>
          </Article>
        </div>
      </Main>
      <Aside class="flex grow-1 flex-col items-center bg-green-300 p-2">
        <div class="flex w-full flex-col gap-2">
          <Item class="bg-blue-600">
            <p>content</p>
          </Item>
          <Item class="bg-blue-600">
            <p>content</p>
          </Item>
          <Item class="bg-blue-600">
            <p>content</p>
          </Item>
        </div>
      </Aside>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
