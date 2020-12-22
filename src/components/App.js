/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';

const pushState = (object, url) =>
    window.history.pushState(object, '', url);

class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        );

        // look up the contest
        this.setState({
            pageHeader: this.state.contests[contestId].contestName,
            currentContestId: contestId
        });
    };

    currentContent() {
        if (this.state.currentContestId) {
            return <Contest {...this.state.contests[this.state.currentContestId]} />;
        }

        return <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} />;
    }

    render() {
        return (
            <div className='App'>
                <Header message={this.state.pageHeader} />
                {this.currentContent()}

            </div>
        );
    }
}

export default App;