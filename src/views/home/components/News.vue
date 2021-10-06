<template>
  <div class="pubBg homeNews">
    <section class="pubCon">
      <div class="pubTit">
        <h2>新闻动态</h2>
        <h3>NEWS</h3>
      </div>
      <div class="news">
        <div class="new" v-for="item in newList" :key="item.id">
          <p class="new-tit">{{ item.title }}</p>
          <p class="new-info">
            {{ item.info }}
          </p>
          <p class="new-date">{{ item.date }}</p>
        </div>
      </div>
      <div class="moreBtn">MORE</div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newList: [
        {
          id: '001',
          title: '分享T台模特个性妆容2',
          info: '我们总喜欢在脸上添点艳丽明媚的喜庆颜色，借点好运势，图个好彩头!变化万千的彩妆盘其实蕴藏着巨大的能量，只要你加点细密心思，变换些许画法，就能够寄托对新的一年单纯、美好的愿望。掌握化妆心法，事业运、恋爱运、健康运和财运都会跟着强势起来!时尚总是徘徊在两个极端，这边T台上80年代浓眉正在流行，而另一边，浅到几乎令人无法察觉的淡色眉妆也渐渐走红起来。和蒙妮坦化妆学校一起来看看T台模特冬季演绎个性雷人妆吧。事实上，大部分中国女性都不能接受染淡自己的眉毛，因为我们的脸部线条不够立体，需要借助眉毛来加强脸部的轮廓。所以不妨折衷一下，将眉毛修剪整齐，然后把眉毛染摄影化妆培训得稍淡些。或是参照miu&nbsp;miu秀场，将眉毛染成眼影的色泽，和晕染开来的眼影融为一体，令整个眼妆更加完整。当然，如果你习惯不落于时尚之后，就把眉毛剃掉或者漂白，那会令你的表情看起来面无表情、高深莫测，酷极了！',
          date: '2021-12-22',
        },
        {
          id: '002',
          title: '分享T台模特个性妆容2',
          info: '我们总喜欢在脸上添点艳丽明媚的喜庆颜色，借点好运势，图个好彩头!变化万千的彩妆盘其实蕴藏着巨大的能量，只要你加点细密心思，变换些许画法，就能够寄托对新的一年单纯、美好的愿望。掌握化妆心法，事业运、恋爱运、健康运和财运都会跟着强势起来!时尚总是徘徊在两个极端，这边T台上80年代浓眉正在流行，而另一边，浅到几乎令人无法察觉的淡色眉妆也渐渐走红起来。和蒙妮坦化妆学校一起来看看T台模特冬季演绎个性雷人妆吧。事实上，大部分中国女性都不能接受染淡自己的眉毛，因为我们的脸部线条不够立体，需要借助眉毛来加强脸部的轮廓。所以不妨折衷一下，将眉毛修剪整齐，然后把眉毛染摄影化妆培训得稍淡些。或是参照miu&nbsp;miu秀场，将眉毛染成眼影的色泽，和晕染开来的眼影融为一体，令整个眼妆更加完整。当然，如果你习惯不落于时尚之后，就把眉毛剃掉或者漂白，那会令你的表情看起来面无表情、高深莫测，酷极了！',
          date: '2021-12-22',
        },
        {
          id: '003',
          title: '分享T台模特个性妆容3',
          info: '我们总喜欢在脸上添点艳丽明媚的喜庆颜色，借点好运势，图个好彩头!变化万千的彩妆盘其实蕴藏着巨大的能量，只要你加点细密心思，变换些许画法，就能够寄托对新的一年单纯、美好的愿望。掌握化妆心法，事业运、恋爱运、健康运和财运都会跟着强势起来!时尚总是徘徊在两个极端，这边T台上80年代浓眉正在流行，而另一边，浅到几乎令人无法察觉的淡色眉妆也渐渐走红起来。和蒙妮坦化妆学校一起来看看T台模特冬季演绎个性雷人妆吧。事实上，大部分中国女性都不能接受染淡自己的眉毛，因为我们的脸部线条不够立体，需要借助眉毛来加强脸部的轮廓。所以不妨折衷一下，将眉毛修剪整齐，然后把眉毛染摄影化妆培训得稍淡些。或是参照miu&nbsp;miu秀场，将眉毛染成眼影的色泽，和晕染开来的眼影融为一体，令整个眼妆更加完整。当然，如果你习惯不落于时尚之后，就把眉毛剃掉或者漂白，那会令你的表情看起来面无表情、高深莫测，酷极了！',
          date: '2021-12-22',
        },
      ],
    };
  },
};
</script>

<style scoped>
.pubCon {
  padding-bottom: 50px;
}
.news {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.new {
  width: 30%;
  border-right: 1px solid;
  border-right-color: #AAAAAA;
  padding: 0 40px;
}
.new:last-child {
  border-right: none;
}

.new .new-tit {
  font-size: 16px;
  line-height: 50px;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.new .new-info {
  font-size: 14px;
  color: #AAAAAA;
  text-align: left;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;
  line-height: 23px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* -moz-text-overflow: ellipsis; */
  overflow: hidden;
  text-align: justify;
  height: 46px;
}
.new .new-date {
  font-size: 12px;
  color: #AAAAAA;
  line-height: 30px;
}

.moreBtn {
  width: 133px;
  height: 36px;
  border: 1px solid;
  border-color: #b09c70;
  color: #b09c70;
  text-align: center;
  line-height: 36px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 50px auto 0 auto;
  transition: 0.3s;
}
.moreBtn:hover {
  background-color: #b09c70;
  color: #F5F5F5;
}

/* 小于768 */
@media (max-width: 768px) {
  .new {
    width: 90%;
    border-right: none;
    padding: 0;
  }
}
</style>