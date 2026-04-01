export const BRAND_NAME = "Khaugali Chula Dosa";
export const TAGLINE = "Taste the Streets. Feel the Vibe.";
export const PHONE = "9016863765";
export const ADDRESS = "2FJ5+G58, South Bopal, Bopal, Ahmedabad, Gujarat 380058";
export const WHATSAPP_LINK = "https://wa.me/919016863765?text=Hello%20Khaugali%20Chula%20Dosa%2C%20I%20want%20to%20place%20an%20order.";
export const CALL_LINK = "tel:9016863765";
export const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=2FJ5%2BG58%2C%20South%20Bopal%2C%20Bopal%2C%20Ahmedabad%2C%20Gujarat%20380058";

export const CATEGORIES = [
  { id: 'dosa', label: 'Chula Dosa', icon: '🥞' },
  { id: 'mysore', label: 'Mysore Dosa', icon: '🌶️' },
  { id: 'chinese', label: 'Chinese Dosa', icon: '🥢' },
  { id: 'paneer', label: 'Paneer Dosa', icon: '🧀' },
  { id: 'uttapam', label: 'Uttapam', icon: '🍕' },
  { id: 'fusion', label: 'Pizza & Fusion', icon: '🥨' },
];

export const MENU_ITEMS = [
  // Chula Dosa
  { id: 1, name: "Butter Paper Dosa", category: "dosa", price: "₹80", description: "Crispy thin paper dosa roasted with pure butter.", isVeg: true, rating: 4.8, popular: true },
  { id: 2, name: "Masala Chula Dosa", category: "dosa", price: "₹110", description: "Traditional spiced potato filling in a crispy wood-fired dosa.", isVeg: true, rating: 4.9, popular: true },
  { id: 3, name: "Cheese Masala Dosa", category: "dosa", price: "₹140", description: "Classic masala dosa loaded with premium processed cheese.", isVeg: true, rating: 5.0, popular: true },
  
  // Mysore Dosa
  { id: 4, name: "Mysore Chatpata Dosa", category: "mysore", price: "₹130", description: "Spicy garlic chutney spread with masala filling.", isVeg: true, rating: 4.7, popular: false },
  { id: 5, name: "Cheese Mysore Masala", category: "mysore", price: "₹160", description: "The spicy Mysore classic with a cheesy twist.", isVeg: true, rating: 4.9, popular: true },
  
  // Chinese Dosa
  { id: 6, name: "Schezwan Chopsuey Dosa", category: "chinese", price: "₹150", description: "Fusion dosa filled with noodles and spicy schezwan sauce.", isVeg: true, rating: 4.8, popular: true },
  { id: 7, name: "Spring Roll Dosa", category: "chinese", price: "₹160", description: "Crispy dosa rolled with stir-fried Chinese veggies.", isVeg: true, rating: 4.6, popular: false },
  
  // Paneer Dosa
  { id: 8, name: "Paneer Gotala Dosa", category: "paneer", price: "₹180", description: "Chef's special shredded paneer masala in a giant dosa.", isVeg: true, rating: 5.0, popular: true },
  { id: 9, name: "Paneer Tikka Dosa", category: "paneer", price: "₹190", description: "Marinated paneer cubes with tandoori mayo and spices.", isVeg: true, rating: 4.9, popular: false },
  
  // Uttapam
  { id: 10, name: "Onion Tomato Uttapam", category: "uttapam", price: "₹100", description: "Thick savory pancake topped with fresh veggies.", isVeg: true, rating: 4.7, popular: false },
  { id: 11, name: "Mix Veg Cheese Uttapam", category: "uttapam", price: "₹140", description: "Loaded with vegetables and melted cheese.", isVeg: true, rating: 4.8, popular: true },

  // Fusion
  { id: 12, name: "Dosa Pizza", category: "fusion", price: "₹170", description: "Dosa base topped with pizza sauce, veggies, and mozzarella.", isVeg: true, rating: 4.9, popular: true },
  { id: 13, name: "Chocolate Cheese Dosa", category: "fusion", price: "₹130", description: "Sweet fusion for the adventurous foodie.", isVeg: true, rating: 4.5, popular: false },
];

export const SIGNATURE_HIGHLIGHTS = [
  {
    id: 'sh1',
    name: "Chula Special Masala",
    description: "Authentic wood-fired taste that brings back street memories.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
    price: "₹110"
  },
  {
    id: 'sh2',
    name: "Paneer Gotala",
    description: "Our best-selling shredded paneer explosion with secret spices.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80",
    price: "₹180"
  },
  {
    id: 'sh3',
    name: "Schezwan Fusion",
    description: "The perfect marriage of Mumbai street and Chinese zing.",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=80",
    price: "₹150"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Patel",
    content: "The best Chula Dosa in Bopal! The crispiness is unmatched and the chutney is just like home.",
    role: "Local Resident",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    name: "Sneha Gupta",
    content: "Paneer Gotala is a must-try. We order every weekend and the quality is always premium.",
    role: "Regular Customer",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 3,
    name: "Amit Shah",
    content: "Authentic street vibe with very hygienic preparation. Perfect for a family dinner.",
    role: "Foodie",
    avatar: "https://i.pravatar.cc/150?img=44"
  }
];

export const USPs = [
  { title: "Authentic Chula", description: "Traditional wood-fired cooking for that smoky aroma.", icon: "🔥" },
  { title: "Vibrant Vibe", description: "Energetic street-food atmosphere for everyone.", icon: "✨" },
  { title: "Quick Service", description: "Hot and fresh food served with lightning speed.", icon: "⚡" },
  { title: "Premium Quality", description: "Top-tier ingredients and 5-star hygiene standards.", icon: "💎" }
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
  "https://images.unsplash.com/photo-1601050633647-8f8f5f4ad473?w=800&q=80",
  "https://images.unsplash.com/photo-1626132646529-500637532537?w=800&q=80",
  "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=80",
  "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80",
  "https://images.unsplash.com/photo-1544787210-2827443cb69b?w=800&q=80",
];
