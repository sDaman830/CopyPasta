import React from 'react';
import './SponsorHome.css';
import { Link } from 'react-router-dom';
import { getsponsors } from '../apireq/getrequests';

const SponsorHome = () => {
    const [titleSponsors, setTitleSponsors] = React.useState([]);

    React.useEffect(() => {
        getsponsors().then(sponsorsData => {
            const filteredTitleSponsors = sponsorsData.filter(
                sponsor => sponsor.type === 'Title Sponsors'
            );
            setTitleSponsors(filteredTitleSponsors);
        });
    }, []);

    return (
        <div className='majboorSponHome'>
            <h1>Our Sponsors</h1>
            <div className='containersponsorHome'>
                {titleSponsors.map((ldata, id) => {
                    return (
                        <div className='sponimg' key={ldata.id}>
                            <img className='Sponimage' src={ldata.logo} alt='sponsors' />
                        </div>
                    );
                })}
            </div>
            <br></br>
            <Link to='/awards'>
                <button className='sponHome'>Check out our Sponsors</button>
            </Link>
        </div>
    );
};

export default SponsorHome;
