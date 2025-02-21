// TEMPORARY DATA

import { title } from 'process'

export const role = 'admin'

export const teacherColHeaders = [
  {
    header: 'Info',
    key: 'info'
  },
  {
    header: 'Teacher ID',
    key: 'teacherId',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Subjects',
    key: 'subjects',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Classes',
    key: 'classes',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Phone',
    key: 'phone',
    className: 'hidden xl:table-cell'
  },
  {
    header: 'Address',
    key: 'address',
    className: 'hidden xl:table-cell'
  },
  {
    header: 'Actions',
    key: 'action'
  }
]

export const teachersData = [
  {
    id: 1,
    teacherId: '57293820',
    name: 'Sophia Johnson',
    email: 'sophia.johnson@example.com',
    photo:
      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600',
    phone: '9053215678',
    subjects: ['Math', 'Geometry'],
    classes: ['1B', '2A', '3C'],
    address: '56 Maple St, Toronto, ON, CANADA'
  },
  {
    id: 2,
    teacherId: '48120435',
    name: 'Lucas Smith',
    email: 'lucas.smith@example.com',
    photo:
      'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600',
    phone: '4168765432',
    subjects: ['Physics', 'Chemistry'],
    classes: ['5A', '4B', '3C'],
    address: '192 King St, Ottawa, ON, CANADA'
  },
  {
    id: 3,
    teacherId: '98234567',
    name: 'Emily Roberts',
    email: 'emily.roberts@example.com',
    photo:
      'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '5142098765',
    subjects: ['Biology'],
    classes: ['5A', '4B', '3C'],
    address: '88 Westmount Ave, Montreal, QC, CANADA'
  },
  {
    id: 4,
    teacherId: '21890467',
    name: 'William Davis',
    email: 'william.davis@example.com',
    photo:
      'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600',
    phone: '6043398765',
    subjects: ['History'],
    classes: ['5A', '4B', '3C'],
    address: '23 Dunbar St, Vancouver, BC, CANADA'
  },
  {
    id: 5,
    teacherId: '90356782',
    name: 'Isabella Martinez',
    email: 'isabella.martinez@example.com',
    photo:
      'https://images.pexels.com/photos/2113567/pexels-photo-2113567.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '7782345678',
    subjects: ['Music', 'History'],
    classes: ['5A', '4B', '3C'],
    address: '65 Yonge St, Calgary, AB, CANADA'
  },
  {
    id: 6,
    teacherId: '82340567',
    name: 'Oliver Wilson',
    email: 'oliver.wilson@example.com',
    photo:
      'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=600',
    phone: '6133456789',
    subjects: ['Physics'],
    classes: ['5A', '4B', '3C'],
    address: '45 Laurier Ave, Quebec City, QC, CANADA'
  },
  {
    id: 7,
    teacherId: '34761829',
    name: 'Charlotte Taylor',
    email: 'charlotte.taylor@example.com',
    photo:
      'https://images.pexels.com/photos/3238764/pexels-photo-3238764.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '4165678901',
    subjects: ['English', 'Spanish'],
    classes: ['5A', '4B', '3C'],
    address: '120 York St, Toronto, ON, CANADA'
  },
  {
    id: 8,
    teacherId: '68945231',
    name: 'Jack Thompson',
    email: 'jack.thompson@example.com',
    photo:
      'https://images.pexels.com/photos/4639076/pexels-photo-4639076.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '9051234567',
    subjects: ['Math', 'Geometry'],
    classes: ['5A', '4B', '3C'],
    address: '300 Bay St, Hamilton, ON, CANADA'
  },
  {
    id: 9,
    teacherId: '38214957',
    name: 'Ava Lee',
    email: 'ava.lee@example.com',
    photo:
      'https://images.pexels.com/photos/1184176/pexels-photo-1184176.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '6046574321',
    subjects: ['Literature', 'English'],
    classes: ['5A', '4B', '3C'],
    address: '47 Alberta St, Calgary, AB, CANADA'
  },
  {
    id: 10,
    teacherId: '56092371',
    name: 'Liam Harris',
    email: 'liam.harris@example.com',
    photo:
      'https://images.pexels.com/photos/4845316/pexels-photo-4845316.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '4166784321',
    subjects: ['Biology'],
    classes: ['5A', '4B', '3C'],
    address: '75 Dundas St, Toronto, ON, CANADA'
  }
]

