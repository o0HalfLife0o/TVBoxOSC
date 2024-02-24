import { Crypto, _ } from './lib/cat.js';

let key = 'mtsp';
let main = 'http://mt77.pw';
let url = '';
let siteKey = '';
let siteType = 0;

let searchKeys = [];

let tags = 'JTVCJTIyJUU2JUI1JTkzJUU1JUFGJTg2JUU2JUJGJTgwJUU2JTgzJTg1JTIyJTJDJTIyJUU2JTkwJTlDJUU2JTlGJUE1JUU1JUFFJTk4JTIyJTJDJTIyJUU1JUE1JUIzJUU0JUJCJTg2JTIyJTJDJTIyJUU1JTkwJThFJUU1JTg1JUE1JTIyJTJDJTIyJUU3JUJFJThFJUU0JUI5JUIzJUU1JUI3JUE4JUU4JTgzJUI4JTIyJTJDJTIyJUU1JThGJUEzJUU0JUJBJUE0JUU1JThGJUEzJUU3JTg4JTg2JTIyJTJDJTIyJUU1JTg2JTg1JUU1JUIwJTg0JTIyJTJDJTIyJUU1JUE1JUIzJUU0JUI4JThBJTIyJTJDJTIyJUU3JUJFJThFJUU4JTg1JUJGJTIyJTJDJTIyJUU3JUIyJUJFJUU1JTkzJTgxJTIyJTJDJTIyJUU0JUI4JTlEJUU4JUEyJTlDJTIyJTJDJTIyJUU1JUIwJTkxJUU1JUE1JUIzJTIyJTJDJTIyJUU1JTg4JUI2JUU2JTlDJThEJTIyJTJDJTIyJUU3JUJFJUE0UCUyMiUyQyUyMiVFNyU5OSVCRCVFOCU5OSU4RSUyMiUyQyUyMiVFNiU4MyU4NSVFOCVCNiVBMyVFOCVBRiVCMSVFNiU4MyU5MSUyMiUyQyUyMiVFOSU4MSU5MyVFNSU4NSVCNyUyMiUyQyUyMiVFNSVBNSVCMyVFNyVBNSU5RSUyMiUyQyUyMiVFOSVCQSVCQiVFOCVCMSU4NiVFNCVCQyVBMCVFNSVBQSU5MiUyMiUyQyUyMiVFOSVBMiU5QyVFNSVCMCU4NCUyMiUyQyUyMiVFNSVBRCVBNiVFNyU5NCU5RiUyMiUyQyUyMiVFNCVCQSVCQSVFNSVBNiVCQiUyMiUyQyUyMiVFNyVCNCVBMCVFNCVCQSVCQSUyMiUyQyUyMiVFNiVCNSVCNCVFNSVBRSVBNCUyMiUyQyUyMiVFOSU4NSU5MiVFNSVCQSU5NyUyMiUyQyUyMiVFNyU4NiU5RiVFNSVBNSVCMyUyMiUyQyUyMiVFOCU4NyVBQSVFNiU4QiU4RCUyMiUyQyUyMiVFNSVCMCU5MSVFNSVBNiU4NyUyMiUyQyUyMiVFNSU4OSVBNyVFNiU4MyU4NSUyMiUyQyUyMiVFNCVCOSVCMyVFNCVCQSVBNCUyMiUyQyUyMiVFNiU4OCVCNyVFNSVBNCU5NiUyMiUyQyUyMlNXQUclMjIlMkMlMjIlRTUlQTUlQjMlRTQlQjglQkIlRTYlOTIlQUQlMjIlMkMlMjIlRTQlQjglQUQlRTYlOTYlODclRTUlQUQlOTclRTUlQjklOTUlMjIlMkMlMjIlRTQlQjklQjElRTQlQkMlQTYlMjIlMkMlMjIlRTglQjAlODMlRTYlOTUlOTklMjIlMkMlMjIlRTYlOEQlODYlRTclQkIlOTElMjIlMkMlMjIlRTYlQTglQTElRTclODklQjklMjIlMkMlMjIlRTclOUIlQjQlRTYlOTIlQUQlMjIlMkMlMjI5MSVFNSU4OCVCNiVFNyU4OSU4NyVFNSU4RSU4MiUyMiUyQyUyMiVFOSU4NyU4RSVFNiU4OCU5OCUyMiUyQyUyMiVFNSU4MSVCNyVFNiU4QiU4RCUyMiUyQyUyMiVFNSU4QiVCRSVFNiU5MCVBRCUyMiUyQyUyMiVFNiU5MSU4NCVFNSU4MyU4RiVFNSVBNCVCNCUyMiUyQyUyMiVFNSU4NyVCQSVFOCVCRCVBOCUyMiUyQyUyMiVFNyVCRCU5MSVFNyVCQSVBMiUyMiUyQyUyMiVFNSVCNyVBOCVFNiVBMCVCOSUyMiUyQyUyMiVFNiVBQyVBNyVFNyVCRSU4RSUyMiUyQyUyMmNvc3BsYXklMjIlMkMlMjIlRTUlQkMlQkElRTUlQTUlQjglMjIlMkMlMjIlRTUlQTQlQTklRTclQkUlOEUlRTQlQkMlQTAlRTUlQUElOTIlMjIlMkMlMjIlRTYlOEMlODklRTYlOTElQTklMjIlMkMlMjIzRCVFNSU4QSVBOCVFNiVCQyVBQiUyMiUyQyUyMiVFOCU5MCU5RCVFOCU4RSU4OSUyMiUyQyUyMiVFNSVBNyU5MCVFNSVBNiVCOSVFOCU4QSVCMSUyMiUyQyUyMiVFNSU4QSU5RSVFNSU4NSVBQyVFNSVBRSVBNCUyMiUyQyUyMiVFOCVCRCVBNiVFOSU5QyU4NyUyMiUyQyUyMiVFNSU4MSVCNyVFNiU4MyU4NSUyMiUyQyUyMiVFNiU5RSU5QyVFNSU4NiVCQiVFNCVCQyVBMCVFNSVBQSU5MiUyMiUyQyUyMiVFOCU4MiU5QiVFNCVCQSVBNCUyMiUyQyUyMlNNJTIyJTJDJTIyJUU5JTg3JThEJUU1JThGJUEzJTIyJTJDJTIyJUU2JUIzJUIzJUU4JUExJUEzJTIyJTJDJTIyU1BBJTIyJTJDJTIyJUU2JThFJUEyJUU4JThBJUIxJTIyJTJDJTIyJUU4JUI2JUIzJUU0JUJBJUE0JTIyJTJDJTIyJUU3JUE5JUJBJUU1JUE3JTkwJTIyJTJDJTIyJUU4JTlDJTlDJUU2JUExJTgzJUU0JUJDJUEwJUU1JUFBJTkyJTIyJTJDJTIyJUU2JTk1JTk5JUU1JUI4JTg4JTIyJTJDJTIyJUU2JUJEJUFFJUU1JTkwJUI5JTIyJTJDJTIyJUU5JTk3JUE4JUU0JUJBJThCJUU0JUJCJUI2JTIyJTJDJTIyJUU1JUE1JUIzJUU1JTkwJThDJTIyJTJDJTIyJUU2JThBJTgwJUU1JUI4JTg4JTIyJTJDJTIyJUU3JUIyJUJFJUU0JUI4JTlDJUU0JUJDJUEwJUU1JUFBJTkyJTIyJTJDJTIyJUU2JTk1JTk5JUU1JUFFJUE0JTIyJTJDJTIyJUU4JUJGJUI3JUU1JUE1JUI4JTIyJTJDJTIyJUU2JThEJUEyJUU1JUE2JUJCJTIyJTJDJTIyS1RWJTIyJTJDJTIyJUU2JTk4JTlGJUU3JUE5JUJBJUU0JUJDJUEwJUU1JUFBJTkyJTIyJTJDJTIyJUU2JThBJUE0JUU1JUEzJUFCJTIyJTJDJTIyJUU2JUFGJThEJUU1JUE1JUIzJTIyJTVE';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36';
async function request(reqUrl, agentSp) {
    const res = await req(reqUrl, {
        headers: {
            'User-Agent': agentSp || UA,
        },
    });
    return res.content;
}

