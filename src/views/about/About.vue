<template>
  <div>
    <sub-nav-banner />
    <div class="pubCon aboCon">
      <div class="aboImg">
        <img
          src="https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38651.png"
          alt=""
        />
        <div class="boxLine"></div>
        <div class="topLine"></div>
        <div class="bottmLine"></div>
        <div class="tit">
          <p>关于我们</p>
          <p>ABOUT US</p>
        </div>
      </div>
      <article>{{ about_cont }}</article>
      <!-- 分类区域 -->
      <div class="items">
        <div class="item" v-for="item in itemList" :key="item.id">
          <i class="fa fa-camera-retro fa-2x"></i>
          <span>{{ item.title }}</span>
          <span>{{ item.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubNavBanner from '@/components/banner/SubNavBanner';
import scrollRevealMixin from '@/mixin/scrollRevealMixin.js';
export default {
  components: { SubNavBanner },
  mixins: [scrollRevealMixin],
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
  padding: 100px 0;
}
.aboCon .aboImg {
  max-width: 820px;
  height: 500px;
  position: relative;
  margin: auto;
}
.aboCon .aboImg .boxLine {
  width: 100%;
  height: 100%;
  border: 1px solid #b09c70;
  position: absolute;
  top: 30px;
  left: 30px;
}
.aboCon .aboImg .tit {
  position: absolute;
  top: 70px;
  left: 50px;
}
.aboCon .aboImg .tit p:nth-child(1) {
  color: #f5f5f5;
  font-size: 30px;
  font-weight: bold;
}
.aboCon .aboImg .tit p:nth-child(2) {
  color: #f5f5f5;
  font-size: 18px;
  margin-top: 10px;
}
.aboCon .aboImg .topLine {
  width: 150px;
  height: 1px;
  background-color: #b09c70;
  position: absolute;
  top: 95px;
  left: -105px;
}
.aboCon .aboImg .bottmLine {
  width: 300px;
  height: 1px;
  background-color: #b09c70;
  position: absolute;
  bottom: 95px;
  right: -205px;
}
.aboCon img {
  width: 100%;
  height: 100%;
}
article {
  color: #aaaaaa;
  line-height: 30px;
  margin-top: 30px;
  max-width: 850px;
  margin: auto;
  margin-top: 60px;
}
.items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 80px;
}
.items .item {
  width: 25%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
  padding: 20px 20px;
}
.items .item i {
  color: #b09c70;
}
.items .item span:nth-child(2) {
  color: #333333;
  font-weight: bold;
  line-height: 50px;
}

.items .item span:nth-child(3) {
  color: #aaaaaa;
  line-height: 25px;
}

/* 小于768 */
@media (max-width: 870px) {
  .aboCon {
    padding: 30px 0;
  }
  .aboCon .aboImg {
    max-width: 90%;
  }
  .aboCon .aboImg .boxLine {
    width: 90%;
    top: 5%;
    left: 5%;
  }
  .aboCon .aboImg .tit {
    position: relative;
    top: 30px;
    left: 0px;
  }
  .aboCon .aboImg .tit p:nth-child(1) {
    color: #5a5a5a;
  }
  .aboCon .aboImg .tit p:nth-child(2) {
    color: #5a5a5a;
  }
  .aboCon .aboImg .topLine {
    display: none;
  }
  .aboCon .aboImg .bottmLine {
    display: none;
  }
  article {
    margin-top: 120px;
    width: 90%;
    text-align: justify;
  }
  .items {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 30px;
  }
  .items .item {
    width: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
  }
  .items .item i {
    color: #b09c70;
  }
  .items .item span:nth-child(2) {
    color: #333333;
    font-weight: bold;
    line-height: 50px;
  }

  .items .item span:nth-child(3) {
    color: #aaaaaa;
    line-height: 25px;
  }
}
</style>