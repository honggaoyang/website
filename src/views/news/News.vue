<template>
  <div>
    <sub-nav-banner />
    <div class="pubCon newsCon">
      <div class="pubTit">
        <h2>新闻动态</h2>
        <h3>NEWS</h3>
      </div>
      <div class="box" v-for="item in newsList" :key="item.id">
        <a href="###"
          ><h3>{{ item.title }}</h3></a
        >
        <p>{{ item.content }}</p>
        <div class="bottom">
          <span>{{ item.data }}</span>
          <i class="fa fa-eye"> {{ item.pv }}</i>
        </div>
      </div>
      <div class="page">
        <a class="upPage" href="###">上一页</a>
        <a href="">1</a>
        <a class="nextPage" href="###">下一页</a>
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
      newsList: [
        {
          id: '001',
          title: '分享T台模特个性妆容',
          data: '2020-04-15',
          pv: 30,
          content:
            '我们总喜欢在脸上添点艳丽明媚的喜庆颜色，借点好运势，图个好彩头!变化万千的彩妆盘其实蕴藏着巨大的能量，只要你加点细密心思，变换些许画法，就能够寄托对新的一年单纯、美好的愿望。掌握化妆心法，事业运、恋爱运、健康运和财运都会跟着强势起来!时尚总是徘徊在两个极端，这边T台上80年代浓眉正在流行，而另一边，浅到几乎令人无法察觉的淡色眉妆也渐渐走红起来。和蒙妮坦化妆学校一起来看看T台模特冬季演绎个性雷人妆吧。事实上，大部分中国女性都不能接受染淡自己的眉毛，因为我们的脸部线条不够立体，需要借助眉毛来加强脸部的轮廓。所以不妨折衷一下，将眉毛修剪整齐，然后把眉毛染摄影化妆培训得稍淡些。或是参照miu miu秀场，将眉毛染成眼影的色泽，和晕染开来的眼影融为一体，令整个眼妆更加完整。当然，如果你习惯不落于时尚之后，就把眉毛剃掉或者漂白，那会令你的表情看起来面无表情、高深莫测，酷极了！',
        },
        {
          id: '002',
          title: '当代风尚服装搭配师培训课程',
          data: '2020-06-11',
          pv: 31,
          content:
            '我们总喜欢在脸上添点艳丽明媚的喜庆颜色，借点好运势，图个好彩头!变化万千的彩妆盘其实蕴藏着巨大的能量，只要你加点细密心思，变换些许画法，就能够寄托对新的一年单纯、美好的愿望。掌握化妆心法，事业运、恋爱运、健康运和财运都会跟着强势起来!时尚总是徘徊在两个极端，这边T台上80年代浓眉正在流行，而另一边，浅到几乎令人无法察觉的淡色眉妆也渐渐走红起来。和蒙妮坦化妆学校一起来看看T台模特冬季演绎个性雷人妆吧。事实上，大部分中国女性都不能接受染淡自己的眉毛，因为我们的脸部线条不够立体，需要借助眉毛来加强脸部的轮廓。所以不妨折衷一下，将眉毛修剪整齐，然后把眉毛染摄影化妆培训得稍淡些。或是参照miu miu秀场，将眉毛染成眼影的色泽，和晕染开来的眼影融为一体，令整个眼妆更加完整。当然，如果你习惯不落于时尚之后，就把眉毛剃掉或者漂白，那会令你的表情看起来面无表情、高深莫测，酷极了！',
        },
        {
          id: '003',
          title: '分享T台模特个性妆容',
          data: '2020-05-10',
          pv: 34,
          content:
            '我们总喜欢在脸上添点艳丽明媚的喜庆颜色，借点好运势，图个好彩头!变化万千的彩妆盘其实蕴藏着巨大的能量，只要你加点细密心思，变换些许画法，就能够寄托对新的一年单纯、美好的愿望。掌握化妆心法，事业运、恋爱运、健康运和财运都会跟着强势起来!时尚总是徘徊在两个极端，这边T台上80年代浓眉正在流行，而另一边，浅到几乎令人无法察觉的淡色眉妆也渐渐走红起来。和蒙妮坦化妆学校一起来看看T台模特冬季演绎个性雷人妆吧。事实上，大部分中国女性都不能接受染淡自己的眉毛，因为我们的脸部线条不够立体，需要借助眉毛来加强脸部的轮廓。所以不妨折衷一下，将眉毛修剪整齐，然后把眉毛染摄影化妆培训得稍淡些。或是参照miu miu秀场，将眉毛染成眼影的色泽，和晕染开来的眼影融为一体，令整个眼妆更加完整。当然，如果你习惯不落于时尚之后，就把眉毛剃掉或者漂白，那会令你的表情看起来面无表情、高深莫测，酷极了！',
        },
        {
          id: '004',
          title: '服饰搭配培训怎么吸引？',
          data: '2020-06-22',
          pv: 33,
          content:
            '我们总喜欢在脸上添点艳丽明媚的喜庆颜色，借点好运势，图个好彩头!变化万千的彩妆盘其实蕴藏着巨大的能量，只要你加点细密心思，变换些许画法，就能够寄托对新的一年单纯、美好的愿望。掌握化妆心法，事业运、恋爱运、健康运和财运都会跟着强势起来!时尚总是徘徊在两个极端，这边T台上80年代浓眉正在流行，而另一边，浅到几乎令人无法察觉的淡色眉妆也渐渐走红起来。和蒙妮坦化妆学校一起来看看T台模特冬季演绎个性雷人妆吧。事实上，大部分中国女性都不能接受染淡自己的眉毛，因为我们的脸部线条不够立体，需要借助眉毛来加强脸部的轮廓。所以不妨折衷一下，将眉毛修剪整齐，然后把眉毛染摄影化妆培训得稍淡些。或是参照miu miu秀场，将眉毛染成眼影的色泽，和晕染开来的眼影融为一体，令整个眼妆更加完整。当然，如果你习惯不落于时尚之后，就把眉毛剃掉或者漂白，那会令你的表情看起来面无表情、高深莫测，酷极了！',
        },
        {
          id: '005',
          title: '分享T台模特个性妆容',
          data: '2020-06-30',
          pv: 99,
          content:
            '我们总喜欢在脸上添点艳丽明媚的喜庆颜色，借点好运势，图个好彩头!变化万千的彩妆盘其实蕴藏着巨大的能量，只要你加点细密心思，变换些许画法，就能够寄托对新的一年单纯、美好的愿望。掌握化妆心法，事业运、恋爱运、健康运和财运都会跟着强势起来!时尚总是徘徊在两个极端，这边T台上80年代浓眉正在流行，而另一边，浅到几乎令人无法察觉的淡色眉妆也渐渐走红起来。和蒙妮坦化妆学校一起来看看T台模特冬季演绎个性雷人妆吧。事实上，大部分中国女性都不能接受染淡自己的眉毛，因为我们的脸部线条不够立体，需要借助眉毛来加强脸部的轮廓。所以不妨折衷一下，将眉毛修剪整齐，然后把眉毛染摄影化妆培训得稍淡些。或是参照miu miu秀场，将眉毛染成眼影的色泽，和晕染开来的眼影融为一体，令整个眼妆更加完整。当然，如果你习惯不落于时尚之后，就把眉毛剃掉或者漂白，那会令你的表情看起来面无表情、高深莫测，酷极了！',
        },
      ],
    };
  },
};
</script>

<style scoped>
.newsCon {
  max-width: 950px;
  margin: auto;
}
.newsCon .box {
  border-bottom: 1px solid #f5f5f5;
  width: 90%;
  margin: auto auto 50px auto;
}
.newsCon .box a {
  text-decoration: none;
}
.newsCon .box a:hover {
  text-decoration: underline;
  color: #333333;
}
.newsCon .box h3 {
  color: #333333;
  font-size: 16px;
  padding: 8px 0px;
}
.newsCon .box p {
  line-height: 24px;
  color: #aaaaaa;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.newsCon .box .bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 30px 0 80px;
  color: #aaaaaa;
  font-size: 12px;
}
.newsCon .page {
  padding: 0 0 80px;
  text-align: center;
}
.newsCon .page a {
  border: 1px solid #aaaaaa;
  padding: 8px 15px;
  border-radius: 3px;
  color: #aaaaaa;
  text-decoration: none;
}
</style>