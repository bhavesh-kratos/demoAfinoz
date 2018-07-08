import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGitData, addSorters, addForkFilter, addLanguageFilter, clearFilters } from '../actions/routines';
import { Icon, Input } from 'semantic-ui-react';
import RepoList from './RepoList';
import Filters from './Filters';
import { getFilteredData, getAllLanguages } from '../selectors/filterSelector';

class ScreenList extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', data: props.data };
        this.handleChange = this.handleChange.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    handleChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleChange(e);
        }
    }

    fetchData() {
        this.props.clearFilters();
        this.props.fetchGitData(this.state.username);
    }

    render() {
        let { username } = this.state;
        const { data, addForkFilter, addLanguageFilter, addSorters, clearFilters, allLanguages } = this.props;
        return (
            <div className="App">
                <div className="ui action input">
                    <input type="text" placeholder="Search..." className="input-margin" value={username} onKeyPress={this._handleKeyPress} onChange={this.handleChange} />
                    <button className="ui icon button" onClick={() => this.fetchData()}>
                        <i className="search icon" />
                    </button>
                </div>
                <br />
                {data && <Filters  {...{ clearFilters, addForkFilter, addLanguageFilter, addSorters, allLanguages }} />}
                <br/>
                {data && <RepoList repos={data} />}
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        data: getFilteredData(state),
        allLanguages: getAllLanguages(state),
        error: state.gitData.error,
        loading: state.gitData.loading
    };
}

export default connect(mapStateToProps, { fetchGitData, addSorters, addForkFilter, addLanguageFilter, clearFilters })(ScreenList);

