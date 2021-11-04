import api from 'api';

export const coinGeckoPrice = async () => {
    try{
        const res = await api.get('/data/coin-gecko/price');

        return res.data.data
    } catch(err){
        console.log(err.response)
    }
}

export const getErgoNews = async () => {
    try{
        const res = await api.get('/data/ergo/news');

        return res.data.data
    } catch (err){
        console.log(err.response)
    }
}

export const getCardanoNews = async () => {
    try{
        const res = await api.get('/data/cardano/news');

        return res.data.data
    } catch (err){
        console.log(err.response)
    }
}