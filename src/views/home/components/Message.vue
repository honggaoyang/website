<template>
  <div class="h-msg">
    <feedback>
      <h2>给我们留言</h2>
    </feedback>
  </div>
</template>

<script>
import feedback from '@/components/feedback/Feedback';
export default {
  components: {
    feedback,
  },
};
</script>

<style scoped>
.h-msg {
  background-color: #b09c70;
  padding: 60px 0;
  width: 100%;
}
h2 {
  font-size: 25px;
  text-align: center;
  color: #f5f5f5;
  padding: 20px 0;
}
</style>