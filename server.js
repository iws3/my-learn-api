
import express from 'express';


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Define a simple GET route at the root path
// When someone visits http://yourserver.com/, this runs
app.get('/', (req, res) => {
 
  res.json({ 
    message: 'Welcome to my first API!',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});


app.get('/api/users', (req, res) => {
  // In a real app, this data would come from a database
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];
  
  res.json({ users });
});


app.post('/api/users', (req, res) => {

  const { name, email } = req.body;
  

  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Name and email are required' 
    });
  }
  
  
  const newUser = {
    id: Date.now(), 
    name,
    email
  };
  
  res.status(201).json({ 
    message: 'User created successfully',
    user: newUser 
  });
});


app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see it in action`);
});