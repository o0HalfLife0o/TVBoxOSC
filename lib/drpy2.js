import cheerio from 'assets://js/lib/cheerio.min.js';
import 'assets://js/lib/crypto-js.js';
import './jsencrypt.js';
import './node-rsa.js';
import './pako.min.js';
// import JSEncrypt from './jsencrypt.js'; // 会导致壳子崩溃的
import 模板 from './模板.js'
import {gbkTool} from './gbk.js'

// import cheerio from "https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/libs/cheerio.min.js";
// import "https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/libs/crypto-js.js";
// import 模板 from"https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/js/模板.js";
// import {gbkTool} from 'https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/libs/gbk.js'

function init_test(){
    // console.log(typeof(CryptoJS));
    console.log("init_test_start");
    // print(模板);
    // print(typeof(模板.getMubans));
    console.log("当前版本号:"+VERSION);
    console.log('本地代理地址:'+getProxyUrl());
    console.log(RKEY);

    // rsa_demo_test();

    // console.log('Uint8Array:'+typeof(Uint8Array)+' '+'Uint16Array:'+typeof(Uint16Array));
    // console.log('encodeURIComponent:'+typeof(encodeURIComponent)+' '+'decodeURIComponent:'+typeof(decodeURIComponent));
    // console.log('atob:'+typeof(atob)+' '+'btoa:'+typeof(btoa));
    // log('typeof (JSEncrypt):'+typeof (JSEncrypt));
    // log('typeof (pako):'+typeof (pako));
    // let b64_str = btoa('hello hipy');
    // let str = atob(b64_str);
    // console.log(`btoa加密文本:${b64_str},atob解密文本:${str}`)
    // let gzip_str = gzip('{"a":"电影","b":"电影","c":"电影","d":"电影","e":"电影","f":"电影"}');
    // let ungzip_str = ungzip(gzip_str);
    // console.log(`gzip加密文本:${gzip_str},长度:${gzip_str.length},ungzip解密文本:${ungzip_str},长度:${ungzip_str.length}`);
    // let a = {"1":[{"key":"类型","name":"类型","value":[{"n":"全部","v":""},{"n":"Netflix","v":"NETFLIX"},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"动作","v":"动作"},{"n":"爱情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"惊悚","v":"惊悚"},{"n":"犯罪","v":"犯罪"},{"n":"科幻","v":"科幻"},{"n":"悬疑","v":"悬疑"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"战争","v":"战争"},{"n":"历史","v":"历史"},{"n":"古装","v":"古装"},{"n":"家庭","v":"家庭"},{"n":"传记","v":"传记"},{"n":"武侠","v":"武侠"},{"n":"歌舞","v":"歌舞"},{"n":"短片","v":"短片"},{"n":"动画","v":"动画"},{"n":"儿童","v":"儿童"},{"n":"职场","v":"职场"}]},{"key":"地区","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"台湾","v":"中国台湾"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"印度","v":"印度"},{"n":"泰国","v":"泰国"},{"n":"丹麦","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"加拿大","v":"加拿大"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"},{"n":"爱尔兰","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亚","v":"澳大利亚"},{"n":"其他","v":"其他"}]},{"key":"语言","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"法语","v":"法语"},{"n":"其他","v":"其他"}]},{"key":"年份","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"10年代","v":"2010_2019"},{"n":"00年代","v":"2000_2009"},{"n":"90年代","v":"1990_1999"},{"n":"80年代","v":"1980_1989"},{"n":"更早","v":"0_1979"}]},{"key":"排序","name":"排序","value":[{"n":"综合","v":""},{"n":"最新","v":"2"},{"n":"最热","v":"3"},{"n":"评分","v":"4"}]}],"2":[{"key":"类型","name":"类型","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"剧情","v":"剧情"},{"n":"爱情","v":"爱情"},{"n":"喜剧","v":"喜剧"},{"n":"犯罪","v":"犯罪"},{"n":"悬疑","v":"悬疑"},{"n":"古装","v":"古装"},{"n":"动作","v":"动作"},{"n":"家庭","v":"家庭"},{"n":"惊悚","v":"惊悚"},{"n":"奇幻","v":"奇幻"},{"n":"美剧","v":"美剧"},{"n":"科幻","v":"科幻"},{"n":"历史","v":"历史"},{"n":"战争","v":"战争"},{"n":"韩剧","v":"韩剧"},{"n":"武侠","v":"武侠"},{"n":"言情","v":"言情"},{"n":"恐怖","v":"恐怖"},{"n":"冒险","v":"冒险"},{"n":"都市","v":"都市"},{"n":"职场","v":"职场"}]},{"key":"地区","name":"地区","value":[{"n":"地区","v":""},{"n":"大陆","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"韩国","v":"韩国"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"德国","v":"德国"},{"n":"台湾","v":"中国台湾"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其他","v":"其他"}]},{"key":"语言","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"法语","v":"法语"},{"n":"其他","v":"其他"}]},{"key":"年份","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"10年代","v":"2010_2019"},{"n":"00年代","v":"2000_2009"},{"n":"90年代","v":"1990_1999"},{"n":"80年代","v":"1980_1989"},{"n":"更早","v":"0_1979"}]},{"key":"排序","name":"排序","value":[{"n":"综合","v":""},{"n":"最新","v":"2"},{"n":"最热","v":"3"},{"n":"评分","v":"4"}]}],"3":[{"key":"类型","name":"类型","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"动态漫画","v":"动态漫画"},{"n":"剧情","v":"剧情"},{"n":"动画","v":"动画"},{"n":"喜剧","v":"喜剧"},{"n":"冒险","v":"冒险"},{"n":"动作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"科幻","v":"科幻"},{"n":"儿童","v":"儿童"},{"n":"搞笑","v":"搞笑"},{"n":"爱情","v":"爱情"},{"n":"家庭","v":"家庭"},{"n":"短片","v":"短片"},{"n":"热血","v":"热血"},{"n":"益智","v":"益智"},{"n":"悬疑","v":"悬疑"},{"n":"经典","v":"经典"},{"n":"校园","v":"校园"},{"n":"Anime","v":"Anime"},{"n":"运动","v":"运动"},{"n":"亲子","v":"亲子"},{"n":"青春","v":"青春"},{"n":"恋爱","v":"恋爱"},{"n":"武侠","v":"武侠"},{"n":"惊悚","v":"惊悚"}]},{"key":"地区","name":"地区","value":[{"n":"全部","v":""},{"n":"日本","v":"日本"},{"n":"大陆","v":"中国大陆"},{"n":"台湾","v":"中国台湾"},{"n":"美国","v":"美国"},{"n":"香港","v":"中国香港"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"印度","v":"印度"},{"n":"泰国","v":"泰国"},{"n":"丹麦","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"加拿大","v":"加拿大"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"},{"n":"爱尔兰","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亚","v":"澳大利亚"},{"n":"其他","v":"其他"}]},{"key":"语言","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"法语","v":"法语"},{"n":"其他","v":"其他"}]},{"key":"年份","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"10年代","v":"2010_2019"},{"n":"00年代","v":"2000_2009"},{"n":"90年代","v":"1990_1999"},{"n":"80年代","v":"1980_1989"},{"n":"更早","v":"0_1979"}]},{"key":"排序","name":"排序","value":[{"n":"综合","v":""},{"n":"最新","v":"2"},{"n":"最热","v":"3"},{"n":"评分","v":"4"}]}],"4":[{"key":"类型","name":"类型","value":[{"n":"全部","v":""},{"n":"纪录","v":"纪录"},{"n":"真人秀","v":"真人秀"},{"n":"记录","v":"记录"},{"n":"脱口秀","v":"脱口秀"},{"n":"剧情","v":"剧情"},{"n":"历史","v":"历史"},{"n":"喜剧","v":"喜剧"},{"n":"传记","v":"传记"},{"n":"相声","v":"相声"},{"n":"节目","v":"节目"},{"n":"歌舞","v":"歌舞"},{"n":"冒险","v":"冒险"},{"n":"运动","v":"运动"},{"n":"Season","v":"Season"},{"n":"犯罪","v":"犯罪"},{"n":"短片","v":"短片"},{"n":"搞笑","v":"搞笑"},{"n":"晚会","v":"晚会"}]},{"key":"地区","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"台湾","v":"中国台湾"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},{"key":"语言","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"法语","v":"法语"},{"n":"其他","v":"其他"}]},{"key":"年份","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"10年代","v":"2010_2019"},{"n":"00年代","v":"2000_2009"},{"n":"90年代","v":"1990_1999"},{"n":"80年代","v":"1980_1989"},{"n":"更早","v":"0_1979"}]},{"key":"排序","name":"排序","value":[{"n":"综合","v":""},{"n":"最新","v":"2"},{"n":"最热","v":"3"},{"n":"评分","v":"4"}]}],"6":[{"key":"类型","name":"类型","value":[{"n":"类型","v":""},{"n":"逆袭","v":"逆袭"},{"n":"甜宠","v":"甜宠"},{"n":"虐恋","v":"虐恋"},{"n":"穿越","v":"穿越"},{"n":"重生","v":"重生"},{"n":"剧情","v":"剧情"},{"n":"科幻","v":"科幻"},{"n":"武侠","v":"武侠"},{"n":"爱情","v":"爱情"},{"n":"动作","v":"动作"},{"n":"战争","v":"战争"},{"n":"冒险","v":"冒险"},{"n":"其它","v":"其它"}]},{"key":"排序","name":"排序","value":[{"n":"综合","v":""},{"n":"最新","v":"2"},{"n":"最热","v":"3"}]}]};
    // log(gzip(JSON.stringify(a)));

    console.log(JSON.stringify(rule));
    console.log("init_test_end");


    // log('typeof (JSEncrypt):'+typeof (JSEncrypt));
    // let publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwEc7wBMtYKkxvrQNI3+ITBZwAkPkGvsv4TsAHFskKGZWz9eYl3scivhmlEfWHlEkdyb0m82CmB1qAgef+pD4cZu+Cdmm2e9lnExhLwm8cBgpkAen9QRNdjojZgxM0W+JcReH4W6pw+uFXiLRn4AIQkDftWGNLg6wlNS+39Z/RvP9zyATJLZ9AKDdHp62XMxEK1KZvWBuIg+Oa5UzgA9jy+2XyIqwhBtO8tPbUl21t2pvTzHoLUjSkPNm2LurcUk6+jQ2r6aiS2CN1NXIucPJU6mkuIQ821SjvkYPtIdRMntW4y2u4cyiqVEEQwlzWVMHh+/vfrWAQr9fgjDuYYtvPQIDAQAB';
    // let privateKey  = 'MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDARzvAEy1gqTG+tA0jf4hMFnACQ+Qa+y/hOwAcWyQoZlbP15iXexyK+GaUR9YeUSR3JvSbzYKYHWoCB5/6kPhxm74J2abZ72WcTGEvCbxwGCmQB6f1BE12OiNmDEzRb4lxF4fhbqnD64VeItGfgAhCQN+1YY0uDrCU1L7f1n9G8/3PIBMktn0AoN0enrZczEQrUpm9YG4iD45rlTOAD2PL7ZfIirCEG07y09tSXbW3am9PMegtSNKQ82bYu6txSTr6NDavpqJLYI3U1ci5w8lTqaS4hDzbVKO+Rg+0h1Eye1bjLa7hzKKpUQRDCXNZUweH7+9+tYBCv1+CMO5hi289AgMBAAECggEBAIRbRJUWXmEwdq64kGbELlV6CIZ2p3mvOSlIjO34Cy7IK7AMz9xOgbpj/XDK9miOIJTouu7ZC7GcZdGZ4BUCYBMMS0fKjGFuurpZlXhkslNTPqEHtCUkXhIpOR7RDrwIlErGEOIsZC4aXQcM3tF1t7mroJLh4OY4dHMu82lv5NM4hhFMNvHzXVvrPXeTzw26gddHVG/ke0WUYOcB5j3cPp8xaVp7JV8bdxtGtkqIfBLY/dIczzJu/3F3cBpU2nNwt8uVUF/w/HKlr7j8FqqFHXWh182beU0n5AIdRyRJBrRUAEhdtsUnvJOVBDqzZa+9DJ5395F7V8KRlQptxETdhCECgYEA4x/2HM9fnVIhG6wTbEt1LhGTKYb/igMAHLqquEMfRsB44tobI8gVNwR3qJQY/nKXxcQemQV29PcdqpENCKyXUXGD8SI1UPg15rHFBI8CIqlCXfzJybdHjmzlhaA9I5lofIVh+5MW7WkvHZoRy7NeDMhHUuaiveuqC4OJ8n+dD2kCgYEA2LkmUVef3WkBBwUBRdkyoog3DMwR+/ubb0ncJVYy3ItYVJltQ4HqmrRiJc8xBAoFnG8rbiqDnmTnDR3WbuxU1G2hml09fqId+rQds2UfESswCXHU43A4f77m1XyA6PprBxpozVIcmK69N4rR9jOXflLWo3O+p2ipUbmNpId7+rUCgYBSpcbBJRT+AmzZzPwkZDD32p1ady114zGfQq3s7z/qVw+mPQezNZPCuXVxerK9pKVl6b/Ynwxyh5nb/3xms6c8k7oXfQM5u5ihof63cfKs+jqUSPCE3pTDVw0OWwjkc2Z6KW9GRHgLXEMw2mevYE3RCPArUpHV2nO+TNddzuIwQQKBgQDOZwdnUNygMfEYjlu3+jOPN8u2FGTMZ8SRKPbRWFb4VH27lKPLN2AIFuOivsEf56uQYRAry7GumMq0Y0ZmPg5Mglz2dvaqNBv5OLFQuW3tHAST+iWWtroYb+fISts7B8QG79AAO8OgZksvKrbslBYj6SEiaomZRsR7YQzVNXOOQQKBgQCovElZ50c8ZJ6m9D9fw3Nes7u9vshpyyac5tt4tZ7yfU4l5pWGrIUqCE703qZp4NAqEvlZUCJbj9kkysaj/2MfFb2b9jSvdNB+V/YW9Cwg+5TziYoOcQzN1z2u4p4goTAv0S+pTNSr3qWaTUI4TXUXQajif45Fexv+MrP5AAXQyw=='
    // // let text = '你好';
    // let text = '[{"vod_name":"兔小贝原创儿歌","vod_pic":"https://resource-cdn.tuxiaobei.com/video-album/FnQ8ieJHgsbgCKWXNBg4uoOmKgG5.jpg","vod_remarks":"共229首","vod_content":"","vod_id":"/subject/17@@兔小贝原创儿歌@@https://resource-cdn.tuxiaobei.com/video-album/FnQ8ieJHgsbgCKWXNBg4uoOmKgG5.jpg"},{"vod_name":"英文儿歌","vod_pic":"https://resource-cdn.tuxiaobei.com/video-album/Fqjpx2H_-QaYNAYn2MekRuDpeyUv.jpg","vod_remarks":"共10首","vod_content":"","vod_id":"/subject/23@@英文儿歌@@https://resource-cdn.tuxiaobei.com/video-album/Fqjpx2H_-QaYNAYn2MekRuDpeyUv.jpg"}]';
    // let str = RSA.encode(text, publicKey);
    // console.log("加密数据：" + str);
    // let str1 = 'Wa2c/868VOm0PgpGG2s2aMrDbGOlJRdZXlSGswjFgywd3nZNB7ND8kVMdNB/OsNFoQXJXSJMvPaE73BH7rs8fz54JGdYQK+qTgfQRqQZvomCjbzseSR4bm4NOrtIOOslL3WqxlzOuU0M1P1eERmkLEVU2WSyc3RGtJro3b3MOWYCNdKMoZdncfOHJndkl4wm9V3GGc3uH98hs6OxLvBWgXoW9jZQ3n0vR2FtS2KYrPGuSuKGkxlt9Kw5TD6nri142NOimz05WK55Xe04YUQ1VZd51t0wzJGXolWgfzIQaK2zzhk5Zjlm+IQJxXqEWiJ2+O6TJ+lIttvsDSaUflcDXQ==';
    // let str2 = 'R86mW9DzBw05pxBSh9ECh1stXxINmnudgZBbzU/cz1EcFgrEgdk0Zk4ruAiJZB2fP5c7d3gMmN8+Dv19IfARWSzw85xCEjUhpdcMJ0jn6ZE5H+muadND9LzjeVisojqwYxot3YVdKof7HMhPFN8QR0jfzqhjmnGFTlY1jMXzJK0MSOLNRLDar480CdKNb/cxALC8+xKIlhM9E4B31t8J4rNMUWSCAr49lbZ3jx3PxieBpTQUdDJz96AttR93Pc+c51wrxh0Ch/Mt4Rs09HGMXwIpNV+CxsGwSGRQUlyJo2k3d0WqsVzpz6S8A4VGEMTRLGI3IjEt+eWt7wM3nAXarg==';
    // let str3 = 'D4eOsRqua+jYA5+ZOR9PLI2PExKjKfArQfv9/wGeG50bQSjWypShJPY6RQfO+rghyf0juzHIUSxqH91OxinhCFkONaF2Vod2QVyphyn9eh73dAcEFKIFFKGXoPCjbMWrr3p4d+hgVrHzrFeGqkRq8JFOvG2L5XDxVfWbV8KmUA0DKuz6QwWg7P4kesy+C7BbLALy5W/wfZchD3gnsBvx/pjFoe11VfAify9isLxg9a15jj52xr6lzQ9kge9C2JcV8yq85bFKaUpJWgobzz+BSIv3lVMU6vgcldmOrhkyiETpFGFGGF00DphGCEoK6uAyyNDh7+Jn8P17zf/DW1wV3A==';
    // let uncrypted = RSA.decode(str, privateKey);
    // log('解密数据:'+uncrypted);
    // uncrypted = RSA.decode(str1, privateKey);
    // log('解密数据1:'+uncrypted);
    // uncrypted = RSA.decode(str2, privateKey);
    // log('解密数据2:'+uncrypted);
    // uncrypted = RSA.decode(str3, privateKey);
    // log('解密数据3:'+uncrypted);

    // log('rsax:'+typeof(rsax));
    // log('rsaX:'+typeof(rsaX));
    // let data = base64Encode('你好');
    // let publicKey = 'dzyyds';
    // console.log(typeof (RSA.encode));
    // let encryptBase64Data = RSA.encode(data,publicKey);
    // log('encryptBase64Data:'+encryptBase64Data);
    // let str = RSA.decode(data,publicKey);
    // log('str:'+str);
}

