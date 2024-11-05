import { v4 as uuidv4 } from 'uuid';
const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    firstName: "Aarav",
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        id: uuidv4(), // This will generate a unique ID
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Complete Report",
        description: "Prepare the monthly sales report.",
        date: "2024-10-20",
        category: "Sales"
      },
      {
        id: uuidv4(), // This will generate a unique ID
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Meeting",
        description: "Attend the weekly team meeting.",
        date: "2024-10-19",
        category: "Meetings"
      },
      {
        id: uuidv4(), // This will generate a unique ID
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Client Presentation",
        description: "Prepare presentation for new client.",
        date: "2024-10-22",
        category: "Client"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstName: "Vivaan",
    taskSummary: { active: 1, newTask: 0, completed: 1, failed: 0 },
    tasks: [
      {
        id: uuidv4(), // This will generate a unique ID
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Database Maintenance",
        description: "Perform routine database cleanup.",
        date: "2024-10-21",
        category: "Maintenance"
      },
      {
        id: uuidv4(), // This will generate a unique ID
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update System Logs",
        description: "Review and update logs for last week's activity.",
        date: "2024-10-19",
        category: "System"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstName: "Aditi",
    taskSummary: { active: 2, newTask: 1, completed: 0, failed: 0 },
    tasks: [
      {
        id: uuidv4(), // This will generate a unique ID
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Mockup",
        description: "Create mockup for new website redesign.",
        date: "2024-10-23",
        category: "Design"
      },
      {
        id: uuidv4(), // This will generate a unique ID
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team Review",
        description: "Review design ideas with the team.",
        date: "2024-10-22",
        category: "Meetings"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstName: "Ananya",
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        id: uuidv4(), // This will generate a unique ID
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Inventory Check",
        description: "Check and update office inventory.",
        date: "2024-10-18",
        category: "Inventory"
      },
      {
        id: uuidv4(), // This will generate a unique ID
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Supplier Meeting",
        description: "Meet with supplier to discuss delays.",
        date: "2024-10-19",
        category: "Suppliers"
      },
      {
        id: uuidv4(), // This will generate a unique ID
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Place New Orders",
        description: "Prepare and place orders for office supplies.",
        date: "2024-10-25",
        category: "Procurement"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstName: "Kavya",
    taskSummary: { active: 2, newTask: 1, completed: 0, failed: 0 },
    tasks: [
      {
        id: uuidv4(), // This will generate a unique ID
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Social Media Campaign",
        description: "Launch new social media marketing campaign.",
        date: "2024-10-20",
        category: "Marketing"
      },
      {
        id: uuidv4(), // This will generate a unique ID
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Email Newsletter",
        description: "Draft and send the monthly newsletter.",
        date: "2024-10-22",
        category: "Communications"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    firstName: "Raj"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    
    return {employees, admin};
    
}