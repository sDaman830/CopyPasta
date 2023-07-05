/*
const apiKey = "G6mS3Y";
const conferencesUrl = "https://conference.cyclic.app/conf";
const baseUrl = "https://conference.cyclic.app";

let titleSponsors;
let platinumSponsors;
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
        fetchSponsorsData(conferenceId);
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

async function fetchSponsorsData(conferenceId) {
    const sponsorUrl = `${baseUrl}/sponsors/conference/${conferenceId}`;
    try {
        const response = await fetch(sponsorUrl, {
            headers: {
                Authorization: apiKey,
            },
        });
        const sponsorsData = await response.json();
        console.log("Sponsors Data:", sponsorsData);
        platinumSponsors = sponsorsData.filter(sponsor => sponsor.type === 'Platinum Sponsors');
        console.log("Platinum Sponsors:", platinumSponsors);
        titleSponsors = sponsorsData.filter(sponsor => sponsor.type === 'Title Sponsors');
        console.log("Title Sponsors:", titleSponsors);
        // Process sponsors data here
    } catch (error) {
        console.error("Error fetching sponsors data:", error);
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
        // Process navbar data here
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
        // Process contacts data here
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
        // Process announcements data here
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
        // Process committee data here
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
        // Process event dates data here
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
        // Process home data here
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
        // Process images data here
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
        // Process location data here
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
        // Process speakers data here
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
        // Process participants data here
    } catch (error) {
        console.error("Error fetching participants data:", error);
    }
}

fetchConferenceId();*/
