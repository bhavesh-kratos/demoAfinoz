import React from 'react';
import { connect } from 'react-redux';
import { toDate } from '../lib/helpers';

const RepoCard = ({ name, html_url, created_at, updated_at, fork }) => {
    return (
        <div className="ui raised card card-width">
            <div className="content">
                <div className="header">{name}</div>
                <div className="extra content">
                    <span>Created At</span>
                    {toDate(created_at)}
                    <br />
                    <span>Updated At</span>
                    {toDate(updated_at)}
                </div>
                <p>
                    Url: &nbsp;<a href={html_url}>{html_url}</a>
                    <br />
                    Forked: &nbsp;{fork ? 'Yes' : 'No'}
                </p>
            </div>
        </div>
    );
}


const RepoList = ({ repos }) => {

    return (
        <React.Fragment>
            {
                repos.map(repo => {
                    let { id, name, html_url, created_at, updated_at, fork } = repo;
                    return <RepoCard key={id} {...{ name, html_url, created_at, updated_at, fork }} />
                })
            }
        </React.Fragment>
    );

};

export default RepoList;