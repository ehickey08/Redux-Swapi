import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {fetchCharacters} from "../actions"
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      return (<div className = "characterList" style = {{color: "rgba(134, 45, 23, 0.8)"}}>"FETCHING"</div>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.isFetching
})

const mapDispatchToProps = {
    fetchCharacters
}

CharacterListView.defaultProps = {
    characters: [{name: "Fetching"}]
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps, mapDispatchToProps
)(CharacterListView);
