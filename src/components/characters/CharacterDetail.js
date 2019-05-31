import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterDetail.css';

function CharacterDetail({ character }) {
  return (
    <section className={styles.CharacterDetail}>
      <h2>Name: {character.name}</h2>
      <img src={character.photoUrl}/>
      <p>Affiliation: {character.affiliation}</p>
    </section>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    affiliation: PropTypes.string
  }).isRequired
};

export default CharacterDetail;