/**
 * rsa加解密的全方位测试案例
 */
function rsa_demo_test() {
    let t1 = new Date().getTime();
    let pkcs1_public = `
-----BEGIN RSA PUBLIC KEY-----
MEgCQQCrI0pQ/ERRpJ3Ou190XJedFq846nDYP52rOtXyDxlFK5D3p6JJu2RwsKwy
lsQ9xY0xYPpRZUZKMEeR7e9gmRNLAgMBAAE=
-----END RSA PUBLIC KEY-----
`.trim();

    let pkcs1_public_pem = `
MEgCQQCrI0pQ/ERRpJ3Ou190XJedFq846nDYP52rOtXyDxlFK5D3p6JJu2RwsKwy
lsQ9xY0xYPpRZUZKMEeR7e9gmRNLAgMBAAE=
`.trim();

    let pkcs8_public = `
-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKsjSlD8RFGknc67X3Rcl50WrzjqcNg/
nas61fIPGUUrkPenokm7ZHCwrDKWxD3FjTFg+lFlRkowR5Ht72CZE0sCAwEAAQ==
-----END PUBLIC KEY-----`.trim();

    let pkcs8_public_pem = `
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKsjSlD8RFGknc67X3Rcl50WrzjqcNg/
nas61fIPGUUrkPenokm7ZHCwrDKWxD3FjTFg+lFlRkowR5Ht72CZE0sCAwEAAQ==
`.trim();

    let pkcs1_private = `
-----BEGIN RSA PRIVATE KEY-----
MIIBOAIBAAJBAKsjSlD8RFGknc67X3Rcl50WrzjqcNg/nas61fIPGUUrkPenokm7
ZHCwrDKWxD3FjTFg+lFlRkowR5Ht72CZE0sCAwEAAQI/b6OV1z65UokQaMvSeRXt
0Yv6wiYtduQI9qpq5nzy/ytaqsbBfClNTi/HifKPKxlRouWFkc518EQI8LBxoarJ
AiEA4DaONMplV8PQNa3TKn2F+SDEvLOCjdL0kHKdN90Ti28CIQDDZnTBaHgZwZbA
hS7Bbf5yvwjWMhO6Y7l04/Qm7R+35QIgPuQuqXIoUSD080mp1N5WyRW++atksIF+
5lGv9e6GP/MCICnj8y/rl6Pd7tXDN6zcSeqLrfdNsREKhB3dKOCXgW9JAiAFYtFS
EJNBXVRTK42SNsZ2hJ/9xLwOwnH2epT8Q43s3Q==
-----END RSA PRIVATE KEY-----
`.trim()

    let pkcs8_private = `
-----BEGIN PRIVATE KEY-----
MIIBUgIBADANBgkqhkiG9w0BAQEFAASCATwwggE4AgEAAkEAqyNKUPxEUaSdzrtf
dFyXnRavOOpw2D+dqzrV8g8ZRSuQ96eiSbtkcLCsMpbEPcWNMWD6UWVGSjBHke3v
YJkTSwIDAQABAj9vo5XXPrlSiRBoy9J5Fe3Ri/rCJi125Aj2qmrmfPL/K1qqxsF8
KU1OL8eJ8o8rGVGi5YWRznXwRAjwsHGhqskCIQDgNo40ymVXw9A1rdMqfYX5IMS8
s4KN0vSQcp033ROLbwIhAMNmdMFoeBnBlsCFLsFt/nK/CNYyE7pjuXTj9CbtH7fl
AiA+5C6pcihRIPTzSanU3lbJFb75q2SwgX7mUa/17oY/8wIgKePzL+uXo93u1cM3
rNxJ6out902xEQqEHd0o4JeBb0kCIAVi0VIQk0FdVFMrjZI2xnaEn/3EvA7CcfZ6
lPxDjezd
-----END PRIVATE KEY-----
`.trim()

    let data = `
NodeRsa
这是node-rsa 现在修改集成在drpy里使用`.trim();

    let encryptedWithPublic = NODERSA.encryptRSAWithPublicKey(data, pkcs1_public, {
        // PublicFormat: "pkcs1-public-pem",
        outputEncoding: "base64",
        options: {environment: "browser", encryptionScheme: 'pkcs1_oaep'},
    });
    console.log("公钥加密");
    console.log(encryptedWithPublic);


    let decryptedWithPrivate = NODERSA.decryptRSAWithPrivateKey(encryptedWithPublic, pkcs1_private, {
        // PublicFormat: "pkcs1-private",
        // outEncoding: "hex"
        options: {environment: "browser", encryptionScheme: 'pkcs1_oaep'},
    });
    console.log("私钥解密");
    console.log(decryptedWithPrivate);


// https://www.btool.cn/rsa-sign
    let pkcs1_sha256_sign = NODERSA.sign("1", pkcs1_private, {
        outputEncoding: "base64",
        options: {environment: "browser", encryptionScheme: 'pkcs1', signingScheme: "pkcs1-sha256"},
    });
    console.log("pkcs1_sha256_sign");
    console.log(pkcs1_sha256_sign);

    let pkcs1_sha256_sign_verify = NODERSA.verify("1", "Oulx2QrgeipKYBtqEDqFb2s/+ndk2cGQxO4CkhU7iBM1vyNmmvqubpsmeoUuN3waGrYZLknSEdwBkfv0tUMpFQ==", pkcs1_private, {
        options: {environment: "browser", encryptionScheme: 'pkcs1', signingScheme: "pkcs1-sha256"},
    });
    console.log("pkcs1_sha256_sign_verify");
    console.log(pkcs1_sha256_sign_verify);

    let pkcs1_oaep_sha256 = NODERSA.encryptRSAWithPublicKey(data, `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEA5KOq1gRNyllLNWKQy8sGpZE3Q1ULLSmzZw+eaAhj9lvqn7IsT1du
SYn08FfoOA2qMwtz+1O2l1mgzNoSVCyVpVabnTG+C9XKeZXAnJHd8aYA7l7Sxhdm
kte+iymYZ0ZBPzijo8938iugtVvqi9UgDmnY3u/NlQDqiL5BGqSxSTd/Sgmy3zD8
PYzEa3wD9vehQ5fZZ45vKIq8GNVh2Z8+IGO85FF1OsN7+b2yGJa/FmDDNn0+HP+m
PfI+kYBqEVpo0Ztbc3UdxgFwGC8O1n8AQyriwHnSOtIiuBH62J/7qyC/3LEAApRb
Dd9YszqzmODjQUddZKHmvc638VW+azc0EwIDAQAB
-----END RSA PUBLIC KEY-----
`, {
        outputEncoding: "base64",
        options: {
            environment: "browser", encryptionScheme: {
                scheme: "pkcs1_oaep",
                hash: "sha256",
            },
        }
        // options: { environment: "browser", encryptionScheme: 'pkcs1' },
    });
    console.log("pkcs1_oaep_sha256");
    console.log(pkcs1_oaep_sha256);

    decryptedWithPrivate = NODERSA.decryptRSAWithPrivateKey("kSZesAAyYh2hdsQnYMdGqb6gKAzTauBKouvBzWcc4+F8RvGd0nwO6mVkUMVilPgUuNxjEauHayHiY8gI3Py45UI3+km0rSGyHrS6dHiHgCkMejXHieglYzAB0IxX3Jkm4z/66bdB/D+GFy0oct5fGCMI1UHPjEAYOsazJDa8lBFNbjiWFeb/qiZtIx3vGM7KYPAZzyRf/zPbbQ8zy9xOmRuOl5nnIxgo0Okp3KO/RIPO4GZOSBA8f2lx1UtNwwrXAMpcNavtoqHVcjJ/9lcotXYQFrn5b299pSIRf2gVm8ZJ31SK6Z8cc14nKtvgnmsgClDzIXJ1o1RcDK+knVAySg==", `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA5KOq1gRNyllLNWKQy8sGpZE3Q1ULLSmzZw+eaAhj9lvqn7Is
T1duSYn08FfoOA2qMwtz+1O2l1mgzNoSVCyVpVabnTG+C9XKeZXAnJHd8aYA7l7S
xhdmkte+iymYZ0ZBPzijo8938iugtVvqi9UgDmnY3u/NlQDqiL5BGqSxSTd/Sgmy
3zD8PYzEa3wD9vehQ5fZZ45vKIq8GNVh2Z8+IGO85FF1OsN7+b2yGJa/FmDDNn0+
HP+mPfI+kYBqEVpo0Ztbc3UdxgFwGC8O1n8AQyriwHnSOtIiuBH62J/7qyC/3LEA
ApRbDd9YszqzmODjQUddZKHmvc638VW+azc0EwIDAQABAoIBADZ/QGgUzInvsLp/
zO2WbfYm39o/uhNAvk9RbLt1TIZbMFhyOpeKynHi3Swwd9xsfWX/U9zS/lGi/m31
iKrhmaW4OA1G3vqpMcK7TBbFufYwUEaA+ZJX344euH8pIfdzyneMQ4z3Far2dS7l
QsmjuilVV2kEFadveXewiYoVOWCu00w6bN8wy2SIHlQn+kIL6HQhWz12iKKflIKu
eGRdzLHsKmBt6WbY1Wuhx7HU0fAKdlBDPxCHNlI+kybUYE9o5C2vJiaVM5wqJBgZ
8Dz8kt1QbLJ910JoLXkLVQ8uC8NJKQwFtqQjTGPnEq0+wbgz6Ij599rKZkwW/xq9
l6KoUiECgYEA6Ah42tVdkNW047f03xVYXFH96RgorHRS36mR8Y+ONUq1fwKidovC
WjwVujt4OPf3l1W6iyn/F6cu/bsmvPrSc3HTN0B1V31QK4OjgetxQ2PSbTldH02J
NPzkt+v+cPxXpx/P5mgt7Weefw5txU547KubGrHUV5rBKFtIx9pj16MCgYEA/EF0
o19+D24DZAPwlDS5VbEd7FStnwY4oQ5PqbuNOSbSJLMWU0AqzXcRokp8UTyCZ0X3
ATkS1REq97kShCuR+npTR6a6DlY7sdpPI1SMLNajgB2tkx0EOzX+PfNIbHUd4jpJ
I0ZMAHv/OOtkzQHDaeTWBTrzsWm6/nTiykfduNECgYEA46AMD4HpPECqKAs66e5i
tI6q7JSKskObWVdcmQEfnSAhVOwcvPb2Ptda6UuV8S0xcwDi88rLOUUFUFzc79+P
vTkY38cYVi/VChsluDpk7ptqv0PbGu5Rf+3n4pZdEjI7OvR2W64wAAn67uIUxc7p
yiO/ET0K9rYWb6S9jXGtKMkCgYEA2kPAqoO7zZoBMQ7/oR0lp/HC1HRIbiqx4RlC
8Lgpb+QZPEwA6zPAVVvLVENi4d+bbcRp/xLlKpraNNJcJSSWAMbLPFoU7sbKjA87
HnTPfRSTEA2d3Ibk3F7Rh8TzS3Ti0JZiJjVzGZAwu41iAMifzwaD8K6boUy80eNN
QH2CaaECgYBUsLYvC/MiYg3w+LGOONuQongoVUXjGqnw2bjVa9RK7lwRdXPUqJ51
MpVO98IkoLvGSI/0sGNP3GKNhC+eMGjJAVwFyEuOn+JsmMv9Y9uStIVi5tIHIhKw
m7mp8il0kaftHdSxTbspG3tZ2fjIiFIZkLEOmRpd7ogWumgOajzUdA==
-----END RSA PRIVATE KEY-----`, {
        // PublicFormat: "pkcs1-private",
        // outEncoding: "hex"
        options: {environment: "browser", encryptionScheme: 'pkcs1_oaep'},
    });
    console.log('decryptedWithPrivate');
    console.log(decryptedWithPrivate);


    (() => {
        let key = new NODERSA.NodeRSA({b: 1024});
        key.setOptions({encryptionScheme: 'pkcs1'})
        let text = `你好drpy node-ras`;
        let encrypted = key.encrypt(text, 'base64');
        console.log('encrypted: ', encrypted);
        const decrypted = key.decrypt(encrypted, 'utf8');
        console.log('decrypted: ', decrypted);
    })();
    let t2 = new Date().getTime();
    console.log('rsa_demo_test 测试耗时:'+(t2-t1)+'毫秒');
}


/**
 * 执行预处理代码
 */
function pre(){
    if(typeof(rule.预处理) === 'string' && rule.预处理 && rule.预处理.trim()){
        let code = rule.预处理.trim();
        console.log("执行预处理代码:"+code);
        if(code.startsWith('js:')){
            code = code.replace('js:','');
        }
        try {
            // code里可以进行get 或者 post请求cookie并改变rule.headers 里的cookie
            //  直接操作 rule_fetch_params 这个变量 .headers.Cookie
            eval(code);
        }catch (e) {
            console.log('预处理执行失败:'+e.message);
        }
    }
}

