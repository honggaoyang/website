<template>
  <div>
    <sub-nav-banner />
    <div class="pubCon">
      <div class="pubTit">
        <h2>导师团队</h2>
        <h3>TEACHER</h3>
      </div>
      <div v-for="(item, i) in teacherList" :key="item.id">
        <div class="teaCon" :class="{ odd: i % 2 != 0 ? true : false }">
          <div class="imgBox">
            <div class="boxLine"></div>
            <img :src="item.img" alt="" />
            <div class="line"></div>
          </div>
          <div class="infoBox">
            <h3>{{ item.name }}</h3>
            <span>{{ item.job }}</span>
            <p>{{ item.desc }}</p>
          </div>
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
      teacherList: [
        {
          id: '001',
          name: '罗莉',
          job: '服装化妆搭配导师',
          img: 'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38668.png',
          desc: '开创同名July整体造型工作室，与许多专业品牌有所合作，更在后续参与了台湾东风电视台、台湾金曲奖金钟奖等彩妆支持，并开启了名媛彩妆课程、基础造型、高阶彩妆新娘婚礼造型等教学课程。 开创同名July整体造型工作室，与许多专业品牌有所合作，更在后续参与了台湾东风电视台、台湾金曲奖金钟奖等彩妆支持，并开启了名媛彩妆课程、基础造型、高阶彩妆新娘婚礼造型等教学课程。',
        },
        {
          id: '002',
          name: '罗杰',
          job: '高级服装搭配导师',
          img: 'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38668.png',
          desc: '开创同名July整体造型工作室，与许多专业品牌有所合作，更在后续参与了台湾东风电视台、台湾金曲奖金钟奖等彩妆支持，并开启了名媛彩妆课程、基础造型、高阶彩妆新娘婚礼造型等教学课程。 开创同名July整体造型工作室，与许多专业品牌有所合作，更在后续参与了台湾东风电视台、台湾金曲奖金钟奖等彩妆支持，并开启了名媛彩妆课程、基础造型、高阶彩妆新娘婚礼造型等教学课程。',
        },
        {
          id: '003',
          name: '卡尔斐',
          job: '视觉营销、服装陈列资深导师',
          img: 'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38668.png',
          desc: '开创同名July整体造型工作室，与许多专业品牌有所合作，更在后续参与了台湾东风电视台、台湾金曲奖金钟奖等彩妆支持，并开启了名媛彩妆课程、基础造型、高阶彩妆新娘婚礼造型等教学课程。 开创同名July整体造型工作室，与许多专业品牌有所合作，更在后续参与了台湾东风电视台、台湾金曲奖金钟奖等彩妆支持，并开启了名媛彩妆课程、基础造型、高阶彩妆新娘婚礼造型等教学课程。',
        },
      ],
    };
  },
};
</script>

<style scoped>
.teaCon {
  max-width: 950px;
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  margin-bottom: 100px;
}
/* 循环下标是奇数css */
.teaCon.odd {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}
.teaCon.odd .infoBox h3 {
  text-align: right;
}
.teaCon.odd .infoBox span {
  text-align: right;
}
.teaCon.odd .boxLine {
  position: absolute;
  right: 20px;
}
.teaCon.odd .line {
  left: -20px;
}

.teaCon .imgBox {
  width: 350px;
  height: 368px;
  position: relative;
}
.teaCon .imgBox .boxLine {
  width: 228px;
  height: 365px;
  border: 1px solid #b09c70;
}
.teaCon .imgBox .line {
  width: 100px;
  height: 1px;
  background-color: #b09c70;
  position: absolute;
  z-index: 10;
  right: -10px;
  bottom: 30px;
}
.teaCon .imgBox img {
  width: 275px;
  height: 368px;
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 9;
}
.teaCon .infoBox {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 20px;
}

.teaCon .infoBox h3 {
  font-size: 16px;
}
.teaCon .infoBox span {
  color: #b09c70;
  padding: 5px 0 30px;
}
.teaCon .infoBox p {
  color: #aaaaaa;
  text-align: justify;
  line-height: 25px;
}

/* 小于768 */
@media (max-width: 768px) {
  .teaCon {
    max-width: 768px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 50px;
  }
  /* 循环下标是奇数css */
  .teaCon.odd {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .teaCon.odd .infoBox h3 {
    text-align: center;
  }
  .teaCon.odd .infoBox span {
    text-align: center;
  }
  .teaCon.odd .line {
    display: none;
  }

  .teaCon .imgBox {
    width: 90%;
    margin: auto;
    height: 368px;
    position: relative;
  }
  .teaCon .imgBox .boxLine {
    position: absolute;
    top: -20px;
    left: -10px;
    width: 90%;
    height: 368px;
  }

  .teaCon .imgBox img {
    width: 100%;
    height: 368px;
    position: absolute;
    top: 0;
    left: 10px;
    z-index: 9;
  }

  .teaCon .infoBox h3 {
    text-align: center;
  }
  .teaCon .infoBox span {
    text-align: center;
  }
  .teaCon .imgBox .line {
    display: none;
  }
}
</style>