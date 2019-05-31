import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ character }) {
  return (
  <>
  <Link to={`/character/${character.id}`}>
    <p>{character.name}</p>
    <img src={character.photoUrl}/>
  </Link>
  </>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string
  }).isRequired
};

export default Character;
