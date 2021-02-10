<template>
  <div>
    <ul>
      <li
        v-for="(breadcrumb, index) in breadcrumbList"
        :key="index"
        @click="routeTo(index)"
        :class="{'linked': !!breadcrumb.link}"
      >
        {{ breadcrumb.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',

  data () {
    return {
      breadcrumbList: []
    }
  },

  mounted() {
    this.updateList()
  },

  watch: {
    '$route'() {
      this.updateList()
    }
  },

  methods: {
    routeTo(crumb) {
      if (this.breadcrumbList[crumb].link) {
        this.$router.push(this.breadcrumbList[crumb].link)
      }
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  font-family: 'Karla';
  font-size: 17px;
  margin: 0;
  padding: 0;
}

ul > li {
  display: flex;
  width: auto;
  cursor: default;
  align-items: center;
}

ul > li:not(:last-child)::after {
  content: '>';
  font-weight: 600;
  margin: 0 10px;
  cursor: default;
}

.linked {
  cursor: pointer;
  font-weight: 900;
}
</style>