export const studentColHeaders = [
  {
    header: 'Info',
    key: 'info'
  },
  {
    header: 'Student ID',
    key: 'studentId',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Grade',
    key: 'grade',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Class',
    key: 'class',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Phone',
    key: 'phone',
    className: 'hidden xl:table-cell'
  },
  {
    header: 'Address',
    key: 'address',
    className: 'hidden xl:table-cell'
  },
  {
    header: 'Actions',
    key: 'action'
  }
]

export const studentsData = [
  {
    id: 1,
    studentId: '9876543210',
    name: 'Emma Thompson',
    email: 'emma.thompson@example.com',
    photo:
      'https://images.pexels.com/photos/4510506/pexels-photo-4510506.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '5551234567',
    grade: 5,
    class: '1B',
    address: '789 Pine St, Brooklyn, CANADA'
  },
  {
    id: 2,
    studentId: '2345678901',
    name: 'Lucas Green',
    email: 'lucas.green@example.com',
    photo:
      'https://images.pexels.com/photos/4510505/pexels-photo-4510505.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '5552345678',
    grade: 8,
    class: '5A',
    address: '101 Maple Ave, Toronto, CANADA'
  },
  {
    id: 3,
    studentId: '3456789012',
    name: 'Ava Martinez',
    email: 'ava.martinez@example.com',
    photo:
      'https://images.pexels.com/photos/6148189/pexels-photo-6148189.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    phone: '5553456789',
    grade: 3,
    class: '5A',
    address: '202 Birch Rd, Vancouver, CANADA'
  },
  {
    id: 4,
    studentId: '4567890123',
    name: 'Mason Scott',
    email: 'mason.scott@example.com',
    photo:
      'https://images.pexels.com/photos/1694797/pexels-photo-1694797.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '5554567890',
    grade: 5,
    class: '5A',
    address: '303 Cedar St, Los Angeles, CANADA'
  },
  {
    id: 5,
    studentId: '5678901234',
    name: 'Isabella Johnson',
    email: 'isabella.johnson@example.com',
    photo:
      'https://images.pexels.com/photos/30309982/pexels-photo-30309982/free-photo-of-woman-holding-camera-at-sunset-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    phone: '5555678901',
    grade: 11,
    class: '5A',
    address: '404 Redwood Ln, New York, CANADA'
  },
  {
    id: 6,
    studentId: '6789012345',
    name: 'Ethan Brown',
    email: 'ethan.brown@example.com',
    photo:
      'https://images.pexels.com/photos/5395931/pexels-photo-5395931.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '5556789012',
    grade: 5,
    class: '5A',
    address: '505 Elm St, Chicago, CANADA'
  },
  {
    id: 7,
    studentId: '7890123456',
    name: 'Olivia Clark',
    email: 'olivia.clark@example.com',
    photo:
      'https://images.pexels.com/photos/3944412/pexels-photo-3944412.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '5557890123',
    grade: 5,
    class: '5A',
    address: '606 Birch Rd, Calgary, CANADA'
  },
  {
    id: 8,
    studentId: '8901234567',
    name: 'James Lee',
    email: 'james.lee@example.com',
    photo:
      'https://images.pexels.com/photos/6348945/pexels-photo-6348945.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '5558901234',
    grade: 2,
    class: '5A',
    address: '707 Oak Ave, Ottawa, CANADA'
  },
  {
    id: 9,
    studentId: '9012345678',
    name: 'Mia Wilson',
    email: 'mia.wilson@example.com',
    photo:
      'https://images.pexels.com/photos/4413303/pexels-photo-4413303.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '5559012345',
    grade: 5,
    class: '5A',
    address: '808 Pine Ln, San Francisco, CANADA'
  },
  {
    id: 10,
    studentId: '1234567890',
    name: 'Benjamin King',
    email: 'benjamin.king@example.com',
    photo:
      'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=1200',
    phone: '5550123456',
    grade: 5,
    class: '5A',
    address: '909 Maple Rd, Montreal, CANADA'
  }
]

