<template>
    <div id="hot-body">
        <span id="title">推荐音乐</span>
        <div v-resize="resize" id="showTable">
            <div class="music-detail" v-show="musics.length > 0" v-for="music in musics"
                :style="{ width: detailWidth + 'px' }" :key="music.id">
                <div class="detail-span" style="margin:auto">
                    <div @click="PlayById(music.id)" class="img-span">
                        <img :src="music.picUrl + '?param=120y120'" alt="">
                    </div>
                    <div @click="PlayById(music.id)" class="title-span">
                        {{ music.name }}
                    </div>
                </div>
            </div>
        </div>
        <div style="height:160px"></div>
    </div>

</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import axios from 'axios'
export default {
    name: "Hot",
    data() {
        return {
            musics: [],
            detailWidth: 120
        }
    },
    methods: {
        ...mapActions('PlayerAbout', {
            changePlayerState: 'changePlayerState',
            BePlay: "bePlay",
            BePuse: "bePuse",
            PlayById: 'PlayById',
            PreMusic: 'PreMusic',
            NextMusic: 'NextMusic'
        }),
        resize() {
            console.log("size is change");
            console.log(document.getElementById("showTable").getBoundingClientRect().width)
            // 调整宽度
            let Allwidth = document.getElementById("showTable").getBoundingClientRect().width
            let n = Allwidth / 125;
            this.detailWidth = Allwidth / Math.floor(n)
        }
    },
    mounted() {


        axios.get("http://cloud-music.pl-fe.cn/personalized/newsong?limit=40").then(
            res => {
                // console.log(res.data.result);
                this.musics = res.data.result

            },
            err => {

            }
        )
    }

}
</script>

<style lang="less" scoped>
* {
    color: #fff;

    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

#index {
    height: 100%;
    overflow: auto;
}

img {
    -webkit-user-drag: none;
}

#hot-body {
    width: 100%;
    min-height: 100%;
    margin: 0px;
    padding: 0px;
    padding-top: 50px;
    *zoom: 1;
}

#title {
    letter-spacing: 5px;
    line-height: 24px;
    font-size: 20px;
    font-weight: normal;
    margin-top: 50px;
}

#showTable {
    text-align: left;
    margin: auto;
    margin-top: 25px;
    width: 80%;
    clear: both;
    transition: 0.4s linear;
}

@media screen and (max-width:900px) and(min-width:700px) {
    #showTable {
        width: 90%;
        transition: 0.4s linear;
    }
}

@media screen and (max-width:700px) {
    #showTable {
        width: 100%;
        transition: 0.4s linear;
    }
}

#showTable:after {
    content: "";
    display: block;
    clear: both;
}

.music-detail {
    // background-color: #fff;
    width: 110px;
    margin: auto;
    margin-top: 12px;
    height: 150px;
    position: relative;
    float: left;
    text-align: center;
    overflow: hidden;
    // backdrop-filter: blur(50px);
}

.music-detail:hover {
    cursor: pointer;
}

.music-detail>img {
    position: relative;
    top: 0px;
}

.detail-span {
    width: 120px;
    height: 140px;

    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #888;
}

.img-span {
    width: 100%;
    align-items: center; //垂直
}

.img-span>img {
    width: 110px;
    align-items: center; //垂直
}

.title-span {
    margin-top: 3px;
    height: 20px;
    line-height: 20px;
    width: 100%;
    font-size: 0.8em;
    vertical-align: middle;
    overflow: hidden;
}
</style>