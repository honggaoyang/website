<template>
  <div>
    <div class="footer">
      <div class="footCont">
        <div class="ftItem" v-for="item in footInfoList" :key="item.id">
          <h6>
            <a href="###">{{ item.title }}</a>
          </h6>
          <ul>
            <li v-for="subItem in item.subTitList" :key="subItem.subTitId">
              <a href="###">{{ subItem.subTit }}</a>
            </li>
          </ul>
        </div>
        <div class="ewm">
          <img
            src="https://ntemimg.wezhan.cn/contents/sitefiles2038/10193466/images/-38677.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="icon">
        <i class="fa fa-phone"></i>
        <i class="fa fa-map-marker"></i>
        <i class="fa fa-envelope"></i>
      </div>
      <p>版权所有： 003模特</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footInfoList: [
        {
          id: '001',
          title: '关于我们',
          subTitList: [
            { subTitId: '1', subTit: '穿衣培训' },
            { subTitId: '2', subTit: '化妆培训' },
            { subTitId: '3', subTit: '塑性培训' },
          ],
        },
        {
          id: '002',
          title: '课程分类',
          subTitList: [
            { subTitId: '1', subTit: '女模特' },
            { subTitId: '2', subTit: '男模特' },
            { subTitId: '3', subTit: '儿童模特' },
          ],
        },
        {
          id: '003',
          title: '学员感言',
          subTitList: [
            { subTitId: '1', subTit: '教师团队' },
            { subTitId: '2', subTit: '新闻中心' },
            { subTitId: '3', subTit: '联系我们' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #333333;
  padding: 60px 0;
}
.footCont {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.ftItem h6 {
  height: 50px;
  line-height: 50px;
}
.ftItem h6 a {
  color: #F5F5F5;
  text-decoration: none;
}
.ftItem ul li {
  list-style: none;
}
.ftItem ul li a {
  color: #F5F5F5;
  text-decoration: none;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
.ewm img {
  width: 110px;
  height: 110px;
}
.copyright {
  width: 100%;
  height: 110px;
  color: #F5F5F5;
  background-color: black;
  text-align: center;
  padding: 20px 0;
}
.copyright .icon {
  margin-bottom: 20px;
}
.copyright .icon i {
  color: #b09c70;
  background-color: #333333;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  font-size: 16px;
  margin-right: 50px;
  transition: 0.3s;
}
.copyright .icon i:nth-child(3) {
  margin-right: 0;
}
.copyright .icon i:hover {
  cursor: pointer;
  background-color: #b09c70;
  color: #F5F5F5;
}

/* 小于580 */
@media (max-width: 580px) {
  .footCont {
    max-width: 580px;
  }
  .footCont {
    flex-direction: column;
    align-items: center;
  }
}
</style>