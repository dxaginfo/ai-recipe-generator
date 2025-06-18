const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Recipe generation endpoint (placeholder for AI service)
app.post('/api/generate-recipe', (req, res) => {
  const { ingredients, preferences, mealType } = req.body;
  
  // This would call an AI service to generate a recipe
  // For now, return a mock response
  setTimeout(() => {
    res.json({
      success: true,
      recipe: {
        title: `Recipe with ${ingredients[0]}`,
        description: `A delicious meal made with ${ingredients.join(', ')}.`,
        ingredients: ingredients.map(ing => `1 unit of ${ing}`),
        instructions: [
          'Prepare all ingredients',
          'Mix them together',
          'Cook until done',
          'Serve and enjoy!'
        ],
        nutritionalInfo: {
          calories: '350 kcal',
          protein: '15g',
          carbs: '40g',
          fat: '12g'
        },
        prepTime: '15 minutes',
        cookTime: '25 minutes',
        servings: 4
      }
    });
  }, 1000);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
