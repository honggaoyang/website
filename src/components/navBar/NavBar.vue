<template>
  <div class="header">
    <div class="navBar" :class="{ open: isOpenMenu }">
      <div class="nav_logo"><router-link to="/">ANS</router-link></div>
      <div class="nav_menu">
        <router-link
          v-for="item in navMenuList"
          :key="item.id"
          :to="item.path"
          @click.native="isOpenMenu = !isOpenMenu"
          >{{ item.itmeName }}</router-link
        >
      </div>
      <div class="burger" @click="isOpenMenu = !isOpenMenu">
        <i v-if="!isOpenMenu" class="fa fa-navicon fa-2x"></i>
        <i v-else class="fa fa-close fa-2x"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navMenuList: [
        //导航
        { id: '001', path: '/home', itmeName: '首页' },
        { id: '002', path: '/about', itmeName: '关于我们' },
        { id: '003', path: '/course', itmeName: '课程分类' },
        { id: '004', path: '/teacher', itmeName: '教师团队' },
        { id: '005', path: '/news', itmeName: '新闻动态' },
        { id: '006', path: '/contact', itmeName: '联系我们' },
      ],
      isOpenMenu: false, //小屏幕下是否显示菜单
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: rgba(102, 102, 102, 0.1);
  position: absolute;
  z-index: 99;
}
.navBar {
  max-width: 1200px;
  height: 80px;
  margin: auto;
  padding: 0 20px;
  color: #ffffff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 200;
  top: 0;
  left: 0;
}
.nav_logo a {
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
}
.nav_menu a {
  color: #ffffff;
  text-decoration: none;
  margin: 0 24px;
}
.nav_menu a:hover {
  font-weight: bold;
}
.burger {
  display: none;
}

@media screen and (max-width: 960px) {
  .nav_menu {
    display: none;
  }
  .burger {
    display: block;
    cursor: pointer;
    z-index: 20;
  }
  .burger .fa-close {
    color: #aaaaaa;
  }

  .navBar.open .nav_menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: right;
    position: absolute;
    right: 0;
    top: 80px;
    width: 50vw;
    background-color: #2b2b2b;
    opacity: 0;
    -webkit-animation: slideDown 0.5s ease-out 0s 1 normal forwards;
    animation: slideDown 0.5s ease-out 0s 1 normal forwards;
  }
  .navBar.open .nav_menu a {
    color: #fff;
    border-bottom: 1px solid var(--text-color-light-gray);
    margin: 0;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #343434;
  }

  .navBar.open .nav_logo {
    color: #aaaaaa;
    z-index: 20;
  }
  .navBar.open .burger div {
    background-color: #aaaaaa;
  }
  /* 导航列表 */
  @-webkit-keyframes slideDown {
    from {
      right: -55%;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }
  @keyframes slideDown {
    from {
      right: -55%;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }
}
</style>