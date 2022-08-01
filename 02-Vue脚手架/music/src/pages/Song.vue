<template>
    <div class="song-body">
        <div class="span left-span">
            <div class="img-span">
                <img :src="music_list[this.index].al.picUrl + '?param=600y600'" alt="">
            </div>
        </div>
        <div class="span right-span"></div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Song',
    data() {
        return {
            rlc: []

        }
    },
    props: ['id'],
    methods: {
        // vuex
        ...mapActions('PlayerAbout', {
            changePlayerState: 'changePlayerState',
            BePlay: "bePlay",
            BePuse: "bePuse",
            PlayById: 'PlayById',
            PreMusic: 'PreMusic',
            NextMusic: 'NextMusic'
        }),
        // 判断当前id是否为
        init() {
            console.log("init");
            if (this.id != this.music_list[this.index].id) {
                this.PlayById(this.id);
                return;
            }
        },
        parseLyric(text) {
            //将文本分隔成一行一行，存入数组
            var lines = text.split('\n'),
                //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
                pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
                //保存最终结果的数组
                result = [];
            //去掉不含时间的行
            while (!pattern.test(lines[0])) {
                lines = lines.slice(1);
            };
            //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
            lines[lines.length - 1].length === 0 && lines.pop();
            lines.forEach(function (v /*数组元素值*/, i /*元素索引*/, a /*数组本身*/) {
                //提取出时间[xx:xx.xx]
                var time = v.match(pattern),
                    //提取歌词
                    value = v.replace(pattern, '');
                //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
                time.forEach(function (v1, i1, a1) {
                    //去掉时间里的中括号得到xx:xx.xx
                    var t = v1.slice(1, -1).split(':');
                    //将结果压入最终数组
                    result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
                });
            });
            //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
            result.sort(function (a, b) {
                return a[0] - b[0];
            });
            return result;
        },
        
    },
    computed: {
        // vuex
        ...mapState('PlayerAbout',
            ['pausedState', 'player', 'music_list', 'index']),
        ...mapGetters('PlayerAbout', ['getPlayerState']),
    },
    mounted() {
        // 初始化
        this.init();
    }
}
</script>

<style scoped>
.song-body {
    height: 100%;
    width: 100%;
}

.span {
    float: left;
    width: 50%;
    height: 100%;
}

.img-span {
    position: relative;
    top: 40%;
    left: 0;
    transform: translate(0, -50%);

}

.img-span>img {
    border-radius: 50%;
    width: 300px;
}
</style>