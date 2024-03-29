import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import App from './src/components/App';


const getApiUrl = contestId => {
    if (contestId) {
        return `${config.serverUrl}/api/contests/${contestId}`;
    }
    return `${config.serverUrl}/api/contests`;
};

const getInitialData = (contestId, apiData) => {
    if (contestId) {
        return {
            currentContestId: apiData._id,
            contests : {
                [apiData._id]: apiData
            }
        };
    }
    return {
        contests: apiData.contests
    };
};

const serverRender = (contestId) =>
    axios.get(getApiUrl(contestId))
        .then(res => {
            const initialData = getInitialData(contestId, res.data);
            return {
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialData={initialData} />
                ),
                initialData
            };
        });

export default serverRender;