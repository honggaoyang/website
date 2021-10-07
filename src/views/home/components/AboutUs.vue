<template>
  <section class="pubCon">
    <div class="pubTit">
      <h2>关于我们</h2>
      <h3>ABOUT US</h3>
    </div>
    <!-- 内容区域 -->
    <div class="aboCon">
      <article class="lt">{{ about_cont }}</article>
      <div class="rt">
        <img src="@/assets/banner.jpg" alt="" />
        <div class="boxLine"></div>
        <div class="btn">按钮</div>
      </div>
    </div>
    <!-- 分类区域 -->
    <div class="aboItems">
      <div class="item" v-for="item in itemList" :key="item.id">
        <i class="fa fa-camera-retro fa-2x"></i>
        <span>{{ item.title }}</span>
        <span>{{ item.content }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      about_cont:
        '为您不断创新并提供有关多个行业领域的高质量商业设计与营销培训课程，课程涉及服装如何搭配，服装陈列,陈列师培训、化妆、视觉营销培训,专为热爱界面设计的你而倾力打造。这里拥有无敌的创意、精美的视觉、国际化的意识和前瞻性思维！也许在不知不觉中，它将成为你设计路上的一位好伙伴，在你需要灵感的时候给予你帮助，鼓励你不断向前!',
      itemList: [
        //导航
        { id: '001', title: '穿衣', content: '穿衣品味是培养你时尚感的一步' },
        { id: '002', title: '化妆', content: '化妆让你拥有更完美的容颜更自信' },
        { id: '003', title: '塑性', content: '系统的塑性训练让你更有气质' },
        { id: '004', title: '穿衣', content: '穿衣品味是培养你时尚感的一步' },
      ],
    };
  },
};
</script>

<style scoped>
.aboCon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; /*垂直居中*/
}
.aboCon .lt {
  width: 50%;
  color: #aaaaaa;
  padding: 40px;
  line-height: 25px;
  text-align: justify;
}
.aboCon .rt {
  width: 50%;
  position: relative;
}
.aboCon .rt img {
  width: 100%;
}
.aboCon .rt .boxLine {
  position: absolute;
  width: 70%;
  height: 170px;
  border: 1px solid #b09c70;
  right: -20px;
  bottom: -20px;
  z-index: -1;
}
.aboCon .btn {
  background-color: #b09c70;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  position: absolute;
  bottom: 70px;
  left: -62px;
  cursor: pointer;
  padding: 8px 40px;
}
.aboItems {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 80px 0;
}
.aboItems .item {
  padding: 20px 20px;
  width: 25%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
}
.aboItems .item i {
  color: #b09c70;
}
.aboItems .item span:nth-child(2) {
  color: #333333;
  font-weight: bold;
  line-height: 50px;
  display: inline-block;
}

.aboItems .item span:nth-child(3) {
  color: #aaaaaa;
  line-height: 25px;
  display: inline-block;
}

/* 小于768 */
@media (max-width: 768px) {
  .aboCon {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }
  .aboCon .lt {
    width: 90%;
    padding: 0px;
  }
  .aboCon .rt {
    padding-top: 20px;
    padding-bottom: 50px;
    width: 90%;
  }
  .aboCon .rt img {
    width: 100%;
  }
  .aboCon .rt .boxLine {
    width: 90%;
    right: 5%;
    top: 0px;
  }
  .aboCon .btn {
    bottom: 35px;
    left: 30px;
  }
  .aboItems {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 30px 0;
  }
  .aboItems .item {
    width: 50%;
  }
}
</style>

