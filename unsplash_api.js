class UnsplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID OLtAwYq-1J4_o0alQnjn6bR_kzu57_-As4B2FXM1vNU';
        this.axiosNesne = axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: this.clientID
            },
            paramms: {
                query: 'animal',
                count: 1
            }
        });
    }
    async randomResimGetir() {
        try {
            const resimResponse = await this.axiosNesne.get('/photos/random');
            console.log(resimResponse.data[0].urls.regular);
            return resimResponse.data[0].urls.regular;
        } catch (err) {
            console.log(err.response);
            return 'https://picsum.photos/200/300';
        }
    }
}

export default function resimGetir() {
    const getirilenResim = new UnsplashApi().randomResimGetir();
    return getirilenResim;
}