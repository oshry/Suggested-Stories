
export const REQUEST_APPS = 'REQUEST_APPS'
export const RECEIVE_APPS = 'RECEIVE_APPS'


function requestApps() {
  return {
    type: REQUEST_APPS
  }
}

function receiveApps(json) {
  return {
    type: RECEIVE_APPS,
    apps: json
  }
}

function fetchApps() {
  return dispatch => {
    dispatch(requestApps())
    return fetch(`https://api.bllush.com/sandbox/get-stories-details.json`)
      .then(response => {
        if (response.ok) {
          let temp = response;
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }})
        .then(json => json.data.stories)
      .then(json => dispatch(receiveApps(json)))
      .catch(error => this.setState({ error, isLoading: false }));
  }
}

function shouldFetchApps(state) {
  const apps = state.apps
  if (apps.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchAppsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchApps(getState())) {
      return dispatch(fetchApps())
    }
  }
}
