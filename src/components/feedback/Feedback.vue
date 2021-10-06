<template>
  <div class="formInfo">
    <slot></slot>
    <p><input type="text" name="phone" placeholder="电话" /></p>
    <p><textarea placeholder="留言内容"></textarea></p>
    <p><input type="text" name="email" placeholder="邮箱" /></p>
    <p class="subBtn"><a href="###">提交</a></p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.formInfo {
  max-width: 500px;
  margin: auto;
}
.formInfo input,
.formInfo textarea {
  width: 100%;
  border: 1px solid;
  border-color: #F5F5F5;
  outline: none;
  height: 40px;
  background-color: #b09c70;
  color: #F5F5F5;
  margin-bottom: 20px;
  padding: 10px;
}
.formInfo textarea {
  height: 130px;
  resize: none;
}
.subBtn {
  display: flex;
  justify-content: flex-end;
}
.subBtn a {
  width: 100px;
  height: 36px;
  border: 1px solid;
  border-color: #b09c70;
  background-color: #F5F5F5;
  color: #b09c70;
  text-align: center;
  line-height: 36px;
  box-sizing: border-box;
  transition: 0.3s;
  display: block;
  text-decoration: none;
}
.subBtn a:hover {
  background-color: #d2b985;
  color: #F5F5F5;
}

/* 小于768 */
@media (max-width: 768px) {
  .formInfo {
    max-width: 90%;
    margin: auto;
  }
}
</style>