import Music from "@/entry/Music"
import axios from 'axios'
import $ from 'jquery'




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
                'lrc':
                    '[00:00.000] 作词 : 刘冠南\
                    [00:01.000] 作曲 : 刘冠南\
                    [00:20.48]Hi~\
                    [00:24.97]怎么那么坏\
                    [00:31.22]才两天就深爱\
                    [00:35.95]说得好像真爱\
                    [00:38.60]我对你说 Hi~\
                    [00:44.08]今天有没有恋爱\
                    [00:50.57]是否谈了又甩\
                    [00:55.32]还说难遇真爱\
                    [00:58.01]我要你现在\
                    [01:01.39]把丑事都说出来 Oh\
                    [01:06.23]才会听你表白\
                    [01:10.19]听你说你是真的喜欢我\
                    [01:14.76]真的想谈恋爱了\
                    [01:19.10]那就让情绪决定\
                    [01:23.21]听呼吸频率\
                    [01:26.32]跟感觉旅行\
                    [01:29.23]大不了不谈感情\
                    [01:34.02]Just do what I suppose to do\
                    [01:38.37]你也不用再演戏\
                    [01:42.14]怪我不爱你\
                    [01:45.49]是你的决定\
                    [01:48.47]每句话在我心里\
                    [01:53.32]清清楚楚地说你想离去\
                    [01:59.59]'
                ,
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
            console.log("not index");

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
            console.log("not in list");

            // 请求得到该Music

            var song = null;
            // 获取muisc的详细信息
            $.ajax({
                url: "http://cloud-music.pl-fe.cn/song/detail/?ids=" + id,
                cache: false,
                dataType: 'json',
                type: 'get',
                async: false,
                success: function (data) {
                    song = data.songs[0];
                    song.src = "http://music.163.com/song/media/outer/url?id=" + id + ".mp3"
                },
                error: function (data, errormsg, e) {
                    console.log(data);
                }
            });
            // 同步获取 歌词
            $.ajax({
                url: "http://cloud-music.pl-fe.cn/lyric?id=" + id,
                cache: false,
                dataType: 'json',
                type: 'get',
                async: false,
                success: function (data) {
                    song.lrc = data.lrc.lyric;
                },
                error: function (data, errormsg, e) {
                    console.log(data);
                }
            });

            if (!song) return;
            
            console.log("PlayById", song);
            state.music_list.unshift(song);
            state.index = 0;
            // console.log(state.music_list, id);
            state.player.src = song.src;
            context.dispatch("bePlay");
            setTimeout(() => {
                state.player.pause()
                state.player.load()
            }, 10)
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