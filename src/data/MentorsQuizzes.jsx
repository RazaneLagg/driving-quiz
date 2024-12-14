const quizData = [
  {
    id: 1,
    title: "Road Signs Recognition",
    description: "Identify various road signs and their meanings.",
    progress: 80,
    progressprs: "4/5 completed",
    locked: false,
    unlockMessage: "",
  },
  {
    id: 2,
    title: "Traffic Rules and Regulations",
    description: "Test your knowledge of traffic laws and safe driving practices.",
    progress: 60,
    progressprs: "3/5 completed",
    locked: false,
    unlockMessage: "",
  },
  {
    id: 3,
    title: "Vehicle Maintenance Basics",
    description: "Learn about basic car maintenance to ensure safety and performance.",
    progress: 40,
    progressprs: "2/5 completed",
    locked: false,
    unlockMessage: "Complete 'Traffic Rules and Regulations' to unlock this quiz.",
  },
  {
    id: 4,
    title: "Highway Driving Techniques",
    description: "Test your understanding of safe and efficient driving on highways.",
    progress: 0,
    progressprs: "0/5 completed",
    locked: false,
    unlockMessage: "Complete 'Road Signs Recognition' to unlock this quiz.",
  },
];
export default quizData;
