
<template>
  <div>
    <p >666</p>
   <p ref="p"> {{a}}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      a: 100,
    };
  },
  methods:{
    handleClick(){
}
  },
 
  beforeCreate() {},
  created(){
    console.log(this.a)
    console.log(this.handleClick)
    console.log(this.$el) //dom节点

  },
  async mounted(){
    console.log(this.$el)
    this.a=200
    // this.$nextTick(()=>{ //在改变变量后操作dom
    // console.log(this.$refs.p.innerHTML)
    // })
      await this.$nextTick() //当节点全部挂载完成后操作dom
    console.log(this.$refs.p.innerHTML) 
  },
  Update(){
    console.log(this.a)
  }
 
};
</script>