export const parentColHeaders = [
  {
    header: 'Info',
    key: 'info'
  },
  {
    header: 'Student Names',
    key: 'students',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Phone',
    key: 'phone',
    className: 'hidden xl:table-cell'
  },
  {
    header: 'Address',
    key: 'address',
    className: 'hidden xl:table-cell'
  },
  {
    header: 'Actions',
    key: 'action'
  }
]

export const parentsData = [
  {
    id: 1,
    name: 'John Doe',
    students: ['Sarah Brewer'],
    email: 'john@doe.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, CANADA'
  },
  {
    id: 2,
    name: 'Jane Doe',
    students: ['Cecilia Bradley'],
    email: 'jane@doe.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, CANADA'
  },
  {
    id: 3,
    name: 'Mike Geller',
    students: ['Fanny Caldwell'],
    email: 'mike@geller.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, CANADA'
  },
  {
    id: 4,
    name: 'Jay French',
    students: ['Mollie Fitzgerald', 'Ian Bryant'],
    email: 'mike@geller.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, CANADA'
  },
  {
    id: 5,
    name: 'Jane Smith',
    students: ['Mable Harvey'],
    email: 'mike@geller.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, CANADA'
  },
  {
    id: 6,
    name: 'Anna Santiago',
    students: ['Joel Lambert'],
    email: 'mike@geller.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, CANADA'
  },
  {
    id: 7,
    name: 'Allen Black',
    students: ['Carrie Tucker', 'Lilly Underwood'],
    email: 'mike@geller.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, CANADA'
  },
  {
    id: 8,
    name: 'Ophelia Castro',
    students: ['Alexander Blair'],
    email: 'mike@geller.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, CANADA'
  },
  {
    id: 9,
    name: 'Derek Briggs',
    students: ['SCANADAn Webster', 'Maude Stone'],
    email: 'mike@geller.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, CANADA'
  },
  {
    id: 10,
    name: 'John Glover',
    students: ['Stella Scott'],
    email: 'mike@geller.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, CANADA'
  }
]

export const subjectColHeaders = [
  {
    header: 'Subject',
    key: 'subject'
  },
  {
    header: 'Teacher Names',
    key: 'teachers'
    // className: "hidden md:table-cell",
  },
  {
    header: 'Actions',
    key: 'action'
  }
]

export const subjectsData = [
  {
    id: 1,
    name: 'Math',
    teachers: ['Alice Phelps', 'Russell Davidson']
  },
  {
    id: 2,
    name: 'English',
    teachers: ['Manuel Becker', 'Eddie Chavez']
  },
  {
    id: 3,
    name: 'Physics',
    teachers: ['Lola Newman', 'Darrell Delgado']
  },
  {
    id: 4,
    name: 'Chemistry',
    teachers: ['Nathan Kelly', 'Benjamin Snyder']
  },
  {
    id: 5,
    name: 'Biology',
    teachers: ['Alma Benson', 'Lina Collier']
  },
  {
    id: 6,
    name: 'History',
    teachers: ['Hannah Bowman', 'Betty Obrien']
  },
  {
    id: 7,
    name: 'Geography',
    teachers: ['Lora French', 'Sue Brady']
  },
  {
    id: 8,
    name: 'Art',
    teachers: ['Harriet Alvarado', 'Mayme Keller']
  },
  {
    id: 9,
    name: 'Music',
    teachers: ['Gertrude Roy', 'Rosa Singleton']
  },
  {
    id: 10,
    name: 'Literature',
    teachers: ['Effie Lynch', 'Brett Flowers']
  }
]

export const classColHeaders = [
  {
    header: 'Class Name',
    key: 'name'
  },
  {
    header: 'Capacity',
    key: 'capacity'
    // className: "hidden md:table-cell",
  },
  {
    header: 'Grade',
    key: 'grade'
    // className: "hidden md:table-cell",
  },
  {
    header: 'Supervisor',
    key: 'supervisor',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Actions',
    key: 'action'
  }
]

