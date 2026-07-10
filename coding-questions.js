// TCS IPA Hard Coding Questions — question bank with hidden test cases.
// Sourced from previous-year IPA exam reports (2023–2025).
// testCases[0] is always the visible sample; the rest are hidden (like the real exam).

const CODING_QUESTIONS = [
    // ============================================================
    // PART 1 — 35-Mark OOP / Class-Based Problems
    // ============================================================
    {
        id: 'q1-medicine',
        num: 1,
        title: 'Medicine Inventory Management',
        marks: 35,
        year: '2025',
        type: 'oop',
        statement: [
            {
                h: 'Problem Description',
                t: 'Create a class Medicine with the following private attributes:\n\n' +
                   '  medicineId (int)\n  medicineName (String)\n  expiryYear (int)\n  price (double)\n\n' +
                   'Write appropriate getters and setters for the above attributes and a parameterized constructor which takes the attributes in the above sequence.\n\n' +
                   'Create a driver class called Solution. In the Solution class, implement a static method countMedicinesByMedicineName(Medicine[] medicines, String medicineName) which takes an array of Medicine objects and a medicine name as input, and returns the count of medicines whose medicineName matches the given name. The comparison should be case-insensitive. If no medicine matches the given name, the method should return 0.\n\n' +
                   'In the main method of the Solution class, read the details of 4 Medicine objects followed by a medicine name to search for. Call the static method countMedicinesByMedicineName and print the value returned by it. If the value returned is 0, print "No medicines found with that name" instead.'
            },
            {
                h: 'Input Format',
                t: 'The first 4 lines of input each contain the details of one Medicine, separated by a single space, in the order:\n\n  medicineId medicineName expiryYear price\n\nThe last line of input contains the medicine name to be searched.'
            },
            {
                h: 'Output Format',
                t: 'Print the count of medicines whose name matches the searched name (case-insensitive).\n\nIf the count is 0, print exactly:\n\n  No medicines found with that name'
            }
        ],
        testCases: [
            {
                input: '101 Paracetamol 2026 15.5\n102 paracetamol 2025 12.0\n103 Ibuprofen 2027 20.0\n104 Aspirin 2024 8.0\nPARACETAMOL',
                expected: '2',
                hidden: false
            },
            {
                input: '101 Dolo 2026 15.5\n102 Crocin 2025 12.0\n103 Ibuprofen 2027 20.0\n104 Aspirin 2024 8.0\nZincovit',
                expected: 'No medicines found with that name',
                hidden: true
            },
            {
                input: '1 Amoxil 2026 10.0\n2 AMOXIL 2025 11.0\n3 amoxil 2027 12.0\n4 aMoXiL 2024 13.0\namoxil',
                expected: '4',
                hidden: true
            },
            {
                input: '201 Cetrizine 2025 5.0\n202 Zyrtec 2026 9.5\n203 Allegra 2027 12.0\n204 Benadryl 2024 7.5\nallegra',
                expected: '1',
                hidden: true
            }
        ]
    },
    {
        id: 'q2-employee',
        num: 2,
        title: 'Employee Salary Management',
        marks: 35,
        year: '2024',
        type: 'oop',
        statement: [
            {
                h: 'Problem Description',
                t: 'Create a base class Employee with the following private attributes:\n\n' +
                   '  empId (String)\n  empName (String)\n  baseSalary (double)\n\n' +
                   'Write appropriate getters and setters and a parameterized constructor which takes the attributes in the above sequence. Add a method calculateBonus() that returns 10% of baseSalary.\n\n' +
                   'Create a subclass Manager which extends Employee, with one extra private attribute:\n\n  teamSize (int)\n\n' +
                   'Override the calculateBonus() method in Manager — a Manager\'s bonus is 10% of baseSalary plus 500 multiplied by teamSize.\n\n' +
                   'Create a driver class called Solution. In the Solution class, implement a static method getHighestBonus(Employee[] employees) which takes an array of Employee objects (which may contain Manager objects) and returns the empName of the employee with the highest bonus. Assume there is exactly one employee with the highest bonus.\n\n' +
                   'In the main method, read the details of 3 Employee objects followed by 2 Manager objects, store all of them in a single Employee array, call the static method getHighestBonus, and print the value returned by it.'
            },
            {
                h: 'Input Format',
                t: 'The first 3 lines each contain the details of one Employee, separated by a single space, in the order:\n\n  empId empName baseSalary\n\nThe next 2 lines each contain the details of one Manager, separated by a single space, in the order:\n\n  empId empName baseSalary teamSize'
            },
            {
                h: 'Output Format',
                t: 'Print a single line containing the empName of the employee with the highest bonus.'
            }
        ],
        testCases: [
            {
                input: 'E001 Alice 50000\nE002 Bob 60000\nE003 Carol 45000\nM001 Dave 55000 5\nM002 Eve 52000 8',
                expected: 'Eve',
                hidden: false
            },
            {
                input: 'E001 Arjun 90000\nE002 Bala 10000\nE003 Chitra 20000\nM001 Deepak 30000 1\nM002 Esha 40000 2',
                expected: 'Arjun',
                hidden: true
            },
            {
                input: 'E1 Xavier 50000\nE2 Yamini 50000\nE3 Zoya 50000\nM1 Pranav 10000 20\nM2 Qadir 10000 5',
                expected: 'Pranav',
                hidden: true
            },
            {
                input: 'E1 Kavya 70000\nE2 Liam 65000\nE3 Mona 72000\nM1 Nial 60000 2\nM2 Omar 50000 3',
                expected: 'Mona',
                hidden: true
            }
        ]
    },
    {
        id: 'q3-student',
        num: 3,
        title: 'Student Grade System',
        marks: 35,
        year: '2024',
        type: 'oop',
        statement: [
            {
                h: 'Problem Description',
                t: 'Create a class Student with the following private attributes:\n\n' +
                   '  studentId (int)\n  studentName (String)\n  marks (double)\n  subject (String)\n\n' +
                   'Write appropriate getters and setters and a parameterized constructor which takes the attributes in the above sequence. Add a method getGrade() which returns a char based on marks:\n\n' +
                   '  marks >= 90 : \'A\'\n  marks >= 75 : \'B\'\n  marks >= 60 : \'C\'\n  marks >= 50 : \'D\'\n  otherwise   : \'F\'\n\n' +
                   'Create a driver class called Solution. In the Solution class, implement a static method getTopStudentsBySubject(Student[] students, String subject) which returns the names of all students studying the given subject (comparison is case-insensitive), sorted by marks in descending order.\n\n' +
                   'In the main method, read the details of 5 Student objects followed by a subject name, call the static method, and print each returned name on a new line. If no student is found for the given subject, print "No students found".'
            },
            {
                h: 'Input Format',
                t: 'The first 5 lines each contain the details of one Student, separated by a single space, in the order:\n\n  studentId studentName marks subject\n\nThe last line contains the subject name to search for.'
            },
            {
                h: 'Output Format',
                t: 'Print the names of the matching students, one per line, sorted by marks in descending order.\n\nIf there are no matching students, print exactly:\n\n  No students found'
            }
        ],
        testCases: [
            {
                input: '1 Alice 88 Math\n2 Bob 92 Science\n3 Carol 76 Math\n4 Dave 95 Math\n5 Eve 81 Science\nMath',
                expected: 'Dave\nAlice\nCarol',
                hidden: false
            },
            {
                input: '1 Alice 88 Math\n2 Bob 92 Science\n3 Carol 76 Math\n4 Dave 95 Math\n5 Eve 81 Science\nHistory',
                expected: 'No students found',
                hidden: true
            },
            {
                input: '1 Ravi 55 physics\n2 Sita 90 Physics\n3 Tara 70 PHYSICS\n4 Uma 60 Chemistry\n5 Ved 85 physics\nphysics',
                expected: 'Sita\nVed\nTara\nRavi',
                hidden: true
            },
            {
                input: '1 Ali 45 English\n2 Bea 67 Math\n3 Cid 89 Science\n4 Dee 34 English\n5 Eli 78 Art\nScience',
                expected: 'Cid',
                hidden: true
            }
        ]
    },
    {
        id: 'q4-library',
        num: 4,
        title: 'Library Book Management',
        marks: 35,
        year: '2023',
        type: 'oop',
        statement: [
            {
                h: 'Problem Description',
                t: 'Create a class Book with the following private attributes:\n\n' +
                   '  bookId (int)\n  title (String)\n  author (String)\n  price (double)\n  available (boolean)\n\n' +
                   'Write appropriate getters and setters and a parameterized constructor which takes the attributes in the above sequence.\n\n' +
                   'Create a driver class called Solution. In the Solution class, implement a static method getAvailableBooksByAuthor(Book[] books, String author) which returns the titles of all books written by the given author (comparison is case-insensitive) that are currently available (available is true), sorted alphabetically in ascending order.\n\n' +
                   'In the main method, read the details of 5 Book objects followed by an author name, call the static method, and print each returned title on a new line. If no such book is found, print "No books available".'
            },
            {
                h: 'Input Format',
                t: 'The first 5 lines each contain the details of one Book, separated by a single space, in the order:\n\n  bookId title author price available\n\nThe available field is given as the word true or false. The title and author do not contain spaces.\n\nThe last line contains the author name to search for.'
            },
            {
                h: 'Output Format',
                t: 'Print the titles of the matching available books, one per line, sorted alphabetically.\n\nIf there are no matching books, print exactly:\n\n  No books available'
            }
        ],
        testCases: [
            {
                input: '1 CleanCode RobertMartin 45.0 true\n2 Refactoring FowlerMartin 55.0 false\n3 DesignPatterns GoF 60.0 true\n4 WorkingCode RobertMartin 40.0 true\n5 AgileCode RobertMartin 50.0 false\nRobertMartin',
                expected: 'CleanCode\nWorkingCode',
                hidden: false
            },
            {
                input: '1 JavaBasics JamesG 30.0 false\n2 PyIntro Guido 25.0 true\n3 JavaPro JamesG 50.0 false\n4 CBook Dennis 20.0 true\n5 GoLang RobPike 35.0 true\njamesg',
                expected: 'No books available',
                hidden: true
            },
            {
                input: '1 Zebra AuthorX 10.0 true\n2 Apple AuthorX 12.0 true\n3 Mango authorx 15.0 true\n4 Apple2 AuthorY 9.0 true\n5 Kiwi AUTHORX 8.0 false\nAuthorX',
                expected: 'Apple\nMango\nZebra',
                hidden: true
            },
            {
                input: '1 Hamlet Shakespeare 20.0 true\n2 Macbeth Shakespeare 25.0 false\n3 Othello shakespeare 22.0 true\n4 Poems Keats 15.0 true\n5 Odes keats 18.0 false\nKEATS',
                expected: 'Poems',
                hidden: true
            }
        ]
    },
    {
        id: 'q5-bank',
        num: 5,
        title: 'Bank Account — Transaction Processing',
        marks: 35,
        year: '2023',
        type: 'oop',
        statement: [
            {
                h: 'Problem Description',
                t: 'Create a class BankAccount with the following private attributes:\n\n' +
                   '  accountId (int)\n  holderName (String)\n  balance (double)\n\n' +
                   'Write appropriate getters and a parameterized constructor which takes the attributes in the above sequence. Add the following methods:\n\n' +
                   '  deposit(double amount) — adds the amount to the balance. This counts as a successful transaction.\n' +
                   '  withdraw(double amount) — deducts the amount from the balance if the balance is sufficient (amount <= balance). This counts as a successful transaction. If the balance is insufficient, print "Insufficient balance" and do not count it as a transaction.\n\n' +
                   'Create a driver class called Solution. In the Solution class, implement a static method getHighestBalanceAccount(BankAccount[] accounts) which returns the account with the highest final balance. Assume there is exactly one such account.\n\n' +
                   'In the main method, read the details of 3 BankAccount objects. Then read transaction instructions, one per line, until the line "END" is read. Each transaction instruction is of the form:\n\n' +
                   '  D accountId amount  — deposit the amount into the given account\n  W accountId amount  — withdraw the amount from the given account\n\n' +
                   'After the END line, print three lines: the holderName of the account with the highest balance, the total number of successful transactions processed across all accounts, and the final balance of that highest-balance account.'
            },
            {
                h: 'Input Format',
                t: 'The first 3 lines each contain the details of one BankAccount, separated by a single space, in the order:\n\n  accountId holderName balance\n\nEach following line contains a transaction instruction as described above. Input ends with a line containing only:\n\n  END'
            },
            {
                h: 'Output Format',
                t: 'For every withdrawal with insufficient balance, print "Insufficient balance" on its own line at the moment it is processed.\n\nAfter processing all transactions, print three lines:\n\n  Line 1: holderName of the account with the highest balance\n  Line 2: total number of successful transactions processed\n  Line 3: final balance of that account, printed as a double (e.g. 9000.0)'
            }
        ],
        testCases: [
            {
                input: '1 Alice 5000\n2 Bob 3000\n3 Carol 8000\nD 1 2000\nW 2 500\nD 3 1000\nEND',
                expected: 'Carol\n3\n9000.0',
                hidden: false
            },
            {
                input: '1 Raj 1000\n2 Sim 2000\n3 Tom 500\nW 1 5000\nD 2 300\nW 3 200\nEND',
                expected: 'Insufficient balance\nSim\n2\n2300.0',
                hidden: true
            },
            {
                input: '1 Anu 7000\n2 Ben 7000\n3 Cat 6999\nD 3 1\nW 1 500\nD 2 100\nEND',
                expected: 'Ben\n3\n7100.0',
                hidden: true
            },
            {
                input: '1 Kim 100\n2 Lee 50\n3 Max 100\nW 2 60\nD 1 40\nW 3 100\nW 2 60\nD 2 10\nEND',
                expected: 'Insufficient balance\nInsufficient balance\nKim\n3\n140.0',
                hidden: true
            }
        ]
    },

    // ============================================================
    // PART 2 — 15-Mark Logic / Algorithm Problems
    // ============================================================
    {
        id: 'q6-anagram',
        num: 6,
        title: 'Anagram Check for Two Strings',
        marks: 15,
        year: '2025',
        type: 'logic',
        statement: [
            {
                h: 'Problem Description',
                t: 'Given two strings S1 and S2 (each may contain spaces), determine whether they are anagrams of each other. Ignore case and ignore all spaces while comparing.\n\nTwo strings are anagrams if one can be formed by rearranging the characters of the other.'
            },
            {
                h: 'Input Format',
                t: 'The first line contains the string S1.\nThe second line contains the string S2.'
            },
            {
                h: 'Output Format',
                t: 'Print exactly one line:\n\n  Anagram\n\nif the two strings are anagrams, otherwise:\n\n  Not Anagram'
            }
        ],
        testCases: [
            {
                input: 'Listen\nSilent',
                expected: 'Anagram',
                hidden: false
            },
            {
                input: 'Dormitory\nDirty Room',
                expected: 'Anagram',
                hidden: true
            },
            {
                input: 'Hello\nWorld',
                expected: 'Not Anagram',
                hidden: true
            },
            {
                input: 'aab\nabb',
                expected: 'Not Anagram',
                hidden: true
            }
        ]
    },
    {
        id: 'q7-consecutive',
        num: 7,
        title: 'Longest Consecutive Subsequence',
        marks: 15,
        year: '2024',
        type: 'logic',
        statement: [
            {
                h: 'Problem Description',
                t: 'Given an array of N integers, find the length of the longest sequence of consecutive integers that can be formed using elements of the array. The elements of the sequence need not be at contiguous positions in the array.\n\nFor example, in the array [100, 4, 200, 1, 3, 2] the longest consecutive sequence is [1, 2, 3, 4], so the answer is 4.'
            },
            {
                h: 'Input Format',
                t: 'The first line contains the integer N.\nThe second line contains N space-separated integers.'
            },
            {
                h: 'Output Format',
                t: 'Print a single integer — the length of the longest consecutive sequence.'
            }
        ],
        testCases: [
            {
                input: '6\n100 4 200 1 3 2',
                expected: '4',
                hidden: false
            },
            {
                input: '8\n10 5 12 3 55 30 4 11',
                expected: '3',
                hidden: true
            },
            {
                input: '5\n7 7 7 7 7',
                expected: '1',
                hidden: true
            },
            {
                input: '10\n4 9 1 7 3 8 2 10 5 6',
                expected: '10',
                hidden: true
            }
        ]
    },
    {
        id: 'q8-spiral',
        num: 8,
        title: 'Matrix Spiral Print',
        marks: 15,
        year: '2024',
        type: 'logic',
        statement: [
            {
                h: 'Problem Description',
                t: 'Given an M x N matrix of integers, print all its elements in spiral order — clockwise, starting from the top-left element and moving from the outside towards the inside.'
            },
            {
                h: 'Input Format',
                t: 'The first line contains two space-separated integers M and N — the number of rows and columns.\nEach of the next M lines contains N space-separated integers — one row of the matrix.'
            },
            {
                h: 'Output Format',
                t: 'Print all M*N elements in spiral order on a single line, separated by single spaces.'
            }
        ],
        testCases: [
            {
                input: '3 3\n1 2 3\n4 5 6\n7 8 9',
                expected: '1 2 3 6 9 8 7 4 5',
                hidden: false
            },
            {
                input: '2 4\n1 2 3 4\n5 6 7 8',
                expected: '1 2 3 4 8 7 6 5',
                hidden: true
            },
            {
                input: '4 1\n3\n6\n9\n12',
                expected: '3 6 9 12',
                hidden: true
            },
            {
                input: '3 4\n1 2 3 4\n5 6 7 8\n9 10 11 12',
                expected: '1 2 3 4 8 12 11 10 9 5 6 7',
                hidden: true
            }
        ]
    },
    {
        id: 'q9-parentheses',
        num: 9,
        title: 'Balanced Parentheses Check',
        marks: 15,
        year: '2023',
        type: 'logic',
        statement: [
            {
                h: 'Problem Description',
                t: 'Given a string containing only the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine whether the input string is valid (balanced).\n\nA string is valid if every opening bracket is closed by a bracket of the same type, and brackets are closed in the correct order.'
            },
            {
                h: 'Input Format',
                t: 'A single line containing the bracket string.'
            },
            {
                h: 'Output Format',
                t: 'Print exactly one line:\n\n  Balanced\n\nif the string is valid, otherwise:\n\n  Not Balanced'
            }
        ],
        testCases: [
            {
                input: '{[()]}',
                expected: 'Balanced',
                hidden: false
            },
            {
                input: '([)]',
                expected: 'Not Balanced',
                hidden: true
            },
            {
                input: '()[]{}',
                expected: 'Balanced',
                hidden: true
            },
            {
                input: '(((',
                expected: 'Not Balanced',
                hidden: true
            }
        ]
    },
    {
        id: 'q10-binary-substrings',
        num: 10,
        title: 'Count Substrings with Equal 0s and 1s',
        marks: 15,
        year: '2023',
        type: 'logic',
        statement: [
            {
                h: 'Problem Description',
                t: 'Given a binary string (containing only the characters \'0\' and \'1\'), count the total number of substrings that contain an equal number of 0s and 1s.\n\nFor example, for the string "0011": the substrings with an equal number of 0s and 1s are "01" (positions 2-3) and "0011" (positions 1-4), so the answer is 2.'
            },
            {
                h: 'Input Format',
                t: 'A single line containing the binary string.'
            },
            {
                h: 'Output Format',
                t: 'Print a single integer — the number of substrings with an equal number of 0s and 1s.'
            }
        ],
        testCases: [
            {
                input: '0011',
                expected: '2',
                hidden: false
            },
            {
                input: '0101',
                expected: '4',
                hidden: true
            },
            {
                input: '00110',
                expected: '4',
                hidden: true
            },
            {
                input: '1111',
                expected: '0',
                hidden: true
            }
        ]
    }
];
