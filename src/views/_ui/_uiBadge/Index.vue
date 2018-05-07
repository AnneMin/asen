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
      val: 30,
      max: 20
    }
  }
}
</script>
