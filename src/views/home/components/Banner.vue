<template>
  <div class="homeBanner">
    <h1>Fashion models</h1>
    <h6>SPEAL FOR FASHION</h6>
  </div>
</template>

<script>
export default {};
</script>

<style>
.homeBanner {
  background-image: url('../../../assets/banner.jpg');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: auto;
  width: 100%;
  height: 840px;
  z-index: 8;
  position: relative;
}

.homeBanner h1 {  
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 70px;
  color: #b09c70;
  text-align: center;
}
.homeBanner h6 {
  position: absolute; 
  left: 50%;
  bottom: 80px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 28px;
  font-weight: 400;
  color: #f5f5f5;
  text-align: center;
}
</style>