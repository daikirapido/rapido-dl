const axios = require('axios');

class rapidodl {
  constructor() {
    this.baseUrl = 'https://api.rapido.ooguy.com/api';
  }
  
  async ytdl(url) {
    const response = await axios.get(`${this.baseUrl}/ytdl`, { params: { url } });
    return response.data;
  }
  
  async igdl(url) {
    const response = await axios.get(`${this.baseUrl}/igdl`, { params: { url } });
    return response.data;
  }
  
  async fbdl(url) {
    const response = await axios.get(`${this.baseUrl}/fbdl`, { params: { url } });
    return response.data;
  }
}

module.exports = rapidodl;
