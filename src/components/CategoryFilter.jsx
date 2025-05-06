function CategoryFilter({categories, selectedCategories, onToggle}){
    return(
        <div className="filters">
            {categories.map(category => (
                <label key={category}>
                <input 
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => onToggle(category)}
                />
                {` ${category}`}
                </label>
                
            ))}
        </div>
    );
    
};

export default CategoryFilter;