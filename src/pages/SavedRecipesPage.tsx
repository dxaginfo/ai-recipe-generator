import React from 'react';
import './SavedRecipesPage.css';

const SavedRecipesPage: React.FC = () => {
  // This would normally fetch saved recipes from an API or local storage
  const savedRecipes = [];

  return (
    <div className="saved-recipes-page">
      <h1>Your Saved Recipes</h1>
      
      {savedRecipes.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <h2>No Saved Recipes Yet</h2>
          <p>When you save recipes, they will appear here for easy access.</p>
        </div>
      ) : (
        <div className="recipes-grid">
          {/* This would map through actual saved recipes */}
        </div>
      )}
    </div>
  );
};

export default SavedRecipesPage;
