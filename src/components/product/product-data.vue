<template>
  <div>
    <div :style="{height:height,width:width}" class="valueCard">
      <p class="title">{{title}}</p>
      <p class="value">{{value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title:{
      type:String,
      default:"总销售收入"
    },
    value:{
      type:String,
      default:"1716万元"
    },
    width: {
      type: String,
      default: "200px"
    },
    height: {
      type: String,
      default: "200px"
    }
  }
};
</script>

<style lang="scss" scoped>
.valueCard{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 4px;

  .title{
    font-size: 20px;
    font-weight: 600;
  }
  .value{
    margin-top: -10px;
  }
}
</style>