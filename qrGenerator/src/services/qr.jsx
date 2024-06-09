import axios from 'axios';

const baseUrl = 'http://api.qrserver.com/v1/create-qr-code/?';

const testColor = (color) => {
    const reg = /([0-9a-f]{3}){1,2}$/i;

    return reg.test(color)
}

const getQR = (data, size = '', color = '', bgcolor = '', margin = '') => {
    try {
        if (!data || data === '') {
            throw new Error("data can not be empty")
        }
        if (size & !Number.isInteger(size)) {
            throw new Error("size is not an integer")
        }

        if (margin & !Number.isInteger(margin)) {
            throw new Error("margin is not an integer")
        }

        if (color & !testColor(color)) {
            throw new Error("color format is not correct")
        }

        if (bgcolor & !testColor(bgcolor)) {
            throw new Error("background color format is not correct")
        }

        let url = `${baseUrl}data=${data}`;
        if (size) url += `&size=${size}x${size}`;
        if (color) url += `&color=${color}`;
        if (bgcolor) url += `&bgcolor=${bgcolor}`;
        if (margin) url += `&margin=${margin}`;

        return axios.get(url, { responseType: 'blob' })
            .then(response => URL.createObjectURL(response.data));
    } catch(error) {
        return Promise.reject(error.message)
    }
}

export default { getQR };