let rule = {};
let vercode = typeof(pdfl) ==='function'?'drpy2.1':'drpy2';
const VERSION = vercode+' 3.9.50beta11 202400512';
/** 已知问题记录
 * 1.影魔的jinjia2引擎不支持 {{fl}}对象直接渲染 (有能力解决的话尽量解决下，支持对象直接渲染字符串转义,如果加了|safe就不转义)[影魔牛逼，最新的文件发现这问题已经解决了]
 * Array.prototype.append = Array.prototype.push; 这种js执行后有毛病,for in 循环列表会把属性给打印出来 (这个大毛病需要重点排除一下)
 * 2.import es6py.js但是里面的函数没有被装载进来.比如drpy规则报错setResult2 is undefiend(合并文件了可以不管了)
 * 3.无法重复导入cheerio(怎么解决drpy和parseTag里都需要导入cheerio的问题) 无法在副文件导入cheerio (现在是全部放在drpy一个文件里了,凑合解决?)
 * 4.有个错误不知道哪儿来的 executeScript: com.quickjs.JSObject$Undefined cannot be cast to java.lang.String 在 点击选集播放打印init_test_end后面打印(貌似不影响使用)
 * 5.需要实现 stringify 函数,比起JSON.strifngify函数,它会原封不动保留中文不会编码unicode
 * 6.base64Encode,base64Decode,md5函数还没有实现 (抄影魔代码实现了)
 * 7.eval(getCryptoJS());还没有实现 (可以空实现了,以后遇到能忽略)
 * done:  jsp:{pdfa,pdfh,pd},json:{pdfa,pdfh,pd},jq:{pdfa,pdfh,pd}
 * 8.req函数不支持传递字符串的data参数 {'content-type':'text/plain'} 类型数据，因此无法直接调用alist的ocr接口
 *  * 电脑看日志调试
 adb tcpip 5555
 adb connect 192.168.10.192
 adb devices -l
 adb logcat -c
 adb logcat | grep -i QuickJS
 adb logcat -c -b events
 adb logcat -c -b main -b events -b radio -b system
 adb logcat > 2.log DRPY:E | grep -i QuickJS
 * **/


/*** 以下是内置变量和解析方法 **/
const MOBILE_UA = 'Mozilla/5.0 (Linux; Android 11; M2007J3SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045714 Mobile Safari/537.36';
const PC_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36';
const UA = 'Mozilla/5.0';
const UC_UA = 'Mozilla/5.0 (Linux; U; Android 9; zh-CN; MI 9 Build/PKQ1.181121.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.5.5.1035 Mobile Safari/537.36';
const IOS_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
const RULE_CK = 'cookie'; // 源cookie的key值
// const KEY = typeof(key)!=='undefined'&&key?key:'drpy_' + (rule.title || rule.host); // 源的唯一标识
const CATE_EXCLUDE = '首页|留言|APP|下载|资讯|新闻|动态';
const TAB_EXCLUDE = '猜你|喜欢|下载|剧情|热播';
const OCR_RETRY = 3;//ocr验证重试次数
// const OCR_API = 'http://dm.mudery.com:10000';//ocr在线识别接口
// const OCR_API = 'http://192.168.3.239:5705/parse/ocr';//ocr在线识别接口
// const OCR_API = 'http://cms.nokia.press/parse/ocr';//ocr在线识别接口
// const OCR_API = 'http://cms.nokia.press:5707/parse/ocr';//ocr在线识别接口
const OCR_API = 'http://drpy.nokia.press:8028/ocr/drpy/text';//ocr在线识别接口
if(typeof(MY_URL)==='undefined'){
    var MY_URL; // 全局注入变量,pd函数需要
}
var HOST;
var RKEY; // 源的唯一标识
var fetch;
var print;
var log;
var rule_fetch_params;
var fetch_params; // 每个位置单独的
var oheaders;
// var play_url; // 二级详情页注入变量,为了适配js模式0 (不在这里定义了,直接二级里定义了个空字符串)
var _pdfh;
var _pdfa;
var _pd;
// const DOM_CHECK_ATTR = ['url', 'src', 'href', 'data-original', 'data-src'];
const DOM_CHECK_ATTR = /(url|src|href|-original|-src|-play|-url|style)$/;
// 过滤特殊链接,不走urlJoin
const SPECIAL_URL = /^(ftp|magnet|thunder|ws):/;
const NOADD_INDEX = /:eq|:lt|:gt|:first|:last|^body$|^#/;  // 不自动加eq下标索引
const URLJOIN_ATTR = /(url|src|href|-original|-src|-play|-url|style)$/;  // 需要自动urljoin的属性
const SELECT_REGEX = /:eq|:lt|:gt|#/g;
const SELECT_REGEX_A = /:eq|:lt|:gt/g;

// 增加$js工具，支持$js.toString(()=>{});
const $js = {
    toString(func) {
      let strfun = func.toString();
      return strfun.replace(/^\(\)(\s+)?=>(\s+)?\{/, "js:").replace(/\}$/,'');
    }
};

function window_b64(){
let b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
let base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
function btoa(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += b64map.charAt(c1 >> 2);
            out += b64map.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += b64map.charAt(c1 >> 2);
            out += b64map.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += b64map.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += b64map.charAt(c1 >> 2);
        out += b64map.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += b64map.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += b64map.charAt(c3 & 0x3F);
    }
    return out;
}

function atob(str) {
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c1 == -1);
        if (c1 == -1) break;
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c2 == -1);
        if (c2 == -1) break;
        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61) return out;
            c3 = base64DecodeChars[c3];
        } while (i < len && c3 == -1);
        if (c3 == -1) break;
        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61) return out;
            c4 = base64DecodeChars[c4];
        } while (i < len && c4 == -1);
        if (c4 == -1) break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}
    return {
        atob,
        btoa
    }
}
/**
 es6py扩展
 */
if(typeof atob != 'function' || typeof btoa!='function'){
    var {atob,btoa} = window_b64();
}

if (typeof Object.assign != 'function') {
    Object.assign = function () {
        let target = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            let source = arguments[i];
            for (let key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
}
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function (searchElement, fromIndex) {

            if (this == null) {//this是空或者未定义，抛出错误
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);//将this转变成对象
            var len = o.length >>> 0;//无符号右移0位，获取对象length属性，如果未定义就会变成0

            if (len === 0) {//length为0直接返回false未找到目标值
                return false;
            }

            var n = fromIndex | 0;//查找起始索引
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);//计算正确起始索引，因为有可能是负值

            while (k < len) {//从起始索引处开始循环
                if (o[k] === searchElement) {//如果某一位置与寻找目标相等，返回true，找到了
                    return true;
                }
                k++;
            }
            return false;//未找到，返回false
        }
    });
}
if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (prefix){
        return this.slice(0, prefix.length) === prefix;
    };
}
if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}
Object.prototype.myValues=function(obj){
    if(obj ==null) {
        throw new TypeError("Cannot convert undefined or null to object");
    }
    var res=[]
    for(var k in obj){
        if(obj.hasOwnProperty(k)){//需判断是否是本身的属性
            res.push(obj[k]);
        }
    }
    return res;
}
if (typeof Object.prototype.values != 'function') {
    Object.prototype.values=function(obj){
        if(obj ==null) {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        var res=[]
        for(var k in obj){
            if(obj.hasOwnProperty(k)){//需判断是否是本身的属性
                res.push(obj[k]);
            }
        }
        return res;
    }
}
if (typeof Array.prototype.join != 'function') {
    Array.prototype.join = function (emoji) {
        // emoji = emoji||',';
        emoji = emoji||'';
        let self = this;
        let str = "";
        let i = 0;
        if (!Array.isArray(self)) {throw String(self)+'is not Array'}
        if(self.length===0){return ''}
        if (self.length === 1){return String(self[0])}
        i = 1;
        str = this[0];
        for (; i < self.length; i++) {
            str += String(emoji)+String(self[i]);
        }
        return str;
    };
}
if (typeof Array.prototype.toReversed != 'function') {
    Array.prototype.toReversed = function () {
        const clonedList = this.slice();
        // 倒序新数组
        const reversedList = clonedList.reverse();
        return reversedList;
    };
}

String.prototype.rstrip = function (chars) {
    let regex = new RegExp(chars + "$");
    return this.replace(regex, "");
};

Array.prototype.append = Array.prototype.push;
String.prototype.strip = String.prototype.trim;
function 是否正版(vipUrl){
    let flag = new RegExp('qq\.com|iqiyi\.com|youku\.com|mgtv\.com|bilibili\.com|sohu\.com|ixigua\.com|pptv\.com|miguvideo\.com|le\.com|1905\.com|fun\.tv');
    return  flag.test(vipUrl);
}
function urlDeal(vipUrl){
    if(!vipUrl){
        return ''
    }
    if(!是否正版(vipUrl)){
        return vipUrl
    }
    if(!/miguvideo/.test(vipUrl)){
        vipUrl=vipUrl.split('#')[0].split('?')[0];
    }
    return vipUrl
}
function setResult(d){
    if(!Array.isArray(d)){
        return []
    }
    VODS = [];
    // print(d);
    d.forEach(function (it){
        let obj = {
            vod_id:it.url||'',
            vod_name: it.title||'',
            vod_remarks: it.desc||'',
            vod_content: it.content||'',
            vod_pic: it.pic_url||it.img||'',
        };
        let keys = Object.keys(it);
        if(keys.includes('tname')){
            obj.type_name = it.tname||'';
        }
        if(keys.includes('tid')){
            obj.type_id = it.tid||'';
        }
        if(keys.includes('year')){
            obj.vod_year = it.year||'';
        }
        if(keys.includes('actor')){
            obj.vod_actor = it.actor||'';
        }
        if(keys.includes('director')){
            obj.vod_director = it.director||'';
        }
        if(keys.includes('area')){
            obj.vod_area = it.area||'';
        }
        VODS.push(obj);
    });
    return VODS
}
function setResult2(res){
    VODS = res.list||[];
    return VODS
}
function setHomeResult(res){
    if(!res||typeof(res)!=='object'){
        return []
    }
    return setResult(res.list);
}
// 猫了个咪
function rc(js) {
    if (js === 'maomi_aes.js') {
        var a = CryptoJS.enc.Utf8.parse("625222f9149e961d");
        var t = CryptoJS.enc.Utf8.parse("5efdtf6060e2o330");
        return {
            De: function (word) {
                word = CryptoJS.enc.Hex.parse(word)
                return CryptoJS.AES.decrypt(CryptoJS.enc.Base64.stringify(word), a, {
                    iv: t,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }).toString(CryptoJS.enc.Utf8)
            },
            En: function (word) {
                // print(a);
                // print(word);
                var Encrypted = CryptoJS.AES.encrypt(word, a, {
                    iv: t,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                });
                return Encrypted.ciphertext.toString();
            }
        };
    }
    return {};
}

// 千万不要用for in 推荐 forEach (for in 会打乱顺序)
//猫函数
function maoss(jxurl, ref, key) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    eval(getCryptoJS());
    try {
        var getVideoInfo = function (text) {
            return CryptoJS.AES.decrypt(text, key, {iv: iv, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
        };
        var token_key = key == undefined ? 'dvyYRQlnPRCMdQSe' : key;
        if (ref) {
            var html = request(jxurl, {
                headers: {
                    'Referer': ref
                }
            });
        } else {
            var html = request(jxurl);
        }
        // print(html);
        if (html.indexOf('&btwaf=') != -1) {
            html = request(jxurl + '&btwaf' + html.match(/&btwaf(.*?)"/)[1], {
                headers: {
                    'Referer': ref
                }
            })
        }
        var token_iv = html.split('_token = "')[1].split('"')[0];
        var key = CryptoJS.enc.Utf8.parse(token_key);
        var iv = CryptoJS.enc.Utf8.parse(token_iv);
        // log("iv:"+iv);
        //  log(html);
        // print(key);
        // print(iv);
        eval(html.match(/var config = {[\s\S]*?}/)[0] + '');
        // config.url = config.url.replace(/,/g,'');
        // print(config.url);
        if (!config.url.startsWith('http')) {
            //config.url = decodeURIComponent(AES(config.url, key, iv));
            config.url = CryptoJS.AES.decrypt(config.url, key, {
                iv: iv,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8)
        }
        return config.url;
    } catch (e) {
        return '';
    }
}

function urlencode (str) {
    str = (str + '').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

function base64Encode(text){
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
    // return text
}

function base64Decode(text){
    return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(text));
    // return text
}

function md5(text) {
    return CryptoJS.MD5(text).toString();
}

function uint8ArrayToBase64(uint8Array) {
    let binaryString = String.fromCharCode.apply(null, Array.from(uint8Array));
    return btoa(binaryString);
}

function Utf8ArrayToStr(array) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                out += String.fromCharCode(c);
                break;
            case 12:
            case 13:
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
                break;
            case 14:
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(
                    ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0)
                );
                break;
        }
    }
    return out;
}

/**
 * gzip压缩base64|压缩率80%+
 * @param str
 * @returns {string}
 */
function gzip(str) {
    let arr = pako.gzip(str, {
        to: 'string'
    });
    return uint8ArrayToBase64(arr)
}

/**
 * gzip解压base64数据
 * @param b64Data
 * @returns {string}
 */
function ungzip(b64Data) {
    let strData = atob(b64Data);
    const charData = strData.split('').map(function(x) {
        return x.charCodeAt(0);
    });
    const binData = new Uint8Array(charData);
    const data = pako.inflate(binData);
    return Utf8ArrayToStr(data);
}

/**
 * 字符串按指定编码
 * @param input
 * @param encoding
 * @returns {*}
 */
function encodeStr(input,encoding){
    encoding = encoding||'gbk';
    if(encoding.startsWith('gb')){
        const strTool = gbkTool();
        input = strTool.encode(input);
    }
    return input
}

/**
 * 字符串指定解码
 * @param input
 * @param encoding
 * @returns {*}
 */
function decodeStr(input,encoding){
    encoding = encoding||'gbk';
    if(encoding.startsWith('gb')){
        const strTool = gbkTool();
        input = strTool.decode(input);
    }
    return input
}

function getCryptoJS(){
    // return request('https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/libs/crypto-hiker.js');
    return 'console.log("CryptoJS已装载");'
}

