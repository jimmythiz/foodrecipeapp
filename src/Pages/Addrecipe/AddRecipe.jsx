import { useState, useRef } from "react";
import './AddRecipe.css'

const MAX_IMAGES = 5; 
const MAX_FILE_SIZE_MB = 2;


const AddRecipe = () => {
    const [images, setImages]=useState([])
    const [error, setError] = useState('');
    const inputRef = useRef(null);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = [];

        if (images.length + files.length > MAX_IMAGES) {
            setError(`You can upload up to ${MAX_IMAGES} images total.`);
            return;
        }
        for (let file of files) {
            if (!file.type.startsWith('image/')) {
              setError('Only image files are allowed.');
              return;
            }
            if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
              setError(`File "${file.name}" exceeds ${MAX_FILE_SIZE_MB}MB limit.`);
              return;
            }
          }

        const fileReaders = files.map(file => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve({ name: file.name, src: reader.result });
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        });
    
        Promise.all(fileReaders)
        .then(results => {
            setImages(prev => [...prev, ...results]);
            setError('');
            if (inputRef.current) {
              inputRef.current.value = ''; 
            }
          })
          .catch(err => console.error("Error reading files:", err));
      };

      const handleRemoveImage = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
        setError('');
      };


      const [formData, setFormData] = useState({
        title: '',
        description: '',
        prepTime: '',
        ingredients: '',
        cuisine: 'Italian',
        instructions: ''
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalRecipeData = {
          title: formData.title,
          description: formData.description,
          prepTime: formData.prepTime,
          ingredients: formData.ingredients,
          cuisine: formData.cuisine,
          instructions: formData.instructions,
          images: images 
        };
      
    }
    


    return ( 
        <>
        <div className="create-recipe-div">
            <h2>Create new recipe</h2>
        </div>
        <div className="new-recipe-info">
            <form action='' onSubmit={handleSubmit}>
                <label htmlFor="Title">Recipe Title:</label>
                <input type="text" value={formData.title} onChange={handleChange} name="title"/>

                <h2>Upload Images</h2>
                <input type="file" multiple accept="image/*" onChange={handleImageChange} disabled={images.length >= MAX_IMAGES}/>
                {error && <p className="error-message">{error}</p>}
                <div className="image-preview-wrapper">
                    {images.map((image, index) => (
                        <div key={index} className="image-preview">
                            <img src={image.src} alt={image.name}/>
                            <button className="remove-image-btn"
                            onClick={() => handleRemoveImage(index)}>
                        ×</button>
                        <p className="image-name">{image.name}</p>
                        </div>
                        ))}
                    </div>
                
                    <label htmlFor="Description">Description:</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange}/>

                    <label htmlFor="Title">Preparation Time (minutes):</label>
                    <input type="number" name="prepTime" value={formData.prepTime} onChange={handleChange}/>

                    <label htmlFor="Title">Ingredients</label>
                    <input type="text"  name="ingredients" value={formData.ingredients} onChange={handleChange}/>

                    <label htmlFor="Title">Cuisine:</label>
                    <select value={formData.cuisine} name="cuisine" onChange={handleChange}>
                        <option value="Italain">Italian</option>
                        <option value="Mexican">Mexican</option>
                        <option value="African">African</option>
                        <option value="Asian">Asian</option>
                        <option value="French">French</option>
                        <option value="American">American</option>
                        <option value="Indian">Indian</option>
                        <option value="Chinese">Chinese</option>
                    </select>

                    <label htmlFor="Title">Cooking Instructions:</label>
                    <textarea value={formData.instructions} name="instructions" onChange={handleChange}></textarea>
                    <div className="create-recipe-submit">
                        <button className="create-recipe-btn" type="submit">Save</button>
                    </div>
            </form>
        </div>
        
        </>
     );
}
 
export default AddRecipe;