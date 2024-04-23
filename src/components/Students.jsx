import Student from './Student'
export default function Students() {
    const students = [
        {
            name: 'John',
            marks: 300
        },
        {
            name: 'Mark',
            marks: 350
        },
        {
            name: 'James',
            marks: 400
        },
    ]

    return (
            <ul>
                {students.map(student => (
                    <Student key={student.name} name={student.name} marks={student.marks} />
                ))}
            </ul>
    )
}
