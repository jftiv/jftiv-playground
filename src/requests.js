import axios from 'axios';

export default class TestClass {
    programCode = "test";
    apiKey = "123";
    project = null;

    async upload (image) {
        try {
            response = await axios.post(`http://localhost:3000/image/${this.programCode}/upload`, {
                'file': image,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'apiKey': this.apiKey,
                }
            })
        }
        catch (err) {
            console.log(err);
            return;
        }
    }

    async uploadBase64 (name, image) {
        try {
            response = await axios.post(`http://localhost:3000/image/${this.programCode}/upload2`, {
                'name': name,
                's3path': this.programCode,
                'imageBase64': image,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'apiKey': this.apiKey,
                }
            });
        }
        catch (err) {
            console.log(err);
            return;
        }
    }
};