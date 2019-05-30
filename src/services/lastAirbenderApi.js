export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Could not fetch characters.';
      return json;
    })
    .then(json => json.map(character => ({
      id: character._id,
      name: character.name,
      photoUrl: character.photoUrl || '../../assets/default-img.png'
    })));
};