export const classesData = [
  {
    id: 1,
    name: '1A',
    capacity: 20,
    grade: 1,
    supervisor: 'Joseph Padilla'
  },
  {
    id: 2,
    name: '2B',
    capacity: 22,
    grade: 2,
    supervisor: 'Blake Joseph'
  },
  {
    id: 3,
    name: '3C',
    capacity: 20,
    grade: 3,
    supervisor: 'Tom Bennett'
  },
  {
    id: 4,
    name: '4B',
    capacity: 18,
    grade: 4,
    supervisor: 'Aaron Collins'
  },
  {
    id: 5,
    name: '5A',
    capacity: 16,
    grade: 5,
    supervisor: 'Iva Frank'
  },
  {
    id: 5,
    name: '5B',
    capacity: 20,
    grade: 5,
    supervisor: 'Leila Santos'
  },
  {
    id: 7,
    name: '7A',
    capacity: 18,
    grade: 7,
    supervisor: 'Carrie Walton'
  },
  {
    id: 8,
    name: '6B',
    capacity: 22,
    grade: 6,
    supervisor: 'Christopher Butler'
  },
  {
    id: 9,
    name: '6C',
    capacity: 18,
    grade: 6,
    supervisor: 'Marc Miller'
  },
  {
    id: 10,
    name: '6D',
    capacity: 20,
    grade: 6,
    supervisor: 'Ophelia Marsh'
  }
]

export const lessonColHeaders = [
  {
    header: 'Lesson Name',
    key: 'subject'
  },
  {
    header: 'Class',
    key: 'class'
    // className: "hidden md:table-cell",
  },
  {
    header: 'Teacher',
    key: 'teacher',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Actions',
    key: 'action'
  }
]

export const lessonsData = [
  {
    id: 1,
    subject: 'Math',
    class: '1A',
    teacher: 'Tommy Wise'
  },
  {
    id: 2,
    subject: 'English',
    class: '2A',
    teacher: 'Rhoda Frank'
  },
  {
    id: 3,
    subject: 'Science',
    class: '3A',
    teacher: 'Della Dunn'
  },
  {
    id: 4,
    subject: 'Social Studies',
    class: '1B',
    teacher: 'Bruce Rodriguez'
  },
  {
    id: 5,
    subject: 'Art',
    class: '4A',
    teacher: 'Birdie Butler'
  },
  {
    id: 6,
    subject: 'Music',
    class: '5A',
    teacher: 'Bettie Oliver'
  },
  {
    id: 7,
    subject: 'History',
    class: '6A',
    teacher: 'Herman Howard'
  },
  {
    id: 8,
    subject: 'Geography',
    class: '6B',
    teacher: 'Lucinda Thomas'
  },
  {
    id: 9,
    subject: 'Physics',
    class: '6C',
    teacher: 'Ronald Roberts'
  },
  {
    id: 10,
    subject: 'Chemistry',
    class: '4B',
    teacher: 'Julia Pittman'
  }
]

export const examColHeaders = [
  {
    header: 'Subject',
    key: 'subject'
  },
  {
    header: 'Class',
    key: 'class'
    // className: "hidden md:table-cell",
  },
  {
    header: 'Teacher',
    key: 'teacher',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Date',
    key: 'date'
  },
  {
    header: 'Actions',
    key: 'action'
  }
]

export const examsData = [
  {
    id: 1,
    subject: 'Math',
    class: '1A',
    teacher: 'Martha Morris',
    date: '2025-01-01'
  },
  {
    id: 2,
    subject: 'English',
    class: '2A',
    teacher: 'Randall Garcia',
    date: '2025-01-01'
  },
  {
    id: 3,
    subject: 'Science',
    class: '3A',
    teacher: 'Myrtie Scott',
    date: '2025-01-01'
  },
  {
    id: 4,
    subject: 'Social Studies',
    class: '1B',
    teacher: 'Alvin Swanson',
    date: '2025-01-01'
  },
  {
    id: 5,
    subject: 'Art',
    class: '4A',
    teacher: 'Mabelle Wallace',
    date: '2025-01-01'
  },
  {
    id: 6,
    subject: 'Music',
    class: '5A',
    teacher: 'Dale Thompson',
    date: '2025-01-01'
  },
  {
    id: 7,
    subject: 'History',
    class: '6A',
    teacher: 'Allie Conner',
    date: '2025-01-01'
  },
  {
    id: 8,
    subject: 'Geography',
    class: '6B',
    teacher: 'Hunter Fuller',
    date: '2025-01-01'
  },
  {
    id: 9,
    subject: 'Physics',
    class: '7A',
    teacher: 'Lois Lindsey',
    date: '2025-01-01'
  },
  {
    id: 10,
    subject: 'Chemistry',
    class: '8A',
    teacher: 'Vera Soto',
    date: '2025-01-01'
  }
]

