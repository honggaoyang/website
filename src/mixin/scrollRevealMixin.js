import scrollReveal from 'scrollreveal';
export default {
    data() {
        return {
            scrollReveal: scrollReveal(),
        }
    },
    mounted() {
        let config = {
            easing: 'ease-in-out',
            duration: 1000, // 动画的时长
            distance: '300px', //距离
        };
        this.scrollReveal.reveal('.aboItems .item,.homeNews .new', { ...config, interval: 300 });//延迟100
        this.scrollReveal.reveal('', { ...config, origin: 'top' });
        this.scrollReveal.reveal('.pubTit,.aboImg,.homeBanner h6', { ...config, origin: 'bottom' });
        this.scrollReveal.reveal('.aboCon .lt,.aboCon .tit,.contactCon .lfInfo,.homeBanner h1', { ...config, origin: 'left' });
        this.scrollReveal.reveal('.aboCon .rt img,.contactCon .rtForm', { ...config, origin: 'right' });
    },
}