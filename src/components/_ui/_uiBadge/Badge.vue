<template>
    <div class="_ui-badge">
        <i class="tip" @click="maxDigit">{{val}}</i>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'UiSteps',
  props: {
    val: [String, Number],
    max: {
      type: Number,
      default: 1000
    }
  },
  computed: {
    // maxDigit () {
    // return this.val > this.max ? this.val = '99+' : this.val
    // }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
    @import "styleMix";
    @include ui-badge;
</style>