export const assignmentColHeaders = [
  {
    header: 'Subject',
    key: 'subject'
  },
  {
    header: 'Class',
    key: 'class'
    // className: "hidden md:table-cell",
  },
  {
    header: 'Teacher',
    key: 'teacher',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Due Date',
    key: 'dueDate'
  },
  {
    header: 'Actions',
    key: 'action'
  }
]

export const assignmentsData = [
  {
    id: 1,
    subject: 'Math',
    class: '1A',
    teacher: 'Anthony Boone',
    dueDate: '2025-01-01'
  },
  {
    id: 2,
    subject: 'English',
    class: '2A',
    teacher: 'Clifford Bowen',
    dueDate: '2025-01-01'
  },
  {
    id: 3,
    subject: 'Science',
    class: '3A',
    teacher: 'Catherine Malone',
    dueDate: '2025-01-01'
  },
  {
    id: 4,
    subject: 'Social Studies',
    class: '1B',
    teacher: 'Willie Medina',
    dueDate: '2025-01-01'
  },
  {
    id: 5,
    subject: 'Art',
    class: '4A',
    teacher: 'Jose Ruiz',
    dueDate: '2025-01-01'
  },
  {
    id: 6,
    subject: 'Music',
    class: '5A',
    teacher: 'Katharine Owens',
    dueDate: '2025-01-01'
  },
  {
    id: 7,
    subject: 'History',
    class: '6A',
    teacher: 'Shawn Norman',
    dueDate: '2025-01-01'
  },
  {
    id: 8,
    subject: 'Geography',
    class: '6B',
    teacher: 'Don Holloway',
    dueDate: '2025-01-01'
  },
  {
    id: 9,
    subject: 'Physics',
    class: '7A',
    teacher: 'Franklin Gregory',
    dueDate: '2025-01-01'
  },
  {
    id: 10,
    subject: 'Chemistry',
    class: '8A',
    teacher: 'Danny Nguyen',
    dueDate: '2025-01-01'
  }
]
export const resultColHeaders = [
  {
    header: 'Subject',
    key: 'subject'
  },
  {
    header: 'Student',
    key: 'student'
    // className: "hidden md:table-cell",
  },
  {
    header: 'Score',
    key: 'score'
    // className: "hidden md:table-cell",
  },
  {
    header: 'Teacher',
    key: 'teacher',
    className: 'hidden md:table-cell'
  },
  {
    header: 'Class',
    key: 'class'
    // className: "hidden md:table-cell",
  },
  {
    header: 'Date',
    key: 'date'
  },
  {
    header: 'Actions',
    key: 'action'
  }
]

