// Sample data for locations with specific coordinates
const locations = [
    { id: 1, image: 'image/Galle.webp', description: 'Galle.', x: 90, y: 560 },
    { id: 2, image: 'image/Kandy.webp', description: 'Kandy.', x: 180, y: 300 },
    { id: 3, image: 'image/Adams.webp', description: 'Adams_Peak.', x: 190, y: 440 },
    { id: 4, image: 'image/Mirissa.webp', description: 'Mirissa.', x: 190, y: 530 },
    { id: 5, image: 'image/Ella.webp', description: 'Ella.', x: 290, y: 380 },
    { id: 6, image: 'image/Nuwara-Eliya1.webp', description: 'Nuwara_eliya.', x: 200, y: 500 },
    { id: 7, image: 'image/Polonnaruwa.webp', description: 'Polonnaruwa.', x: 250, y: 260 },
    { id: 8, image: 'image/Yala.webp', description: 'Yala.', x: 320, y: 430 },
    { id: 9, image: 'image/Jaffna.webp', description: 'Jaffna.', x: 60, y: 10 },
    { id: 10,image: 'image/Sigiriya.webp', description: 'Sigiririya.', x: 150, y: 220 },

  ];
  
  // Function to calculate coordinates for location icons
  function calculateCoordinates(x, y) {
    const map = document.getElementById('map');
    const rect = map.getBoundingClientRect();
    const mapX = rect.left;
    const mapY = rect.top;
    return { x: mapX + x, y: mapY + y };
  }
  
  // Function to display location info on hover with fade-in animation
  function displayLocationInfo(location) {
    const locationImage = document.getElementById('location-image');
    const locationDescription = document.getElementById('location-description');
  
    locationImage.src = location.image;
    locationDescription.textContent = location.description;
  
    const locationInfo = document.getElementById('location-info');
    locationInfo.style.display = 'flex'; // Change display to flex for container
    locationInfo.classList.add('fadeIn'); // Add fadeIn class for fade-in animation
  }
  
  // Function to hide location info on mouseout with fade-out animation
  function hideLocationInfo() {
    const locationInfo = document.getElementById('location-info');
    locationInfo.classList.remove('fadeIn'); // Remove fadeIn class
    locationInfo.classList.add('fadeOut'); // Add fadeOut class for fade-out animation
    setTimeout(() => {
      locationInfo.style.display = 'none';
      locationInfo.classList.remove('fadeOut'); // Remove fadeOut class after animation
    }, 500); // Adjust timing to match animation duration
  }
  
  // Function to create location icons with specific coordinates
  function createLocationIcon(location) {
    const locationIcon = document.createElement('img'); // Create img element
    locationIcon.className = 'location-icon';
    locationIcon.src = 'image/pp.png'; // Path to your icon image
    const coordinates = calculateCoordinates(location.x, location.y);
    locationIcon.style.position = 'absolute';
    locationIcon.style.left = `${coordinates.x}px`;
    locationIcon.style.top = `${coordinates.y}px`;
    locationIcon.style.cursor = 'pointer';
    locationIcon.style.maxWidth = '40px'; // Adjust the width of the location icons
    locationIcon.style.maxHeight = '50px'; // Adjust the height of the location icons
  
    // Event listeners for hover behavior
    locationIcon.addEventListener('mouseenter', () => {
      displayLocationInfo(location);
    });
  
    locationIcon.addEventListener('mouseleave', () => {
      hideLocationInfo();
    });
  
    return locationIcon;
  }
  
  // Initialize map and location icons
  document.addEventListener('DOMContentLoaded', () => {
    const map = document.getElementById('map');
  
    locations.forEach(location => {
      const locationIcon = createLocationIcon(location);
      map.appendChild(locationIcon);
    });
  });
  