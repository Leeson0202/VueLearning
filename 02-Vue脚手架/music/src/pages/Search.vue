<template>
    <div id="table-div">
        <div style="width: 90%;margin: auto; max-width:1000px">
            <div id="search-div">
                <input id="search-input-b" type="text" :value="keyword" @change="updateKeyword" @keyup.enter="search"
                    placeholder="输入歌名">
                <div id="search-btn" @click="search"><span>搜索</span></div>
            </div>
            <table v-show="musics.length > 0" id="search-table">
                <tr id="table-tag">
                    <th class="first" style="padding-left:30px">
                        歌名
                    </th>
                    <th>歌手</th>
                    <th>时长</th>
                </tr>
                <tr class="musicResult" v-for="music in musics" :key="music.id">
                    <td class="first"><img class="playmusic" @click="PlayById(music.id)" src="../assets/splay.svg" />
                        <div class="mName">{{ music.name }}
                        </div>
                    </td>
                    <td><span>{{ music.singer_list ? music.singer_list[0].name : undefined }}
                        </span></td>
                    <td><span>{{ timeFormate(music.duration/1000) }}
                        </span></td>
                </tr>
            </table>
            <div style="height: 200px"></div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: "Search",
    data() {
        return {
        }
    },
    computed: {
        ...mapState('MusicAbout', ['keyword', 'musics']),
    },
    methods: {
        ...mapActions('MusicAbout', { searchMusic: 'searchMusic' }),
        ...mapActions('PlayerAbout', { PlayById: 'PlayById' }),
        ...mapMutations('MusicAbout', { changeKeyword: 'CHANGE_KEYWORD' }),
        search() {
            if (!this.keyword) return;
            this.searchMusic(this.keyword);
        },
        updateKeyword(e) {
            this.changeKeyword(e.target.value)
        },

    },
    mounted() {
        // 挂在时判断是否搜索
        if (this.keyword) {
            this.search();
        }
        this.$bus.$on("search", this.search);
        this.$bus.$on("updateKeyword", this.updateKeyword);
    }
}
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}


#table-div {
    display: block;
    /* height: calc(100%-100px); */
    height: 100%;
    margin: auto;
    padding-top: 50px;
    text-align: center;
    overflow: auto
}

.body-context {
    position: relative;
    width: 100%;
    height: 1000px;
    background-color: #777;
    margin: auto;
    display: none;
}

#search-div,
#search-table {
    display: inline-block;
}

#search-div {
    width: 60%;
    border: #333 solid 1px;
    border-radius: 4px;
    overflow: hidden;
    transition: 0.4s linear;
    max-width: 650px;
    padding-left: 0%;
    box-sizing: border-box;
}

#search-div input {
    float: left;
    background: #fff;
    outline: none;
    border: 0px solid #333;
    border-top-left-radius: 4px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 0px;
    width: 80%;
    height: 40px;
    padding: 0%;
    padding-left: 6px;
    font-size: medium;
}

#search-div div {
    float: right;
    top: 0%;
    color: #fff;
    width: 17.8%;
    height: 31px;
    overflow: hidden;
    cursor: pointer;
    padding-top: 9px;
}

@media screen and (max-width:600px) {
    #search-div {
        width: 99%;
        transition: 0.4s linear;
    }
}

#search-table {
    display: table;
    /* table-layout: fixed; */
    width: 99%;
    margin: auto;
    margin-top: 20px;
    border-collapse: collapse;
}

#table-tag {
    background-color: #fff;
    border: 1px solid #999;
    width: 100%;
    height: 2.3em;
    box-shadow: 0px 0px 20px #999 inset;
    color: #333;
}

#search-table tr {
    width: 100%;
    height: 40px;
    justify-content: flex-start;
}

#search-table tbody tr * {
    text-align: left;
}

td {
    height: 40px;
    font-size: small;
    color: #fff;
}

tr:nth-child(2n) {
    background-color: #6e6e6e;
}

.first {
    text-align: left;
}

.mName {
    position: relative;
    display: inline-block;
    height: 16.8px;
    width: 75%;
    overflow: hidden;
}

.playmusic {
    float: left;
    position: relative;
    width: 16px;
    margin: 0px 7px -4px;
    left: 0%;
}

tr span:hover {
    cursor: pointer;
    border-bottom: 1px dotted #fff;
}

tr img:hover {
    cursor: pointer;
}

.tianjia {
    width: 14px;
    justify-self: unset;
}
</style>