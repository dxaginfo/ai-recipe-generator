import React, { useState } from 'react';
import './RecipeGeneratorPage.css';

interface Ingredient {
  id: number;
  name: string;
}

interface DietaryPreference {
  id: string;
  name: string;
  selected: boolean;
}

const RecipeGeneratorPage: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [dietaryPreferences, setDietaryPreferences] = useState<DietaryPreference[]>([
    { id: 'vegetarian', name: 'Vegetarian', selected: false },
    { id: 'vegan', name: 'Vegan', selected: false },
    { id: 'gluten-free', name: 'Gluten-Free', selected: false },
    { id: 'dairy-free', name: 'Dairy-Free', selected: false },
    { id: 'keto', name: 'Keto', selected: false },
    { id: 'paleo', name: 'Paleo', selected: false },
    { id: 'low-carb', name: 'Low Carb', selected: false },
    { id: 'low-fat', name: 'Low Fat', selected: false },
  ]);
  const [mealType, setMealType] = useState('any');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState(null);

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== '') {
      setIngredients([
        ...ingredients,
        { id: Date.now(), name: newIngredient.trim() }
      ]);
      setNewIngredient('');
    }
  };

  const handleRemoveIngredient = (id: number) => {
    setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
  };

  const handleDietaryPreferenceChange = (id: string) => {
    setDietaryPreferences(dietaryPreferences.map(pref => 
      pref.id === id ? { ...pref, selected: !pref.selected } : pref
    ));
  };

  const handleGenerateRecipe = () => {
    // In a real implementation, this would call an API with AI recipe generation
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsGenerating(false);
      // This would be replaced with actual API response data
      setGeneratedRecipe({
        title: 'Simulated AI Generated Recipe',
        description: 'This is a placeholder for a real AI-generated recipe based on your ingredients and preferences.',
        ingredients: ingredients.map(i => i.name),
        instructions: [
          'Step 1: Prepare the ingredients',
          'Step 2: Cook according to instructions',
          'Step 3: Serve and enjoy!'
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
      });
    }, 2000);
  };

  return (
    <div className="recipe-generator-page">
      <h1>Create Your Recipe</h1>
      
      <div className="generator-container">
        <div className="input-section">
          <div className="ingredients-section">
            <h2>Your Ingredients</h2>
            <div className="add-ingredient">
              <input
                type="text"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                placeholder="Enter an ingredient"
                onKeyPress={(e) => e.key === 'Enter' && handleAddIngredient()}
              />
              <button onClick={handleAddIngredient}>Add</button>
            </div>
            
            <div className="ingredients-list">
              {ingredients.length === 0 ? (
                <div className="empty-message">Add some ingredients to get started!</div>
              ) : (
                ingredients.map(ingredient => (
                  <div key={ingredient.id} className="ingredient-pill">
                    {ingredient.name}
                    <button 
                      className="remove-btn" 
                      onClick={() => handleRemoveIngredient(ingredient.id)}
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
          
          <div className="preferences-section">
            <h2>Dietary Preferences</h2>
            <div className="preference-checkboxes">
              {dietaryPreferences.map(preference => (
                <div key={preference.id} className="preference-item">
                  <input
                    type="checkbox"
                    id={preference.id}
                    checked={preference.selected}
                    onChange={() => handleDietaryPreferenceChange(preference.id)}
                  />
                  <label htmlFor={preference.id}>{preference.name}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="meal-type-section">
            <h2>Meal Type</h2>
            <select 
              value={mealType} 
              onChange={(e) => setMealType(e.target.value)}
            >
              <option value="any">Any Type</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
              <option value="snack">Snack</option>
            </select>
          </div>
          
          <button 
            className="generate-btn" 
            onClick={handleGenerateRecipe}
            disabled={ingredients.length === 0 || isGenerating}
          >
            {isGenerating ? 'Generating...' : 'Generate Recipe'}
          </button>
        </div>
        
        <div className="result-section">
          {generatedRecipe ? (
            <div className="recipe-card">
              <h2 className="recipe-title">{generatedRecipe.title}</h2>
              <p className="recipe-description">{generatedRecipe.description}</p>
              
              <div className="recipe-meta">
                <div className="meta-item">
                  <span className="meta-label">Prep Time:</span>
                  <span className="meta-value">{generatedRecipe.prepTime}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Cook Time:</span>
                  <span className="meta-value">{generatedRecipe.cookTime}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Servings:</span>
                  <span className="meta-value">{generatedRecipe.servings}</span>
                </div>
              </div>
              
              <div className="recipe-ingredients">
                <h3>Ingredients</h3>
                <ul>
                  {generatedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div className="recipe-instructions">
                <h3>Instructions</h3>
                <ol>
                  {generatedRecipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              
              <div className="recipe-nutrition">
                <h3>Nutritional Information</h3>
                <div className="nutrition-grid">
                  <div className="nutrition-item">
                    <span className="nutrition-label">Calories:</span>
                    <span className="nutrition-value">{generatedRecipe.nutritionalInfo.calories}</span>
                  </div>
                  <div className="nutrition-item">
                    <span className="nutrition-label">Protein:</span>
                    <span className="nutrition-value">{generatedRecipe.nutritionalInfo.protein}</span>
                  </div>
                  <div className="nutrition-item">
                    <span className="nutrition-label">Carbs:</span>
                    <span className="nutrition-value">{generatedRecipe.nutritionalInfo.carbs}</span>
                  </div>
                  <div className="nutrition-item">
                    <span className="nutrition-label">Fat:</span>
                    <span className="nutrition-value">{generatedRecipe.nutritionalInfo.fat}</span>
                  </div>
                </div>
              </div>
              
              <div className="recipe-actions">
                <button className="save-btn">Save Recipe</button>
                <button className="print-btn">Print</button>
                <button className="share-btn">Share</button>
              </div>
            </div>
          ) : (
            <div className="placeholder-recipe">
              <div className="placeholder-icon">🍳</div>
              <h3>Your Recipe Will Appear Here</h3>
              <p>Add ingredients and preferences, then click "Generate Recipe" to create your custom dish.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeGeneratorPage;
