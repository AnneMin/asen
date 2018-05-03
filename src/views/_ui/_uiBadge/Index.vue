<template>
  <div>
      <ui-badge :val="val" :max="max">评论</ui-badge>
  </div>
</template>

<script>
import '@/components/_ui/_uiBadge'
export default {
  data () {
    return {
      val: 101,
      max: 9
    }
  }
}
</script>
