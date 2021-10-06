<template>
  <section class="pubCon serCon">
    <div class="pubTit">
      <h2>服务</h2>
      <h3>SERVICE</h3>
    </div>
    <div class="slickBox">
      <vue-slick-carousel v-bind="settings">
        <div class="serbox" v-for="item in serList" :key="item.id">
          <div><img :src="item.imgUrl" alt="" /></div>
          <div class="serText">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
            <div>点击</div>
          </div>
        </div>
      </vue-slick-carousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import '@/assets/VueSlickCarousel.css';
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      //轮播配置
      settings: {
        arrows: true, //左右切换按钮
        dots: true, //分页导航
        autoplay: true, //自动播放
        fade: false, //淡化切换
        speed: 500, //动画时间
        autoplaySpeed: 3000, //间隔时间
      },
      serList: [
        {
          id: '001',
          title: '服装搭配造型设计',
          content:
            '专为培养高端婚礼彩妆师而设计的课程，专业导师传道授业，在这里，你能学到的不仅是高超的化妆技巧，更有国际化的时尚理念和现代美学观念，跻身国际彩妆大师的行列，并为每一位新娘量身定制绝美妆容，实现女人一生美丽的梦想。',
          imgUrl:
            'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38658.jpg',
        },
        {
          id: '002',
          title: '服装搭配造型设计1',
          content:
            '专为培养高端婚礼彩妆师而设计的课程，专业导师传道授业，在这里，你能学到的不仅是高超的化妆技巧，更有国际化的时尚理念和现代美学观念，跻身国际彩妆大师的行列，并为每一位新娘量身定制绝美妆容，实现女人一生美丽的梦想。',
          imgUrl:
            'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38657.jpg',
        },
        {
          id: '003',
          title: '服装搭配造型设计2',
          content:
            '专为培养高端婚礼彩妆师而设计的课程，专业导师传道授业，在这里，你能学到的不仅是高超的化妆技巧，更有国际化的时尚理念和现代美学观念，跻身国际彩妆大师的行列，并为每一位新娘量身定制绝美妆容，实现女人一生美丽的梦想。',
          imgUrl:
            'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38658.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.serCon {
  padding-bottom: 100px;
}
.slickBox {
  width: 1000px;
  margin: auto;
}
.serbox {
  display: flex !important;
  align-items: center;
}
.serbox img {
  width: 380px;
  height: 228px;
  padding-left: 30px;
}
.serText {
  padding: 30px;
}
.serText h3 {
  color: #333333;
  font-size: 18px;
}
.serText p {
  color: #AAAAAA;
  font-size: 14px;
  margin: 25px 0 35px;
}
.serText div {
  width: 96px;
  height: 32px;
  background-color: #b09c70;
  text-align: center;
  line-height: 32px;
  color: #F5F5F5;
  cursor: pointer;
  user-select: none;
}

/* 小于1100*/
@media (max-width: 1100px) {
  .slickBox {
    width: 80%;
  }
  .serbox {
    flex-direction: column;
  }
  .serbox div:nth-child(1) {
    width: 100%;
    padding: 0 30px;
  }
  .serbox img {
    width: 100%;
    height: auto;
    padding-left: 0px;
  }
}
</style>