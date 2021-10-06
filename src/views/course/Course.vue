<template>
  <div class="course">
    <sub-nav-banner />
    <!-- 内容区域 -->
    <div class="pubCon couCon">
      <div class="pubTit">
        <h2>课程分类</h2>
        <h3>CURRICULUM CLASSIFCATION</h3>
      </div>
      <div class="couBox">
        <div class="box" v-for="item in couList" :key="item.id">
          <img :src="item.imgUrl" />
          <span>{{ item.title }}</span>
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
      couList: [
        {
          id: '001',
          title: '服装搭配',
          imgUrl:
            'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38682.png',
        },
        {
          id: '002',
          title: '服装搭配',
          imgUrl:
            'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38682.png',
        },
        {
          id: '003',
          title: '服装搭配',
          imgUrl:
            'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38682.png',
        },
        {
          id: '004',
          title: '服装搭配',
          imgUrl:
            'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38682.png',
        },
        {
          id: '005',
          title: '服装搭配',
          imgUrl:
            'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38682.png',
        },
        {
          id: '006',
          title: '服装搭配',
          imgUrl:
            'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38682.png',
        },
        {
          id: '007',
          title: '服装搭配',
          imgUrl:
            'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38682.png',
        },
        {
          id: '008',
          title: '服装搭配',
          imgUrl:
            'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38682.png',
        },
      ],
    };
  },
};
</script>

<style scoped>
.couBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  padding: 0 20px;
}
.couBox .box {
  width: 263px;
  height: 361px;
  margin-bottom: 70px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.couBox .box img {
  width: 100%;
  height: 100%;
}
.couBox .box span {
  display: block;
  text-align: center;
  padding-top: 20px;
}
</style>