// 封装的RSA加解密类
const RSA = {
    decode: function (data, key, option) {
        option = option || {};
        if (typeof (JSEncrypt) === 'function') {
            let chunkSize = option.chunkSize || 117; // 默认分段长度为117
            let privateKey = this.getPrivateKey(key); // 获取私钥
            const decryptor = new JSEncrypt(); //创建解密对象实例
            decryptor.setPrivateKey(privateKey); //设置秘钥
            let uncrypted = '';
            // uncrypted = decryptor.decrypt(data);
            uncrypted = decryptor.decryptUnicodeLong(data);
            return uncrypted;
        } else {
            return false
        }
    },
    encode: function (data, key, option) {
        option = option || {};
        if (typeof (JSEncrypt) === 'function') {
            let chunkSize = option.chunkSize || 117; // 默认分段长度为117
            let publicKey = this.getPublicKey(key); // 获取公钥
            const encryptor = new JSEncrypt();
            encryptor.setPublicKey(publicKey); // 设置公钥
            let encrypted = ''; // 加密结果
            // const textLen = data.length; // 待加密文本长度
            // let offset = 0; // 分段偏移量
            // // 分段加密
            // while (offset < textLen) {
            //     let chunk = data.slice(offset, chunkSize); // 提取分段数据
            //     let enc = encryptor.encrypt(chunk); // 加密分段数据
            //     encrypted += enc; // 连接加密结果
            //     offset += chunkSize; // 更新偏移量
            // }
            encrypted = encryptor.encryptUnicodeLong(data);
            return encrypted
        } else {
            return false
        }
    },
    fixKey(key, prefix, endfix) {
        if (!key.includes(prefix)) {
            key = prefix + key;
        }
        if (!key.includes(endfix)) {
            key += endfix
        }
        return key
    },
    getPrivateKey(key) {
        let prefix = '-----BEGIN RSA PRIVATE KEY-----';
        let endfix = '-----END RSA PRIVATE KEY-----';
        return this.fixKey(key, prefix, endfix);
    },
    getPublicKey(key) {
        let prefix = '-----BEGIN PUBLIC KEY-----';
        let endfix = '-----END PUBLIC KEY-----';
        return this.fixKey(key, prefix, endfix);
    }
};

/**
 * 获取壳子返回的代理地址
 * @returns {string|*}
 */
function getProxyUrl(){
    if(typeof(getProxy)==='function'){//判断壳子里有getProxy函数就执行取返回结果。否则取默认的本地
        return getProxy(true)
    }else{
        return 'http://127.0.0.1:9978/proxy?do=js'
    }
}

/**
 * 根据正则处理原始m3u8里的广告ts片段，自动修复相对链接
 * @param m3u8_text m3u8原始文本，里面是最末级的只含ts片段的。不支持嵌套m3u8链接
 * @param m3u8_url m3u8原始地址
 * @param ad_remove 正则表达式如: reg:/video/adjump(.*?)ts
 * @returns {string|DocumentFragment|*|string}
 */
function fixAdM3u8(m3u8_text, m3u8_url, ad_remove) {
    if ((!m3u8_text && !m3u8_url) || (!m3u8_text && m3u8_url && !m3u8_url.startsWith('http'))) {
        return ''
    }
    if (!m3u8_text) {
        log('m3u8_url:' + m3u8_url);
        m3u8_text = request(m3u8_url);
    }
    log('len(m3u8_text):' + m3u8_text.length);
    if (!ad_remove) {
        return m3u8_text
    }
    if (ad_remove.startsWith('reg:')) {
        ad_remove = ad_remove.slice(4)
    } else if (ad_remove.startsWith('js:')) {
        ad_remove = ad_remove.slice(3)
    }
    let m3u8_start = m3u8_text.slice(0, m3u8_text.indexOf('#EXTINF')).trim();
    let m3u8_body = m3u8_text.slice(m3u8_text.indexOf('#EXTINF'), m3u8_text.indexOf('#EXT-X-ENDLIST')).trim();
    let m3u8_end = m3u8_text.slice(m3u8_text.indexOf('#EXT-X-ENDLIST')).trim();
    let murls = [];
    let m3_body_list = m3u8_body.split('\n');
    let m3_len = m3_body_list.length;
    let i = 0;
    while (i < m3_len) {
        let mi = m3_body_list[i];
        let mi_1 = m3_body_list[i + 1];
        if (mi.startsWith('#EXTINF')) {
            murls.push([mi, mi_1].join('&'));
            i += 2
        } else if (mi.startsWith('#EXT-X-DISCONTINUITY')) {
            let mi_2 = m3_body_list[i + 2];
            murls.push([mi, mi_1, mi_2].join('&'));
            i += 3
        } else {
            break;
        }
    }
    let new_m3u8_body = [];
    for (let murl of murls) {
        if (ad_remove && new RegExp(ad_remove).test(murl)) {

        } else {
            let murl_list = murl.split('&');
            if (!murl_list[murl_list.length - 1].startsWith('http') && m3u8_url.startsWith('http')) {
                murl_list[murl_list.length - 1] = urljoin(m3u8_url, murl_list[murl_list.length - 1]);
            }
            murl_list.forEach((it) => {
                new_m3u8_body.push(it);
            });
        }

    }
    new_m3u8_body = new_m3u8_body.join('\n').trim();
    m3u8_text = [m3u8_start, new_m3u8_body, m3u8_end].join('\n').trim();
    return m3u8_text
}

/**
 *  智能对比去除广告。支持嵌套m3u8。只需要传入播放地址
 * @param m3u8_url m3u8播放地址
 * @returns {string}
 */
