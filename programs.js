// Java practical programs from the supplied laboratory list.
// Examples use fixed sample values so their output is visible on the website.
const programs = [
  {
    "experiment": "1.1",
    "program": "Program 1",
    "title": "Largest of Three Numbers",
    "category": "Conditionals",
    "description": "Finds the largest of three integers using if-else-if.",
    "code": "public class LargestOfThree {\n    public static void main(String[] args) {\n        int a = 15, b = 28, c = 10;\n\n        if (a >= b && a >= c)\n            System.out.println(a + \" is largest\");\n        else if (b >= a && b >= c)\n            System.out.println(b + \" is largest\");\n        else\n            System.out.println(c + \" is largest\");\n    }\n}",
    "output": "28 is largest"
  },
  {
    "experiment": "1.1",
    "program": "Program 2",
    "title": "Fibonacci Series",
    "category": "Loops",
    "description": "Generates the requested number of Fibonacci terms.",
    "code": "public class Fibonacci {\n    public static void main(String[] args) {\n        int terms = 8, first = 0, second = 1;\n        for (int i = 1; i <= terms; i++) {\n            System.out.print(first + \" \");\n            int next = first + second;\n            first = second;\n            second = next;\n        }\n    }\n}",
    "output": "0 1 1 2 3 5 8 13"
  },
  {
    "experiment": "1.2",
    "program": "Program 3",
    "title": "Prime Number Check",
    "category": "Conditionals",
    "description": "Checks whether a given integer is prime.",
    "code": "public class PrimeCheck {\n    public static void main(String[] args) {\n        int number = 29;\n        boolean prime = number > 1;\n\n        for (int i = 2; i <= number / i; i++) {\n            if (number % i == 0) {\n                prime = false;\n                break;\n            }\n        }\n        System.out.println(prime ? \"Prime number\" : \"Not a prime number\");\n    }\n}",
    "output": "Prime number"
  },
  {
    "experiment": "1.2",
    "program": "Program 4",
    "title": "Factorial: Iterative and Recursive",
    "category": "Methods",
    "description": "Calculates factorial using both iterative and recursive methods.",
    "code": "public class FactorialCompare {\n    static long recursiveFactorial(int n) {\n        if (n <= 1) return 1;\n        return n * recursiveFactorial(n - 1);\n    }\n\n    public static void main(String[] args) {\n        int n = 5;\n        long iterative = 1;\n        for (int i = 1; i <= n; i++)\n            iterative *= i;\n\n        System.out.println(\"Iterative factorial = \" + iterative);\n        System.out.println(\"Recursive factorial = \" + recursiveFactorial(n));\n    }\n}",
    "output": "Iterative factorial = 120\nRecursive factorial = 120"
  },
  {
    "experiment": "2.1",
    "program": "Program 1",
    "title": "Matrix Addition and Multiplication",
    "category": "Arrays",
    "description": "Performs matrix addition and multiplication on two 2x2 matrices.",
    "code": "public class MatrixOperations {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        int[][] b = {{5, 6}, {7, 8}};\n        int[][] sum = new int[2][2];\n        int[][] product = new int[2][2];\n\n        for (int i = 0; i < 2; i++) {\n            for (int j = 0; j < 2; j++) {\n                sum[i][j] = a[i][j] + b[i][j];\n                for (int k = 0; k < 2; k++)\n                    product[i][j] += a[i][k] * b[k][j];\n            }\n        }\n\n        System.out.println(\"Addition:\");\n        for (int[] row : sum) {\n            for (int value : row) System.out.print(value + \" \");\n            System.out.println();\n        }\n        System.out.println(\"Multiplication:\");\n        for (int[] row : product) {\n            for (int value : row) System.out.print(value + \" \");\n            System.out.println();\n        }\n    }\n}",
    "output": "Addition:\n6 8\n10 12\nMultiplication:\n19 22\n43 50"
  },
  {
    "experiment": "2.1",
    "program": "Program 2",
    "title": "Array Sorting in Ascending Order",
    "category": "Arrays",
    "description": "Sorts an integer array in ascending order using bubble sort.",
    "code": "public class ArraySort {\n    public static void main(String[] args) {\n        int[] a = {5, 2, 8, 1, 3};\n\n        for (int i = 0; i < a.length - 1; i++) {\n            for (int j = 0; j < a.length - 1 - i; j++) {\n                if (a[j] > a[j + 1]) {\n                    int temp = a[j];\n                    a[j] = a[j + 1];\n                    a[j + 1] = temp;\n                }\n            }\n        }\n\n        for (int value : a) System.out.print(value + \" \");\n    }\n}",
    "output": "1 2 3 5 8"
  },
  {
    "experiment": "2.2",
    "program": "Program 3",
    "title": "Binary Search",
    "category": "Arrays",
    "description": "Searches for a key in a sorted array using binary search.",
    "code": "public class BinarySearchDemo {\n    public static void main(String[] args) {\n        int[] a = {10, 20, 30, 40, 50, 60};\n        int key = 40, low = 0, high = a.length - 1;\n        int position = -1;\n\n        while (low <= high) {\n            int mid = (low + high) / 2;\n            if (a[mid] == key) {\n                position = mid;\n                break;\n            } else if (a[mid] < key) {\n                low = mid + 1;\n            } else {\n                high = mid - 1;\n            }\n        }\n\n        if (position >= 0)\n            System.out.println(\"Element found at index \" + position);\n        else\n            System.out.println(\"Element not found\");\n    }\n}",
    "output": "Element found at index 3"
  },
  {
    "experiment": "2.2",
    "program": "Program 4",
    "title": "Count Vowels and Consonants",
    "category": "Strings",
    "description": "Counts vowels and consonants in a given string.",
    "code": "public class VowelConsonantCount {\n    public static void main(String[] args) {\n        String text = \"Java Programming\".toLowerCase();\n        int vowels = 0, consonants = 0;\n\n        for (int i = 0; i < text.length(); i++) {\n            char ch = text.charAt(i);\n            if (ch >= 'a' && ch <= 'z') {\n                if (\"aeiou\".indexOf(ch) >= 0) vowels++;\n                else consonants++;\n            }\n        }\n\n        System.out.println(\"Vowels = \" + vowels);\n        System.out.println(\"Consonants = \" + consonants);\n    }\n}",
    "output": "Vowels = 5\nConsonants = 10"
  },
  {
    "experiment": "3.1",
    "program": "Program 1",
    "title": "Student Class and Display Details",
    "category": "OOP",
    "description": "Creates a Student class and displays student details.",
    "code": "class Student {\n    String name;\n    int rollNo;\n    double marks;\n\n    Student(String name, int rollNo, double marks) {\n        this.name = name;\n        this.rollNo = rollNo;\n        this.marks = marks;\n    }\n\n    void display() {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Roll No: \" + rollNo);\n        System.out.println(\"Marks: \" + marks);\n    }\n}\n\npublic class StudentDemo {\n    public static void main(String[] args) {\n        Student s = new Student(\"Pranav\", 101, 85.5);\n        s.display();\n    }\n}",
    "output": "Name: Pranav\nRoll No: 101\nMarks: 85.5"
  },
  {
    "experiment": "3.1",
    "program": "Program 2",
    "title": "Constructor Overloading",
    "category": "OOP",
    "description": "Demonstrates default and parameterized constructors.",
    "code": "class Student {\n    String name;\n    int age;\n\n    Student() {\n        name = \"Unknown\";\n        age = 0;\n    }\n\n    Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    void display() {\n        System.out.println(name + \" - \" + age);\n    }\n}\n\npublic class ConstructorOverload {\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        Student s2 = new Student(\"Pranav\", 20);\n        s1.display();\n        s2.display();\n    }\n}",
    "output": "Unknown - 0\nPranav - 20"
  },
  {
    "experiment": "3.2",
    "program": "Program 3",
    "title": "Method Overloading",
    "category": "OOP",
    "description": "Uses the same method name with different parameter lists.",
    "code": "public class MethodOverloading {\n    static int add(int a, int b) {\n        return a + b;\n    }\n\n    static double add(double a, double b) {\n        return a + b;\n    }\n\n    static int add(int a, int b, int c) {\n        return a + b + c;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(add(10, 20));\n        System.out.println(add(2.5, 3.5));\n        System.out.println(add(1, 2, 3));\n    }\n}",
    "output": "30\n6.0\n6"
  },
  {
    "experiment": "3.2",
    "program": "Program 4",
    "title": "Bank Account Operations",
    "category": "OOP",
    "description": "Performs deposit, withdrawal and balance enquiry operations.",
    "code": "class BankAccount {\n    private double balance;\n\n    BankAccount(double balance) {\n        this.balance = balance;\n    }\n\n    void deposit(double amount) {\n        balance += amount;\n        System.out.println(\"Deposited: \" + amount);\n    }\n\n    void withdraw(double amount) {\n        if (amount <= balance) {\n            balance -= amount;\n            System.out.println(\"Withdrawn: \" + amount);\n        } else {\n            System.out.println(\"Insufficient balance\");\n        }\n    }\n\n    void showBalance() {\n        System.out.println(\"Balance: \" + balance);\n    }\n}\n\npublic class BankDemo {\n    public static void main(String[] args) {\n        BankAccount account = new BankAccount(1000);\n        account.deposit(500);\n        account.withdraw(200);\n        account.showBalance();\n    }\n}",
    "output": "Deposited: 500.0\nWithdrawn: 200.0\nBalance: 1300.0"
  },
  {
    "experiment": "4.1",
    "program": "Program 1",
    "title": "Single Inheritance",
    "category": "Inheritance",
    "description": "Demonstrates a child class inheriting from one parent class.",
    "code": "class Animal {\n    void eat() {\n        System.out.println(\"Animal eats food\");\n    }\n}\n\nclass Dog extends Animal {\n    void bark() {\n        System.out.println(\"Dog barks\");\n    }\n}\n\npublic class SingleInheritance {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.eat();\n        d.bark();\n    }\n}",
    "output": "Animal eats food\nDog barks"
  },
  {
    "experiment": "4.1",
    "program": "Program 2",
    "title": "Multilevel Inheritance",
    "category": "Inheritance",
    "description": "Demonstrates inheritance across three levels.",
    "code": "class Animal {\n    void eat() {\n        System.out.println(\"Eating\");\n    }\n}\n\nclass Dog extends Animal {\n    void bark() {\n        System.out.println(\"Barking\");\n    }\n}\n\nclass Puppy extends Dog {\n    void weep() {\n        System.out.println(\"Weeping\");\n    }\n}\n\npublic class MultilevelInheritance {\n    public static void main(String[] args) {\n        Puppy p = new Puppy();\n        p.eat();\n        p.bark();\n        p.weep();\n    }\n}",
    "output": "Eating\nBarking\nWeeping"
  },
  {
    "experiment": "4.2",
    "program": "Program 3",
    "title": "Method Overriding",
    "category": "Inheritance",
    "description": "A subclass provides its own implementation of a parent method.",
    "code": "class Animal {\n    void sound() {\n        System.out.println(\"Animal makes a sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Dog barks\");\n    }\n}\n\npublic class MethodOverriding {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.sound();\n    }\n}",
    "output": "Dog barks"
  },
  {
    "experiment": "4.2",
    "program": "Program 4",
    "title": "Runtime Polymorphism",
    "category": "Inheritance",
    "description": "Demonstrates dynamic method dispatch using a parent reference.",
    "code": "class Animal {\n    void sound() {\n        System.out.println(\"Animal sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Dog barks\");\n    }\n}\n\npublic class DynamicDispatch {\n    public static void main(String[] args) {\n        Animal ref = new Dog();\n        ref.sound();\n    }\n}",
    "output": "Dog barks"
  },
  {
    "experiment": "5.1",
    "program": "Program 1",
    "title": "User-Defined Interface",
    "category": "Interfaces",
    "description": "Creates an interface and implements it in a class.",
    "code": "interface Printable {\n    void print();\n}\n\nclass Document implements Printable {\n    public void print() {\n        System.out.println(\"Printing document\");\n    }\n}\n\npublic class InterfaceDemo {\n    public static void main(String[] args) {\n        Printable p = new Document();\n        p.print();\n    }\n}",
    "output": "Printing document"
  },
  {
    "experiment": "5.1",
    "program": "Program 2",
    "title": "Multiple Inheritance Using Interfaces",
    "category": "Interfaces",
    "description": "Implements two interfaces in one Java class.",
    "code": "interface Camera {\n    void takePhoto();\n}\n\ninterface MusicPlayer {\n    void playMusic();\n}\n\nclass SmartPhone implements Camera, MusicPlayer {\n    public void takePhoto() {\n        System.out.println(\"Photo captured\");\n    }\n\n    public void playMusic() {\n        System.out.println(\"Music playing\");\n    }\n}\n\npublic class MultipleInterfaces {\n    public static void main(String[] args) {\n        SmartPhone phone = new SmartPhone();\n        phone.takePhoto();\n        phone.playMusic();\n    }\n}",
    "output": "Photo captured\nMusic playing"
  },
  {
    "experiment": "5.2",
    "program": "Program 3",
    "title": "User-Defined Packages",
    "category": "Packages",
    "description": "Shows package creation and importing a class from that package. Save the two files in the shown folders.",
    "code": "// File: mypack/Message.java\npackage mypack;\n\npublic class Message {\n    public void show() {\n        System.out.println(\"Hello from user-defined package\");\n    }\n}\n\n// File: PackageDemo.java (outside mypack)\nimport mypack.Message;\n\npublic class PackageDemo {\n    public static void main(String[] args) {\n        Message m = new Message();\n        m.show();\n    }\n}",
    "output": "Hello from user-defined package\n\nCompile from the parent folder:\njavac mypack/Message.java PackageDemo.java\njava PackageDemo"
  },
  {
    "experiment": "5.2",
    "program": "Program 4",
    "title": "Abstract Class and Interface",
    "category": "Abstraction",
    "description": "Demonstrates an abstract class and an interface together.",
    "code": "interface Printable {\n    void print();\n}\n\nabstract class Shape {\n    abstract void draw();\n}\n\nclass Circle extends Shape implements Printable {\n    void draw() {\n        System.out.println(\"Drawing circle\");\n    }\n\n    public void print() {\n        System.out.println(\"Printing circle\");\n    }\n}\n\npublic class AbstractInterfaceDemo {\n    public static void main(String[] args) {\n        Circle c = new Circle();\n        c.draw();\n        c.print();\n    }\n}",
    "output": "Drawing circle\nPrinting circle"
  },
  {
    "experiment": "6.1",
    "program": "Program 1",
    "title": "ArithmeticException Handling",
    "category": "Exceptions",
    "description": "Handles division by zero using try-catch.",
    "code": "public class ArithmeticExceptionDemo {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0;\n            System.out.println(result);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Cannot divide by zero\");\n        }\n    }\n}",
    "output": "Cannot divide by zero"
  },
  {
    "experiment": "6.1",
    "program": "Program 2",
    "title": "ArrayIndexOutOfBoundsException",
    "category": "Exceptions",
    "description": "Handles an invalid array index using try-catch.",
    "code": "public class ArrayExceptionDemo {\n    public static void main(String[] args) {\n        int[] numbers = {10, 20, 30};\n\n        try {\n            System.out.println(numbers[5]);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Array index is out of bounds\");\n        }\n    }\n}",
    "output": "Array index is out of bounds"
  },
  {
    "experiment": "6.2",
    "program": "Program 3",
    "title": "NumberFormatException",
    "category": "Exceptions",
    "description": "Handles invalid text-to-number conversion.",
    "code": "public class NumberFormatDemo {\n    public static void main(String[] args) {\n        String value = \"12A\";\n\n        try {\n            int number = Integer.parseInt(value);\n            System.out.println(number);\n        } catch (NumberFormatException e) {\n            System.out.println(\"Invalid number format\");\n        }\n    }\n}",
    "output": "Invalid number format"
  },
  {
    "experiment": "6.2",
    "program": "Program 4",
    "title": "User-Defined Exception",
    "category": "Exceptions",
    "description": "Creates and handles a custom exception for an invalid age.",
    "code": "class InvalidAgeException extends Exception {\n    InvalidAgeException(String message) {\n        super(message);\n    }\n}\n\npublic class CustomExceptionDemo {\n    static void checkAge(int age) throws InvalidAgeException {\n        if (age < 18)\n            throw new InvalidAgeException(\"Age must be 18 or above\");\n        System.out.println(\"Eligible\");\n    }\n\n    public static void main(String[] args) {\n        try {\n            checkAge(16);\n        } catch (InvalidAgeException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}",
    "output": "Age must be 18 or above"
  },
  {
    "experiment": "7.1",
    "program": "Program 1",
    "title": "Thread Class",
    "category": "Threads",
    "description": "Creates and starts a thread by extending the Thread class.",
    "code": "class MyThread extends Thread {\n    public void run() {\n        System.out.println(\"Thread is running\");\n    }\n}\n\npublic class ThreadClassDemo {\n    public static void main(String[] args) {\n        MyThread t = new MyThread();\n        t.start();\n    }\n}",
    "output": "Thread is running"
  },
  {
    "experiment": "7.1",
    "program": "Program 2",
    "title": "Runnable Interface",
    "category": "Threads",
    "description": "Creates a thread by implementing the Runnable interface.",
    "code": "class MyTask implements Runnable {\n    public void run() {\n        System.out.println(\"Runnable task is running\");\n    }\n}\n\npublic class RunnableDemo {\n    public static void main(String[] args) {\n        Thread t = new Thread(new MyTask());\n        t.start();\n    }\n}",
    "output": "Runnable task is running"
  },
  {
    "experiment": "7.2",
    "program": "Program 3",
    "title": "Thread Synchronization",
    "category": "Threads",
    "description": "Uses synchronized method to safely update a shared counter.",
    "code": "class Counter {\n    private int count = 0;\n\n    synchronized void increment() {\n        count++;\n    }\n\n    int getCount() {\n        return count;\n    }\n}\n\npublic class SynchronizationDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n\n        Thread t1 = new Thread(() -> {\n            for (int i = 0; i < 1000; i++) counter.increment();\n        });\n        Thread t2 = new Thread(() -> {\n            for (int i = 0; i < 1000; i++) counter.increment();\n        });\n\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(\"Final count = \" + counter.getCount());\n    }\n}",
    "output": "Final count = 2000"
  },
  {
    "experiment": "7.2",
    "program": "Program 4",
    "title": "ArrayList Operations",
    "category": "Collections",
    "description": "Performs insertion, deletion and searching in an ArrayList.",
    "code": "import java.util.ArrayList;\n\npublic class ArrayListOperations {\n    public static void main(String[] args) {\n        ArrayList<String> names = new ArrayList<>();\n\n        names.add(\"Amit\");\n        names.add(\"Pranav\");\n        names.add(\"Rahul\");\n        System.out.println(\"After insertion: \" + names);\n\n        names.remove(\"Amit\");\n        System.out.println(\"After deletion: \" + names);\n\n        System.out.println(\"Pranav found: \" + names.contains(\"Pranav\"));\n    }\n}",
    "output": "After insertion: [Amit, Pranav, Rahul]\nAfter deletion: [Pranav, Rahul]\nPranav found: true"
  },
  {
    "experiment": "8.1",
    "program": "Program 1",
    "title": "Read Data from a Text File",
    "category": "File Handling",
    "description": "Reads and displays all lines from input.txt. Create the file with the sample text first.",
    "code": "import java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class ReadFile {\n    public static void main(String[] args) {\n        try (BufferedReader br = new BufferedReader(new FileReader(\"input.txt\"))) {\n            String line;\n            while ((line = br.readLine()) != null) {\n                System.out.println(line);\n            }\n        } catch (IOException e) {\n            System.out.println(\"File error: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Java is easy to learn.\nPractice every day."
  },
  {
    "experiment": "8.1",
    "program": "Program 2",
    "title": "Write Data into a Text File",
    "category": "File Handling",
    "description": "Writes text into output.txt, creating or replacing the file.",
    "code": "import java.io.FileWriter;\nimport java.io.IOException;\n\npublic class WriteFile {\n    public static void main(String[] args) {\n        try (FileWriter writer = new FileWriter(\"output.txt\")) {\n            writer.write(\"Welcome to Java File Handling!\");\n            System.out.println(\"Data written successfully\");\n        } catch (IOException e) {\n            System.out.println(\"File error: \" + e.getMessage());\n        }\n    }\n}",
    "output": "Data written successfully"
  },
  {
    "experiment": "8.2",
    "program": "Program 3",
    "title": "Copy Contents from One File to Another",
    "category": "File Handling",
    "description": "Copies the contents of source.txt into destination.txt.",
    "code": "import java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\n\npublic class CopyFile {\n    public static void main(String[] args) {\n        try (FileInputStream in = new FileInputStream(\"source.txt\");\n             FileOutputStream out = new FileOutputStream(\"destination.txt\")) {\n            int data;\n            while ((data = in.read()) != -1) {\n                out.write(data);\n            }\n            System.out.println(\"File copied successfully\");\n        } catch (IOException e) {\n            System.out.println(\"File error: \" + e.getMessage());\n        }\n    }\n}",
    "output": "File copied successfully"
  },
  {
    "experiment": "8.2",
    "program": "Program 4",
    "title": "Count Words, Lines and Characters in a File",
    "category": "File Handling",
    "description": "Counts lines, words and characters in input.txt.",
    "code": "import java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class FileCount {\n    public static void main(String[] args) {\n        int lines = 0, words = 0, characters = 0;\n\n        try (BufferedReader br = new BufferedReader(new FileReader(\"input.txt\"))) {\n            String line;\n            while ((line = br.readLine()) != null) {\n                lines++;\n                characters += line.length();\n                String trimmed = line.trim();\n                if (!trimmed.isEmpty())\n                    words += trimmed.split(\"\\\\s+\").length;\n            }\n\n            System.out.println(\"Lines = \" + lines);\n            System.out.println(\"Words = \" + words);\n            System.out.println(\"Characters = \" + characters);\n        } catch (IOException e) {\n            System.out.println(\"File error: \" + e.getMessage());\n        }\n    }\n}",
    "output": "For input.txt containing:\nJava is easy to learn.\nPractice every day.\n\nLines = 2\nWords = 8\nCharacters = 40"
  }
];