export const resultsData = [
  {
    id: 1,
    subject: 'Math',
    class: '1A',
    teacher: 'John Doe',
    student: 'John Doe',
    date: '2025-01-01',
    type: 'exam',
    score: 90
  },
  {
    id: 2,
    subject: 'English',
    class: '2A',
    teacher: 'John Doe',
    student: 'John Doe',
    date: '2025-01-01',
    type: 'exam',
    score: 90
  },
  {
    id: 3,
    subject: 'Science',
    class: '3A',
    teacher: 'John Doe',
    student: 'John Doe',
    date: '2025-01-01',
    type: 'exam',
    score: 90
  },
  {
    id: 4,
    subject: 'Social Studies',
    class: '1B',
    teacher: 'John Doe',
    student: 'John Doe',
    date: '2025-01-01',
    type: 'exam',
    score: 90
  },
  {
    id: 5,
    subject: 'Art',
    class: '4A',
    teacher: 'John Doe',
    student: 'John Doe',
    date: '2025-01-01',
    type: 'exam',
    score: 90
  },
  {
    id: 6,
    subject: 'Music',
    class: '5A',
    teacher: 'John Doe',
    student: 'John Doe',
    date: '2025-01-01',
    type: 'exam',
    score: 90
  },
  {
    id: 7,
    subject: 'History',
    class: '6A',
    teacher: 'John Doe',
    student: 'John Doe',
    date: '2025-01-01',
    type: 'exam',
    score: 90
  },
  {
    id: 8,
    subject: 'Geography',
    class: '6B',
    teacher: 'John Doe',
    student: 'John Doe',
    date: '2025-01-01',
    type: 'exam',
    score: 90
  },
  {
    id: 9,
    subject: 'Physics',
    class: '7A',
    teacher: 'John Doe',
    student: 'John Doe',
    date: '2025-01-01',
    type: 'exam',
    score: 90
  },
  {
    id: 10,
    subject: 'Chemistry',
    class: '8A',
    teacher: 'John Doe',
    student: 'John Doe',
    date: '2025-01-01',
    type: 'exam',
    score: 90
  }
]
export const eventColHeaders = [
  {
    header: 'Title',
    key: 'title'
  },
  {
    header: 'Class',
    key: 'class'
    // className: "hidden md:table-cell",
  },
  {
    header: 'Date',
    key: 'date'
  },
  {
    header: 'Start Time',
    key: 'startTime'
    // className: "hidden md:table-cell",
  },
  {
    header: 'End Time',
    key: 'endTime'
    // className: "hidden md:table-cell",
  },
  {
    header: 'Actions',
    key: 'action'
  }
]

export const eventsData = [
  {
    id: 1,
    title: 'Lake Trip',
    class: '1A',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00'
  },
  {
    id: 2,
    title: 'Picnic',
    class: '2A',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00'
  },
  {
    id: 3,
    title: 'Beach Trip',
    class: '3A',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00'
  },
  {
    id: 4,
    title: 'Museum Trip',
    class: '4A',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00'
  },
  {
    id: 5,
    title: 'Music Concert',
    class: '5A',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00'
  },
  {
    id: 6,
    title: 'Magician Show',
    class: '1B',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00'
  },
  {
    id: 7,
    title: 'Lake Trip',
    class: '2B',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00'
  },
  {
    id: 8,
    title: 'Cycling Race',
    class: '3B',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00'
  },
  {
    id: 9,
    title: 'Art Exhibition',
    class: '4B',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00'
  },
  {
    id: 10,
    title: 'Sports Tournament',
    class: '5B',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00'
  }
]
export const announcementColHeaders = [
  {
    header: 'Title',
    key: 'title'
  },
  {
    header: 'Class',
    key: 'class'
    // className: "hidden md:table-cell",
  },
  {
    header: 'Date',
    key: 'date'
  },
  {
    header: 'Actions',
    key: 'action'
  }
]

export const announcementsData = [
  {
    id: 1,
    title: 'Upcoming English Test for 1B',
    class: '1B',
    date: '2025-02-15'
  },
  {
    id: 2,
    title: 'Important 3A Math Test Reminder',
    class: '3A',
    date: '2025-03-12'
  },
  {
    id: 3,
    title: '3B: Algebra & Geometry Test Scheduled',
    class: '3B',
    date: '2025-04-21'
  },
  {
    id: 4,
    title: '6A: Advanced Math Test on Calculus',
    class: '6A',
    date: '2025-05-01'
  },
  {
    id: 5,
    title: 'Math Test on Trigonometry for 8C',
    class: '8C',
    date: '2025-06-09'
  },
  {
    id: 6,
    title: '2A: Upcoming Math Test on Fractions',
    class: '2A',
    date: '2025-07-15'
  },
  {
    id: 7,
    title: 'Reminder: 4C Geometry Test',
    class: '4C',
    date: '2025-08-02'
  },
  {
    id: 8,
    title: '4B: Calculus Test on Limits and Derivatives',
    class: '4B',
    date: '2025-09-18'
  },
  {
    id: 9,
    title: '3C: Final Math Exam',
    class: '3C',
    date: '2025-10-03'
  },
  {
    id: 10,
    title: '1C Math Test: Addition and Subtraction',
    class: '1C',
    date: '2025-11-11'
  }
]

