 <template>
  <section class="pubCon teaCon">
    <div class="pubTit">
      <h2>导师团队</h2>
      <h3>TEACHER</h3>
    </div>

    <div class="teaBox">
      <div class="teaItem" v-for="item in teacherList" :key="item.id">
        <img :src="item.img" alt="" />
        <div class="info">
          <div class="info-cont">
            <span class="name">{{ item.name }}</span>
            <span class="job">{{ item.job }}</span>
          </div>
          <div class="toDetail">
            <i class="fa fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="moreBtn">MORE</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      teacherList: [
        {
          id: '001',
          name: '罗莉',
          job: '高端彩妆设计导师',
          img: 'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38668.png',
        },
        {
          id: '002',
          name: '罗杰',
          job: '服装搭配培训导师',
          img: 'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38670.png',
        },
        {
          id: '003',
          name: '卡尔斐',
          job: '视觉营销、服装陈列资深培训导师',
          img: 'https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38671.png',
        },
      ],
    };
  },
};
</script>

<style scoped> 
.teaCon {
  padding-bottom: 50px;
}
.teaBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.teaBox .teaItem {
  width: 30%;
  position: relative;
}
.teaBox .teaItem img {
  width: 100%;
  height: 100%;
}
.teaBox .info {
  width: 100%;
  height: 65px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 15px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #b09c70;
  font-weight: 500;
}
.teaBox .info .info-cont {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.teaBox .info .info-cont .name {
  color: #f5f5f5;
  font-weight: bold;
}
.teaBox .info .toDetail:hover {
  color: #f5f5f5;
  cursor: pointer;
}
.moreBtn {
  width: 133px;
  height: 36px;
  border: 1px solid;
  border-color: #b09c70;
  color: #b09c70;
  text-align: center;
  line-height: 36px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  margin: 50px auto 0 auto;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.moreBtn:hover {
  background-color: #b09c70;
  color: #f5f5f5;
}

/* 小于768 */
@media (max-width: 768px) {
  .teaBox {
    width: 90%;
    margin: auto;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .teaBox .teaItem {
    width: 45%;
    margin-bottom: 20px;
  }
}

/* 小于620*/
@media (max-width: 620px) {
  .teaBox .teaItem {
    width: 100%;
  }
}
</style>