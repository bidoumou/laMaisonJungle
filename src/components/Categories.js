import '../styles/Categories.css'

function Categories({setActiveCategory, categories, activeCategory}){

    
    return (
        <div className="lmj-categories">
            <select 
                value={activeCategory} 
                className="lmj-categories-select"
                onChange={(e) => setActiveCategory(e.target.value)}
            >
                <option value=''>---</option>
                {categories.map((category) =>
                    <option key={category} value={category}>{category}</option>
                )}
            </select>
        </div>
    )
}

export default Categories