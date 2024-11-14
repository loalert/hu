/* General page setup */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #111;  /* Dark background similar to Netflix */
  color: white;
}

/* Header styling */
header {
  text-align: center;
  padding: 20px;
  background-color: #111;
}

h1 {
  font-size: 2.5rem;
  letter-spacing: 2px;
}

/* Image grid setup */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  padding: 20px;
}

/* Styling individual image items */
.image-item {
  overflow: hidden;
  border-radius: 8px; /* Optional: gives the images rounded corners */
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire space without distortion */
  transition: transform 0.3s ease; /* Smooth zoom effect */
}

/* Hover effect for images */
.image-item:hover img {
  transform: scale(1.1); /* Zooms in the image on hover */
}

/* Media Query for smaller screens */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  .image-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
