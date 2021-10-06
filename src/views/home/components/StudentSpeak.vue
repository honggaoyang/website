<template>
  <div class="pubBg">
    <section class="pubCon stuCon">
      <div class="pubTit">
        <h2>学员感言</h2>
        <h3>REFLECTIONS</h3>
      </div>
      <div class="slickBox">
        <vue-slick-carousel v-bind="settings">
          <div class="stubox" v-for="item in stuSpeakList" :key="item.id">
            <img :src="item.head" alt="" />
            <div class="stuText">
              <h3>{{ item.name }}</h3>
              <p>
                {{ item.cont }}
              </p>
            </div>
          </div>
        </vue-slick-carousel>
      </div>
    </section>
  </div>
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
        dots: false, //分页导航
        autoplay: true, //自动播放
        fade: false, //淡化切换
        speed: 500, //动画时间
        autoplaySpeed: 30000, //间隔时间
      },
      stuSpeakList: [
        {
          id: '001',
          name: 'Christine',
          cont: '经过8节课的学习收获很多，对选择衣服的颜色、材质、形状、图案以及整体风格都有更深的了解。让我认识了女人要活的有品味，穿什么给别人留下什么印象、传递什么。生活也更自信了。',
          head: 'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38667.png',
        },
        {
          id: '002',
          name: 'Cherry',
          cont: '要反复复训，每次上课，听的感觉都不一样，都有新的收获，不仅提高了自己的审美能力，对工作帮助也很大，总之在这里跟姐妹们学习很开心。',
          head: 'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38665.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.stuCon {
  padding-bottom: 100px;
}

.slickBox {
  background-color: #FFFFFF;
  padding: 50px 50px;
}

.stubox {
  display: flex !important;
  align-items: center;
  padding: 0 150px;
}
.stubox img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #b09c70;
  padding: 8px;
  box-sizing: border-box;
}
.stuText {
  padding: 30px;
}
.stuText h3 {
  color: #333333;
  font-size: 18px;
}
.stuText p {
  color: #AAAAAA;
  font-size: 14px;
  margin: 15px 0;
}

/* 小于1100*/
@media (max-width: 1100px) {
  .slickBox {
    width: 90%;
    margin: auto;
  }
  .stubox {
    flex-direction: column;
    padding: 0;
  }
  .stubox img {
    width: 100px;
    height: 100px;
  }
  .stuText {
    text-align: center;
    padding: 30px 10px 0 10px;
  }
  .stuText p {
    text-align: justify;
  }
}
</style>