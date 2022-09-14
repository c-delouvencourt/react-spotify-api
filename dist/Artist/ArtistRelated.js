import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';
var BASE_URL = 'https://api.spotify.com/v1/artists';

function ArtistRelated(props) {
  var url = BASE_URL + "/".concat(props.id, "/related-artists");
  var options = {};
  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, props.children);
}

ArtistRelated.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};
export default ArtistRelated;