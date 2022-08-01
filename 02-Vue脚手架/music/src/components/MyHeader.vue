<template>
    <div id="head-box">
        <ul id="ahead">
            <li>
                <div class="dropdown">
                    <router-link id="head-my" class="dropbtn" :to="{
                        name: 'login'
                    }">
                        登录
                    </router-link>
                    <div class="dropdown-content">
                        <span id="head-my-home" onclick="">信息</span>
                        <span id="head-my-set" onclick="">设置</span>
                        <span id="head-my-unlogin">退出</span>
                    </div>
                </div>
            </li>
            <li id="my-history"><a>我的喜爱</a></li>
            <li>
                <img id="search-coin" @click="search" src="../assets/search.svg" alt="">
            </li>
            <li>
                <input id="search-input" type="text" name="q" :value="keyword" @change="updateKeyword"
                    @keyup.enter="search" placeholder="输入歌名">
            </li>
            <li>
                <router-link class="active" :to="{
                    name: 'hot'
                }">
                    asedrfa Music
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: "MyHeader",
    computed: {
        ...mapState('MusicAbout', ['keyword']),
    },
    methods: {
        ...mapActions('MusicAbout', { searchMusic: 'searchMusic' }),
        ...mapMutations('MusicAbout', { changeKeyword: 'CHANGE_KEYWORD' }),
        search(e) {
            if (!this.keyword) return;
            this.searchMusic(this.keyword);
            this.$router.push({
                name: 'search',
            })
        },
        updateKeyword(e) {
            this.changeKeyword(e.target.value)
        },

    },
}
</script>

<style scoped>
#head-box {
    /* border: 1px solid red; */
    margin: 0%;
    padding: 0%;
    background-color: #333;
    position: fixed;
    width: 100%;
    min-width: 370px;
    top: 0px;
    height: 52px;
    z-index: 999;
}

#ahead {
    /* border: 1px solid red; */
    list-style-type: none;
    margin: auto;
    padding: 0%;
    width: 84%;
    height: 100%;
    transition: 0.4s linear;
}

#ahead li {
    float: right;
}

li a,
li span,
.dropbtn {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.dropdown {
    display: inline-block;
    background-color: #333;
    /* position: absolute;
    right: 0%; */
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #333;
    /* min-width: 70px; */
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown-content span {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content span:hover {
    background-color: #666;
    cursor: pointer;
}

#search-coin:hover,
#head-my:hover,
#my-history:hover {
    cursor: pointer;
}

.dropdown:hover .dropdown-content {
    display: block;
    float: bottom;
    position: fixed;
    z-index: 1;
}

.myhover {
    display: block;
    float: bottom;
    position: fixed;
    z-index: 1;
}


/* my desc */

.active {
    position: absolute;
    left: 8%;
    transition: 0.4s linear;
}


/* search */

#search-input {
    padding-left: 5px;
    width: 260px;
    height: 23px;
    border-radius: 5px;
    border: 0.8px solid #333;
    font-size: 0.8em;
    margin-right: 12px;
    margin-top: 12px;
    outline: none;
}

#search-coin {
    position: relative;
    width: 22px;
    margin-top: 15px;
    margin-right: 10px;
}

#ifr {
    display: hidden;
}

@media screen and (max-width: 900px)and (min-width: 600px) {
    #ahead {
        width: 100%;
        transition: 0.4s linear;
    }

    .active {
        left: 0%;
        transition: 0.4s linear;
    }
}

@media screen and (max-width: 600px) {
    #ahead {
        width: 100%;
        transition: 0.4s linear;
    }

    .active {
        left: 0%;
        transition: 0.4s linear;
    }

    #search-input {
        display: none;
        transition: 0.4s ease-out;
    }

    #my-history {
        display: none;
        transition: 0.4s ease-out;
    }
}
</style>