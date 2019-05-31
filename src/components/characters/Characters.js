import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './Characters.css';

function Characters({ characters }) {
  const characterList = characters.map(character => {
    return <li key={character.id}>
      <Character character={character}/>
    </li>;
  });
  return (
    <ul className={styles.Characters}>
      {characterList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    affiliation: PropTypes.string
  })).isRequired
};

export default Characters;
