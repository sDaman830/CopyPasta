import React from "react";
import { useState } from "react";
import "./Card.css";

const speakers = [

  {
    "id": "648e84d715868a27f2d48410",
    "ConfId": "647f315f62cdb3a26174fc38",
    "Name": "Dr Binod Kumar Kanaujia",
    "Designation": "Director",
    "Institute": "NITJ",
    "ProfileLink": "https://departments.nitj.ac.in/dept/ece/Faculty/6430446f38bff038a7808ab6",
    "ImgLink": "https://v1.nitj.ac.in/images/faculty/22030775924.jpg",
    "TalkType": "Key note session",
    "TalkTitle": "Introduction to Human Machine Interaction",
    "Abstract": "Human-Machine Interaction (HMI) lies at the heart of our ever-evolving technological landscape, where seamless collaboration between humans and machines has become essential. This interdisciplinary field explores the design, development, and evaluation of intuitive interfaces, intelligent systems, and adaptive technologies that enable effective communication and interaction between humans and machines. By understanding human cognition, behavior, and preferences, HMI aims to enhance user experiences, optimize task performance, and empower individuals to interact with machines effortlessly. This abstract delves into the fundamental principles, emerging trends, and challenges within the realm of HMI, highlighting its significance in shaping the future of technology and its impact on various domains such as healthcare, robotics, virtual reality, and smart environments. Through a deep exploration of the human-machine interface, we uncover the transformative potential of HMI and its profound implications for the advancement of society.",
    "Bio": "Speaker Bio: Dr. Emily Patel  Dr. Emily Patel is a distinguished expert in the field of artificial intelligence and human-robot interaction. With a Ph.D. in Computer Science and a passion for advancing the frontiers of human-machine collaboration, Dr. Patel has dedicated her career to exploring innovative ways to bridge the gap between humans and intelligent systems.  As a recognized thought leader, Dr. Patel has authored numerous publications on topics such as natural language processing, affective computing, and social robotics. Her groundbreaking research has garnered international acclaim and has been instrumental in shaping the field of human-robot interaction.  Dr. Patel's expertise extends beyond academia, as she actively contributes to industry collaborations and consults with leading technology companies on user-centered design and human-centric AI solutions. Her insights and guidance have played a vital role in the development of interactive technologies that prioritize human needs and preferences.  An engaging and dynamic speaker, Dr. Patel has delivered keynote addresses and presented her research at renowned conferences and events worldwide. Her ability to articulate complex concepts in a relatable manner has made her a sought-after speaker, inspiring audiences with her vision of a future where humans and machines collaborate seamlessly.  With a firm belief in the transformative power of interdisciplinary collaboration, Dr. Patel actively fosters connections between academia, industry, and society. She is dedicated to cultivating an inclusive research community, mentoring emerging researchers, and promoting diversity in technology.  Dr. Emily Patel's contributions to the field of human-machine interaction have earned her accolades and recognition, including the prestigious ACM Human-Computer Interaction Innovator Award. Her tireless efforts to advance the understanding and application of human-centric AI continue to drive meaningful progress in the field and inspire future generations of researchers.  In her current role as Professor of Human-Machine Interaction at a leading university, Dr. Patel continues to push the boundaries of knowledge, leading research initiatives, and shaping the next generation of human-machine interfaces. Through her work, she seeks to empower individuals and organizations to harness the full potential of intelligent systems, ultimately driving positive societal impact.",
    "sequence": 0,
    "feature": true,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-06-18T04:15:17.265Z"
  },
  {
    "id": "649982d4f3ed1d309a727d7b",
    "ConfId": "647f315f62cdb3a26174fc38",
    "Name": "Prof Bimal Kumar Roy",
    "Designation": "Professor",
    "Institute": "ISI Kolkata",
    "ProfileLink": "https://www.isical.ac.in/~bimal/",
    "ImgLink": "https://www.isical.ac.in/~bimal/images/avatar.jpg",
    "TalkType": "Workshop",
    "TalkTitle": "Internet services is a complex economic interaction between three key actors: Content providers (CPs), consumers, and Internet service providers. Quality of the user experience in networked applications is, traditionally considered the responsibility of the Internet service provider (ISP). The ISPs though face the triple whammy of increasing demands on network resources, shorter technology lifecycles resulting in more frequent infrastructure investments, and a very cost sensitive customer base. Smart pricing schemes can help extract some of the consumer surplus. Net neutrality and other regulations are forcing ISPs to find innovative ways of extracting the CP side surplus.",
    "Abstract": "Internet services is a complex economic interaction between three key actors: Content providers (CPs), consumers, and Internet service providers. Quality of the user experience in networked applications is, traditionally considered the responsibility of the Internet service provider (ISP). The ISPs though face the triple whammy of increasing demands on network resources, shorter technology lifecycles resulting in more frequent infrastructure investments, and a very cost sensitive customer base. Smart pricing schemes can help extract some of the consumer surplus. Net neutrality and other regulations are forcing ISPs to find innovative ways of extracting the CP side surplus.  In this talk we will explore some of the ways in which the ISPs are able to provide improved user experience and have CPs pay for their investment in the infrastructure. Using microeconomic models we will then analyse the effect on the CP market structure.",
    "Bio": "D. Manjunath has been with the Electrical Engineering Department of IIT Bombay since July 1998. He has previously worked in the Corporate R \\& D Center of GE in Scehenectady NY (1990), CIS Department of the University of Delaware (1992–93), CS Department, University of Toronto (1993–94) and the EE Department of IIT Kanpur (1994–98). At IIT Bombay, he was Head of the Computer Centre during 2011-15. His research interests are in the general areas of communication networks and performance analysis. Some of his recent research has concentrated on economics of the Internet and learning models for recommendation systems. He is a recipient of the best paper award at ACM SIGMETRICS 2010. He was an associate editor of IEEE Transactions on Networking, Queueing Systems: Theory and Applications, and of Sadhana: The Proceedings of the Indian Academy of Sciences and is currently an editor of Current Science. He was TPC chair for COMSNETS 2011 and NCC 2015 and general chair for ACM MobiHoc 2013, COMSNETS 2015, and ACM SIGMETRICS/IFIP PERFORMANCE 2022. He is a coauthor of two textbooks, Communication Networking: An Analytical Approach (May 2004) and Wireless Networking (Apr 2008), both of which are published by Morgan-Kaufman Publishers.",
    "sequence": 2,
    "feature": true,
    "createdAt": "2022-01-01T00:00:00.000Z",
    "updatedAt": "2023-06-26T12:28:32.263Z"
  },
  {
    "id": "649982daf3ed1d309a727d7c",
    "ConfId": "647f315f62cdb3a26174fc38",
    "Name": "Professor Krishna Moorthy Sivalingam",
    "Designation": "Professor",
    "Institute": "IIT Madaras",
    "ProfileLink": "http://www.cse.iitm.ac.in/~skrishnam/",
    "ImgLink": "https://ants2022.ieee-ants.org/wp-content/uploads/sites/452/2022/10/KS-s2.jpg",
    "TalkType": "Key note session",
    "TalkTitle": "On Programmable Data Plane Network Switches and their Applications",
    "Abstract": "Traditional network switches and routers are configurable, but not programmable. They can only perform a small set of hard-wired and specific network layer activities.  The advent of programmable data planes (PDP), realized using hardware switches, and the Programming Protocol-independent Packet Processors (P4) language enable a switch to be customizable and field-programmable.  In this talk, we will briefly the PDP and P4 concepts including the switch architectures and high-level language constructs. We will then describe how these can be used to realize next generation network switches/routers and advanced network applications.",
    "Bio": "Krishna Sivalingam is an Institute Chair Professor in IIT Madras; and earlier, a faculty member at University of Maryland, Baltimore County; Washington State University; and University of North Carolina Greensboro. He received his Ph.D. and M.S.  in Computer Science from SUNY Buffalo; B.E.  degree in Computer Science and Engineering from Anna University’s College of Engineering Guindy, Chennai.  He has served as Editor-in-Chief of Springer Photonic Network Communications Journal and EAI Transactions on Future Internet. He is a Fellow of IEEE, Fellow of INAE India and ACM Distinguished Scientist.",
    "sequence": 3,
    "feature": true,
    "createdAt": "2022-07-31T18:30:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  },
  {
    "id": "649982dcf3ed1d309a727d7d",
    "ConfId": "647f315f62cdb3a26174fc38",
    "Name": "Professor Biswanath Mukherjee",
    "Designation": "Professor",
    "Institute": "Distinguished Professor Emeritus University of California, Davis",
    "ProfileLink": "https://faculty.engineering.ucdavis.edu/mukherjee/",
    "ImgLink": "https://faculty.engineering.ucdavis.edu/mukherjee/wp-content/uploads/sites/176/2013/03/mukherjee180.jpg",
    "TalkType": "Tutorial",
    "TalkTitle": "On Programmable Data Plane Network Switches",
    "Abstract": "Besides being a respected computer scientist, he also served on numerous editorial boards and was General Co-Chair of the IEEE/OSA Optical Fiber Communications (OFC) Conference 2011, Technical Program Co-Chair of OFC’2009, and Technical Program Chair of the IEEE INFOCOM’96 conference. He is Editor of Springer’s Optical Networks Book Series. He has served on eight journal editorial boards, most notably IEEE/ACM Transactions on Networking and IEEE Network. In addition, he has guest-edited Special Issues of Proceedings of the IEEE, IEEE/OSA Journal of Lightwave Technology, IEEE Journal on Selected Areas in Communications, and IEEE Communications. He was the first elected chairman of Communication Society’s Optical Networking Technical Committee. He was a founding member of the Board of Directors (2002-2007) of IPLocks, Inc., a Silicon Valley startup company, acquired by Fortinet, Inc. He also served as a founding member of the Board of Directors (2015-2018) of Optella, Inc., an optical components startup, acquired by Cosemi, Inc. To date, he has served on the Technical Advisory Board for over a dozen startup companies, including Teknovus (acquired by Broadcom), Intelligent Fiber Optic Systems, and LookAhead Decisions. He is Founder and President of Ennetix, Inc., a startup company incubated at UC Davis and developing AI-powered, cloud-based, application-centric network performance analytics and management software for improved user experience.",
    "Bio": "Mukherjee obtained his bachelor’s degree in technology with honors from Indian Institute of Technology Kharagpur in 1980 and got his Ph.D. from University of Washington in 1987. The same year (1987) he joined the Department of Computer Science at University of California, Davis where he became a Professor in 1995, and Distinguished Professor in 2011. From 1997 to 2000 he served as chair of the Computer Science Department. During 1995–2000, he held the Child Family Professorship at UC Davis. To date, he has supervised 80 PhDs to completion and currently mentors 6 advisees, mainly PhD students.",
    "sequence": 4,
    "feature": true,
    "createdAt": "2022-01-01T00:00:00.000Z",
    "updatedAt": "2023-03-31T18:30:00.000Z"
  },
  {
    "id": "649982d2f3ed1d309a727d7a",
    "ConfId": "647f315f62cdb3a26174fc38",
    "Name": "Prof. K. K. Aggarwal",
    "Designation": "Chairman",
    "Institute": "NBA",
    "ProfileLink": "https://www.nbaind.org/files/Brief_Biography_Chairperson.pdf",
    "ImgLink": "https://iiti.ac.in/people/~narendra/images/narendra-chaudhari.jpg",
    "TalkType": "Key note session",
    "TalkTitle": "Discussion on ML",
    "Abstract": "Integer et finibus sapien, a sodales nisi. Duis ullamcorper odio sit amet odio facilisis, ut semper ante suscipit. Proin faucibus sit amet nisi ut posuere. Morbi id tincidunt elit. Cras tellus nunc, fringilla sed porttitor vitae, vehicula sit amet mauris. Curabitur ut tempor nisl. Donec eu nulla at dolor pharetra ultrices. Nullam at sollicitudin nibh, id efficitur odio. Sed nec scelerisque velit, non elementum erat. Sed nisl mi, vehicula ac libero ac, imperdiet consectetur urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "Bio": "Proin tristique ipsum et massa pharetra volutpat. Donec vel faucibus quam. Sed dictum fringilla bibendum. Suspendisse porttitor nibh commodo nisi tempus, eget finibus justo mollis. Vestibulum eu lacus vel enim dapibus blandit. Phasellus cursus purus nec neque congue, eu consequat sapien semper. Suspendisse potenti. Morbi ac sapien in velit tempor pellentesque. Morbi ac turpis laoreet sem maximus commodo eu ac lorem. Phasellus lobortis ac tortor quis varius. Fusce fringilla nibh id justo rutrum elementum. Nullam facilisis neque nec urna bibendum, eget finibus lacus molestie.",
    "sequence": 1,
    "feature": true,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-03-31T18:30:00.000Z"
  },
  {
    "id": "64998440e2e763d3cdbb86e6",
    "ConfId": "647f315f62cdb3a26174fc38",
    "Name": "Professor Vimal Bhatia",
    "Designation": "Professor",
    "Institute": "IIT Indore",
    "ProfileLink": "https://iiti.ac.in/people/~vbhatia/ukieri/",
    "ImgLink": "https://iiti.irins.org/assets/profile_images/49416.jpg",
    "TalkType": "Tutorial",
    "TalkTitle": "Artificial Intelligence and its applications in beyond 5G networks",
    "Abstract": "The tutorial will be covered in two parts and introduce attendees to the applications and solutions of Artificial Intelligence/Machine and Deep Learning for the next generation communication systems. In the first part, we will begin with a brief introduction and history of artificial intelligence, machine learning and the emergence of deep learning. There would be a brief recap of various new algorithms with use cases. We will discuss autoencoders, convolutional neural networks, and recurrent neural networks, reinforcement learning, federated learning and others. In the second part, we will briefly look at the recent research results and applicability of machine and deep learning for beyond 5G communication networks for inclusivity for urban and rural areas.  ",
    "Bio": "Vimal Bhatia (SM12, FIETE, FOSI) is currently working as a Professor with the Indian Institute of Technology (IIT) Indore, India, and is an adjunct faculty at IIT Delhi and IIIT Delhi, India. He received Ph.D. degree from Institute for Digital Communications with The University of Edinburgh, Edinburgh, U.K., in 2005. During Ph.D. he also received the IEE fellowship for collaborative research at the  Department of Systems and Computer Engineering, Carleton University, Canada, and is Young Faculty Research Fellow from MeitY, Govt of India. He is also a recepient of Prof SVC Aiya Memorial Award (2019). He has worked with various IT companies for over 11 years both in India and the UK. He is a PI/co-PI/coordinator for external projects with funding of over USD 20 million from MeitY, DST, UKIERI, MoE, AKA, IUSSTF and KPMG. He has more than 300 peer-reviewed publications, and has filed 13 patents (with 5 granted). He is in the Top 2% Scientist List published by Stanford University. He has supervised 18 defended/submitted PhD thesis. His research interests are in the broader areas of communications, non-Gaussian non-parametric signal processing, machine/deep learning with applications to communications and photonics. He is a reviewer for IEEE, Elsevier, Wiley, Springer, and IET. He is currently Senior Member of IEEE, Fellow IETE and certified SCRUM Master. He was also the General Co-Chair for IEEE ANTS 2018, and General Vice-Chair for IEEE ANTS 2017. He has served as founder head of Center for Innovation and Entrepreneurship, Associate Dean R&D and Dean, Academic Affairs. He has delivered many talks, tutorials and conducted faculty development programs for the World Bank’s NPIU TEQIP-III and invited talk at WWRF46-Paris. He is currently Associate Editor for IETE Technical Review, Frontiers in Communications and Networks, Frontiers in Signal Processing, and IEEE Wireless Communications Letters.",
    "sequence": 5,
    "feature": true,
    "createdAt": "2022-03-31T18:30:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }

];

export default function SpeakerCard() {
  const [open, isSetOpen] = useState(0);

  function handleClick(id) {
    isSetOpen(id);
  }

  function handleCloseModal() {
    isSetOpen(0);
  }
  return (
    <div className="Speakercontainer">
      {speakers.length &&
        speakers.map((_, i) => (
          <SpeakerInstance>
            <CardDetails
              handleClick={handleClick}
              id={i + 1}
              person={speakers[i]}
            />
            <Modal
              open={open}
              handleCloseModal={handleCloseModal}
              id={i + 1}
              person={speakers[i]}
            />
          </SpeakerInstance>
        ))}
    </div>
  );
}

function SpeakerInstance({ children }) {
  return <>{children}</>;
}

function CardDetails({ handleClick, person, id }) {
  return (
    <div className="speaker-card card">
      <div className="speaker-card-image">
        <img className="committie-speaker-card-images"
          src={person.ImgLink}
          alt={person.Name}
        />
      </div>
      <h2 className="speaker-name">{person.Name}</h2>
      <div className="speaker-content">
        <p>
          {person.Designation}
          <span> ({person.Institute})</span>
        </p>
        <button className="btn" onClick={() => handleClick(id)}>
          Know More
        </button>
      </div>
    </div>
  );
}

function Modal({ open, handleCloseModal, person, id }) {
  return (
    <>
      {open === id && (
        <div className={`modal `}>
          <button class="close-modal" onClick={() => handleCloseModal()}>
            &times;
          </button>

          <div className="speaker-card-image ">
            <img className="committie-speaker-card-images" src={person.ImgLink} alt={person.Name} />
          </div>
          <h2 className="speaker-name">{person.Name}</h2>
          <p>
            {person.Designation}
            <span> ({person.Institute})</span>
          </p>
          <PersonDetails person={person} />
        </div>
      )}
    </>
  );
}

function PersonDetails({ person }) {
  return (
    <div className="modal-speaker-content">
      <p className="modal-titles">
        Profile Link : <a href={person.ImgLink}>{person.Name}</a>
      </p>
      <p className="modal-titles">
        Tittle<span> : {person.TalkTitle}</span>
      </p>
      <p className="modal-titles">
        Abstract : <span>{person.Abstract}</span>
      </p>
      <p className="modal-titles">
        Bio : <span>{person.Bio}</span>
      </p>
    </div>
  );
}
