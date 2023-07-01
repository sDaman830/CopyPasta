const apiKey = "G6mS3Y";
const conferencesUrl = "https://conference.cyclic.app/conf";
const baseUrl = "https://conference.cyclic.app";

let sponsors;
let awardsData;
let navbarData;
let contactsData;
let announcementsData;
let committeeData;
let eventDatesData;
let homeData;
let imagesData;
let locationData;
let speakersData;
let participantsData;

async function fetchConferenceId() {
    try {
        const response = await fetch(conferencesUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        const conferences = await response.json();
        const conferenceId = conferences[0].id; // Selecting the first conference ID
        console.log("Conference ID:", conferenceId);
        fetchConferenceData(conferenceId);
        fetchAwardsData(conferenceId);
        fetchNavbarData(conferenceId);
        fetchContactsData(conferenceId);
        fetchAnnouncementsData(conferenceId);
        fetchCommitteeData(conferenceId);
        fetchEventDatesData(conferenceId);
        fetchHomeData(conferenceId);
        fetchImagesData(conferenceId);
        fetchLocationData(conferenceId);
        fetchSpeakersData(conferenceId);
        fetchParticipantsData(conferenceId);
    } catch (error) {
        console.error("Error fetching conference ID:", error);
    }
}

async function fetchConferenceData(conferenceId) {
    const sponsorUrl = `${baseUrl}/sponsors/conference/${conferenceId}`;
    try {
        const response = await fetch(sponsorUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        sponsors = await response.json();
        console.log("Conference Data:", sponsors);
        // Process conference data here
    } catch (error) {
        console.error("Error fetching conference sponsors:", error);
    }
}

async function fetchAwardsData(conferenceId) {
    const awardsUrl = `${baseUrl}/awards/conference/${conferenceId}`;
    try {
        const response = await fetch(awardsUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        awardsData = await response.json();
        console.log("Awards Data:", awardsData);
    } catch (error) {
        console.error("Error fetching awards data:", error);
    }
}

async function fetchNavbarData(conferenceId) {
    const navbarUrl = `${baseUrl}/navbar/conf/${conferenceId}`;
    try {
        const response = await fetch(navbarUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        navbarData = await response.json();
        console.log("Navbar Data:", navbarData);
    } catch (error) {
        console.error("Error fetching navbar data:", error);
    }
}

async function fetchContactsData(conferenceId) {
    const contactsUrl = `${baseUrl}/contacts/${conferenceId}`;
    try {
        const response = await fetch(contactsUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        contactsData = await response.json();
        console.log("Contacts Data:", contactsData);
    } catch (error) {
        console.error("Error fetching contacts data:", error);
    }
}

async function fetchAnnouncementsData(conferenceId) {
    const announcementsUrl = `${baseUrl}/announcement/${conferenceId}`;
    try {
        const response = await fetch(announcementsUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        announcementsData = await response.json();
        console.log("Announcements Data:", announcementsData);
    } catch (error) {
        console.error("Error fetching announcements data:", error);
    }
}

async function fetchCommitteeData(conferenceId) {
    const committeeUrl = `${baseUrl}/committees/conference/${conferenceId}`;
    try {
        const response = await fetch(committeeUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        committeeData = await response.json();
        console.log("Committee Data:", committeeData);
    } catch (error) {
        console.error("Error fetching committee data:", error);
    }
}

async function fetchEventDatesData(conferenceId) {
    const eventDatesUrl = `${baseUrl}/eventDates/conference/${conferenceId}`;
    try {
        const response = await fetch(eventDatesUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        eventDatesData = await response.json();
        console.log("Event Dates Data:", eventDatesData);
    } catch (error) {
        console.error("Error fetching event dates data:", error);
    }
}

async function fetchHomeData(conferenceId) {
    const homeUrl = `${baseUrl}/home/conf/${conferenceId}`;
    try {
        const response = await fetch(homeUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        homeData = await response.json();
        console.log("Home Data:", homeData);
    } catch (error) {
        console.error("Error fetching home data:", error);
    }
}

async function fetchImagesData(conferenceId) {
    const imagesUrl = `${baseUrl}/home/images`;
    try {
        const response = await fetch(imagesUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        imagesData = await response.json();
        console.log("Images Data:", imagesData);
    } catch (error) {
        console.error("Error fetching images data:", error);
    }
}

async function fetchLocationData(conferenceId) {
    const locationUrl = `${baseUrl}/locations/${conferenceId}`;
    try {
        const response = await fetch(locationUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        locationData = await response.json();
        console.log("Location Data:", locationData);
    } catch (error) {
        console.error("Error fetching location data:", error);
    }
}

async function fetchSpeakersData(conferenceId) {
    const speakersUrl = `${baseUrl}/speakers/conference/${conferenceId}`;
    try {
        const response = await fetch(speakersUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        speakersData = await response.json();
        console.log("Speakers Data:", speakersData);
    } catch (error) {
        console.error("Error fetching speakers data:", error);
    }
}

async function fetchParticipantsData(conferenceId) {
    const participantsUrl = `${baseUrl}/participant/conf/${conferenceId}`;
    try {
        const response = await fetch(participantsUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        participantsData = await response.json();
        console.log("Participants Data:", participantsData);
    } catch (error) {
        console.error("Error fetching participants data:", error);
    }
}

fetchConferenceId();