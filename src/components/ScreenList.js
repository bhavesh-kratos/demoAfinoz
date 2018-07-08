import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGitData, addSorters, addForkFilter, addLanguageFilter, clearFilters } from '../actions/routines';
import { Icon, Input } from 'semantic-ui-react';
import RepoList from './RepoList';
import Filters from './Filters';
import { getFilteredData } from '../selectors/filterSelector';

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
        this.props.fetchGitData(this.state.username);
    }

    render() {
        let { username } = this.state;
        const { data, addForkFilter, addLanguageFilter, addSorters, clearFilter } = this.props;
        return (
            <div className="App">
                <div className="ui action input">
                    <input type="text" placeholder="Search..." value={username} onKeyPress={this._handleKeyPress} onChange={this.handleChange} />
                    <button className="ui icon button" onClick={() => this.fetchData()}>
                        <i className="search icon" />
                    </button>
                </div>
                {data && <Filters clearFilters={this.props.clearFilters} {...{ addForkFilter, addLanguageFilter, addSorters }} />}
                {data && <RepoList repos={data} />}
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        data: getFilteredData(state),
        error: state.gitData.error,
        loading: state.gitData.loading
    };
}

export default connect(mapStateToProps, { fetchGitData, addSorters, addForkFilter, addLanguageFilter, clearFilters })(ScreenList);

