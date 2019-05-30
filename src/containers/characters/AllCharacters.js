import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Characters from '../../components/characters/Characters';
import { getCharacters, getCharactersLoading, getCharactersError } from '../../selectors/charactersSelectors';
import { fetchCharacters } from '../../actions/charactersActions';
import { connect } from 'react-redux';

class AllCharacters extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { characters, loading, error } = this.props;
    if(loading) return <h1>Characters Loading...</h1>;
    return <Characters characters={characters}/>;
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state),
  error: getCharactersError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
