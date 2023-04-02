interface Person {
    name: string;
    profession: string;
    age: number;
    subjectOfInterest: string[]
}

const me: Person = {
    name: "Jéssica Amorim",
    age: 30,
    profession: "Operational Supervisor and Programming Student",
    subjectOfInterest: [
        'Science',
        'Technology',
        'Travelling'
    ]
}

function personToInterests(person:Person): string[] {
     return person.subjectOfInterest
} 

enum CourseSubject {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git"
}

interface Professor {
    name: string;
    courseSubjects: CourseSubject[];
}

const alan: Professor = {
    name: "Alan",
    courseSubjects: [
        CourseSubject.Angular,
        CourseSubject.Git,
        CourseSubject.Typescript
    ]
}

const nathan: Professor = {
    name: "Nathan",
    courseSubjects: [
        CourseSubject.Angular,
        CourseSubject.Git,
    ]
}

const professors: Professor[] = [
    alan,
    nathan
]

const professorToName = (professor: Professor) => professor.name

function professorsToProfessorsNames(professors: Professor[]): string[] {
    return professors.map(professorToName)
}
console.log(professorsToProfessorsNames(professors))

function professorsToCourseSubject(professors: Professor[]): CourseSubject[] {
    const courseSubjectsWithDuplications = professors.map(p => p.courseSubjects).reduce<CourseSubject[]>((accumulator, courseSubjects) => {
        return accumulator.concat(courseSubjects)
    }, [])

    const courseSubjectsWithoutDuplicationsSet = new Set(courseSubjectsWithDuplications)
    return Array.from(courseSubjectsWithoutDuplicationsSet)
}  
console.log(professorsToCourseSubject(professors))

function findProfessorThatTeachesTypescript(professors: Professor[]): Professor | undefined {
    return professors.find(professor => professor.courseSubjects.includes(CourseSubject.Typescript))
}
console.log(findProfessorThatTeachesTypescript(professors))