// YOU SHOULD CHANGE THE DATES OF THE EVENTS TO THE CURRENT DATE TO SEE THE EVENTS ON THE CALENDAR
export const calendarEvents = [
  {
    title: 'Math',
    allDay: false,
    start: new Date(2025, 1, 1, 8, 0), // Feb 3, 2025, 8:00 AM
    end: new Date(2025, 1, 1, 8, 45)
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2025, 1, 3, 9, 0), // Feb 3, 2025, 9:00 AM
    end: new Date(2025, 1, 3, 9, 45)
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2025, 1, 3, 10, 0), // Feb 3, 2025, 10:00 AM
    end: new Date(2025, 1, 3, 10, 45)
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date(2025, 1, 2, 11, 0), // Feb 4, 2025, 11:00 AM
    end: new Date(2025, 1, 2, 11, 45)
  },
  {
    title: 'Chemistry',
    allDay: false,
    start: new Date(2025, 1, 4, 13, 0), // Feb 4, 2025, 1:00 PM
    end: new Date(2025, 1, 4, 13, 45)
  },
  {
    title: 'History',
    allDay: false,
    start: new Date(2025, 1, 5, 14, 0), // Feb 5, 2025, 2:00 PM
    end: new Date(2025, 1, 5, 14, 45)
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2025, 1, 6, 9, 0), // Feb 6, 2025, 9:00 AM
    end: new Date(2025, 1, 6, 9, 45)
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2025, 1, 6, 10, 0), // Feb 6, 2025, 10:00 AM
    end: new Date(2025, 1, 6, 10, 45)
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date(2025, 1, 6, 11, 0), // Feb 6, 2025, 11:00 AM
    end: new Date(2025, 1, 6, 11, 45)
  },

  {
    title: 'History',
    allDay: false,
    start: new Date(2025, 1, 13, 14, 0), // Feb 13, 2025, 2:00 PM
    end: new Date(2025, 1, 13, 14, 45)
  },
  {
    title: 'Math',
    allDay: false,
    start: new Date(2025, 1, 14, 8, 0), // Feb 14, 2025, 8:00 AM
    end: new Date(2025, 1, 14, 8, 45)
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2025, 1, 14, 10, 0), // Feb 14, 2025, 10:00 AM
    end: new Date(2025, 1, 14, 10, 45)
  },

  {
    title: 'Chemistry',
    allDay: false,
    start: new Date(2025, 1, 14, 13, 0), // Feb 14, 2025, 1:00 PM
    end: new Date(2025, 1, 14, 13, 45)
  },
  {
    title: 'History',
    allDay: false,
    start: new Date(2025, 1, 14, 14, 0), // Feb 14, 2025, 2:00 PM
    end: new Date(2025, 1, 14, 14, 45)
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2025, 1, 15, 9, 0), // Feb 15, 2025, 9:00 AM
    end: new Date(2025, 1, 15, 9, 45)
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2025, 1, 15, 10, 0), // Feb 15, 2025, 10:00 AM
    end: new Date(2025, 1, 15, 10, 45)
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date(2025, 1, 15, 11, 0), // Feb 15, 2025, 11:00 AM
    end: new Date(2025, 1, 15, 11, 45)
  },

  {
    title: 'History',
    allDay: false,
    start: new Date(2025, 1, 15, 14, 0), // Feb 15, 2025, 2:00 PM
    end: new Date(2025, 1, 15, 14, 45)
  },
  {
    title: 'Math',
    allDay: false,
    start: new Date(2025, 1, 16, 8, 0), // Feb 16, 2025, 8:00 AM
    end: new Date(2025, 1, 16, 8, 45)
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2025, 1, 16, 9, 0), // Feb 16, 2025, 9:00 AM
    end: new Date(2025, 1, 16, 9, 45)
  },

  {
    title: 'Physics',
    allDay: false,
    start: new Date(2025, 1, 16, 11, 0), // Feb 16, 2025, 11:00 AM
    end: new Date(2025, 1, 16, 11, 45)
  },
  {
    title: 'Chemistry',
    allDay: false,
    start: new Date(2025, 1, 16, 13, 0), // Feb 16, 2025, 1:00 PM
    end: new Date(2025, 1, 16, 13, 45)
  },
  {
    title: 'History',
    allDay: false,
    start: new Date(2025, 1, 16, 14, 0), // Feb 16, 2025, 2:00 PM
    end: new Date(2025, 1, 16, 14, 45)
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2025, 1, 17, 9, 0), // Feb 17, 2025, 9:00 AM
    end: new Date(2025, 1, 17, 9, 45)
  },
  // March 2025
  {
    title: 'Math',
    allDay: false,
    start: new Date(2025, 2, 1, 8, 0), // Mar 1, 2025, 8:00 AM
    end: new Date(2025, 2, 1, 8, 45)
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2025, 2, 3, 9, 0), // Mar 3, 2025, 9:00 AM
    end: new Date(2025, 2, 3, 9, 45)
  },

  // April 2025
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2025, 3, 1, 10, 0), // Apr 1, 2025, 10:00 AM
    end: new Date(2025, 3, 1, 10, 45)
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date(2025, 3, 5, 11, 0), // Apr 5, 2025, 11:00 AM
    end: new Date(2025, 3, 5, 11, 45)
  },

  // May 2025
  {
    title: 'Chemistry',
    allDay: false,
    start: new Date(2025, 4, 3, 13, 0), // May 3, 2025, 1:00 PM
    end: new Date(2025, 4, 3, 13, 45)
  },
  {
    title: 'History',
    allDay: false,
    start: new Date(2025, 4, 10, 14, 0), // May 10, 2025, 2:00 PM
    end: new Date(2025, 4, 10, 14, 45)
  },

  // June 2025
  {
    title: 'Math',
    allDay: false,
    start: new Date(2025, 5, 1, 8, 0), // Jun 1, 2025, 8:00 AM
    end: new Date(2025, 5, 1, 8, 45)
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2025, 5, 4, 9, 0), // Jun 4, 2025, 9:00 AM
    end: new Date(2025, 5, 4, 9, 45)
  },

  // July 2025
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2025, 6, 2, 10, 0), // Jul 2, 2025, 10:00 AM
    end: new Date(2025, 6, 2, 10, 45)
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date(2025, 6, 8, 11, 0), // Jul 8, 2025, 11:00 AM
    end: new Date(2025, 6, 8, 11, 45)
  },

  // August 2025
  {
    title: 'Chemistry',
    allDay: false,
    start: new Date(2025, 7, 3, 13, 0), // Aug 3, 2025, 1:00 PM
    end: new Date(2025, 7, 3, 13, 45)
  },
  {
    title: 'History',
    allDay: false,
    start: new Date(2025, 7, 12, 14, 0), // Aug 12, 2025, 2:00 PM
    end: new Date(2025, 7, 12, 14, 45)
  },

  // September 2025
  {
    title: 'Math',
    allDay: false,
    start: new Date(2025, 8, 1, 8, 0), // Sep 1, 2025, 8:00 AM
    end: new Date(2025, 8, 1, 8, 45)
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2025, 8, 5, 9, 0), // Sep 5, 2025, 9:00 AM
    end: new Date(2025, 8, 5, 9, 45)
  },

  // October 2025
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2025, 9, 4, 10, 0), // Oct 4, 2025, 10:00 AM
    end: new Date(2025, 9, 4, 10, 45)
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date(2025, 9, 7, 11, 0), // Oct 7, 2025, 11:00 AM
    end: new Date(2025, 9, 7, 11, 45)
  },

  // November 2025
  {
    title: 'Chemistry',
    allDay: false,
    start: new Date(2025, 10, 2, 13, 0), // Nov 2, 2025, 1:00 PM
    end: new Date(2025, 10, 2, 13, 45)
  },
  {
    title: 'History',
    allDay: false,
    start: new Date(2025, 10, 9, 14, 0), // Nov 9, 2025, 2:00 PM
    end: new Date(2025, 10, 9, 14, 45)
  },

  // December 2025
  {
    title: 'Math',
    allDay: false,
    start: new Date(2025, 11, 1, 8, 0), // Dec 1, 2025, 8:00 AM
    end: new Date(2025, 11, 1, 8, 45)
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2025, 11, 5, 9, 0), // Dec 5, 2025, 9:00 AM
    end: new Date(2025, 11, 5, 9, 45)
  }
]
