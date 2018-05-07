<template>
    <div class="_ui-badge">
        <i class="tip">{{showVal.val}}</i>
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
    showVal () {
      return {
        val: this.val > this.max ? this.max + '+' : this.val
      }
    }
  },
  watch: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
@import "styleMix";
@include ui-badge;
</style>
