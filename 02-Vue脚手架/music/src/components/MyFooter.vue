<template>
    <div id="foot-box">
        <div id="foot-box-detail">
            <div id="player">
                <div class="up-next">
                    <img id="pre" class="l-btn clc" @click="PreMusic" src="../assets/pre.svg" alt="1">
                    <img id="pause-btn" @click="changePlayerState" class="l-btn  clc " :src="pausedUrl" alt="">
                    <img id="next" class="l-btn clc" @click="NextMusic" src="../assets/next.svg" alt="">
                    <router-link :to="{
                        name: 'song',
                        query: {
                            id: music_list[this.index].id,
                        }
                    }
                    ">
                        <img class="clc" id="fUrl" :src="music_list[this.index].al.picUrl + '?param=46y46'"
                            alt="require('../assets/fUrl.svg')">
                    </router-link>
                </div>


                <div class="systemUpdates">
                    <label id="music-name">{{ music_list[index].name }}</label>
                    <span class="process">
                        <label id="cur-time">{{ timeFormate(this.player.currentTime) }}</label>
                        <label>/</label>
                        <label id="all-time">{{ timeFormate(this.player.duration) }}</label></span>
                    <div class="progressBar" @click.prevent.stop="adjustPogress" id="progressBar">
                        <div class="barContent" :style="{
                            width: progress + '%'
                        }" id="barContent">
                        </div>
                        <div class="progress_btn" :style="{
                            left: progress - 1 + '%'
                        }"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import axios from 'axios'

export default {
    name: "MyFooter",
    data() {
        return {
            progress: 0,
            playSVG: require('../assets/play.svg'),
            pauseSVG: require('../assets/pause.svg'),
            pausedUrl: require('../assets/play.svg'),
        }
    },
    methods: {
        // vuex
        ...mapActions('MusicAbout', { searchMusic: 'searchMusic' }),
        ...mapActions('PlayerAbout', {
            changePlayerState: 'changePlayerState',
            BePlay: "bePlay",
            BePuse: "bePuse",
            PlayById: 'PlayById',
            PreMusic: 'PreMusic',
            NextMusic: 'NextMusic'
        }),
        ...mapMutations('MusicAbout', { changeKeyword: 'CHANGE_KEYWORD' }),
        // 自己的方法

        // 刷新进度条 和是否暂停
        updateProgress: function () {
            setInterval(() => {
                if (!this.player.paused) {
                    this.progress = (this.player.currentTime / this.player.duration) * 100;
                    this.pausedUrl = this.pauseSVG;
                } else {
                    this.pausedUrl = this.playSVG
                }

            }, 100)
        },
        // 点击调整 进度条
        adjustPogress(e) {
            // console.log(e,
            //     e.offsetX,
            //     e.offsetY,
            //     e.target.id,
            //     document.getElementById("progressBar").offsetWidth
            // );
            // 计算占比
            this.player.currentTime = (e.offsetX / document.getElementById("progressBar").offsetWidth) * this.player.duration
            this.progress = e.offsetX / document.getElementById("progressBar").offsetWidth * 100
            // console.log(this.progress*100);

        }
    },
    computed: {
        ...mapState('MusicAbout', ['musics']),
        ...mapState('PlayerAbout', ['pausedState', 'player', 'music_list', 'index']),
        ...mapGetters('PlayerAbout', ['getPlayerState'])
    },
    watch: {
    },

    mounted() {
        // 将自己的play方法挂在上去
        this.updateProgress(); // 刷新进度条
        this.player.volume = 0.05;

    }
}
</script>

<style scoped>
#foot-box {
    position: fixed;
    bottom: 0px;
    width: 100%;
    min-width: 370px;
    height: 55px;
    background-color: #333;
    align-items: center;
}

#foot-box-detail {
    margin: auto;
    padding: 0%;
    position: relative;
    bottom: 0px;
    width: 84%;
    height: 55px;
    background-color: #333;
    transition: 0.4s linear;
}

@media screen and (max-width:900px) {
    #foot-box-detail {
        width: 100%;
        transition: 0.4s linear;
    }
}

#player {
    position: absolute;
    background-color: #333;
    float: left;
    bottom: 0px;
    width: 100%;
    height: 100%;
    padding-left: 150px;
    box-sizing: border-box;
    z-index: 999;
}

.up-next {
    position: absolute;
    background-color: #333;
    width: 150px;
    left: 0px;
    height: 100%;
    z-index: 1000;
}

.l-btn {
    position: relative;
    width: 18%;
    bottom: 7px;
}

#fUrl {
    position: relative;
    top: 4px;
    left: 10px;
    height: 46px;
    overflow: hidden;
}

.clc:hover {
    cursor: pointer;
}

.systemUpdates {
    margin: auto;
    position: relative;
    float: left;
    width: 95%;
    margin-left: 2%;
    bottom: 0px;
    margin-top: 8px;
}

.progressBar {
    margin-top: 21px;
    width: 100%;
    height: 5px;
    background: #ccc;
    cursor: pointer;
    border-radius: 4px;
}

.barContent {
    height: 5px;
    width: 0px;
    background: #777;
    border-radius: 4px;
}

.progress_btn {
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: -3px;
    background-color: #fff;
    cursor: pointer;
    border-radius: 50%;
    /* transform: scale(0); */
    /*  transition: 0.2s; */
}

.systemUpdates {
    /* border: 1px solid red; */
    color: #fff;
    font-size: smaller;
}

.process {
    float: right;
    margin-bottom: 3px;
}

#music-name {
    margin-bottom: 4px;
    margin-left: 5px;
    float: left;
}
</style>