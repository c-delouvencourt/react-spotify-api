import useApiRequest from '../ApiRequest/useApiRequest';

function useUserTop(id) {
    const url = 'https://api.spotify.com/v1/me/artists';
    const { data, loading, error } = useApiRequest(url);

    return { data, loading, error };
}

export default useUserTop;
