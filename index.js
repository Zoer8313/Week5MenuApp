class Student{
    constructor(name, idNumber) {
        this.name = name;
        this.idNumber = idNumber;
    }
} //removed describe entirely

class School {
    constructor(schoolName) {
        this.schoolName = schoolName;
        this.students = [];
    }
}

class Menu {
    constructor() {
        this.schools = [];
        this.selectedSchool = null; //just to start, since nothing is selected
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case "1": 
                this.createSchool();
                break;
               case "2":
                this.viewSchool();
                break;
               case "3":
                this.deleteSchool();
                break;
               case "4":
                this.displaySchools();
                break;
               default: 
                selection = 0;    
            }
            selection = this.showMainMenuOptions();
        } 
        alert("Goodbye!"); //if they did select 0; boolean proved false, so exited loop. 
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create New School
        2) View School
        3) Delete School
        4) Display All Schools 
        `);
    }

    showSchoolMenuOptions(schoolInfo) { //changed to "schoolInfo"- made more sense
        return prompt(`
        0) Back
        1) Add Student
        2) Remove Student
        ---------------------
        ${schoolInfo}
        `);
    }

    displaySchools() {
        let schoolString = ""; //creates blank string
        for (let i = 0; i < this.schools.length; i++) { //iterate through our schools
            schoolString += i + ")" + this.schools[i].schoolName + "\n"; //grab each school, get the name, and then add a new line
        }
        alert(schoolString);
    }

    createSchool() {
        let schoolName = prompt("Enter name for new school: ");
        this.schools.push(new School(schoolName));
    }

    viewSchool() {
        let index = prompt("Enter the index of the school you wish to view: ");
        if (index > -1 && index < this.schools.length) {
            this.selectedSchool = this.schools[index];
            let description = "School Name: " + this.selectedSchool.schoolName + "\n";
            

        for (let i = 0; i < this.selectedSchool.students.length; i++) {
            description += i + ") " + this.selectedSchool.students[i].name 
            + "- " + this.selectedSchool.students[i].idNumber + "\n"; //all one line, just quite long
        }

        let selection = this.showSchoolMenuOptions(description);
        switch (selection) {
            case "1": 
            this.addStudent();
            break;
            case "2":
            this.removeStudent();
        }
        }
    }

    deleteSchool() {
        let index = prompt("Enter the index of the school you wish to delete: ");
        if (index > -1 && index < this.schools.length) {
           this.schools.splice(index, 1); 
        }
    } 

    addStudent() {
        let name = prompt("Enter name of new student: ");
        let idNumber = prompt("Enter the ID number of new student: ");
        this.selectedSchool.students.push(new Student(name, idNumber));
    }  

    removeStudent() {
        let index = prompt("Enter the index of the student you wish to remove: ");
        if (index > -1 && index < this.selectedSchool.students.length) {
            this.selectedSchool.students.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();