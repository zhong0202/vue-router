<template>
  <div class="home">
    <HelloWorld msg="Home" />
    <div @click="add">{{ counter }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["add"]),
    // add1() {
    //   this.$store.commit("add");
    // },
  },
};
</script>
