<template>
  <div>
    <sub-nav-banner />
    <div class="pubCon">
      <div class="contactCon">
        <div class="lfInfo">
          <h1>艾尼斯美妆培训连锁</h1>
          <h2>AINISI BEAUTY MAKE UP CHAIN</h2>
          <div class="line"></div>
          <p>
            <a href="###"
              ><i class="fa fa-institution fa-lg"></i><span>艾尼斯</span></a
            >
          </p>
          <p>
            <a href="###"
              ><i class="fa fa-map-marker"></i
              ><span>苏州市相城区春申湖西路903号</span></a
            >
          </p>
          <p>
            <a href="tel:4009699180"
              ><i class="fa fa-phone"></i><span>400-9699-180</span></a
            >
          </p>
          <p>
            <a href="###"
              ><i class="fa fa-envelope"></i
              ><span>honggaoyang@anspxhj999.onexmail.com</span></a
            >
          </p>
        </div>
        <div class="rtForm">
          <feedback>
            <p class="title">有什么问题请反馈给我们，我们将为你服务。</p>
          </feedback>
        </div>
      </div>
      <div class="mapCon" id="mapCon"></div>
    </div>
  </div>
</template>

<script>
import SubNavBanner from '@/components/banner/SubNavBanner';
import feedback from '@/components/feedback/Feedback';
import scrollRevealMixin from '@/mixin/scrollRevealMixin.js';
export default {
  components: { SubNavBanner, feedback },
  mixins: [scrollRevealMixin],
  mounted() {
    // 百度地图API功能
    var map = new BMap.Map('mapCon'); // 创建Map实例
    map.centerAndZoom(new BMap.Point(120.599847, 31.382564), 19); // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(
      new BMap.MapTypeControl({ mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP] })
    );
    map.addOverlay(new BMap.Marker(new BMap.Point(120.599847, 31.382564))); //添加标注
    map.enableScrollWheelZoom(true); //鼠标放大缩小
  },
};
</script>

<style scoped>
.pubCon {
  position: relative;
  padding-top: 450px;
  padding-bottom: 50px;
}
.contactCon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  position: absolute;
  top: -50px;
}
.contactCon .lfInfo {
  width: 50%;
  background-color: #444444;
  color: #f5f5f5;
  padding: 70px 125px;
  -webkit-box-shadow: 0px 0px 10px 1px #6d6565;
  box-shadow: 0px 0px 10px 1px #6d6565;
}
.contactCon .lfInfo h1 {
  font-size: 24px;
  font-weight: 400;
}
.contactCon .lfInfo h2 {
  font-weight: 400;
  padding: 5px 0;
}
.contactCon .lfInfo .line {
  width: 50px;
  height: 1px;
  background-color: #b09c70;
  margin: 20px 0 35px;
}
.contactCon .lfInfo a {
  color: #f5f5f5;
  font-size: 16px;
  display: block;
  padding: 5px 0;
  text-decoration: none;
}
.contactCon .lfInfo i {
  font-size: 1em; 
  width: 30px;
  text-align: center;
}
.contactCon .lfInfo a span {
  padding-left: 10px;
}
.contactCon .rtForm {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #b09c70;
  color: #f5f5f5;
  padding: 40px 0px;
  -webkit-box-shadow: 0px 0px 10px 1px #6d6565;
  box-shadow: 0px 0px 10px 1px #6d6565;
}
.contactCon .rtForm .title {
  padding-bottom: 20px;
}

.mapCon {
  width: 100%;
  height: 300px;
}

/* 1200px*/
@media (max-width: 1200px) {
  .pubCon {
    padding-top: 20px;
  }
  .contactCon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    width: 90%;
    position: relative;
    top: 0;
    margin: auto;
  }
  .contactCon .lfInfo {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    background-color: #444444;
    color: #f5f5f5;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 10px 1px #6d6565;
    box-shadow: 0px 0px 10px 1px #6d6565;
  }
  .contactCon .lfInfo h1 {
    font-size: 20px;
    font-weight: 400;
  }
  /* .contactCon .lfInfo h2 {
    font-weight: 400;
    padding: 5px 0;
  } */
  .contactCon .lfInfo .line {
    width: 100%;
    height: 1px;
    background-color: #b09c70;
    margin: 20px 0 35px;
  }
  .contactCon .rtForm {
    -webkit-box-flex: none;
    -ms-flex: none;
    flex: none;
    background-color: #b09c70;
    color: #f5f5f5;
    padding: 40px 0px;
    -webkit-box-shadow: 0px 0px 10px 1px #6d6565;
    box-shadow: 0px 0px 10px 1px #6d6565;
  }
  .contactCon .rtForm .title {
    padding-bottom: 20px;
  }

  .mapCon {
    width: 90%;
    margin: auto;
    height: 300px;
  }
}
</style>