// cfg = {skey: siteKey, ext: extend}
async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype;
    // 获取url
    let html = await request(main);
    url = html.match(/location\.href="(.*)"/)[1].replace('https', 'http');
    tags = JSON.parse(decodeURIComponent(base64Decode(tags)));
    searchKeys = cfg.tags || [];
    let mainJs = await request(url + '/main.js');
    url = mainJs.match(/apiurl = '(.*)'/)[1].replace('https', 'http');
}

async function home(filter) {
    let classes = [];
    let filterObj = {};
    let tagIdx = 1;
    _.each(_.chunk(tags, 24), (array) => {
        const subs = _.chunk(array, 8);
        let tid = '';
        let init = '';
        for (let i = 0; i < subs.length; i++) {
            let tt = {
                key: 'tag',
                name: '',
                init: '',
                value: _.map(subs[i], (e) => {
                    return { n: e, v: e };
                }),
            };
            if (i == 0) {
                init = tt.value[0].v;
                tt['init'] = init;
                tid = tt.value[0].v;
                filterObj[tid] = [tt];
            } else {
                tt['init'] = init;
                filterObj[tid].push(tt);
            }
        }
        classes.push({
            type_id: tid,
            type_name: '综合' + tagIdx,
            land: 1,
        });
        tagIdx++;
    });

    _.each(searchKeys, (s) => {
        classes.push({
            type_id: 'sc_' + s,
            type_name: s,
            land: 1,
        });
    });

    return JSON.stringify({
        class: classes,
        filters: filterObj,
    });
}

