// 音乐详细
export default class Music {
    id;  // id
    name;   // 歌名
    src;   // 歌曲地址
    picUrl;  // 歌曲图片
    duration;// 歌曲时长
    singer_list; // 歌手列表
    music_album; // 歌曲的专辑
    text;    // 歌词
    constructor(id = null, name = null, src = null, picUrl = null, duration = null, singer_list = null, music_album = null, text = null) {
        this.id = id;
        this.name = name;
        this.src = src;
        this.picUrl = picUrl;
        this.duration = duration;
        this.singer_list = singer_list;
        this.music_album = music_album;
        this.text = text;
    };
}

