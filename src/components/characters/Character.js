import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
  <>
  <p>{character.name}</p>
  <img src={character.photoUrl}/>
  </>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