function fixAdM3u8Ai(m3u8_url) {
	let ts = new Date().getTime();

	function b(s1, s2) {
		let i = 0;
		while (i < s1.length) {
			if (s1[i] !== s2[i]) {
				break
			}
			i++
		}
		return i;
	}

	function reverseString(str) {
		return str.split('').reverse().join('');
	}

	//log('播放的地址：' + m3u8_url);
	let m3u8 = request(m3u8_url);
	//log('m3u8处理前:' + m3u8);
	m3u8 = m3u8.trim().split('\n').map(it => it.startsWith('#') ? it : urljoin(m3u8_url, it)).join('\n');
	//log('m3u8处理后:============:' + m3u8);
	// 获取嵌套m3u8地址
	m3u8=m3u8.replace(/\n\n/ig,'\n');//删除多余的换行符
	let last_url= m3u8.split('\n').slice(-1)[0];
	if (last_url.length<5){
		last_url= m3u8.split('\n').slice(-2)[0];
    }

	if (last_url.includes('.m3u8') && last_url !== m3u8_url) {
		m3u8_url = urljoin2(m3u8_url,last_url);
		log('嵌套的m3u8_url:' + m3u8_url);
		m3u8 = request(m3u8_url);
	}
	//log('----处理有广告的地址----');
	let s = m3u8.trim().split('\n').filter(it => it.trim()).join('\n');
	let ss = s.split('\n')
	//找出第一条播放地址
	let firststr = ss.find(x => !x.startsWith('#'));
	let maxl = 0;//最大相同字符
	let firststrlen = firststr.length;
	//log('字符串长度：' + firststrlen);
	let ml = Math.round(ss.length / 2).toString().length;//取数据的长度的位数
	//log('数据条数的长度：' + ml);
	//找出最后一条播放地址
	let maxc=0;
	let laststr = ss.toReversed().find((x) => {
		if (!x.startsWith('#')) {
			let k = b(reverseString(firststr), reverseString(x));
			maxl = b(firststr, x);
			maxc++;
			if (firststrlen - maxl <= ml + k || maxc>10) {
				return true
			}
		}
		return false
	});
	log('最后一条切片：' + laststr);
	//log('最小相同字符长度：' + maxl);
	let ad_urls = [];
	for (let i = 0; i < ss.length; i++) {
		let s = ss[i];
		if (!s.startsWith('#')) {
			if (b(firststr, s) < maxl) {
				ad_urls.push(s); // 广告地址加入列表
				ss.splice(i - 1, 2);
				i = i - 2;
			} else {
				ss[i] = urljoin(m3u8_url, s);
			}
		} else {
			ss[i] = s.replace(/URI=\"(.*)\"/, 'URI=\"' + urljoin(m3u8_url, '$1') + '\"');
		}
	}
	log('处理的m3u8地址:' + m3u8_url);
	log('----广告地址----');
	log(ad_urls);
	m3u8 = ss.join('\n');
	//log('处理完成');
	log('处理耗时：' + (new Date().getTime() - ts).toString());
	return m3u8
}


/**
 * 强制正序算法
 * @param lists  待正序列表
 * @param key 正序键
 * @param option 单个元素处理函数
 * @returns {*}
 */
function forceOrder(lists,key,option){
    let start = Math.floor(lists.length/2);
    let end = Math.min(lists.length-1,start+1);
    if(start >= end){
        return lists;
    }
    let first = lists[start];
    let second = lists[end];
    if(key){
        try {
            first = first[key];
            second = second[key];
        }catch (e) {}
    }
    if(option && typeof(option)==='function'){
        try {
            first = option(first);
            second = option(second);
        }catch (e) {}
    }
    first+='';
    second+='';
    // console.log(first,second);
    if(first.match(/(\d+)/)&&second.match(/(\d+)/)){
        let num1 = Number(first.match(/(\d+)/)[1]);
        let num2 = Number(second.match(/(\d+)/)[1]);
        if (num1 > num2){
            lists.reverse();
        }
    }
    return lists
}

let VODS = [];// 一级或者搜索需要的数据列表
let VOD = {};// 二级的单个数据
let TABS = [];// 二级的自定义线路列表 如: TABS=['道长在线','道长在线2']
let LISTS = [];// 二级的自定义选集播放列表 如: LISTS=[['第1集$http://1.mp4','第2集$http://2.mp4'],['第3集$http://1.mp4','第4集$http://2.mp4']]
globalThis.encodeUrl = urlencode;
globalThis.urlencode = urlencode;


/**
 * 获取链接的query请求转为js的object字典对象
 * @param url
 * @returns {{}}
 */
function getQuery(url) {
  try {
    if(url.indexOf('?')>-1){
      url = url.slice(url.indexOf('?')+1);
    }
    let arr = url.split("#")[0].split("&");
    const resObj = {};
    arr.forEach(item => {
      let arr1 = item.split("=");
      let key = arr1[0];
      let value = arr1.slice(1).join('=');
      resObj[key] = value;
    });
    return resObj;
  } catch (err) {
    log('getQuery发生错误:'+e.message)
    return {};
  }
}

/**
 *  url拼接
 * @param fromPath 初始当前页面url
 * @param nowPath 相对当前页面url
 * @returns {*}
 */
function urljoin(fromPath, nowPath) {
    fromPath = fromPath||'';
    nowPath = nowPath||'';
    return joinUrl(fromPath, nowPath);
    // try {
    //     // import Uri from './uri.min.js';
    //     // var Uri = require('./uri.min.js');
    //     // eval(request('https://cdn.bootcdn.net/ajax/libs/URI.js/1.19.11/URI.min.js'));
    //     // let new_uri = URI(nowPath, fromPath);

    //     let new_uri = Uri(nowPath, fromPath);
    //     new_uri = new_uri.toString();
    //     // console.log(new_uri);
    //     // return fromPath + nowPath
    //     return new_uri
    // }
    // catch (e) {
    //     console.log('urljoin发生错误:'+e.message);
    //     if(nowPath.startsWith('http')){
    //         return nowPath
    //     }if(nowPath.startsWith('/')){
    //         return getHome(fromPath)+nowPath
    //     }
    //     return fromPath+nowPath
    // }
}
var urljoin2 = urljoin;

// 内置 pdfh,pdfa,pd
const defaultParser = {
    pdfh:pdfh,
    pdfa:pdfa,
    pd:pd,
};


/**
 *  pdfh原版优化,能取style属性里的图片链接
 * @param html 源码
 * @param parse 解析表达式
 * @returns {string|*}
 */
function pdfh2(html,parse){
    let html2 = html;
    try {
        if(typeof(html)!=='string'){
            html2 = html.rr(html.ele).toString();
        }
    }catch (e) {
        print('html对象转文本发生了错误:'+e.message);
    }
    let result = defaultParser.pdfh(html2,parse);
    let option = parse.includes('&&')?parse.split('&&').slice(-1)[0]:parse.split(' ').slice(-1)[0];
    if(/style/.test(option.toLowerCase())&&/url\(/.test(result)){
        try {
            result =  result.match(/url\((.*?)\)/)[1];
            // 2023/07/28新增 style取内部链接自动去除首尾单双引号
            result = result.replace(/^['|"](.*)['|"]$/, "$1");
        }catch (e) {}
    }
    return result
}

/**
 * pdfa原版优化,可以转换jq的html对象
 * @param html
 * @param parse
 * @returns {*}
 */
function pdfa2(html,parse){
    let html2 = html;
    try {
        if(typeof(html)!=='string'){
            html2 = html.rr(html.ele).toString();
        }
    }catch (e) {
        print('html对象转文本发生了错误:'+e.message);
    }
    return defaultParser.pdfa(html2,parse);
}

/**
 * pd原版方法重写-增加自动urljoin
 * @param html
 * @param parse
 * @param uri
 * @returns {*}
 */
function pd2(html,parse,uri){
    let ret = pdfh2(html,parse);
    if(typeof(uri)==='undefined'||!uri){
        uri = '';
    }
    if(DOM_CHECK_ATTR.test(parse) && !SPECIAL_URL.test(ret)){
        if(/http/.test(ret)){
            ret = ret.slice(ret.indexOf('http'));
        }else{
            ret = urljoin(MY_URL,ret)
        }
    }
    // MY_URL = getItem('MY_URL',MY_URL);
    // console.log(`规则${RKEY}打印MY_URL:${MY_URL},uri:${uri}`);
    return ret
}

const parseTags = {
    jsp:{
        pdfh:pdfh2,
        pdfa:pdfa2,
        pd:pd2,
    },
    json:{
        pdfh(html, parse) {
            if (!parse || !parse.trim()){
                return '';
            }
            if (typeof(html) === 'string'){
                // print('jsonpath:pdfh字符串转dict');
                html = JSON.parse(html);
            }
            parse = parse.trim();
            if (!parse.startsWith('$.')){
                parse = '$.' + parse;
            }
            parse = parse.split('||');
            for (let ps of parse) {
                let ret = cheerio.jp(ps, html);
                if (Array.isArray(ret)){
                    ret = ret[0] || '';
                } else{
                    ret = ret || ''
                }
                if (ret && typeof (ret) !== 'string'){
                    ret = ret.toString();
                }
                if(ret){
                    return ret
                }
            }
            return '';
        },
        pdfa(html, parse) {
            if (!parse || !parse.trim()){
                return '';
            }
            if (typeof(html) === 'string'){
                // print('jsonpath:pdfa字符串转dict');
                html = JSON.parse(html);
            }
            parse = parse.trim()
            if (!parse.startsWith('$.')){
                parse = '$.' + parse;
            }
            let ret = cheerio.jp(parse, html);
            if (Array.isArray(ret) && Array.isArray(ret[0]) && ret.length === 1){
                return ret[0] || []
            }
            return ret || []
        },
        pd(html,parse){
            let ret = parseTags.json.pdfh(html,parse);
            if(ret){
                return urljoin(MY_URL,ret);
            }
            return ret
        },
    },
    jq:{
        pdfh(html, parse) {
            if (!html||!parse || !parse.trim()) {
                return ''
            }
            parse = parse.trim();
            let result = defaultParser.pdfh(html,parse);
            // print(`pdfh解析${parse}=>${result}`);
            return result;
        },
        pdfa(html, parse) {
            if (!html||!parse || !parse.trim()) {
                return [];
            }
            parse = parse.trim();
            let result = defaultParser.pdfa(html,parse);
            // print(result);
            print(`pdfa解析${parse}=>${result.length}`);
            return result;
        },
        pd(html,parse,base_url){
            if (!html||!parse || !parse.trim()) {
                return ''
            }
            parse = parse.trim();
            base_url = base_url||MY_URL;
            return defaultParser.pd(html, parse, base_url);
        },
    },
    getParse(p0){//非js开头的情况自动获取解析标签
        if(p0.startsWith('jsp:')){
            return this.jsp
        }else if(p0.startsWith('json:')){
            return this.json
        }else if(p0.startsWith('jq:')){
            return this.jq
        }else {
            return this.jq
        }
    }
};

const stringify = JSON.stringify;
const jsp = parseTags.jsp;
const jq = parseTags.jq;

/*** 后台需要实现的java方法并注入到js中 ***/

/**
 * 读取本地文件->应用程序目录
 * @param filePath
 * @returns {string}
 */
function readFile(filePath){
    filePath = filePath||'./uri.min.js';
    var fd = os.open(filePath);
    var buffer = new ArrayBuffer(1024);
    var len = os.read(fd, buffer, 0, 1024);
    console.log(len);
    let text = String.fromCharCode.apply(null, new Uint8Array(buffer));
    console.log(text);
    return text
}

/**
 * 处理返回的json数据
 * @param html
 * @returns {*}
 */
function dealJson(html) {
    try {
        // html = html.match(/[\w|\W|\s|\S]*?(\{[\w|\W|\s|\S]*\})/).group[1];
        html = html.trim();
        if(!((html.startsWith('{') && html.endsWith('}'))||(html.startsWith('[') && html.endsWith(']')))){
            html = '{'+html.match(/.*?\{(.*)\}/m)[1]+'}';
        }
    } catch (e) {
    }
    try {
        html = JSON.parse(html);
    }catch (e) {}
    // console.log(typeof(html));
    return html;
}

/**
 * 验证码识别逻辑,需要java实现(js没有bytes类型,无法调用后端的传递图片二进制获取验证码文本的接口)
 * @type {{api: string, classification: (function(*=): string)}}
 */
var OcrApi={
    api:OCR_API,
    classification:function (img){ // img是byte类型,这里不方便搞啊
        let code = '';
        try {
            // let html = request(this.api,{data:{img:img},headers:{'User-Agent':PC_UA},'method':'POST'},true);
            // html = JSON.parse(html);
            // code = html.url||'';
            log('通过drpy_ocr验证码接口过验证...');
            let html = request(OCR_API,{data:{img:img},headers:{'User-Agent':PC_UA},'method':'POST'},true);
            code = html||'';
        }catch (e) {
            log(`OCR识别验证码发生错误:${e.message}`)
        }
        return code
    }
};
/**
 * 验证码识别,暂未实现
 * @param url 验证码图片链接
 * @returns {string} 验证成功后的cookie
 */
function verifyCode(url){
    let cnt = 0;
    let host = getHome(url);
    let cookie = '';
    while (cnt < OCR_RETRY){
        try{
            // let obj = {headers:headers,timeout:timeout};
            let yzm_url = `${host}/index.php/verify/index.html`;
            console.log(`验证码链接:${yzm_url}`);
            let hhtml = request(yzm_url,{withHeaders:true,toBase64:true},true);
            let json = JSON.parse(hhtml);
            if(!cookie){
                // print(json);
                let setCk = Object.keys(json).find(it=>it.toLowerCase()==='set-cookie');
                // cookie = json['set-cookie']?json['set-cookie'].split(';')[0]:'';
                cookie = setCk?json[setCk].split(';')[0]:'';
            }
            // console.log(hhtml);
            console.log('cookie:'+cookie);
            let img = json.body;
            // console.log(img);
            let code = OcrApi.classification(img);
            console.log(`第${cnt+1}次验证码识别结果:${code}`);
            let submit_url = `${host}/index.php/ajax/verify_check?type=search&verify=${code}`;
            console.log(submit_url);
            let html = request(submit_url,{headers:{Cookie:cookie,'User-Agent':MOBILE_UA},'method':'POST'});
            // console.log(html);
            html = JSON.parse(html);
            if(html.msg === 'ok'){
                console.log(`第${cnt+1}次验证码提交成功`);
                return cookie // 需要返回cookie
            }else if(html.msg!=='ok'&&cnt+1>=OCR_RETRY){
                cookie = ''; // 需要清空返回cookie
            }
        }catch (e) {
            console.log(`第${cnt+1}次验证码提交失败:${e.message}`);
            if(cnt+1>=OCR_RETRY){
                cookie = '';
            }
        }
        cnt+=1
    }
    return cookie
}

/**
 * 存在数据库配置表里, key字段对应值value,没有就新增,有就更新,调用此方法会清除key对应的内存缓存
 * @param k 键
 * @param v 值
 */
function setItem(k,v){
    local.set(RKEY,k,v);
    console.log(`规则${RKEY}设置${k} => ${v}`)
}

/**
 *  获取数据库配置表对应的key字段的value，没有这个key就返回value默认传参.需要有缓存,第一次获取后会存在内存里
 * @param k 键
 * @param v 值
 * @returns {*}
 */
function getItem(k,v){
    return local.get(RKEY,k) || v;
}

/**
 *  删除数据库key对应的一条数据,并清除此key对应的内存缓存
 * @param k
 */
function clearItem(k){
    local.delete(RKEY,k);
}

/*** js自封装的方法 ***/

/**
 * 获取链接的host(带http协议的完整链接)
 * @param url 任意一个正常完整的Url,自动提取根
 * @returns {string}
 */
function getHome(url){
    if(!url){
        return ''
    }
    let tmp = url.split('//');
    url = tmp[0] + '//' + tmp[1].split('/')[0];
    try {
        url = decodeURIComponent(url);
    }catch (e) {}
    return url
}

/**
 * get参数编译链接,类似python params字典自动拼接
 * @param url 访问链接
 * @param obj 参数字典
 * @returns {*}
 */
function buildUrl(url,obj){
    obj = obj||{};
    if(url.indexOf('?')<0){
        url += '?'
    }
    let param_list = [];
    let keys = Object.keys(obj);
    keys.forEach(it=>{
        param_list.push(it+'='+obj[it])
    });
    let prs = param_list.join('&');
    if(keys.length > 0 && !url.endsWith('?')){
        url += '&'
    }
    url+=prs;
    return url
}

/**
 * 远程依赖执行函数
 * @param url 远程js地址
 */
function $require(url){
    eval(request(url));
}
/**
 * 海阔网页请求函数完整封装
 * @param url 请求链接
 * @param obj 请求对象 {headers:{},method:'',timeout:5000,body:'',withHeaders:false}
 * @param ocr_flag 标识此flag是用于请求ocr识别的,自动过滤content-type指定编码
 * @returns {string|string|DocumentFragment|*}
 */
function request(url,obj,ocr_flag){
    ocr_flag = ocr_flag||false;
    if(typeof(obj)==='undefined'||!obj||obj==={}){
        if(!fetch_params||!fetch_params.headers){
            let headers = {
                'User-Agent':MOBILE_UA,
            };
            if(rule.headers){
                Object.assign(headers,rule.headers);
            }
            if(!fetch_params){
                fetch_params = {};
            }
            fetch_params.headers = headers;
        }
        if(!fetch_params.headers.Referer){
            fetch_params.headers.Referer = getHome(url)
        }
        obj = fetch_params;
    }else{
        let headers = obj.headers||{};
        let keys = Object.keys(headers).map(it=>it.toLowerCase());
        if(!keys.includes('user-agent')){
            headers['User-Agent'] = MOBILE_UA;
        }if(!keys.includes('referer')){
            headers['Referer'] = getHome(url);
        }
        obj.headers = headers;
    }
    if(rule.encoding&&rule.encoding!=='utf-8'&&!ocr_flag){
        if(!obj.headers.hasOwnProperty('Content-Type')&&!obj.headers.hasOwnProperty('content-type')){ // 手动指定了就不管
            obj.headers["Content-Type"] = 'text/html; charset='+rule.encoding;
        }
    }
    if(typeof(obj.body)!='undefined'&&obj.body&&typeof (obj.body)==='string'){
        // let data = {};
        // obj.body.split('&').forEach(it=>{
        //     data[it.split('=')[0]] = it.split('=')[1]
        // });
        // obj.data = data;
        // delete obj.body

        // 传body加 "Content-Type":"application/x-www-form-urlencoded;" 即可post form
        if(!obj.headers.hasOwnProperty('Content-Type')&&!obj.headers.hasOwnProperty('content-type')){ // 手动指定了就不管
            obj.headers["Content-Type"] = 'application/x-www-form-urlencoded; charset='+rule.encoding;
        }
    }else if(typeof(obj.body)!='undefined'&&obj.body&&typeof (obj.body)==='object'){
        obj.data = obj.body;
        delete obj.body
    }
    if(!url){
        return obj.withHeaders?'{}':''
    }
    if(obj.toBase64){ // 返回base64,用于请求图片
        obj.buffer = 2;
        delete obj.toBase64
    }
    if(obj.redirect===false){
        obj.redirect = 0;
    }
    console.log(JSON.stringify(obj.headers));
    // console.log('request:'+url+' obj:'+JSON.stringify(obj));
    console.log('request:'+url+`|method:${obj.method||'GET'}|body:${obj.body||''}`);
    let res = req(url, obj);
    let html = res.content||'';
    // console.log(html);
    if(obj.withHeaders){
        let htmlWithHeaders = res.headers;
        htmlWithHeaders.body = html;
        return JSON.stringify(htmlWithHeaders);
    }else{
        return html
    }
}

/**
 *  快捷post请求
 * @param url 地址
 * @param obj 对象
 * @returns {string|DocumentFragment|*}
 */
function post(url,obj){
    obj.method = 'POST';
    return request(url,obj);
}

fetch = request;
print = function (data){
    data = data||'';
    if(typeof(data)=='object'&&Object.keys(data).length>0){
        try {
            data = JSON.stringify(data);
            console.log(data);
        }catch (e) {
            // console.log('print:'+e.message);
            console.log(typeof(data)+':'+data.length);
            return
        }
    }else if(typeof(data)=='object'&&Object.keys(data).length<1){
        console.log('null object');
    }else{
        console.log(data);
    }
}
log = print;
/**
 * 检查宝塔验证并自动跳过获取正确源码
 * @param html 之前获取的html
 * @param url 之前的来源url
 * @param obj 来源obj
 * @returns {string|DocumentFragment|*}
 */
function checkHtml(html,url,obj){
    if(/\?btwaf=/.test(html)){
        let btwaf = html.match(/btwaf(.*?)"/)[1];
        url = url.split('#')[0]+'?btwaf'+btwaf;
        print('宝塔验证访问链接:'+url);
        html = request(url,obj);
    }
    return html
}

/**
 *  带一次宝塔验证的源码获取
 * @param url 请求链接
 * @param obj 请求参数
 * @returns {string|DocumentFragment}
 */
function getCode(url,obj){
    let html = request(url,obj);
    html = checkHtml(html,url,obj);
    return html
}

/**
 * 源rule专用的请求方法,自动注入cookie
 * @param url 请求链接
 * @returns {string|DocumentFragment}
 */
function getHtml(url){
    let obj = {};
    if(rule.headers){
        obj.headers = rule.headers;
    }
    let cookie = getItem(RULE_CK,'');
    if(cookie){
        // log('有cookie:'+cookie);
        if(obj.headers && ! Object.keys(obj.headers).map(it=>it.toLowerCase()).includes('cookie')){
            log('历史无cookie,新增过验证后的cookie');
            obj.headers['Cookie'] = cookie;
        }else if(obj.headers && obj.headers.cookie && obj.headers.cookie!==cookie){
            obj.headers['Cookie'] = cookie;
            log('历史有小写过期的cookie,更新过验证后的cookie');
        }else if(obj.headers && obj.headers.Cookie && obj.headers.Cookie!==cookie){
            obj.headers['Cookie'] = cookie;
            log('历史有大写过期的cookie,更新过验证后的cookie');
        }else if(!obj.headers){
            obj.headers = {Cookie:cookie};
            log('历史无headers,更新过验证后的含cookie的headers');
        }
    }
    let html = getCode(url,obj);
    return html
}

/**
 * 首页分类解析，筛选暂未实现
 * @param homeObj 首页传参对象
 * @returns {string}
 */
function homeParse(homeObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let classes = [];
    if (homeObj.class_name && homeObj.class_url) {
        let names = homeObj.class_name.split('&');
        let urls = homeObj.class_url.split('&');
        let cnt = Math.min(names.length, urls.length);
        for (let i = 0; i < cnt; i++) {
            classes.push({
                'type_id': urls[i],
                'type_name': names[i]
            });
        }
    }

    if (homeObj.class_parse) {
         if(homeObj.class_parse.startsWith('js:')) {
             var input = homeObj.MY_URL;
             try {
                 eval(homeObj.class_parse.replace('js:', ''));
                 if (Array.isArray(input)) {
                     classes = input;
                 }
             }catch(e){
                 log('通过js动态获取分类发生了错误:'+e.message);
             }
         }else {
             let p = homeObj.class_parse.split(';');
             let p0 = p[0];
             let _ps = parseTags.getParse(p0);
             let is_json = p0.startsWith('json:');
             _pdfa = _ps.pdfa;
             _pdfh = _ps.pdfh;
             _pd = _ps.pd;
             MY_URL = rule.url;
             if(is_json){
                 try {
                     let cms_cate_url = homeObj.MY_URL.replace('ac=detail','ac=list');
                     let html = getHtml(cms_cate_url);
                     if (html) {
                         if(cms_cate_url === homeObj.MY_URL){
                            homeHtmlCache = html;
                         }
                         let list = _pdfa(html, p0.replace('json:',''));
                         if (list && list.length > 0) {
                             classes = list;
                         }
                     }
                 } catch (e) {
                     console.log(e.message);
                 }
             } else if(p.length >= 3 && !is_json) { // 可以不写正则
                 try {
                     let html = getHtml(homeObj.MY_URL);
                     if (html) {
                         homeHtmlCache = html;
                         let list = _pdfa(html, p0);
                         if (list && list.length > 0) {
                             list.forEach((it, idex) => {
                                 try {
                                     let name = _pdfh(it, p[1]);
                                     if (homeObj.cate_exclude && (new RegExp(homeObj.cate_exclude).test(name))) {
                                         return;
                                     }
                                     // let url = pdfh(it, p[2]);
                                     let url = _pd(it, p[2]);
                                     if (p.length > 3 && p[3]) {
                                         let exp = new RegExp(p[3]);
                                         url = url.match(exp)[1];
                                     }

                                     classes.push({
                                         'type_id': url.trim(),
                                         'type_name': name.trim()
                                     });
                                 } catch (e) {
                                     console.log(`分类列表定位第${idex}个元素正常报错:${e.message}`);
                                 }
                             });
                         }
                     }
                 } catch (e) {
                     console.log(e.message);
                 }

             }
         }
    }
    // 排除分类
    classes = classes.filter(it=>!homeObj.cate_exclude || !(new RegExp(homeObj.cate_exclude).test(it.type_name)));
    let resp = {
        'class': classes
    };
    if(homeObj.filter){
        resp.filters = homeObj.filter;
    }
    console.log(JSON.stringify(resp));
    return JSON.stringify(resp);

}

/**
 * 推荐和搜索单字段继承一级
 * @param p 推荐或搜索的解析分割;列表
 * @param pn 自身列表序号
 * @param pp  一级解析分割;列表
 * @param ppn 继承一级序号
 * @returns {*}
 */
function getPP(p, pn, pp, ppn){
    try {
        let ps = p[pn] === '*' && pp.length > ppn ?pp[ppn]:p[pn]
        return ps
    }catch (e) {
        return ''
    }
}

/**
 *  首页推荐列表解析
 * @param homeVodObj
 * @returns {string}
 */
function homeVodParse(homeVodObj){
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let d = [];
    MY_URL = homeVodObj.homeUrl;
    // setItem('MY_URL',MY_URL);
    console.log(MY_URL);
    let t1 = (new Date()).getTime();
    let p = homeVodObj.推荐;
    print('p:'+p);
    if(p==='*' && rule.一级){
        p = rule.一级;
        homeVodObj.double = false;
    }
    if(!p||typeof(p)!=='string'){
        return '{}'
    }
    p = p.trim();
    let pp = rule.一级.split(';');
    if(p.startsWith('js:')){
        const TYPE = 'home';
        var input = MY_URL;
        HOST = rule.host;
        eval(p.replace('js:',''));
        d = VODS;
    }else {
        p = p.split(';');
        if (!homeVodObj.double && p.length < 5) {
            return '{}'
        } else if (homeVodObj.double && p.length < 6) {
            return '{}'
        }
        let p0 = getPP(p,0,pp,0)
        let _ps = parseTags.getParse(p0);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        let is_json = p0.startsWith('json:');
        p0 = p0.replace(/^(jsp:|json:|jq:)/,'');
        // print(p[0]);
        let html = homeHtmlCache || getHtml(MY_URL);
        homeHtmlCache = undefined;
        if(is_json){
            // print('是json,开始处理');
            html = dealJson(html);
        }
        try {
            console.log('double:' + homeVodObj.double);
            if (homeVodObj.double) {
                let items = _pdfa(html, p0);
                // console.log(items.length);
                let p1 = getPP(p,1,pp,0);
                let p2 = getPP(p,2,pp,1);
                let p3 = getPP(p,3,pp,2);
                let p4 = getPP(p,4,pp,3);
                let p5 = getPP(p,5,pp,4);
                let p6 = getPP(p,6,pp,5);
                for (let item of items) {
                    // console.log(p[1]);
                    let items2 = _pdfa(item, p1);
                    // console.log(items2.length);
                    for (let item2 of items2) {
                        try {
                            let title = _pdfh(item2, p2);
                            let img = '';
                            try {
                                img = _pd(item2, p3);
                            } catch (e) {}
                            let desc = '';
                            try {
                                desc = _pdfh(item2, p4);
                            }catch (e) {}
                            let links = [];
                            for (let _p5 of p5.split('+')) {
                                let link = !homeVodObj.detailUrl ? _pd(item2, _p5, MY_URL) : _pdfh(item2, _p5);
                                links.push(link);
                            }
                            let content;
                            if(p.length > 6 && p[6]){
                                content = _pdfh(item2, p6);
                            } else{
                                content = '';
                            }
                            let vid = links.join('$');
                            if(rule.二级==='*'){
                                vid = vid+'@@'+title+'@@'+img;
                            }
                            let vod = {
                                vod_name: title,
                                vod_pic: img,
                                vod_remarks: desc,
                                vod_content: content,
                                vod_id: vid
                            };
                            // print(vod);
                            d.push(vod);
                        } catch (e) {
                            console.log('首页列表双层定位处理发生错误:'+e.message);
                        }

                    }


                }


            } else {
                let items = _pdfa(html, p0);
                let p1 = getPP(p,1,pp,1);
                let p2 = getPP(p,2,pp,2);
                let p3 = getPP(p,3,pp,3);
                let p4 = getPP(p,4,pp,4);
                let p5 = getPP(p,5,pp,5);

                for (let item of items) {
                    try {
                        let title = _pdfh(item, p1);
                        let img = '';
                        try {
                            img = _pd(item, p2, MY_URL);
                        } catch (e) {}
                        let desc = '';
                        try {
                            desc = _pdfh(item, p3);
                        }catch (e) {}
                        let links = [];
                        for (let _p5 of p4.split('+')) {
                            let link = !homeVodObj.detailUrl ? _pd(item, _p5, MY_URL) : _pdfh(item, _p5);
                            links.push(link);
                        }
                        let content;
                        if(p.length > 5 && p[5]){
                            content = _pdfh(item, p5);
                        }else{
                            content = ''
                        }
                        let vid = links.join('$');
                        if(rule.二级==='*'){
                            vid = vid+'@@'+title+'@@'+img;
                        }
                        let vod = {
                            vod_name: title,
                            vod_pic: img,
                            vod_remarks: desc,
                            vod_content: content,
                            vod_id: vid
                        };
                        d.push(vod);

                    } catch (e) {
                        console.log('首页列表单层定位处理发生错误:'+e.message);
                    }

                }

            }

        } catch (e) {

        }
    }
    let t2 = (new Date()).getTime();
    console.log('加载首页推荐耗时:'+(t2-t1)+'毫秒');
    // console.log(JSON.stringify(d));
    if(rule.图片替换 && rule.图片替换.includes('=>')){
        let replace_from = rule.图片替换.split('=>')[0];
        let replace_to = rule.图片替换.split('=>')[1];
        d.forEach(it=>{
            if(it.vod_pic&&it.vod_pic.startsWith('http')){
                it.vod_pic = it.vod_pic.replace(replace_from,replace_to);
            }
        });
    }
    if(rule.图片来源){
        d.forEach(it=>{
            if(it.vod_pic&&it.vod_pic.startsWith('http')){
                it.vod_pic = it.vod_pic + rule.图片来源;
            }
        });
    }
    if(d.length>0){
        print(d.slice(0,2));
    }
    return JSON.stringify({
        list:d
    })
}

/**
 * 一级分类页数据解析
 * @param cateObj
 * @returns {string}
 */
function categoryParse(cateObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let p = cateObj.一级;
    if(!p||typeof(p)!=='string'){
        return '{}'
    }
    let d = [];
    // let url = cateObj.url.replaceAll('fyclass', cateObj.tid).replaceAll('fypage', cateObj.pg);
    let url = cateObj.url.replaceAll('fyclass', cateObj.tid);
    if(cateObj.pg === 1 && url.includes('[')&&url.includes(']')){
        url = url.split('[')[1].split(']')[0];
    }else if(cateObj.pg > 1 && url.includes('[')&&url.includes(']')){
        url = url.split('[')[0];
    }
    if(rule.filter_url){
        if(!/fyfilter/.test(url)){
            if(!url.endsWith('&')&&!rule.filter_url.startsWith('&')){
                url+='&'
            }
            url+=rule.filter_url;
        }else{
            url = url.replace('fyfilter', rule.filter_url);
        }
        // filter_url支持fyclass
        url = url.replaceAll('fyclass', cateObj.tid);
        // console.log('filter:'+cateObj.filter);
        let fl = cateObj.filter?cateObj.extend:{};
        // 自动合并 不同分类对应的默认筛选
        if(rule.filter_def && typeof(rule.filter_def)==='object'){
            try {
                if(Object.keys(rule.filter_def).length>0 && rule.filter_def.hasOwnProperty(cateObj.tid)){
                    let self_fl_def = rule.filter_def[cateObj.tid];
                    if(self_fl_def && typeof(self_fl_def)==='object'){
                        // 引用传递转值传递,避免污染self变量
                        let fl_def = JSON.parse(JSON.stringify(self_fl_def));
                        fl = Object.assign(fl_def,fl);
                    }
                }
            }catch (e) {
                print('合并不同分类对应的默认筛选出错:'+e.message);
            }
        }
        let new_url;
        new_url = cheerio.jinja2(url,{fl:fl});
        // console.log('jinjia2执行后的new_url类型为:'+typeof(new_url));
        url = new_url;
    }
    if(/fypage/.test(url)){
        if(url.includes('(')&&url.includes(')')){
            let url_rep = url.match(/.*?\((.*)\)/)[1];
            // console.log(url_rep);
            let cnt_page = url_rep.replaceAll('fypage', cateObj.pg);
            // console.log(cnt_page);
            let cnt_pg = eval(cnt_page);
            // console.log(cnt_pg);
            url = url.replaceAll(url_rep,cnt_pg).replaceAll('(','').replaceAll(')','');
        }else{
            url = url.replaceAll('fypage',cateObj.pg);
        }
    }

    MY_URL = url;
    // setItem('MY_URL',MY_URL);
    console.log(MY_URL);
    p = p.trim();
    const MY_CATE = cateObj.tid;
    if(p.startsWith('js:')){
        var MY_FL = cateObj.extend;
        const TYPE = 'cate';
        var input = MY_URL;
        const MY_PAGE = cateObj.pg;
        var desc = '';
        eval(p.trim().replace('js:',''));
        d = VODS;
    }else {
        p = p.split(';');
        if (p.length < 5) {
            return '{}'
        }
        let _ps = parseTags.getParse(p[0]);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        let is_json = p[0].startsWith('json:');
        p[0] = p[0].replace(/^(jsp:|json:|jq:)/,'');
        try {
            let html = getHtml(MY_URL);
            if (html) {
                if(is_json){
                    html = dealJson(html);
                }
                let list = _pdfa(html, p[0]);
                list.forEach(it => {
                    let links = p[4].split('+').map(p4=>{
                        return !rule.detailUrl?_pd(it, p4,MY_URL):_pdfh(it, p4);
                    });
                    let link = links.join('$');
                    let vod_id = rule.detailUrl?MY_CATE+'$'+link:link;

                    let vod_name = _pdfh(it, p[1]).replace(/\n|\t/g,'').trim();
                    let vod_pic = _pd(it, p[2],MY_URL);

                    if(rule.二级==='*'){
                        vod_id = vod_id+'@@'+vod_name+'@@'+vod_pic;
                    }
                    d.push({
                        'vod_id': vod_id,
                        'vod_name': vod_name,
                        'vod_pic': vod_pic,
                        'vod_remarks': _pdfh(it, p[3]).replace(/\n|\t/g,'').trim(),
                    });
                });
            }
        } catch (e) {
            console.log(e.message);
        }
    }
    if(rule.图片替换 && rule.图片替换.includes('=>')){
        let replace_from = rule.图片替换.split('=>')[0];
        let replace_to = rule.图片替换.split('=>')[1];
        d.forEach(it=>{
            if(it.vod_pic&&it.vod_pic.startsWith('http')){
                it.vod_pic = it.vod_pic.replace(replace_from,replace_to);
            }
        });
    }
    if(rule.图片来源){
        d.forEach(it=>{
            if(it.vod_pic&&it.vod_pic.startsWith('http')){
                it.vod_pic = it.vod_pic + rule.图片来源;
            }
        });
    }
    // print(d);
    if(d.length>0){
        print(d.slice(0,2));
    }
    let pagecount = 0;
    if(rule.pagecount && typeof(rule.pagecount) === 'object' && rule.pagecount.hasOwnProperty(MY_CATE)){
        print(`MY_CATE:${MY_CATE},pagecount:${JSON.stringify(rule.pagecount)}`);
        pagecount = parseInt(rule.pagecount[MY_CATE]);
    }
    let nodata = {
        list:[{vod_name:'无数据,防无限请求',vod_id:'no_data',vod_remarks:'不要点,会崩的',vod_pic:'https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/404.jpg'}],
        total:1,pagecount:1,page:1,limit:1
    };
    let vod =  d.length<1?JSON.stringify(nodata):JSON.stringify({
        'page': parseInt(cateObj.pg),
        'pagecount': pagecount||999,
        'limit': 20,
        'total': 999,
        'list': d,
    });
    // print(vod);
    return vod
}

/**
 * 搜索列表数据解析
 * @param searchObj
 * @returns {string}
 */
function searchParse(searchObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let d = [];
    if(!searchObj.searchUrl){
        return '{}'
    }
    let p = searchObj.搜索==='*'&&rule.一级 ? rule.一级 : searchObj.搜索;
    if(!p||typeof(p)!=='string'){
        return '{}'
    }
    p = p.trim();
    let pp = rule.一级.split(';');
    let url = searchObj.searchUrl.replaceAll('**', searchObj.wd);
    if(searchObj.pg === 1 && url.includes('[')&&url.includes(']')&&!url.includes('#')){
        url = url.split('[')[1].split(']')[0];
    }else if(searchObj.pg > 1 && url.includes('[')&&url.includes(']')&&!url.includes('#')){
        url = url.split('[')[0];
    }

    if(/fypage/.test(url)){
        if(url.includes('(')&&url.includes(')')){
            let url_rep = url.match(/.*?\((.*)\)/)[1];
            // console.log(url_rep);
            let cnt_page = url_rep.replaceAll('fypage', searchObj.pg);
            // console.log(cnt_page);
            let cnt_pg = eval(cnt_page);
            // console.log(cnt_pg);
            url = url.replaceAll(url_rep,cnt_pg).replaceAll('(','').replaceAll(')','');
        }else{
            url = url.replaceAll('fypage',searchObj.pg);
        }
    }

    MY_URL = url;
    console.log(MY_URL);
    // log(searchObj.搜索);
    // setItem('MY_URL',MY_URL);
    if(p.startsWith('js:')){
        const TYPE = 'search';
        const MY_PAGE = searchObj.pg;
        const KEY = searchObj.wd;
        var input = MY_URL;
        var detailUrl = rule.detailUrl||'';
        eval(p.trim().replace('js:',''));
        d = VODS;
    }else{
        p = p.split(';');
        if (p.length < 5) {
            return '{}'
        }
        let p0 = getPP(p,0,pp,0);
        let _ps = parseTags.getParse(p0);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        let is_json = p0.startsWith('json:');
        p0 = p0.replace(/^(jsp:|json:|jq:)/,'');
        // print('1381 p0:'+p0);
        try {
            let req_method = MY_URL.split(';').length>1?MY_URL.split(';')[1].toLowerCase():'get';
            let html;
            if(req_method==='post'){
                let rurls = MY_URL.split(';')[0].split('#')
                let rurl = rurls[0]
                let params = rurls.length > 1 ?rurls[1]:'';
                print(`post=》rurl:${rurl},params:${params}`);
                // let new_dict = {};
                // let new_tmp = params.split('&');
                // new_tmp.forEach(i=>{
                //     new_dict[i.split('=')[0]] = i.split('=')[1];
                // });
                // html = post(rurl,{body:new_dict});
                let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
                let postData = {body:params};
                Object.assign(_fetch_params,postData);
                html = post(rurl,_fetch_params);
            }else if(req_method==='postjson'){
                let rurls = MY_URL.split(';')[0].split('#')
                let rurl = rurls[0]
                let params = rurls.length > 1 ?rurls[1]:'';
                print(`postjson-》rurl:${rurl},params:${params}`);
                try{
                    params = JSON.parse(params);
                }catch (e) {
                    params = '{}'
                }
                let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
                let postData = {body:params};
                Object.assign(_fetch_params,postData);
                html = post(rurl,_fetch_params);
            }else{
                html = getHtml(MY_URL);
            }
            if (html) {
                if(/系统安全验证|输入验证码/.test(html)){
                    let cookie = verifyCode(MY_URL);
                    if(cookie){
                        console.log(`本次成功过验证,cookie:${cookie}`);
                        setItem(RULE_CK,cookie);
                    }else{
                        console.log(`本次自动过搜索验证失败,cookie:${cookie}`);
                    }
                    // obj.headers['Cookie'] = cookie;
                    html = getHtml(MY_URL);
                }
                if(!html.includes(searchObj.wd)){
                    console.log('搜索结果源码未包含关键字,疑似搜索失败,正为您打印结果源码');
                    console.log(html);
                }
                if(is_json){
                    // console.log(html);
                    html = dealJson(html);
                    // console.log(JSON.stringify(html));
                }
                // console.log(html);
                let list = _pdfa(html, p0);
                // print(list.length);
                // print(list);
                let p1 = getPP(p, 1, pp, 1);
                let p2 = getPP(p, 2, pp, 2);
                let p3 = getPP(p, 3, pp, 3);
                let p4 = getPP(p, 4, pp, 4);
                let p5 = getPP(p,5,pp,5);
                list.forEach(it => {
                    let links = p4.split('+').map(_p4=>{
                        return !rule.detailUrl?_pd(it, _p4,MY_URL):_pdfh(it, _p4)
                    });
                    let link = links.join('$');
                    let content;
                    if(p.length > 5 && p[5]){
                        content = _pdfh(it, p5);
                    }else{
                        content = '';
                    }
                    let vod_id = link;
                    let vod_name = _pdfh(it, p1).replace(/\n|\t/g,'').trim();
                    let vod_pic = _pd(it, p2,MY_URL);
                    if(rule.二级==='*'){
                        vod_id = vod_id+'@@'+vod_name+'@@'+vod_pic;
                    }
                    let ob = {
                        'vod_id': vod_id,
                        'vod_name': vod_name,
                        'vod_pic': vod_pic,
                        'vod_remarks': _pdfh(it, p3).replace(/\n|\t/g,'').trim(),
                        'vod_content': content.replace(/\n|\t/g,'').trim(),
                    };
                    d.push(ob);
                });

            }
        } catch (e) {
            print('搜索发生错误:'+e.message);
            return '{}'
        }
    }
    if(rule.图片替换 && rule.图片替换.includes('=>')){
        let replace_from = rule.图片替换.split('=>')[0];
        let replace_to = rule.图片替换.split('=>')[1];
        d.forEach(it=>{
            if(it.vod_pic&&it.vod_pic.startsWith('http')){
                it.vod_pic = it.vod_pic.replace(replace_from,replace_to);
            }
        });
    }
    if(rule.图片来源){
        d.forEach(it=>{
            if(it.vod_pic&&it.vod_pic.startsWith('http')){
                it.vod_pic = it.vod_pic + rule.图片来源;
            }
        });
    }
    // print(d);
    return JSON.stringify({
        'page': parseInt(searchObj.pg),
        'pagecount': 10,
        'limit': 20,
        'total': 100,
        'list': d,
    });
}

/**
 * 二级详情页数据解析
 * @param detailObj
 * @returns {string}
 */
function detailParse(detailObj){
    let t1 = (new Date()).getTime();
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let orId = detailObj.orId;
    let vod_name = '片名';
    let vod_pic = '';
    let vod_id = orId;
    if(rule.二级==='*'){
        // vod_id = orId.split('@@')[0]; // 千万不能分割
        let extra = orId.split('@@');
        vod_name = extra.length>1?extra[1]:vod_name;
        vod_pic = extra.length>2?extra[2]:vod_pic;
    }
    // print(vod_pic);
    let vod = {
        vod_id: vod_id, //"id",
        vod_name: vod_name,
        vod_pic: vod_pic,
        type_name: "类型",
        vod_year: "年份",
        vod_area: "地区",
        vod_remarks: "更新信息",
        vod_actor: "主演",
        vod_director: "导演",
        vod_content: "简介"
    };
    let p = detailObj.二级;
    let url = detailObj.url;
    let detailUrl = detailObj.detailUrl;
    let fyclass = detailObj.fyclass;
    let tab_exclude = detailObj.tab_exclude;
    let html = detailObj.html||'';
    MY_URL = url;
    if(detailObj.二级访问前){
        try {
            print(`尝试在二级访问前执行代码:${detailObj.二级访问前}`);
            eval(detailObj.二级访问前.trim().replace('js:',''));
        }catch (e) {
            print(`二级访问前执行代码出现错误:${e.message}`)
        }
    }
    // console.log(MY_URL);
    // setItem('MY_URL',MY_URL);
    if(p==='*'){
        vod.vod_play_from = '道长在线';
        vod.vod_remarks = detailUrl;
        vod.vod_actor = '没有二级,只有一级链接直接嗅探播放';
        vod.vod_content = MY_URL;
        vod.vod_play_url = '嗅探播放$' + MY_URL.split('@@')[0];
    }else if(typeof(p)==='string'&&p.trim().startsWith('js:')){
        const TYPE = 'detail';
        var input = MY_URL;
        var play_url = '';
        eval(p.trim().replace('js:',''));
        vod = VOD;
        console.log(JSON.stringify(vod));
    }else if(p&&typeof(p)==='object'){
        let tt1 = (new Date()).getTime();
        if(!html){
            html = getHtml(MY_URL);
        }
        print(`二级${MY_URL}仅获取源码耗时:${(new Date()).getTime()-tt1}毫秒`);
        let _ps;
        if(p.is_json){
            print('二级是json');
            _ps = parseTags.json;
            html = dealJson(html);
        }else if(p.is_jsp){
            print('二级是jsp');
            _ps = parseTags.jsp;
        }else if(p.is_jq){
            print('二级是jq');
            _ps = parseTags.jq;
        }else{
            print('二级默认jq');
            _ps = parseTags.jq;
            // print('二级默认jsp');
            // _ps = parseTags.jsp;
        }
        let tt2 = (new Date()).getTime();
        print(`二级${MY_URL}获取并装载源码耗时:${tt2-tt1}毫秒`);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        if(p.title){
            let p1 = p.title.split(';');
            vod.vod_name = _pdfh(html, p1[0]).replace(/\n|\t/g,'').trim();
            let type_name = p1.length > 1 ? _pdfh(html, p1[1]).replace(/\n|\t/g,'').replace(/ /g,'').trim():'';
            vod.type_name = type_name||vod.type_name;
        }
        if(p.desc){
            try{
                let p1 = p.desc.split(';');
                vod.vod_remarks =  _pdfh(html, p1[0]).replace(/\n|\t/g,'').trim();
                vod.vod_year = p1.length > 1 ? _pdfh(html, p1[1]).replace(/\n|\t/g,'').trim():'';
                vod.vod_area = p1.length > 2 ? _pdfh(html, p1[2]).replace(/\n|\t/g,'').trim():'';
                // vod.vod_actor = p1.length > 3 ? _pdfh(html, p1[3]).replaceAll('\n', ' ').trim():'';
                vod.vod_actor = p1.length > 3 ? _pdfh(html, p1[3]).replace(/\n|\t/g,'').trim():'';
                vod.vod_director = p1.length > 4 ? _pdfh(html, p1[4]).replace(/\n|\t/g,'').trim():'';
            }
            catch (e) {

            }
        }
        if(p.content){
            try{
                let p1 = p.content.split(';');
                vod.vod_content =  _pdfh(html, p1[0]).replace(/\n|\t/g,'').trim();
            }
            catch (e) {}
        }
        if(p.img){
            try{
                let p1 = p.img.split(';');
                vod.vod_pic =  _pd(html, p1[0],MY_URL);
            }
            catch (e) {}
        }

        let vod_play_from = '$$$';
        let playFrom = [];
        if(p.重定向&&p.重定向.startsWith('js:')){
            print('开始执行重定向代码:'+p.重定向);
            html = eval(p.重定向.replace('js:',''));
        }

// console.log(2);
        if(p.tabs){
            if(p.tabs.startsWith('js:')){
                print('开始执行tabs代码:'+p.tabs);
                var input = MY_URL;
                eval(p.tabs.replace('js:',''));
                playFrom = TABS;
            }else{
                let p_tab = p.tabs.split(';')[0];
                // console.log(p_tab);
                let vHeader = _pdfa(html, p_tab);
                console.log(vHeader.length);
                let tab_text = p.tab_text||'body&&Text';
                // print('tab_text:'+tab_text);
                let new_map = {};
                for(let v of vHeader){
                    let v_title = _pdfh(v,tab_text).trim();
                    if(!v_title){
                        v_title = '线路空'
                    }
                    console.log(v_title);
                    if(tab_exclude&& (new RegExp(tab_exclude)).test(v_title)){
                        continue;
                    }
                    if(!new_map.hasOwnProperty(v_title)){
                        new_map[v_title] = 1;
                    }else{
                        new_map[v_title] += 1;
                    }
                    if(new_map[v_title]>1){
                        v_title+=Number(new_map[v_title]-1);
                    }
                    playFrom.push(v_title);
                }
            }
            console.log(JSON.stringify(playFrom));
        }else{
            playFrom = ['道长在线']
        }
        vod.vod_play_from = playFrom.join(vod_play_from);

// console.log(3);
        let vod_play_url = '$$$';
        let vod_tab_list = [];
        if(p.lists){
            if(p.lists.startsWith('js:')){
                print('开始执行lists代码:'+p.lists);
                try {
                    var input = MY_URL;
                    var play_url = '';
                    eval(p.lists.replace('js:',''));
                    for(let i in LISTS){
                        if(LISTS.hasOwnProperty(i)){
                            // print(i);
                            try {
                                LISTS[i] = LISTS[i].map(it=>it.split('$').slice(0,2).join('$'));
                            }catch (e) {
                                print('格式化LISTS发生错误:'+e.message);
                            }
                        }
                    }
                    vod_play_url = LISTS.map(it=>it.join('#')).join(vod_play_url);
                }catch (e) {
                    print('js执行lists: 发生错误:'+e.message);
                }

            }else{
                let list_text = p.list_text||'body&&Text';
                let list_url = p.list_url||'a&&href';
                // print('list_text:'+list_text);
                // print('list_url:'+list_url);
                // print('list_parse:'+p.lists);
                let is_tab_js = p.tabs.trim().startsWith('js:');
                for(let i=0;i<playFrom.length;i++){
                    let tab_name = playFrom[i];
                    let tab_ext =  p.tabs.split(';').length > 1 && !is_tab_js ? p.tabs.split(';')[1] : '';
                    let p1 = p.lists.replaceAll('#idv', tab_name).replaceAll('#id', i);
                    tab_ext = tab_ext.replaceAll('#idv', tab_name).replaceAll('#id', i);
                    let tabName = tab_ext?_pdfh(html, tab_ext):tab_name;
                    console.log(tabName);
                    // print('tab_ext:'+tab_ext);
                    let new_vod_list = [];
                    let tt1 = (new Date()).getTime();
                    // print('pdfl:'+typeof (pdfl));
                    if(typeof (pdfl) ==='function'){
                        new_vod_list = pdfl(html, p1, list_text, list_url, MY_URL);
                    }else {
                        let vodList = [];
                        try {
                            vodList =  _pdfa(html, p1);
                            console.log('len(vodList):'+vodList.length);
                        }catch (e) {
                            // console.log(e.message);
                        }
                        for (let i = 0; i < vodList.length; i++) {
                            let it = vodList[i];
                            new_vod_list.push(_pdfh(it, list_text).trim() + '$' + _pd(it, list_url, MY_URL));
                        }
                    }
                    if(new_vod_list.length>0){
                        new_vod_list = forceOrder(new_vod_list,'',x=>x.split('$')[0]);
                        console.log(`drpy影响性能代码共计列表数循环次数:${new_vod_list.length},耗时:${(new Date()).getTime()-tt1}毫秒`);
                    }
                    // print(new_vod_list);
                    let vlist = new_vod_list.join('#');
                    vod_tab_list.push(vlist);
                }
                vod_play_url = vod_tab_list.join(vod_play_url);
            }
        }
        vod.vod_play_url = vod_play_url;
    }
    if(rule.图片替换 && rule.图片替换.includes('=>')){
        let replace_from = rule.图片替换.split('=>')[0];
        let replace_to = rule.图片替换.split('=>')[1];
        vod.vod_pic = vod.vod_pic.replace(replace_from,replace_to);
    }
    if(rule.图片来源 && vod.vod_pic && vod.vod_pic.startsWith('http')){
        vod.vod_pic = vod.vod_pic + rule.图片来源;
    }
    if(!vod.vod_id||(vod_id.includes('$')&&vod.vod_id!==vod_id)){
        vod.vod_id = vod_id;
    }
    let t2 = (new Date()).getTime();
    console.log(`加载二级界面${MY_URL}耗时:${t2-t1}毫秒`);
    // print(vod);
    try {
     vod = vodDeal(vod);
    }catch (e) {
     console.log(`vodDeal发生错误:${e.message}`);
    }
    // print(vod);
    return JSON.stringify({
        list: [vod]
    })
}

/**
 * 获取二级待返回的播放线路没处理时的索引关系
 * @param vod
 * @returns {{}}
 */
function get_tab_index(vod){
    let obj = {};
    vod.vod_play_from.split('$$$').forEach((it,index)=>{
        obj[it] = index;
    });
    return obj
}

/**
 * 处理待返回的vod数据|线路去除,排序,重命名
 * @param vod
 * @returns {*}
 */
function vodDeal(vod){
    let vod_play_from = vod.vod_play_from.split('$$$');
    let vod_play_url = vod.vod_play_url.split('$$$');

    // 移除指定线路后的列表
    let tab_removed_list = vod_play_from;
    // 排序后的线路列表
    let tab_ordered_list = vod_play_from;
    // 线路重命名后的列表
    let tab_renamed_list = vod_play_from;
    // 定义实际要返回线路
    let tab_list = vod_play_from;
    // 选集列表根据线路排序
    let play_ordered_list = vod_play_url;

    // 判断有移除线路或者线路排序
    if((rule.tab_remove&&rule.tab_remove.length>0)||(rule.tab_order&&rule.tab_order.length>0)){
        // 获取原来线路的索引下标
        let tab_index_dict = get_tab_index(vod);

        if(rule.tab_remove&&rule.tab_remove.length>0){
            tab_removed_list = vod_play_from.filter(it=>!rule.tab_remove.includes(it));
            tab_list = tab_removed_list;
        }

        if(rule.tab_order&&rule.tab_order.length>0){
            let tab_order = rule.tab_order;
            tab_ordered_list = tab_removed_list.sort((a, b) => {
            return (tab_order.indexOf(a)===-1?9999:tab_order.indexOf(a)) - (tab_order.indexOf(b)===-1?9999:tab_order.indexOf(b))
            });
            tab_list = tab_ordered_list;
        }
        play_ordered_list = tab_list.map(it=>vod_play_url[tab_index_dict[it]]);
    }

    if(rule.tab_rename&&typeof(rule.tab_rename)==='object'&Object.keys(rule.tab_rename).length>0){
        tab_renamed_list = tab_list.map(it=>rule.tab_rename[it]||it);
        tab_list = tab_renamed_list;
    }
    vod.vod_play_from = tab_list.join('$$$');
    vod.vod_play_url = play_ordered_list.join('$$$');
    return vod
}

/**
 * 判断是否需要解析
 * @param url
 * @returns {number|number}
 */
function tellIsJx(url){
    try {
        let is_vip = !/\.(m3u8|mp4|m4a)$/.test(url.split('?')[0]) && 是否正版(url);
        return is_vip?1:0
    }catch (e) {
        return 1
    }
}
/**
 * 选集播放点击事件解析
 * @param playObj
 * @returns {string}
 */
function playParse(playObj){
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    MY_URL = playObj.url;
    var MY_FLAG = playObj.flag;
    if(!/http/.test(MY_URL)){
        try {
            MY_URL = base64Decode(MY_URL);
        }catch (e) {}
    }
    MY_URL = decodeURIComponent(MY_URL);
    var input = MY_URL;//注入给免嗅js
    var flag = MY_FLAG;//注入播放线路名称给免嗅js
    let common_play = {
        parse:1,
        url:input,
        flag:flag,
        // url:urlencode(input),
        jx:tellIsJx(input)
    };
    let lazy_play;
    if(!rule.play_parse||!rule.lazy){
        lazy_play =  common_play;
    }else if(rule.play_parse&&rule.lazy&&typeof(rule.lazy)==='string'){
        try {
            let lazy_code = rule.lazy.trim();
            if(lazy_code.startsWith('js:')){
                lazy_code = lazy_code.replace('js:','').trim();
            }
            print('开始执行js免嗅=>'+lazy_code);
            eval(lazy_code);
            lazy_play = typeof(input) === 'object'?input:{
                parse:1,
                jx:tellIsJx(input),
                url:input
            };
        }catch (e) {
            print('js免嗅错误:'+e.message);
            lazy_play =  common_play;
        }
    }else{
        lazy_play =  common_play;
    }
    // print('play_json:'+typeof(rule.play_json));
    // console.log(Array.isArray(rule.play_json));
    if(Array.isArray(rule.play_json) && rule.play_json.length >0){ // 数组情况判断长度大于0
        let web_url = lazy_play.url;
        for(let pjson of rule.play_json){
            if(pjson.re && (pjson.re==='*'||web_url.match(new RegExp(pjson.re)))){
                if(pjson.json && typeof(pjson.json)==='object'){
                    let base_json = pjson.json;
                    // print('开始合并:');
                    // print(base_json);
                    lazy_play = Object.assign(lazy_play,base_json);
                    break;
                }
            }
        }
    }else if(rule.play_json && !Array.isArray(rule.play_json)){ // 其他情况 非[] 判断true/false
        let base_json = {
            jx:1,
            parse:1,
        };
        lazy_play = Object.assign(lazy_play,base_json);
    }else if(!rule.play_json){ // 不解析传0
        let base_json = {
            jx:0,
            parse:1,
        };
        lazy_play = Object.assign(lazy_play,base_json);
    }
    console.log(JSON.stringify(lazy_play));
    return JSON.stringify(lazy_play);
}

/**
 * 本地代理解析规则
 * @param params
 */
function proxyParse(proxyObj){
    var input = proxyObj.params;
    if(proxyObj.proxy_rule){
        log('准备执行本地代理规则:\n'+proxyObj.proxy_rule);
        try {
            eval(proxyObj.proxy_rule);
            if(input && input!== proxyObj.params && Array.isArray(input) &&input.length===3){
                return input
            }else{
                return [404,'text/plain','Not Found']
            }
        }catch (e) {
            return [500,'text/plain','代理规则错误:'+e.message]
        }

    }else{
        return [404,'text/plain','Not Found']
    }
}

/**
 * 辅助嗅探解析规则
 * @param isVideoObj
 * @returns {boolean}
 */
function isVideoParse(isVideoObj){
    var input = isVideoObj.url;
    if(!isVideoObj.t){ // t为假代表默认传的正则字符串
        let re_matcher =  new RegExp(isVideoObj.isVideo,'i');  // /g匹配多个,/i不区分大小写,/m匹配多行
        return re_matcher.test(input);
    }else{
        // 执行js
        try {
            eval(isVideoObj.isVideo);
            if(typeof(input)==='boolean'){
                return input
            }else{
                return false
            }
        }catch (e) {
            log('执行嗅探规则发生错误:'+e.message);
            return false
        }
    }
}

/**
 * js源预处理特定返回对象中的函数
 * @param ext
 */
function init(ext) {
    console.log('init');
    try {
        // make shared jsContext happy muban不能import,不然会造成换源继承后变量被篡改
        // if (typeof (globalThis.mubanJs) === 'undefined') {
        //     let mubanJs = request('https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/js/模板.js', { 'User-Agent': MOBILE_UA });
        //     mubanJs = mubanJs.replace('export default', '(function() {return muban;}()) // export default');
        //     // console.log(mubanJs);
        //     globalThis.mubanJs = mubanJs;
        // }
        // let muban = eval(globalThis.mubanJs);

        let muban = 模板.getMubans();
        // print(typeof (muban));
        // print(muban);
        if (typeof ext == 'object'){
            rule = ext;
        } else if (typeof ext == 'string') {
            if (ext.startsWith('http')) {
                let query = getQuery(ext); // 获取链接传参
                let js = request(ext,{'method':'GET'});
                if (js){
                    eval(js.replace('var rule', 'rule'));
                }
                if(query.type==='url' && query.params){ // 指定type是链接并且传了params支持简写如 ./xx.json
                    rule.params = urljoin(ext,query.params);
                }else if(query.params){ // 没指定type直接视为字符串
                    rule.params = query.params;
                }
            } else {
                eval(ext.replace('var rule', 'rule'));
            }
        }
        if (rule.模板 && muban.hasOwnProperty(rule.模板)) {
            print('继承模板:'+rule.模板);
            rule = Object.assign(muban[rule.模板], rule);
        }
        /** 处理一下 rule规则关键字段没传递的情况 **/
        let rule_cate_excludes = (rule.cate_exclude||'').split('|').filter(it=>it.trim());
        let rule_tab_excludes = (rule.tab_exclude||'').split('|').filter(it=>it.trim());
        rule_cate_excludes = rule_cate_excludes.concat(CATE_EXCLUDE.split('|').filter(it=>it.trim()));
        rule_tab_excludes = rule_tab_excludes.concat(TAB_EXCLUDE.split('|').filter(it=>it.trim()));

        rule.cate_exclude = rule_cate_excludes.join('|');
        rule.tab_exclude = rule_tab_excludes.join('|');
        rule.host = (rule.host||'').rstrip('/');
        HOST = rule.host;
        if(rule.hostJs){
            console.log(`检测到hostJs,准备执行...`);
            try {
                eval(rule.hostJs);
                rule.host = HOST.rstrip('/');
            }catch (e) {
                console.log(`执行${rule.hostJs}获取host发生错误:`+e.message);
            }
        }
        rule.url = rule.url||'';
        rule.double = rule.double||false;
        rule.homeUrl = rule.homeUrl||'';
        rule.detailUrl = rule.detailUrl||'';
        rule.searchUrl = rule.searchUrl||'';
        rule.homeUrl = rule.host&&rule.homeUrl?urljoin(rule.host,rule.homeUrl):(rule.homeUrl||rule.host);
        rule.homeUrl = cheerio.jinja2(rule.homeUrl,{rule:rule});
        rule.detailUrl = rule.host&&rule.detailUrl?urljoin(rule.host,rule.detailUrl):rule.detailUrl;
        rule.二级访问前 = rule.二级访问前||'';
        if(rule.url.includes('[')&&rule.url.includes(']')){
            let u1 = rule.url.split('[')[0]
            let u2 = rule.url.split('[')[1].split(']')[0]
            rule.url = rule.host && rule.url?urljoin(rule.host,u1)+'['+urljoin(rule.host,u2)+']':rule.url;
        }else{
            rule.url = rule.host && rule.url ? urljoin(rule.host,rule.url) : rule.url;
        }
        if(rule.searchUrl.includes('[')&&rule.searchUrl.includes(']')&&!rule.searchUrl.includes('#')){
            let u1 = rule.searchUrl.split('[')[0]
            let u2 = rule.searchUrl.split('[')[1].split(']')[0]
            rule.searchUrl = rule.host && rule.searchUrl?urljoin(rule.host,u1)+'['+urljoin(rule.host,u2)+']':rule.searchUrl;
        }else{
            rule.searchUrl = rule.host && rule.searchUrl ? urljoin(rule.host,rule.searchUrl) : rule.searchUrl;
        }

        rule.timeout = rule.timeout||5000;
        rule.encoding = rule.编码||rule.encoding||'utf-8';
        rule.search_encoding = rule.搜索编码||rule.search_encoding||'';
        rule.图片来源 = rule.图片来源||'';
        rule.图片替换 = rule.图片替换||'';
        rule.play_json = rule.hasOwnProperty('play_json')?rule.play_json:[];
        rule.pagecount = rule.hasOwnProperty('pagecount')?rule.pagecount:{};
        rule.proxy_rule = rule.hasOwnProperty('proxy_rule')?rule.proxy_rule:'';
        rule.sniffer = rule.hasOwnProperty('sniffer')?rule.sniffer:'';
        rule.sniffer = !!(rule.sniffer && rule.sniffer!=='0' && rule.sniffer!=='false');

        rule.isVideo = rule.hasOwnProperty('isVideo')?rule.isVideo:'';

        rule.tab_remove = rule.hasOwnProperty('tab_remove')?rule.tab_remove:[];
        rule.tab_order = rule.hasOwnProperty('tab_order')?rule.tab_order:[];
        rule.tab_rename = rule.hasOwnProperty('tab_rename')?rule.tab_rename:{};

        if(rule.headers && typeof(rule.headers) === 'object'){
            try {
                let header_keys = Object.keys(rule.headers);
                for(let k of header_keys){
                    if(k.toLowerCase() === 'user-agent'){
                        let v = rule.headers[k];
                        console.log(v);
                        if(['MOBILE_UA','PC_UA','UC_UA','IOS_UA','UA'].includes(v)){
                            rule.headers[k] = eval(v);
                        }
                    }else if(k.toLowerCase() === 'cookie'){
                        let v = rule.headers[k];
                        if(v && v.startsWith('http')){
                            console.log(v);
                            try {
                                v = fetch(v);
                                console.log(v);
                                rule.headers[k] = v;
                            }catch (e) {
                                console.log(`从${v}获取cookie发生错误:`+e.message);
                            }
                        }
                    }
                }
            }catch (e) {
                console.log('处理headers发生错误:'+e.message);
            }
        }
        // print(rule.headers);
        rule_fetch_params  = {'headers': rule.headers||false, 'timeout': rule.timeout, 'encoding': rule.encoding};
        oheaders = rule.headers||{};
        RKEY = typeof(key)!=='undefined'&&key?key:'drpy_' + (rule.title || rule.host);
        pre(); // 预处理
        init_test();
    }catch (e) {
        console.log('init_test发生错误:'+e.message);
    }
}

let homeHtmlCache = undefined;

/**
 * js源获取首页分类和筛选特定返回对象中的函数
 * @param filter 筛选条件字典对象
 * @returns {string}
 */
function home(filter) {
    console.log("home");
    if(typeof(rule.filter) === 'string' && rule.filter.trim().length > 0){
        try {
            let filter_json = ungzip(rule.filter.trim());
            rule.filter = JSON.parse(filter_json);
        }catch (e) {
            rule.filter = {};
        }
    }
    let homeObj = {
        filter:rule.filter||false,
        MY_URL: rule.homeUrl,
        class_name: rule.class_name || '',
        class_url: rule.class_url || '',
        class_parse: rule.class_parse || '',
        cate_exclude: rule.cate_exclude,
    };
    return homeParse(homeObj);
}

/**
 * js源获取首页推荐数据列表特定返回对象中的函数
 * @param params
 * @returns {string}
 */
function homeVod(params) {
    console.log("homeVod");
    let homeVodObj = {
        推荐:rule.推荐,
        double:rule.double,
        homeUrl:rule.homeUrl,
        detailUrl:rule.detailUrl
    };
    return homeVodParse(homeVodObj)
    // return "{}";
}

/**
 * js源获取分类页一级数据列表特定返回对象中的函数
 * @param tid 分类id
 * @param pg 页数
 * @param filter 当前选中的筛选条件
 * @param extend 扩展
 * @returns {string}
 */
function category(tid, pg, filter, extend) {
    let cateObj = {
        url: rule.url,
        一级: rule.一级,
        tid: tid,
        pg: parseInt(pg),
        filter: filter,
        extend: extend
    };
    // console.log(JSON.stringify(extend));
    return categoryParse(cateObj)
}

/**
 * js源获取二级详情页数据特定返回对象中的函数
 * @param vod_url 一级列表中的vod_id或者是带分类的自拼接 vod_id 如 fyclass$vod_id
 * @returns {string}
 */
function detail(vod_url) {
    let orId = vod_url;
    let fyclass = '';
    log('orId:'+orId);
    if(vod_url.indexOf('$')>-1){
        let tmp = vod_url.split('$');
        fyclass = tmp[0];
        vod_url = tmp[1];
    }
    let detailUrl = vod_url.split('@@')[0];
    let url;
    if(!detailUrl.startsWith('http')&&!detailUrl.includes('/')){
        url = rule.detailUrl.replaceAll('fyid', detailUrl).replaceAll('fyclass',fyclass);
    }else if(detailUrl.includes('/')){
        url = urljoin(rule.homeUrl,detailUrl);
    }else{
        url = detailUrl
    }
    let detailObj = {
        orId: orId,
        url:url,
        二级:rule.二级,
        二级访问前:rule.二级访问前,
        detailUrl:detailUrl,
        fyclass:fyclass,
        tab_exclude:rule.tab_exclude,
    }
    return detailParse(detailObj)
}

/**
 * js源选集按钮播放点击事件特定返回对象中的函数
 * @param flag 线路名
 * @param id 播放按钮的链接
 * @param flags 全局配置的flags是否需要解析的标识列表
 * @returns {string}
 */
function play(flag, id, flags) {
    let playObj = {
        url:id,
        flag:flag,
        flags:flags
    }
    return playParse(playObj);
}

/**
 * js源搜索返回的数据列表特定返回对象中的函数
 * @param wd 搜索关键字
 * @param quick 是否来自快速搜索
 * @returns {string}
 */
function search(wd, quick, pg) {
    if(rule.search_encoding){
        if(rule.search_encoding.toLowerCase()!=='utf-8'){
            // 按搜索编码进行编码
            wd = encodeStr(wd,rule.search_encoding);
        }
    }else if(rule.encoding && rule.encoding.toLowerCase()!=='utf-8'){
        // 按全局编码进行编码
        wd = encodeStr(wd,rule.encoding);
    }
    let searchObj = {
        searchUrl: rule.searchUrl,
        搜索: rule.搜索,
        wd: wd,
        //pg: pg,
        pg: pg||1,
        quick: quick,
    };
    // console.log(JSON.stringify(searchObj));
    return searchParse(searchObj)
}

/**
 * js源本地代理返回的数据列表特定返回对象中的函数
 * @param params 代理链接参数比如 /proxy?do=js&url=https://wwww.baidu.com => params就是 {do:'js','url':'https://wwww.baidu.com'}
 * @returns {*}
 */
function proxy(params){
    if(rule.proxy_rule&&rule.proxy_rule.trim()){
        rule.proxy_rule = rule.proxy_rule.trim();
    }
    if(rule.proxy_rule.startsWith('js:')){
        rule.proxy_rule = rule.proxy_rule.replace('js:','');
    }
    let proxyObj = {
        params:params,
        proxy_rule:rule.proxy_rule
    };
    return proxyParse(proxyObj)
}


/**
 * 是否启用辅助嗅探功能,启用后可以根据isVideo函数进行手动识别为视频的链接地址。默认为false
 * @returns {*|boolean|boolean}
 */
function sniffer(){
    let enable_sniffer =  rule.sniffer || false;
    if(enable_sniffer){
        // log('准备执行辅助嗅探代理规则:\n'+rule.isVideo);
        log('开始执行辅助嗅探代理规则...');
    }
    return enable_sniffer
}

/**
 * 启用辅助嗅探功能后根据次函数返回的值识别地址是否为视频，返回true/false
 * @param url
 */
function isVideo(url){
    let t = 0;
    let is_video;
    if(rule.isVideo &&rule.isVideo.trim()){
        is_video = rule.isVideo.trim();
    }
    if(is_video.startsWith('js:')){
        is_video = is_video.replace('js:','');
        t = 1;
    }
    let isVideoObj = {
        url:url,
        isVideo:is_video,
        t:t,
    };
    let result = isVideoParse(isVideoObj);
    if(result){
        log('成功执行辅助嗅探规则并检测到视频地址:\n'+rule.isVideo);
    }
    return result
}

function DRPY(){//导出函数
    return {
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        search: search,
        proxy:proxy,
        sniffer:sniffer,
        isVideo:isVideo
    }
}

/**
 * 导出函数无法简写成下面的形式:

 export default {
  ...DRPY,
  DRPY
 }

 */

// 导出函数对象
export default {
    init,
    home,
    homeVod,
    category,
    detail,
    play,
    search,
    proxy,
    sniffer,
    isVideo,
    DRPY,
}