import Student from "./Student";

function Students({students}) {
   
    return (
    <div>
        <ol>
            {
                students.map((student, index) => (
                    <Student key={index} student={student} />
                    ))
            }
            {/* <li>{students[0]}</li>
            <li>{students[1]}</li>
            <li>{students[2]}</li>
            <li>{students[3]}</li> */}
        </ol>
    </div>
    )
}

export default Students;

