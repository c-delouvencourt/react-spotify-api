import useApiRequest from '../ApiRequest/useApiRequest';

function useUserTop(id) {
  var url = 'https://api.spotify.com/v1/me/top/artists';

  var _useApiRequest = useApiRequest(url),
      data = _useApiRequest.data,
      loading = _useApiRequest.loading,
      error = _useApiRequest.error;

  return {
    data: data,
    loading: loading,
    error: error
  };
}

export default useUserTop;