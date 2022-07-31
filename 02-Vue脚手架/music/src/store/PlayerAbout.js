import Music from "@/entry/Music"
import axios from 'axios'

export default {
    namespaced: true,//开启命名空间
    state: {
        player: new Audio("http://music.163.com/song/media/outer/url?id=1449648960.mp3"),
        pausedState: true,
        music_list: [
            {
                "name": "呼吸决定",
                "id": 1449648960,
                "pst": 0,
                "t": 0,
                "src": "http://music.163.com/song/media/outer/url?id=1449648960.mp3",
                "ar": [
                    {
                        "id": 30207301,
                        "name": "蓝心羽",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 0,
                "v": 15,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 89712974,
                    "name": "呼吸决定",
                    "picUrl": "https://p2.music.126.net/L29I92ffE48AtA64n50PLQ==/109951167576645082.jpg",
                    "tns": [],
                    "pic_str": "109951167576645082",
                    "pic": 109951167576645090
                },
                "dt": 143406,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 5738623,
                    "vd": -37182,
                    "sr": 44100
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 3443191,
                    "vd": -34550,
                    "sr": 44100
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 2295475,
                    "vd": -32768,
                    "sr": 44100
                },
                "sq": {
                    "br": 1411000,
                    "fid": 0,
                    "size": 13873989,
                    "vd": -37276,
                    "sr": 44100
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 262272,
                "originCoverType": 2,
                "originSongSimpleData": {
                    "songId": 35678875,
                    "name": "呼吸决定",
                    "artists": [
                        {
                            "id": 1160085,
                            "name": "Fine乐团"
                        }
                    ],
                    "albumMeta": {
                        "id": 3314573,
                        "name": "I'm Sorry"
                    }
                },
                "tagPicList": null,
                "resourceState": true,
                "version": 15,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "awardTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "rtype": 0,
                "rurl": null,
                "mst": 9,
                "cp": 743010,
                "mv": 0,
                "publishTime": 0
            }
        ],
        index: 0
    },
    actions: {
        // 上一首
        PreMusic(context) {
            let state = context.state;
            //   向下
            if (state.index + 1 == state.music_list.length) return;
            state.index += 1;
            state.player.src = state.music_list[state.index].src;
            setTimeout(
                () => context.dispatch("bePlay"), 20
            )
        },
        // 下一首
        NextMusic(context) {
            let state = context.state;
            //   向上
            if (state.index - 1 < 0) return;
            state.index -= 1;
            state.player.src = state.music_list[state.index].src;
            context.dispatch("bePlay")
        },
        // 通过id播放
        PlayById(context, id) {
            // console.log("PlayById", id);
            if (!id) return;
            let state = context.state;
            // 判断是否为当前音乐
            if (state.music_list[state.index].id == id) {
                // 移动到最前
                state.music_list.unshift(state.music_list.splice(state.index, 1)[0]);
                console.log(state.music_list);
                state.index = 0;
                context.dispatch("bePlay");
                return;
            }

            let record = -1;
            // 判断是否在列表中
            state.music_list.forEach((s, i) => {
                if (id == s.id) {
                    record = i;
                }
            });
            // 如果在列表中 移到最前
            if (record !== -1) {
                let temp = state.music_list.splice(record, 1);
                state.music_list.unshift(temp[0]);
                this.index = 0;
                context.dispatch("bePause");
                state.player.src = state.music_list[0].src;
                setTimeout(
                    () => context.dispatch("bePlay"), 20
                )
                return;
            }
            // 不在列表 请求并 添加到数组前
            axios.get("http://cloud-music.pl-fe.cn/song/detail/?ids=" + id).then(
                res => {
                    // console.log(res.data);
                    let song = res.data.songs[0];
                    song.src = "http://music.163.com/song/media/outer/url?id=" + id + ".mp3"
                    state.music_list.unshift(song);
                    state.index = 0;
                    // console.log(state.music_list, id);
                    state.player.src = song.src;
                    setTimeout(() =>
                        context.dispatch("bePlay"), 20
                    )
                    // this.bePlay();
                },
                err => {
                    console.log(err);
                }
            )
        },
        // 切换播放状态 播放《=》暂停
        changePlayerState(context) {  // 仅播放
            // console.log("changeAudioPlay", context.state.player.paused);
            if (context.state.player.paused) {
                context.dispatch("bePlay");
            } else {
                context.dispatch("bePause");
            }
        },
        // 播放
        bePlay(context) {
            setTimeout(() => {
                context.state.player.play();
                context.state.pausedState = context.state.player.paused;
            }, 20
            )
        },
        // 暂停
        bePause(context) {
            context.state.player.pause();
            context.state.pausedState = context.state.player.paused;
        }

    },
    mutations: {},
    getters: {
        getPlayerState(state) {
            return state.player.paused
        }
    }
}