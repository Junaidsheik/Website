import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Eagle Pay – A Blockchain payment system',
        description: "Led a proficient 4-person team in developing an advanced e-commerce platform using HTML, CSS, and JavaScript, with a focus on integrating a robust Ethereum blockchain-based payment system, while employing Truffle and Solidity to architect and deploy secure smart contracts, ultimately earning recognition for delivering the most outstanding project of the semester.",
        tools: ['Express', 'MongoDB', 'HTML', 'CSS', 'Ethereum ', 'ERC-2', 'Truffle', 'Solidity ', 'secure smart contracts', 'blockchain', 'Nginx'],
        role: 'Team Lead Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Computer Security – A Ransomware Project',
        description: 'Collaborated with a 4-member team to develop a comprehensive ransomware monitoring and detection solution on Ubuntu Linux, engineering unique Python code for the encryption, monitoring, detection, and mitigation phases, implementing encryption protocols to secure victims files and directories, generating detailed logs for threat detection and mitigation, and identifying critical areas for future research to enhance protection against ransomware attacks.',
        tools: ['Ubuntu ', 'Python ', "Shell Scripting", "NestJS", "Encryption Protocols", "MySQL"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Criminal Detection System',
        description: 'Criminal identification often relies on thumbprints, but many criminals now avoid leaving prints, making this method less effective. To improve identification, CCTV cameras are installed for surveillance, yet there is insufficient software for matching suspects images from footage. This project proposes an automated facial recognition system using Principal Component Analysis (PCA) to detect and recognize faces, helping law enforcement identify suspects when thumbprints are unavailable. Preliminary results show an 80% match rate with template data.',
        tools: ['Open CV', 'Harr-Cascade', 'LBPH', 'ML', 'AI', 'Java', 'MongoDB', 'Firebase', 'Pyrebase', 'Gmail API', 'PyMail'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },