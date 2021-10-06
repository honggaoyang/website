<template>
  <section class="pubCon">
    <div class="pubTit">
      <h2>简介</h2>
      <h3>INTRO</h3>
    </div>

    <div class="intro">
      <div class="intro-lf">
        <p class="tit">LIVE IN HARMONY WITH THE SEA</p>
        <div class="bigTit">保护海洋环境 与海洋和谐共处</div>
        <div class="introTtems">
          <div class="introTtem">
            <p class="icon"><i class="fa fa-institution"></i></p>
            <p class="number"><span>2000</span>年</p>
            <p class="line"></p>
            <p class="event">协会正式成立</p>
          </div>
          <div class="introTtem">
            <p class="icon"><i class="fa fa-lightbulb-o"></i></p>
            <p class="number"><span>500+</span></p>
            <p class="line"></p>
            <p class="event">举行活动场数</p>
          </div>
          <div class="introTtem">
            <p class="icon"><i class="fa fa-user-o"></i></p>
            <p class="number"><span>999+</span></p>
            <p class="line"></p>
            <p class="event">目前成员人数</p>
          </div>
        </div>
        <div class="intro-cont">
          自成立以来，一直致力于海洋环保公益活动，并重点将项目部署在海洋清洁、海洋生物多样性、海洋环保科普教育等方面。经过多年的发展，已成为我国具影响力的海洋环保公益组织。
        </div>
      </div>
      <div class="intro-rt">
        <img
          src="https://ntemimg.wezhan.cn/contents/sitefiles2046/10234661/images/-49557.jpg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.intro {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 80px;
  align-items: center;
}
.intro-lf {
  width: 47%;
}
.intro-lf .tit {
  font-weight: bold;
  color: #b09c70;
}
.intro-lf .bigTit {
  font-size: 30px;
  font-weight: bold;
  color: #333333;
}
.intro-lf .introTtems {
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 35px 0;
}
.intro-lf .introTtems .introTtem {
  width: 30%;
  background-color: #F5F5F5;
  padding-top: 20px;
}
.intro-lf .introTtems .introTtem .icon i {
  font-size: 40px;
}
.intro-lf .introTtems .introTtem .number {
  height: 50px;
  line-height: 50px;
}
.intro-lf .introTtems .introTtem .number span {
  font-size: 25px;
  font-weight: bold;
  color: #b09c70;
}
.intro-lf .introTtems .introTtem .line {
  width: 100%;
  height: 1px;
  border: 1px dashed;
  border-color: #AAAAAA;
}
.intro-lf .introTtems .introTtem .event {
  height: 50px;
  line-height: 50px;
}
.intro-lf .intro-cont {
  text-align: justify;
  line-height: 25px;
}
.intro-rt {
  width: 47%;
  text-align: right;
}
.intro-rt img {
  width: 480px;
  height: 570px;
}

/* 1200px */
@media (max-width: 1200px) {
  .intro {
    flex-direction: column-reverse;
  }
  .intro-lf {
    width: 90%;
    padding-top: 30px;
  }
  .intro-lf .bigTit {
    font-size: 24px;
  }
  .intro-rt {
    width: 90%;
  }
  .intro-rt img {
    width: 100%;
  }
}
</style>