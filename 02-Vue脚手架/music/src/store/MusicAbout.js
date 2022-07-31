
import axios from 'axios'
import Music from '@/entry/Music'



export default {
    namespaced: true,//开启命名空间
    state: {
        base_url: 'http://cloud-music.pl-fe.cn',
        keyword: '呼吸决定',
        musics: []
    },
    actions: {
        searchMusic(context, keyword) {
            // console.log(context, keyword);
            // console.log(new Music());
            // 判断是否传入keyword
            if (!keyword) keyword = context.state.keyword;
            else context.state.keyword = keyword;
            let songs = null;
            let musics = []

            axios.get(context.state.base_url + "/search", { params: { "keywords": keyword } }).then(
                res => {
                    // console.log(res.data);
                    if (res.data.code != 200) {
                        return
                    }
                    songs = res.data.result.songs;
                    // console.log(1, songs);
                },
                errer => {
                    console.log(errer);
                }
            ).then(function () {     // 总会执行
                // console.log(songs);
                songs.forEach(song => {
                    musics.push(new Music(
                        song.id,
                        song.name,
                        "http://music.163.com/song/media/outer/url?id=" + song.id + ".mp3",
                        null,
                        song.duration,
                        song.artists,

                    ));

                });
                musics.filter((song => {
                    return axios.get("http://cloud-music.pl-fe.cn/check/music", { params: { id: song.id } }).then(
                        res => {
                            return res.data.success
                        },
                        err => {
                            return false
                        }
                    )
                }))

                context.commit("AddMusic", musics)
            })
        },
        SearchMusicDetail(context, id) {
            let music = new Music(id);
            axios.get("http://music.163.com/api/song/detail/?id=" + id + "&ids=%5B35678875%5D").then(
                res => {
                    console.log(res);
                },
                err => {
                    console.log(err);
                }
            )
            return music;
        }
    },
    mutations: {
        AddMusic(state, musics) {
            state.musics = musics;
        },
        CHANGE_KEYWORD(state, keyword) {
            state.keyword = keyword;
        }
    },
}