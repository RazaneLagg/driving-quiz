export const questionsMentor = [
  {
    id: 1,
    text: "What does a solid white line on the road indicate?",
    options: [
      "You may change lanes if it is safe to do so.",
      "You must not change lanes.",
      "You are approaching a stop sign.",
      "The road is a one-way street."
    ],
    correctAnswer: "B"
  },
  {
    id: 2,
    text: "What does a flashing green traffic light mean?",
    options: [
      "Stop completely before proceeding.",
      "Proceed with caution.",
      "You have the right of way.",
      "No stopping allowed."
    ],
    correctAnswer: "C"
  },
  {
    id: 3,
    text: "What does a flashing yellow traffic light mean?",
    options: [
      "Stop completely before proceeding.",
      "Proceed with caution.",
      "You have the right of way.",
      "No stopping allowed."
    ],
    correctAnswer: "B"
  },
  {
    id: 4,
    text: "What does a flashing red traffic light mean?",
    options: [
      "Stop completely before proceeding.",
      "Proceed with caution.",
      "You have the right of way.",
      "No stopping allowed."
    ],
    correctAnswer: "A"
  },
  {
    id: 5,
    text: "What does a double solid yellow line indicate?",
    options: [
      "Passing is allowed on either side.",
      "Passing is not allowed in either direction.",
      "You are in a school zone.",
      "The road is a one-way street."
    ],
    correctAnswer: "B"
  },
  {
    id: 6,
    text: "What does a yield sign mean?",
    options: [
      "You must stop completely before proceeding.",
      "Give right of way to traffic on the intersecting road.",
      "You have the right of way.",
      "No stopping allowed."
    ],
    correctAnswer: "B"
  },
  {
    id: 7,
    text: "What does a triangular road sign typically indicate?",
    options: [
      "Regulatory instructions.",
      "Caution or warning.",
      "Yield or give way.",
      "Prohibited actions."
    ],
    correctAnswer: "C"
  },
  {
    id: 8,
    text: "What does a broken white line on the road indicate?",
    options: [
      "You may change lanes if it is safe to do so.",
      "You must not change lanes.",
      "The road is a one-way street.",
      "You are approaching a pedestrian crossing."
    ],
    correctAnswer: "A"
  },
  {
    id: 9,
    text: "What does a circular road sign with a red border indicate?",
    options: [
      "Mandatory instructions.",
      "Prohibited actions.",
      "Warning or caution.",
      "Guidance for drivers."
    ],
    correctAnswer: "B"
  },
  {
    id: 10,
    text: "What does a school zone sign indicate?",
    options: [
      "You must stop completely.",
      "You must reduce your speed and watch for children.",
      "You have the right of way.",
      "No stopping allowed."
    ],
    correctAnswer: "B"
  }
];
export const addQuestion = (newQuestion) => {
  const id = questionsMentor.length > 0 ? questionsMentor[questionsMentor.length - 1].id + 1 : 1;
  questionsMentor.push({ id, ...newQuestion });
};


