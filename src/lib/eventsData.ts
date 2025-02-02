type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const eventsData = [
  {
    id: 1,
    title: 'Fun Event',
    time: 'January 1, 2025, 10:00 AM - 11:00 AM',
    description: 'Get ready for the first event'
  },
  {
    id: 2,
    title: 'Dance Event',
    time: 'January 2, 2025, 11:00 AM - 12:00 PM',
    description: 'Dance dance dance'
  },
  {
    id: 3,
    title: 'Music Event',
    time: 'February 1, 2025, 12:00 PM - 1:00 PM',
    description: 'Listen to musi, unwind'
  },
  {
    id: 4,
    title: 'Game Event',
    time: 'February 2, 2025, 1:00 PM - 2:00 PM',
    description: 'Game on, video games, board games'
  },
  {
    id: 5,
    title: 'Food Event',
    time: 'March 1, 2025, 2:00 PM - 3:00 PM',
    description: 'Food day, eat and be merry'
  }
]

export default eventsData
