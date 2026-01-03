export const moodOptions = {
  work: { 
    label: '💻 Work', 
    type: 'cafe', 
    keyword: 'wifi quiet', 
    minRating: 4.0 
  },
  quick: { 
    label: '⚡ Quick Bite', 
    type: 'sandwich_shop', 
    keyword: 'burgers pizza', 
    minRating: 0 
  },
  budget: { 
    label: '💰 Budget', 
    type: 'restaurant', 
    maxPrice: 1, // Google Price Level 1 is "$" (Inexpensive)
    minRating: 0 
  }
};