class GalleryApi {
  static URL = 'https://jsonplaceholder.typicode.com';

  static request(uri = '', method = 'GET', data) {
    const url = `${this.URL}${uri}`;

    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: data ? JSON.stringify(data) : undefined,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error(`API request error ${url}`);
      });
  }

  static getAlbums() {
    return this.request('/albums').catch((e) => {
      throw new Error('Can not fetch album list.');
    });
  }

  static getPhotos(albumId) {
    return this.request(`/photos?albumId=${albumId}`).catch((e) => {
      throw new Error('Can not fetch album photos.');
    });
  }
}

export default GalleryApi;