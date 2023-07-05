import { baseUrl, conferencesUrl, apiKey, confId } from '../../api'


export function getimages() {
  return fetch(`${baseUrl}/images/${confId}`, {
      headers: {
        'Authorization': `${apiKey}`,
      }
    }).then(data => data.json())
}

export function getannounce() {
  return fetch(`${baseUrl}/announcement`, {
    headers: {
      'Authorization': `${apiKey}`,
    },
  }).then(data => data.json());
}

export function getevents() {
  return fetch(`${baseUrl}/eventDates/conference/${confId}`, {
    headers: {
      'Authorization': `${apiKey}`,
    },
  }).then(data => data.json());
}

export function getspeakers() {
  return fetch(`${baseUrl}/speakers`, {
    headers: {
      'Authorization': `${apiKey}`,
    },
  }).then(data => data.json());
}

export function getcommittee() {
  return fetch(`${baseUrl}/committees/conference/${confId}`, {
    headers: {
      'Authorization': `${apiKey}`,
    },
  }).then(data => data.json());
}

export function getawards() {
  return fetch(`${baseUrl}/awards`, {
    headers: {
      'Authorization': `${apiKey}`,
    },
  }).then(data => data.json());
}

export function getsponsors() {
  return fetch(`${baseUrl}/sponsors`, {
    headers: {
      'Authorization': `${apiKey}`,
    },
  }).then(data => data.json()).then();
}

export function getcontacts() {
  return fetch(`${baseUrl}/contacts/${confId}`, {
    headers: {
      'Authorization': `${apiKey}`,
    },
  }).then(data => data.json());
}

export function getlatitudeandlocation() {
  return fetch(`${baseUrl}/location/${confId}`, {
    headers: {
      'Authorization': `${apiKey}`,
    },
  })
    .then(data => data.json())
    .then(({ latitude, longitude }) => [latitude, longitude]);
}
