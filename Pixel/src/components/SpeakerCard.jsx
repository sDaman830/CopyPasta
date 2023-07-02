import React from "react";
import { useState } from "react";
import "./Card.css";

const speakers = [
  // Existing speaker objects...
  {
    id: "64dcd5f771e9015b29c7c0fe",
    ConfId: "647f315f62cdb3a26174fc38",
    Name: "Dr. Sarah Johnson",
    Designation: "Senior Research Scientist",
    Institute: "MIT",
    ProfileLink: "https://www.mit.edu/people/sjohnson",
    ImgLink: "https://www.mit.edu/images/sjohnson.png",
    TalkType: "Workshop",
    TalkTitle: "Practical Applications of Quantum Computing",
    Abstract:
      "Quantum computing has emerged as a powerful paradigm that promises to revolutionize various fields, including cryptography, optimization, and simulation. Unlike classical computers that use bits for information storage and manipulation, quantum computers leverage quantum bits, or qubits, to perform computations in an entirely different way. This workshop aims to provide a practical understanding of quantum computing and its applications. We will explore the fundamental concepts of qubits, quantum gates, and quantum algorithms, such as Grover's search algorithm and Shor's factoring algorithm. Additionally, we will discuss the current state of quantum hardware, including superconducting qubits and trapped-ion qubits. Through hands-on exercises and demonstrations, participants will gain insights into programming quantum computers using popular frameworks, such as Qiskit and Cirq. Join us to unlock the potential of quantum computing and discover how it can revolutionize problem-solving in diverse domains.",
    Bio: "Speaker Bio: Dr. Sarah Johnson Dr. Sarah Johnson is a senior research scientist at MIT's Quantum Computing Laboratory. With a Ph.D. in Physics and expertise in quantum information science, Dr. Johnson has been at the forefront of quantum computing research and development. Her work focuses on developing novel quantum algorithms and exploring their practical applications in fields like cryptography and optimization. Dr. Johnson has published numerous research papers in leading journals and has collaborated with industry partners to accelerate the adoption of quantum computing technologies. She is also passionate about science communication and has delivered engaging talks and workshops on quantum computing to diverse audiences. Through her expertise and experience, Dr. Johnson aims to make quantum computing accessible and drive innovation in this emerging field.",
    sequence: 2,
    sessionTime: "2023-06-08T13:30:00",
  },
  {
    id: "64dcd5f771e9015b29c7c0ff",
    ConfId: "647f315f62cdb3a26174fc38",
    Name: "Dr. Lisa Hernandez",
    Designation: "Data Scientist",
    Institute: "Stanford University",
    ProfileLink: "https://www.stanford.edu/people/lhernandez",
    ImgLink: "https://www.stanford.edu/images/lhernandez.png",
    TalkType: "Panel Discussion",
    TalkTitle: "Ethical Considerations in AI Development",
    Abstract:
      "The rapid advancement of artificial intelligence (AI) technologies brings both immense opportunities and significant challenges. As AI becomes increasingly integrated into our lives, it is crucial to address the ethical considerations surrounding its development and deployment. This panel discussion aims to explore various dimensions of AI ethics and foster a dialogue among experts from academia, industry, and policy-making bodies. We will delve into topics such as algorithmic bias, privacy concerns, transparency, and accountability in AI systems. The panelists will share their perspectives on ethical frameworks, guidelines, and best practices for responsible AI development. Join us for an insightful discussion and gain a comprehensive understanding of the ethical considerations that shape the future of AI.",
    Bio: "Speaker Bio: Dr. Lisa Hernandez Dr. Lisa Hernandez is a data scientist and researcher at Stanford University's AI Ethics Center. With a background in computer science and a passion for ethical AI development, Dr. Hernandez focuses on understanding the societal impacts of AI and advocating for responsible AI practices. She has conducted extensive research on algorithmic bias, fairness, and accountability in AI systems and has collaborated with interdisciplinary teams to develop ethical guidelines for AI deployment. Dr. Hernandez is a sought-after speaker and has delivered keynote speeches and participated in panel discussions at various conferences and events. Through her work, she aims to bridge the gap between technological advancements and ethical considerations, ensuring that AI benefits society while minimizing potential harm.",
    sequence: 3,
    sessionTime: "2023-06-08T15:00:00",
  },
  // More speaker objects...
  {
    id: "64dcd5f771e9015b29c7c100",
    ConfId: "647f315f62cdb3a26174fc38",
    Name: "Dr. John Davis",
    Designation: "Chief Scientist",
    Institute: "Google Research",
    ProfileLink: "https://www.google.com/people/jdavis",
    ImgLink: "https://www.google.com/images/jdavis.png",
    TalkType: "Keynote",
    TalkTitle: "The Future of Artificial Intelligence",
    Abstract:
      "Artificial intelligence (AI) has witnessed remarkable progress in recent years, transforming industries and reshaping the way we live and work. In this keynote address, Dr. John Davis, Chief Scientist at Google Research, will discuss the current state of AI and provide insights into its future trajectory. He will explore cutting-edge research advancements, including deep learning, reinforcement learning, and generative models, and their potential to drive innovation across domains such as healthcare, transportation, and education. Dr. Davis will also shed light on the ethical considerations and challenges associated with AI development and deployment. Join us for this thought-provoking keynote and gain a glimpse into the exciting possibilities that lie ahead in the world of artificial intelligence.",
    Bio: "Speaker Bio: Dr. John Davis Dr. John Davis is a renowned AI researcher and the Chief Scientist at Google Research. With a Ph.D. in Computer Science and a diverse research background, Dr. Davis has made significant contributions to the field of artificial intelligence. His research focuses on developing advanced machine learning algorithms and pushing the boundaries of AI capabilities. Dr. Davis has published numerous influential papers and has received several prestigious awards for his contributions to AI research. As the Chief Scientist at Google Research, he leads teams of talented researchers and engineers in developing cutting-edge AI technologies and driving innovation. Through his work, Dr. Davis aims to advance the frontiers of AI and harness its potential to solve complex problems and improve people's lives.",
    sequence: 4,
    sessionTime: "2023-06-09T10:00:00",
  },{
    id: "64dcd5f771e9015b29c7c0fe",
    ConfId: "647f315f62cdb3a26174fc38",
    Name: "Dr. Sarah Johnson",
    Designation: "Senior Research Scientist",
    Institute: "MIT",
    ProfileLink: "https://www.mit.edu/people/sjohnson",
    ImgLink: "https://www.mit.edu/images/sjohnson.png",
    TalkType: "Workshop",
    TalkTitle: "Practical Applications of Quantum Computing",
    Abstract:
      "Quantum computing has emerged as a powerful paradigm that promises to revolutionize various fields, including cryptography, optimization, and simulation. Unlike classical computers that use bits for information storage and manipulation, quantum computers leverage quantum bits, or qubits, to perform computations in an entirely different way. This workshop aims to provide a practical understanding of quantum computing and its applications. We will explore the fundamental concepts of qubits, quantum gates, and quantum algorithms, such as Grover's search algorithm and Shor's factoring algorithm. Additionally, we will discuss the current state of quantum hardware, including superconducting qubits and trapped-ion qubits. Through hands-on exercises and demonstrations, participants will gain insights into programming quantum computers using popular frameworks, such as Qiskit and Cirq. Join us to unlock the potential of quantum computing and discover how it can revolutionize problem-solving in diverse domains.",
    Bio: "Speaker Bio: Dr. Sarah Johnson Dr. Sarah Johnson is a senior research scientist at MIT's Quantum Computing Laboratory. With a Ph.D. in Physics and expertise in quantum information science, Dr. Johnson has been at the forefront of quantum computing research and development. Her work focuses on developing novel quantum algorithms and exploring their practical applications in fields like cryptography and optimization. Dr. Johnson has published numerous research papers in leading journals and has collaborated with industry partners to accelerate the adoption of quantum computing technologies. She is also passionate about science communication and has delivered engaging talks and workshops on quantum computing to diverse audiences. Through her expertise and experience, Dr. Johnson aims to make quantum computing accessible and drive innovation in this emerging field.",
    sequence: 2,
    sessionTime: "2023-06-08T13:30:00",
  },
  {
    id: "64dcd5f771e9015b29c7c0ff",
    ConfId: "647f315f62cdb3a26174fc38",
    Name: "Dr. Lisa Hernandez",
    Designation: "Data Scientist",
    Institute: "Stanford University",
    ProfileLink: "https://www.stanford.edu/people/lhernandez",
    ImgLink: "https://www.stanford.edu/images/lhernandez.png",
    TalkType: "Panel Discussion",
    TalkTitle: "Ethical Considerations in AI Development",
    Abstract:
      "The rapid advancement of artificial intelligence (AI) technologies brings both immense opportunities and significant challenges. As AI becomes increasingly integrated into our lives, it is crucial to address the ethical considerations surrounding its development and deployment. This panel discussion aims to explore various dimensions of AI ethics and foster a dialogue among experts from academia, industry, and policy-making bodies. We will delve into topics such as algorithmic bias, privacy concerns, transparency, and accountability in AI systems. The panelists will share their perspectives on ethical frameworks, guidelines, and best practices for responsible AI development. Join us for an insightful discussion and gain a comprehensive understanding of the ethical considerations that shape the future of AI.",
    Bio: "Speaker Bio: Dr. Lisa Hernandez Dr. Lisa Hernandez is a data scientist and researcher at Stanford University's AI Ethics Center. With a background in computer science and a passion for ethical AI development, Dr. Hernandez focuses on understanding the societal impacts of AI and advocating for responsible AI practices. She has conducted extensive research on algorithmic bias, fairness, and accountability in AI systems and has collaborated with interdisciplinary teams to develop ethical guidelines for AI deployment. Dr. Hernandez is a sought-after speaker and has delivered keynote speeches and participated in panel discussions at various conferences and events. Through her work, she aims to bridge the gap between technological advancements and ethical considerations, ensuring that AI benefits society while minimizing potential harm.",
    sequence: 3,
    sessionTime: "2023-06-08T15:00:00",
  },
  // More speaker objects...
  {
    id: "64dcd5f771e9015b29c7c100",
    ConfId: "647f315f62cdb3a26174fc38",
    Name: "Dr. John Davis",
    Designation: "Chief Scientist",
    Institute: "Google Research",
    ProfileLink: "https://www.google.com/people/jdavis",
    ImgLink: "https://www.google.com/images/jdavis.png",
    TalkType: "Keynote",
    TalkTitle: "The Future of Artificial Intelligence",
    Abstract:
      "Artificial intelligence (AI) has witnessed remarkable progress in recent years, transforming industries and reshaping the way we live and work. In this keynote address, Dr. John Davis, Chief Scientist at Google Research, will discuss the current state of AI and provide insights into its future trajectory. He will explore cutting-edge research advancements, including deep learning, reinforcement learning, and generative models, and their potential to drive innovation across domains such as healthcare, transportation, and education. Dr. Davis will also shed light on the ethical considerations and challenges associated with AI development and deployment. Join us for this thought-provoking keynote and gain a glimpse into the exciting possibilities that lie ahead in the world of artificial intelligence.",
    Bio: "Speaker Bio: Dr. John Davis Dr. John Davis is a renowned AI researcher and the Chief Scientist at Google Research. With a Ph.D. in Computer Science and a diverse research background, Dr. Davis has made significant contributions to the field of artificial intelligence. His research focuses on developing advanced machine learning algorithms and pushing the boundaries of AI capabilities. Dr. Davis has published numerous influential papers and has received several prestigious awards for his contributions to AI research. As the Chief Scientist at Google Research, he leads teams of talented researchers and engineers in developing cutting-edge AI technologies and driving innovation. Through his work, Dr. Davis aims to advance the frontiers of AI and harness its potential to solve complex problems and improve people's lives.",
    sequence: 4,
    sessionTime: "2023-06-09T10:00:00",
  },
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
    <div className="container">
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
        <img src={person.ImgLink} alt={person.Name} />
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

          <div className="speaker-card-image">
            <img src={person.ImgLink} alt={person.Name} />
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
