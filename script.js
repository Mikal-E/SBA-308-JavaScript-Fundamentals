/* Data Provided - Backup Copy

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
*/




// Data In Use

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

// My Program Begins Here

// Assignment Possible Points

const assignment1PossiblePoints = 50;
const assignment2PossiblePoints = 150;
const passingGrade = .70;

// Leaner 1 Grades

// let learner1 = LearnerSubmissions[0]
/* Note To Self - both grade logs work & all log formats at this comment
console.log(learner1.submission.score)
console.log(learner1Grade1);

console.log(LearnerSubmissions[0].learner_id);
*/

let learner1Grade1 = LearnerSubmissions[0].submission.score;
// console.log(learner1Grade1);
let learner1Grade2 = LearnerSubmissions[1].submission.score;
// console.log(learner1Grade2);

/* Course ID 3 Not Due
let learner1Grade3 = LearnerSubmissions[2].submission.score;
console.log(learner1Grade3);
let firstLearnerGrade1 = parseInt(LearnerSubmissions)
*/

// Leaner 1 Average

let learner1Average = (learner1Grade1 + learner1Grade2) / (assignment1PossiblePoints + assignment2PossiblePoints);
console.log(learner1Average);


// Leaner 2 Grades

let learner2Grade1 = LearnerSubmissions[3].submission.score;
// console.log(learner2Grade1);
let learner2Grade2 = LearnerSubmissions[4].submission.score;
// console.log(learner2Grade2);

let learner2Average = (learner2Grade1 + learner2Grade2) / (assignment1PossiblePoints + assignment2PossiblePoints);
console.log(learner2Average);


/* Original Function - Backup
function getLearnerData(course, ag, submissions) {

  // here, we would process this data to achieve the desired result.

  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }

  ];

  return result;
}
*/


function getLearnerData(course, ag, submissions) {

// Try/catch To Check Assigment Against Course
    try {
        if (course.id !== ag.course_id) {

            throw new Error("This assignment does not belong to the course");

        }
    } catch (error) {
        console.log(error)
    }

  const result = [
   

  ];

// For Loop To Iterate Through Assignment Dates

  for (let i = 0; i < ag.assignments.length; i++) {

    const dueDate = new Date(ag.assignments[i].due_at);
    const today = new Date();

    if (dueDate > today) {

        continue;

    }
    
    // For Loop For Submissions
    for (let a = 0; a < submissions.length; a++) {
    const currentSubmission = submissions[a];
    
    }

  }

    return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);