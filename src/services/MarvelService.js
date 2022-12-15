

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=d047076055a53a4dbf6afb64cf4e109b';
    _baseOffset = 210;

    getResourse = async (url) => {
        let res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }


    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResourse(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);

        return res.data.results.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const res = await this.getResourse(`${this._apiBase}characters/${id}?${this._apiKey}`);

        // console.log('res-->', res);

        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        let description = char.description;

        if(description.length === 0){
            description = 'There is no description for this character...';
        } else if (char.description.length >= 180) {
            description = description.substring(0, 180) + ' ...';
        }

        return {
            comics: char.comics.items,
            id: char.id,
            name: char.name,
            description: description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }
}

export default MarvelService;