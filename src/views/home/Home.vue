<template>
  <div>
    <!-- 头部banner -->
    <banner />
    <!-- 关于我们 -->
    <about-us />
    <!-- 课程分类 -->
    <course-class />
    <!-- 服务 -->
    <service />
    <!-- 学员感言 -->
    <student-speak />
    <!-- 导师团队 -->
    <teacher-team />
    <!-- 新闻动态 -->
    <news />
    <!-- 简介 -->
    <intro />
    <!-- 给我们留言 -->
    <message />
  </div>
</template>

<script>
import banner from '@/views/home/components/Banner';
import AboutUs from '@/views/home/components/AboutUs';
import CourseClass from '@/views/home/components/CourseClass';
import Service from '@/views/home/components/Service';
import StudentSpeak from '@/views/home/components/StudentSpeak';
import TeacherTeam from '@/views/home/components/TeacherTeam';
import News from '@/views/home/components/News';
import Intro from '@/views/home/components/Intro';
import Message from '@/views/home/components/Message';
import scrollRevealMixin from '@/mixin/scrollRevealMixin.js'; 
export default {
  name: 'Home',
  components: {
    banner,
    AboutUs,
    CourseClass,
    Service,
    StudentSpeak,
    TeacherTeam,
    News,
    Intro,
    Message,
  },
  mixins: [scrollRevealMixin],
  data() {
    return {};
  },
};
</script>

<style scoped>  
</style>