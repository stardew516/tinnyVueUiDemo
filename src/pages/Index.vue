<template>
  <div class="content">
    <p>索引</p>
    <cell v-for="(item, idx) in cell" :key="item.content" :target="item.target" :icon-pic="item.pic"
          :text-content="item.content"
          :link="item.link"
          :first="idx===0"
          @item-tap="transPage"></cell>
  </div>
</template>

<script>
import Cell from 'tinny-vue-ui/src/Cell'
export default {
  components: {
    Cell: Cell
  },
  data () {
    return {
      first: true,
      cell: [
        {
          link: 'Inputs',
          pic: 'icon-inputs',
          content: '输入框组件',
          target: ''
        },
        {
          link: 'Cell',
          pic: 'icon-cell',
          content: 'cell组件',
          target: '_blank'
        },
        {
          link: 'Loading',
          pic: 'icon-loading',
          content: 'loading组件',
          target: '_blank'
        },
        {
          link: 'Popups',
          pic: 'icon-popups',
          content: '弹窗组件',
          target: '_blank'
        },
        {
          link: 'Tabbar',
          pic: 'icon-tabbar',
          content: 'tabbar组件',
          target: '_blank'
        },
        {
          link: 'Toast',
          pic: 'icon-toast',
          content: 'toast组件',
          target: '_blank'
        },
        {
          link: 'Buttons',
          pic: 'icon-buttons',
          content: 'button组件',
          target: '_blank'
        },
        {
          link: 'Page',
          pic: 'icon-page',
          content: 'page分页组件',
          target: '_blank'
        },
        {
          link: 'Switchs',
          pic: 'icon-switchs',
          content: 'switch开关',
          target: '_blank'
        },
        {
          link: 'Folder',
          pic: 'icon-folder',
          content: 'folder折叠面板',
          target: '_blank'
        },
        {
          link: 'ProgressBar',
          pic: 'icon-progress',
          content: 'progressBar进度条组件',
          target: '_blank'
        },
        {
          link: 'InputNum',
          pic: 'icon-inputNum',
          content: '加减计数器',
          target: '_blank'
        },
        {
          link: 'Stepbar',
          pic: 'icon-step',
          content: '步骤条',
          target: '_blank'
        }
      ]
    }
  },
  methods: {
    transPage (link) {
      this.$router.push({name: link})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
