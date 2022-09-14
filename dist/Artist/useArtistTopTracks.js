import useApiRequest from '../ApiRequest/useApiRequest';
var BASE_URL = 'https://api.spotify.com/v1/artists';

function useArtistTopTracks(id) {
  var url = Array.isArray(id) ? BASE_URL : BASE_URL + "/".concat(id, "/top-tracks");
  var options = Array.isArray(id) ? {
    ids: id.join(',')
  } : {};

  var _useApiRequest = useApiRequest(url, options),
      data = _useApiRequest.data,
      loading = _useApiRequest.loading,
      error = _useApiRequest.error;

  return {
    data: data,
    loading: loading,
    error: error
  };
}

export default useArtistTopTracks;