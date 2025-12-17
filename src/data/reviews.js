// Customer Reviews Data
export const reviews = {
  1: [ // Product ID 1 reviews
    {
      id: 1,
      userId: 101,
      userName: "Rajesh Kumar",
      rating: 5,
      title: "Perfect fit and great quality!",
      comment: "This t-shirt exceeded my expectations. The fabric is soft, breathable, and the fit is just perfect. Highly recommend!",
      date: "2025-11-20",
      verified: true,
      helpful: 45
    },
    {
      id: 2,
      userId: 102,
      userName: "Amit Sharma",
      rating: 4,
      title: "Good value for money",
      comment: "Nice quality t-shirt for the price. The white color is exactly as shown. Would buy again.",
      date: "2025-11-15",
      verified: true,
      helpful: 23
    },
    {
      id: 3,
      userId: 103,
      userName: "Vikram Singh",
      rating: 5,
      title: "Amazing comfort",
      comment: "Super comfortable for daily wear. The cotton quality is top-notch and it doesn't shrink after washing.",
      date: "2025-11-10",
      verified: true,
      helpful: 34
    }
  ],
  6: [ // Product ID 6 reviews
    {
      id: 4,
      userId: 104,
      userName: "Priya Patel",
      rating: 5,
      title: "Best hoodie ever!",
      comment: "This is by far the most comfortable hoodie I've owned. Perfect for winter and the fleece lining is so soft.",
      date: "2025-12-01",
      verified: true,
      helpful: 67
    },
    {
      id: 5,
      userId: 105,
      userName: "Rohan Mehta",
      rating: 5,
      title: "Warm and stylish",
      comment: "Keeps me warm without being too bulky. The fit is great and the kangaroo pocket is spacious.",
      date: "2025-11-28",
      verified: true,
      helpful: 52
    },
    {
      id: 6,
      userId: 106,
      userName: "Ankit Verma",
      rating: 4,
      title: "Good quality hoodie",
      comment: "Very good quality material. Only reason not 5 stars is the color faded slightly after multiple washes.",
      date: "2025-11-22",
      verified: true,
      helpful: 28
    }
  ],
  13: [ // Product ID 13 reviews
    {
      id: 7,
      userId: 107,
      userName: "Sneha Reddy",
      rating: 5,
      title: "Love this hoodie!",
      comment: "Perfect for lounging at home or going out. The quality is exceptional and it's so cozy!",
      date: "2025-12-05",
      verified: true,
      helpful: 89
    },
    {
      id: 8,
      userId: 108,
      userName: "Karan Desai",
      rating: 5,
      title: "Must-have winter essential",
      comment: "This hoodie is amazing! Keeps me warm in cold weather and the fit is perfect. Worth every penny.",
      date: "2025-12-02",
      verified: true,
      helpful: 76
    }
  ],
  18: [ // Product ID 18 reviews
    {
      id: 9,
      userId: 109,
      userName: "Neha Gupta",
      rating: 5,
      title: "Perfect unisex fit",
      comment: "Great fit for both my partner and me. The quality is excellent and it's very comfortable.",
      date: "2025-11-25",
      verified: true,
      helpful: 94
    },
    {
      id: 10,
      userId: 110,
      userName: "Aditya Joshi",
      rating: 4,
      title: "Good basic hoodie",
      comment: "Simple, comfortable, and versatile. Great for everyday wear. Wish there were more color options.",
      date: "2025-11-18",
      verified: true,
      helpful: 41
    }
  ],
  24: [ // Product ID 24 reviews
    {
      id: 11,
      userId: 111,
      userName: "Ravi Kumar",
      rating: 5,
      title: "Amazing custom printing!",
      comment: "The custom name printing came out perfect! High quality print that hasn't faded. Great gift idea!",
      date: "2025-12-08",
      verified: true,
      helpful: 103
    },
    {
      id: 12,
      userId: 112,
      userName: "Pooja Iyer",
      rating: 5,
      title: "Exceeded expectations",
      comment: "I was worried about the print quality but it's fantastic! The t-shirt quality is also great.",
      date: "2025-12-03",
      verified: true,
      helpful: 87
    }
  ],
  27: [ // Product ID 27 reviews
    {
      id: 13,
      userId: 113,
      userName: "Sanjay Agarwal",
      rating: 5,
      title: "Perfect gift for couples!",
      comment: "Bought these for our anniversary. The matching design looks adorable and the quality is excellent!",
      date: "2025-12-10",
      verified: true,
      helpful: 112
    },
    {
      id: 14,
      userId: 114,
      userName: "Divya Nair",
      rating: 5,
      title: "Love the customization",
      comment: "These couple t-shirts are so cute! Great fabric quality and the print is vibrant and clear.",
      date: "2025-12-06",
      verified: true,
      helpful: 98
    }
  ],
  30: [ // Product ID 30 reviews
    {
      id: 15,
      userId: 115,
      userName: "Arjun Malhotra",
      rating: 5,
      title: "Best jeans I've owned",
      comment: "Perfect slim fit without being too tight. The denim quality is premium and very durable.",
      date: "2025-11-30",
      verified: true,
      helpful: 145
    },
    {
      id: 16,
      userId: 116,
      userName: "Rahul Kapoor",
      rating: 4,
      title: "Great fit",
      comment: "Really good jeans. Comfortable and stylish. Runs slightly small so order one size up.",
      date: "2025-11-24",
      verified: true,
      helpful: 78
    }
  ],
  32: [ // Product ID 32 reviews
    {
      id: 17,
      userId: 117,
      userName: "Anjali Sharma",
      rating: 5,
      title: "Perfect for workouts!",
      comment: "These leggings are so comfortable! Great stretch and they stay in place during yoga. Love them!",
      date: "2025-12-12",
      verified: true,
      helpful: 156
    },
    {
      id: 18,
      userId: 118,
      userName: "Megha Pillai",
      rating: 5,
      title: "Best leggings ever",
      comment: "Super soft material and perfect fit. Not see-through at all. Will definitely buy more colors!",
      date: "2025-12-07",
      verified: true,
      helpful: 134
    }
  ]
};

