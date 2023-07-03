import React from "react";
import "./Card.css";

const commitieeMembers = [
  {
    id: "648daa60e0d3c5a6cb508a09",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committee",
    Subtype: null,
    Name: "Dr. karthick",
    Designation: "Professor",
    Institute: "NITJ",
    ProfileLink:
      "https://departments.nitj.ac.in/dept/ice/Faculty/6430445938bff038a7806363",
    ImgLink: "https://v1.nitj.ac.in/images/faculty/22082287471.png",
    sequence: 0,
    feature: true,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-06-18T05:21:12.376Z",
  },
  {
    id: "64996cf2f3ed1d309a727d3b",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committee",
    Subtype: null,
    Name: "Dr. karthikeyan",
    Designation: "Associate Professor",
    Institute: "NITJ",
    ProfileLink:
      "https://departments.nitj.ac.in/dept/ice/Faculty/6430445938bff038a7806363",
    ImgLink: "https://v1.nitj.ac.in/images/faculty/19121531636.jpg",
    sequence: 1,
    feature: true,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: "6499745cf3ed1d309a727d41",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committee",
    Subtype: "International Advisory Committe",
    Name: "Prof. Mukesh Singal",
    Designation: "Professor",
    Institute: "University of California at Merced",
    ProfileLink: "https://scholar.google.com/citations?user=If8AWhgAAAAJ&hl=en",
    ImgLink: "https://v1.nitj.ac.in/images/faculty/20072386548.jpg",
    sequence: 2,
    feature: true,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-05-01T00:00:00.000Z",
  },
  {
    id: "649975cff3ed1d309a727d46",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committe",
    Subtype: "International Advisory Committe",
    Name: "Prof. Rajkumar Bhuya",
    Designation: "Distinguished Professor",
    Institute: "University of Melbourne, Australia",
    ProfileLink:
      "https://findanexpert.unimelb.edu.au/profile/7930-rajkumar-buyya",
    ImgLink:
      "https://pictures.staff.unimelb.edu.au/fae/index_eis.php?id=7930&t=3&f=j",
    sequence: 3,
    feature: true,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: "649977d4f3ed1d309a727d4d",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committe",
    Subtype: "National Advisory Committe",
    Name: "Prof. K K Aggarwal",
    Designation: "Chairman",
    Institute: "NIT, Kurukshetra",
    ProfileLink: "https://www.nbaind.org/files/Brief_Biography_Chairperson.pdf",
    ImgLink:
      "https://www.cegr.in/images/national%20council/K.%20K.%20AGGARWAL.JPG",
    sequence: 5,
    feature: true,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2023-06-26T11:35:19.703Z",
  },
  {
    id: "649977d3f3ed1d309a727d4c",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committe",
    Subtype: "National Advisory Committe",
    Name: "Dr Anand Paul",
    Designation: "Associate professor",
    Institute: "Kyungpook National University, South Korea",
    ProfileLink: "http://ccmp.knu.ac.kr/contact-us.html",
    ImgLink: "http://ccmp.knu.ac.kr/images/Contact_Banner.jpeg",
    sequence: 4,
    feature: true,
    createdAt: "2021-01-01T00:00:00.000Z",
    updatedAt: "2023-06-26T11:35:19.703Z",
  },
  {
    id: "64997a01f3ed1d309a727d55",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committee",
    Subtype: "STEERING COMMITTEE",
    Name: "Prof. J N Chakraborty",
    Designation: "Professor",
    Institute: "NIT Jalandhar",
    ProfileLink: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/97",
    ImgLink: "https://v1.nitj.ac.in/images/faculty/22090484061.JPG",
    sequence: 6,
    feature: true,
    createdAt: "2022-03-31T18:30:00.000Z",
    updatedAt: "2023-03-31T18:30:00.000Z",
  },
  {
    id: "64997addf3ed1d309a727d5a",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committee",
    Subtype: "TECHNICAL PROGRAM COMMITTEE",
    Name: "Virendra Singh",
    Designation: "Professor",
    Institute: "Indian Institute of Technology Bombay",
    ProfileLink: "https://www.ee.iitb.ac.in/~viren/",
    ImgLink: "https://www.ee.iitb.ac.in/~viren/index_files/image002.png",
    sequence: 7,
    feature: true,
    createdAt: "2023-06-30T18:30:00.000Z",
    updatedAt: "2023-12-01T00:00:00.000Z",
  },
  {
    id: "64997b45f3ed1d309a727d5f",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committee",
    Subtype: "TECHNICAL PROGRAM COMMITTEE",
    Name: "Prof. Yogesh Singh",
    Designation: "Professor",
    Institute: "University of Delhi",
    ProfileLink: "https://www.du.ac.in/index.php?page=vice-chancellor",
    ImgLink: "https://www.du.ac.in/uploads/images/Prof-yogesh-singh.png",
    sequence: 8,
    feature: true,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: "64997bbff3ed1d309a727d64",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committee",
    Subtype: "FINANCE COMMITTEE",
    Name: "Dr Harsh K Verma",
    Designation: "Professor",
    Institute: "NITJ",
    ProfileLink: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/31",
    ImgLink: "https://v1.nitj.ac.in/images/faculty/16081670370.jpg",
    sequence: 9,
    feature: true,
    createdAt: "2022-10-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: "64997c91f3ed1d309a727d69",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committee",
    Subtype: "FINANCE COMMITTEE",
    Name: "Dr Rajneesh Rani",
    Designation: "Associate Professor",
    Institute: "NITJ",
    ProfileLink: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/34",
    ImgLink: "https://v1.nitj.ac.in/images/faculty/22091835606.jpg",
    sequence: 10,
    feature: true,
    createdAt: "2022-11-01T00:00:00.000Z",
    updatedAt: "2023-01-31T18:30:00.000Z",
  },
  {
    id: "64997d17f3ed1d309a727d6f",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committee",
    Subtype: "PUBLICATIONS COMMITTEE",
    Name: "Dr Lalatendu Behera",
    Designation: "Assistant Professor",
    Institute: "NITJ",
    ProfileLink: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/210",
    ImgLink: "https://v1.nitj.ac.in/images/faculty/20021596465.jpg",
    sequence: 11,
    feature: true,
    createdAt: "2022-05-31T18:30:00.000Z",
    updatedAt: "2023-02-28T18:30:00.000Z",
  },
  {
    id: "64997e0ef3ed1d309a727d74",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committee",
    Subtype: "PUBLICATIONS COMMITTEE",
    Name: "Dr Geeta sikka",
    Designation: "Associate Professor",
    Institute: "NITD",
    ProfileLink: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/30",
    ImgLink: "https://v1.nitj.ac.in/images/faculty/20071962443.jpg",
    sequence: 12,
    feature: true,
    createdAt: "2022-04-30T18:30:00.000Z",
    updatedAt: "2023-03-31T18:30:00.000Z",
  },
  {
    id: "64997e11f3ed1d309a727d75",
    ConfId: "647f315f62cdb3a26174fc38",
    Type: "Organising Committee",
    Subtype: "PUBLICITY COMMITTEE",
    Name: "Dr Kunwar Pal",
    Designation: "Assistant Professor",
    Institute: "NITJ",
    ProfileLink: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/209",
    ImgLink: "https://v1.nitj.ac.in/images/faculty/20010385419.JPG",
    sequence: 13,
    feature: true,
    createdAt: "2022-01-31T18:30:00.000Z",
    updatedAt: "2022-12-31T18:30:00.000Z",
  },
];


export default function Committee() {
  return (
    <div className="container">
      {commitieeMembers?.map((member, i) => (
        <CommitieeCard
          name={member.Name}
          imageLink={member.ImgLink}
          Designation={member.Designation}
          Institute={member.Institute}
          ProfileLink={member.ProfileLink}
          key={i}
        />
      ))}
    </div>
  );
}

function CommitieeCard({
  name,
  imageLink,
  Designation,
  Institute,
  ProfileLink,
}) {
  return (
    <div className="commitiee-card card">
      <div className="card-image">
        <img
          className="committie-speaker-card-images"
          src={imageLink}
          alt={name}
        />
      </div>
      <div>
        <h2 className="commitiee-title">{name}</h2>
        <div className="card-content">
          <p>{`${Designation} (${Institute})`}</p>
          <a style={{ color: "#364fc7" }} href={ProfileLink}>
            Profile Link
          </a>
        </div>
      </div>
    </div>
  );
}
