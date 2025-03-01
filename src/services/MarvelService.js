import {useHttp} from '../hooks/http.hook';

const _apiKey = `apikey=${process.env.REACT_APP_API_KEY}`;
const _apiBase = process.env.REACT_APP_API_URL;
const _baseOffset = 210;

const useMarvelService = () => {
    const {loading, request, error, clearError, process, setProcess} = useHttp();

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);

        return res.data.results.map(_transformCharacter);
    };

    const getCharacter = async id => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

        return _transformCharacter(res.data.results[0]);
    };

    const getAllComics = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}comics?limit=12&offset=${offset}&${_apiKey}`);

        return res.data.results.map(_transformComic);
    };

    const getComic = async id => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);

        return _transformComic(res.data.results[0]);
    };

    const getCharacterByName = async name => {
        const res = await request(`${_apiBase}characters?nameStartsWith=${name}&${_apiKey}`);

        return res.data.results.map(_transformCharacter);
    };

    const _transformComic = comic => {
        let description = comic.description;

        if (!description) {
            description = 'There is no description for this comic...';
        }

        return {
            id: comic.id,
            title: comic.title,
            description: description,
            pages: comic.pageCount,
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
            language: comic.textObjects.language || 'en-us',
            price: comic.prices[0].price,
            homepage: comic.urls[0].url,
        };
    };

    const _transformCharacter = char => {
        let description = char.description;

        if (description.length === 0) {
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
            wiki: char.urls[1].url,
        };
    };

    return {
        loading,
        error,
        process,
        setProcess,
        getAllCharacters,
        getCharacter,
        getAllComics,
        getComic,
        getCharacterByName,
        clearError,
    };
};

export default useMarvelService;