// Get reviews for a specific product
export const getProductReviews = (productId) => {
  return reviews[productId] || [];
};

// Get average rating for a product
export const getAverageRating = (productId) => {
  const productReviews = reviews[productId];
  if (!productReviews || productReviews.length === 0) return 0;
  
  const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / productReviews.length).toFixed(1);
};

// Get total review count for a product
export const getReviewCount = (productId) => {
  return reviews[productId]?.length || 0;
};

// Get rating distribution for a product
export const getRatingDistribution = (productId) => {
  const productReviews = reviews[productId];
  if (!productReviews || productReviews.length === 0) {
    return { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  }
  
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  productReviews.forEach(review => {
    distribution[review.rating]++;
  });
  
  return distribution;
};

// Get most helpful reviews for a product
export const getMostHelpfulReviews = (productId, limit = 3) => {
  const productReviews = reviews[productId];
  if (!productReviews || productReviews.length === 0) return [];
  
  return [...productReviews]
    .sort((a, b) => b.helpful - a.helpful)
    .slice(0, limit);
};

// Get recent reviews across all products
export const getRecentReviews = (limit = 10) => {
  const allReviews = Object.values(reviews).flat();
  return allReviews
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

// Get verified reviews only
export const getVerifiedReviews = (productId) => {
  const productReviews = reviews[productId];
  if (!productReviews) return [];
  return productReviews.filter(review => review.verified);
};

// Filter reviews by rating
export const filterReviewsByRating = (productId, rating) => {
  const productReviews = reviews[productId];
  if (!productReviews) return [];
  return productReviews.filter(review => review.rating === rating);
};

// Sort reviews by helpfulness
export const sortReviewsByHelpful = (productId) => {
  const productReviews = reviews[productId];
  if (!productReviews) return [];
  return [...productReviews].sort((a, b) => b.helpful - a.helpful);
};

// Sort reviews by date (newest first)
export const sortReviewsByDate = (productId, order = 'desc') => {
  const productReviews = reviews[productId];
  if (!productReviews) return [];
  
  return [...productReviews].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });
};

// Sort reviews by rating
export const sortReviewsByRating = (productId, order = 'desc') => {
  const productReviews = reviews[productId];
  if (!productReviews) return [];
  
  return [...productReviews].sort((a, b) => {
    return order === 'desc' ? b.rating - a.rating : a.rating - b.rating;
  });
};

// Get review statistics
export const getReviewStats = () => {
  const allReviews = Object.values(reviews).flat();
  const totalReviews = allReviews.length;
  const verifiedCount = allReviews.filter(r => r.verified).length;
  const avgRating = (allReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(2);
  const totalHelpful = allReviews.reduce((sum, r) => sum + r.helpful, 0);
  
  return {
    totalReviews,
    verifiedCount,
    averageRating: avgRating,
    totalHelpfulVotes: totalHelpful,
    productsWithReviews: Object.keys(reviews).length
  };
};

export default reviews;