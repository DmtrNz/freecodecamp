// Определение интерфейса для ученика
interface Student {
    id: number;
    name: string;
    age: number;
    grades: { [subject: string]: number };
}

// Класс для управления учениками
class StudentManager {
    private students: Student[] = [];

    // Метод для добавления нового ученика
    addStudent(name: string, age: number): void {
        const newStudent: Student = {
            id: this.students.length + 1,
            name,
            age,
            grades: {}
        };
        this.students.push(newStudent);
        console.log(`Ученик ${name} добавлен.`);
    }

    // Метод для добавления оценки ученику
    addGrade(studentId: number, subject: string, grade: number): void {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            student.grades[subject] = grade;
            console.log(`Оценка ${grade} по предмету ${subject} добавлена ученику ${student.name}.`);
        } else {
            console.log(`Ученик с ID ${studentId} не найден.`);
        }
    }

    // Метод для получения среднего балла ученика
    getAverageGrade(studentId: number): number | null {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            const grades = Object.values(student.grades);
            if (grades.length === 0) return null;
            const sum = grades.reduce((acc, grade) => acc + grade, 0);
            return sum / grades.length;
        } else {
            console.log(`Ученик с ID ${studentId} не найден.`);
            return null;
        }
    }

    // Метод для вывода информации о всех учениках
    printAllStudents(): void {
        this.students.forEach(student => {
            console.log(`ID: ${student.id}, Имя: ${student.name}, Возраст: ${student.age}`);
            console.log('Оценки:', student.grades);
        });
    }
}

// Пример использования класса StudentManager
const studentManager = new StudentManager();
studentManager.addStudent('Иван Иванов', 10);
studentManager.addStudent('Мария Петрова', 9);
studentManager.addGrade(1, 'Математика', 5);
studentManager.addGrade(1, 'Русский язык', 4);
studentManager.addGrade(2, 'Математика', 3);

console.log(`Средний балл Ивана Иванова: ${studentManager.getAverageGrade(1)}`);
console.log(`Средний балл Марии Петровой: ${studentManager.getAverageGrade(2)}`);

studentManager.printAllStudents();
