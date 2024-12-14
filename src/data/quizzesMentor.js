export const quizzes = [
  {
    id: 1,
    title: "Road Safety Rules",
    description: "Test your knowledge of common traffic signs and their meanings.",
    tags: ["practice", "beginner", "school"],
    time: "30",
    type: "MCQs",
    questions: "20 ",
    image: "/assets/images/quizback.jpg",
  },
  {
    id: 2,
    title: "Road Safety Rules",
    description: "Test your knowledge of common traffic signs and their meanings.",
    tags: ["practice", "beginner", "school"],
    time: "30 ",
    type: "MCQs",
    questions: "20 ",
    image: "/assets/images/quizback.jpg",
  },
  {
    id: 3,
    title: "Road Safety Rules",
    description: "Test your knowledge of common traffic signs and their meanings.",
    tags: ["practice", "beginner", "school"],
    time: "30 ",
    type: "MCQs",
    questions: "20 ",
    image: "/assets/images/quizback.jpg",
  },
  {
    id: 4,
    title: "Road Safety Rules",
    description: "Test your knowledge of common traffic signs and their meanings.",
    tags: ["practice", "beginner", "school"],
    time: "30 ",
    type: "MCQs",
    questions: "20 ",
    image: "/assets/images/quizback.jpg",
  },
  
];
export const addQuiz = (newQuiz) => {
  quizzes.push(newQuiz);
};