async function homeVod() {
    return '{}';
}

async function category(tid, pg, filter, extend) {
    if (pg <= 0) pg = 1;
    let link = url;
    if (tid.startsWith('sc_')) {
        link = link + '/search?q=' + encodeURIComponent(tid.substr(3)) + '&page=' + pg + '&size=16';
    } else {
        link = link + '/vodList?&tag=' + (extend.tag || tid) + '&page=' + pg + '&size=16';
    }
    const data = decrypt(JSON.parse(await request(link)).data);
    let videos = [];
    for (const vod of data.movies) {
        if (!vod.id) continue;
        videos.push({
            vod_id: vod.id,
            vod_name: vod.name,
            vod_pic: vod.thumb,
            vod_remarks: vod.views,
        });
    }
    return JSON.stringify({
        page: parseInt(data.page),
        pagecount: _.ceil(data.totals / 16),
        limit: 16,
        total: data.totals,
        list: videos,
    });
}

async function detail(id) {
    const link = url + '/vodDetail?id=' + id;
    const data = decrypt(JSON.parse(await request(link)).data).info;
    let desc = data.name + '\n';
    if (data.views) {
        desc += '观看次数：' + data.views + '\n';
    }
    let vod = {
        vod_id: id,
        vod_name: data.name,
        vod_pic: data.thumb,
        type_name: (data.tag || []).join(','),
        vod_year: data.date,
        vod_content: desc,
    };
    vod.vod_play_from = 'm3u8';
    let urls = [];
    if (data.m3u8) {
        urls.push('主力$' + data.m3u8);
    }
    if (data.m3u8bak) {
        urls.push('备用$' + data.m3u8bak);
    }
    vod.vod_play_url = urls.join('#');
    return JSON.stringify({
        list: [vod],
    });
}

async function proxy(segments, headers) {}

async function play(flag, id, flags) {
    return JSON.stringify({
        parse: 0,
        url: id,
    });
}

async function search(wd, quick, pg) {
    let page = pg || 1;
    if (page == 0) page = 1;
    let videos = [];
    let link = url + '/search?q=' + encodeURIComponent(wd) + '&page=' + page + '&size=16';
    const data = decrypt(JSON.parse(await request(link)).data);
    for (const vod of data.movies) {
        if (!vod.id) continue;
        videos.push({
            vod_id: vod.id,
            vod_name: vod.name,
            vod_pic: vod.thumb,
            vod_remarks: vod.views,
        });
    }

    return JSON.stringify({
        page: parseInt(data.page),
        pagecount: _.ceil(data.totals / 16),
        land: 1,
        list: videos,
    });
}

function decrypt(content) {
    return JSON.parse(aesX('AES/CBC/PKCS7', false, content, true, 'F31F2A75FBF94099', '12345BCA901ER456', false));
}

function base64Encode(text) {
    return Crypto.enc.Base64.stringify(Crypto.enc.Utf8.parse(text));
}

function base64Decode(text) {
    return Crypto.enc.Utf8.stringify(Crypto.enc.Base64.parse(text));
}

export function __jsEvalReturn() {
    return {
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        search: search,
    };
}
