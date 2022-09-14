import useApiRequest from '../ApiRequest/useApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/artists';

function useArtistTopTracks(id) {
    const url = Array.isArray(id) ? BASE_URL : BASE_URL + `/${id}/top-tracks`;
    const options = Array.isArray(id) ? { ids: id.join(',') } : {};
    const { data, loading, error } = useApiRequest(url, options);

    return { data, loading, error };
}

export default useArtistTopTracks;
