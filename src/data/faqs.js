/**
 * FAQ Data Management System
 * Created: 2025-12-17
 * 
 * Comprehensive FAQ database with 36 questions across 8 categories
 * Includes utility functions for searching, filtering, and analytics
 */

// FAQ Data Structure
const faqsData = [
  // ==================== GENERAL (5 questions) ====================
  {
    id: 1,
    category: 'General',
    question: 'What is Kuchupuchu?',
    answer: 'Kuchupuchu is a premium online clothing store specializing in trendy, comfortable, and affordable fashion for everyone. We offer a curated collection of apparel, accessories, and custom products designed to help you express your unique style.',
    popular: true,
    tags: ['about', 'introduction', 'brand'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 2,
    category: 'General',
    question: 'Do you have a physical store?',
    answer: 'Currently, Kuchupuchu operates exclusively online to provide you with the best prices and widest selection. However, we are planning to open physical locations in major cities. Subscribe to our newsletter to stay updated on store openings.',
    popular: false,
    tags: ['store', 'location', 'physical'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 3,
    category: 'General',
    question: 'How can I contact customer support?',
    answer: 'You can reach our customer support team via email at support@kuchupuchu.com, call us at +1-800-KUCHU-24, or use the live chat feature on our website. Our support hours are Monday-Friday 9 AM - 6 PM EST, and we respond to emails within 24 hours.',
    popular: true,
    tags: ['contact', 'support', 'help'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 4,
    category: 'General',
    question: 'Are your products sustainable and ethically made?',
    answer: 'Yes! We are committed to sustainability and ethical practices. We partner with manufacturers who follow fair labor practices and use eco-friendly materials whenever possible. Many of our products are made from organic cotton, recycled materials, and sustainable fabrics.',
    popular: true,
    tags: ['sustainability', 'ethical', 'eco-friendly'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 5,
    category: 'General',
    question: 'Do you offer gift cards?',
    answer: 'Yes, we offer digital gift cards in denominations of $25, $50, $100, and $200. Gift cards are delivered via email and can be used for any purchase on our website. They never expire and can be combined with promotional offers.',
    popular: false,
    tags: ['gift card', 'voucher', 'present'],
    lastUpdated: '2025-12-17'
  },

  // ==================== ORDERS & PAYMENT (5 questions) ====================
  {
    id: 6,
    category: 'Orders & Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, Shop Pay, and Afterpay for buy-now-pay-later options. All transactions are secured with 256-bit SSL encryption.',
    popular: true,
    tags: ['payment', 'credit card', 'paypal'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 7,
    category: 'Orders & Payment',
    question: 'Can I modify or cancel my order?',
    answer: 'Orders can be modified or cancelled within 1 hour of placement. After this window, orders enter processing and cannot be changed. Please contact customer support immediately if you need to make changes. Refunds for cancelled orders are processed within 3-5 business days.',
    popular: true,
    tags: ['cancel', 'modify', 'change order'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 8,
    category: 'Orders & Payment',
    question: 'Do you offer payment plans?',
    answer: 'Yes! We partner with Afterpay and Klarna to offer interest-free payment plans. You can split your purchase into 4 equal payments over 6 weeks with no interest or fees when you pay on time. Simply select Afterpay or Klarna at checkout.',
    popular: false,
    tags: ['payment plan', 'afterpay', 'installment'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 9,
    category: 'Orders & Payment',
    question: 'How do I track my order?',
    answer: 'Once your order ships, you will receive a tracking number via email and SMS. You can also track your order by logging into your account and visiting the "Order History" section. Tracking information is updated in real-time.',
    popular: true,
    tags: ['tracking', 'order status', 'shipment'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 10,
    category: 'Orders & Payment',
    question: 'Will I receive an order confirmation?',
    answer: 'Yes, you will receive an email confirmation immediately after placing your order. This email includes your order number, items purchased, shipping address, and payment details. If you don\'t receive it within 15 minutes, please check your spam folder or contact support.',
    popular: false,
    tags: ['confirmation', 'email', 'receipt'],
    lastUpdated: '2025-12-17'
  },

  // ==================== SHIPPING & DELIVERY (5 questions) ====================
  {
    id: 11,
    category: 'Shipping & Delivery',
    question: 'What are your shipping options and costs?',
    answer: 'We offer Standard Shipping (5-7 business days) for $5.99, Express Shipping (2-3 business days) for $12.99, and Next Day Delivery for $24.99. Free standard shipping is available on orders over $50. International shipping rates vary by destination.',
    popular: true,
    tags: ['shipping cost', 'delivery', 'rates'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 12,
    category: 'Shipping & Delivery',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to over 50 countries worldwide. International shipping times vary from 7-21 business days depending on location. Customs fees and import duties are the responsibility of the customer. Check our shipping page for a complete list of countries we serve.',
    popular: true,
    tags: ['international', 'worldwide', 'global'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 13,
    category: 'Shipping & Delivery',
    question: 'What if my package is lost or damaged?',
    answer: 'If your package is lost during transit, we will issue a full refund or send a replacement at no cost. For damaged items, please photograph the damage and contact us within 48 hours of delivery. We will arrange for a replacement or refund immediately.',
    popular: false,
    tags: ['lost package', 'damaged', 'shipping issue'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 14,
    category: 'Shipping & Delivery',
    question: 'Can I change my shipping address after ordering?',
    answer: 'Shipping addresses can only be changed within 1 hour of order placement and before the order ships. Once shipped, we cannot reroute packages. Please double-check your shipping address at checkout. Contact customer support immediately if you need to make changes.',
    popular: false,
    tags: ['address change', 'shipping address', 'delivery location'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 15,
    category: 'Shipping & Delivery',
    question: 'Do you offer expedited shipping?',
    answer: 'Yes! We offer Express Shipping (2-3 business days) and Next Day Delivery in eligible areas. Expedited shipping orders placed before 2 PM EST ship the same day. Next Day Delivery is available for orders placed before 2 PM EST for delivery the next business day.',
    popular: false,
    tags: ['expedited', 'fast shipping', 'rush'],
    lastUpdated: '2025-12-17'
  },

  // ==================== RETURNS & REFUNDS (5 questions) ====================
  {
    id: 16,
    category: 'Returns & Refunds',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for unworn, unwashed items with original tags attached. Returns are free for US customers - just use the prepaid shipping label included in your package. International returns are subject to shipping fees. Custom and personalized items cannot be returned.',
    popular: true,
    tags: ['return policy', 'returns', 'refund'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 17,
    category: 'Returns & Refunds',
    question: 'How long does it take to receive a refund?',
    answer: 'Refunds are processed within 3-5 business days after we receive your return. The refund will be credited to your original payment method. Please allow 5-10 business days for the refund to appear in your account depending on your bank or credit card provider.',
    popular: true,
    tags: ['refund time', 'refund processing', 'money back'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 18,
    category: 'Returns & Refunds',
    question: 'Can I exchange an item instead of returning it?',
    answer: 'Yes! We offer free exchanges for different sizes or colors of the same item. Simply indicate your exchange preference when initiating your return. We will ship your exchange item immediately upon receiving your return, often before processing your return shipment.',
    popular: true,
    tags: ['exchange', 'swap', 'size change'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 19,
    category: 'Returns & Refunds',
    question: 'What items cannot be returned?',
    answer: 'The following items cannot be returned: custom/personalized products, underwear, swimwear, pierced jewelry, final sale items (marked as such), and gift cards. All other items can be returned within 30 days if unworn and in original condition with tags.',
    popular: false,
    tags: ['non-returnable', 'final sale', 'exceptions'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 20,
    category: 'Returns & Refunds',
    question: 'How do I initiate a return?',
    answer: 'Log into your account, go to Order History, select the order you want to return, and click "Return Items". Choose the items and reason for return, then print your prepaid shipping label. Drop off the package at any USPS location or schedule a free pickup.',
    popular: true,
    tags: ['return process', 'how to return', 'return steps'],
    lastUpdated: '2025-12-17'
  },

  // ==================== PRODUCTS & SIZING (5 questions) ====================
  {
    id: 21,
    category: 'Products & Sizing',
    question: 'How do I find my correct size?',
    answer: 'Each product page includes a detailed size chart with measurements in inches and centimeters. We recommend measuring yourself and comparing to our charts. Customer reviews often mention sizing - look for "Fit" ratings. Our customer service team can also provide personalized sizing advice.',
    popular: true,
    tags: ['sizing', 'size chart', 'fit'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 22,
    category: 'Products & Sizing',
    question: 'Are your products true to size?',
    answer: 'Most of our products fit true to size, but some items may run small or large. Each product listing includes fit information, and customer reviews provide real-world feedback. When in doubt, we recommend sizing up for a more comfortable fit or contacting our style consultants for advice.',
    popular: true,
    tags: ['true to size', 'sizing accuracy', 'fit guide'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 23,
    category: 'Products & Sizing',
    question: 'What materials are your products made from?',
    answer: 'We use a variety of high-quality materials including organic cotton, bamboo fabric, recycled polyester, linen, silk blends, and performance fabrics. Each product page lists the exact material composition and care instructions. Many of our products are certified organic and eco-friendly.',
    popular: false,
    tags: ['materials', 'fabric', 'composition'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 24,
    category: 'Products & Sizing',
    question: 'How should I care for my Kuchupuchu products?',
    answer: 'Care instructions are included on the tag of each item and on the product page. Generally, we recommend washing in cold water, using mild detergent, and air drying when possible. Avoid bleach and high heat. Following care instructions will help your items last longer and maintain their quality.',
    popular: false,
    tags: ['care instructions', 'washing', 'maintenance'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 25,
    category: 'Products & Sizing',
    question: 'Do you restock sold-out items?',
    answer: 'Popular items are usually restocked within 2-4 weeks. You can sign up for "Back in Stock" notifications on any sold-out product page. We will email you immediately when the item becomes available. Some limited edition items may not be restocked, which will be noted on the product page.',
    popular: false,
    tags: ['restock', 'sold out', 'availability'],
    lastUpdated: '2025-12-17'
  },

  // ==================== CUSTOM PRODUCTS (4 questions) ====================
  {
    id: 26,
    category: 'Custom Products',
    question: 'How do custom orders work?',
    answer: 'Our custom products allow you to personalize items with names, text, designs, or choose custom colors and patterns. Select "Customize" on eligible products, use our design tool to create your item, preview it, and add to cart. Custom orders take 5-10 business days to create before shipping.',
    popular: true,
    tags: ['custom', 'personalization', 'customization'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 27,
    category: 'Custom Products',
    question: 'Can I return custom or personalized items?',
    answer: 'Custom and personalized items cannot be returned or exchanged unless there is a manufacturing defect or error on our part. Please carefully review your customization before placing your order. We will send a proof for approval on orders over $100 or complex customizations.',
    popular: true,
    tags: ['custom returns', 'personalized items', 'no returns'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 28,
    category: 'Custom Products',
    question: 'What file formats do you accept for custom designs?',
    answer: 'We accept PNG, JPG, SVG, PDF, and AI file formats. For best results, use high-resolution images (at least 300 DPI). Vector files (SVG, AI) produce the best quality. Our design team will review your file and contact you if adjustments are needed before production.',
    popular: false,
    tags: ['file format', 'upload', 'design files'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 29,
    category: 'Custom Products',
    question: 'Do you offer bulk discounts for custom orders?',
    answer: 'Yes! Custom orders of 10+ items receive a 15% discount, 25+ items receive 20% off, and 50+ items receive 25% off. Contact our bulk orders team at bulk@kuchupuchu.com for quotes on larger quantities. We also offer special corporate gifting packages with expedited production.',
    popular: false,
    tags: ['bulk order', 'wholesale', 'quantity discount'],
    lastUpdated: '2025-12-17'
  },

  // ==================== ACCOUNT & PRIVACY (4 questions) ====================
  {
    id: 30,
    category: 'Account & Privacy',
    question: 'Do I need an account to place an order?',
    answer: 'No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, store payment methods securely, earn rewards points, receive exclusive offers, and access your order history. Account creation is free and takes less than a minute.',
    popular: true,
    tags: ['account', 'registration', 'guest checkout'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 31,
    category: 'Account & Privacy',
    question: 'How do you protect my personal information?',
    answer: 'We take data security seriously. All information is encrypted with 256-bit SSL technology. We never sell your personal information to third parties. Payment information is processed through PCI-compliant secure servers. Read our full Privacy Policy for detailed information about data handling.',
    popular: true,
    tags: ['privacy', 'security', 'data protection'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 32,
    category: 'Account & Privacy',
    question: 'How do I update my account information?',
    answer: 'Log into your account and click on "Account Settings" to update your email, password, phone number, and addresses. Changes are saved immediately. For security reasons, you will need to verify your current password when changing sensitive information like email or payment methods.',
    popular: false,
    tags: ['account update', 'change information', 'profile'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 33,
    category: 'Account & Privacy',
    question: 'Can I delete my account?',
    answer: 'Yes, you can request account deletion by contacting support@kuchupuchu.com or through the "Delete Account" option in Account Settings. Account deletion is permanent and will erase all order history, saved items, and rewards points. Deletion takes 30 days to complete for security purposes.',
    popular: false,
    tags: ['delete account', 'account removal', 'privacy'],
    lastUpdated: '2025-12-17'
  },

  // ==================== OFFERS & DISCOUNTS (3 questions) ====================
  {
    id: 34,
    category: 'Offers & Discounts',
    question: 'How can I get discounts and promo codes?',
    answer: 'Sign up for our newsletter to receive a 15% welcome discount and exclusive offers. Follow us on social media for flash sales and special promotions. Join our rewards program to earn points on every purchase. Birthday month subscribers receive a special 20% discount code.',
    popular: true,
    tags: ['discount', 'promo code', 'coupon'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 35,
    category: 'Offers & Discounts',
    question: 'Can I use multiple discount codes on one order?',
    answer: 'Only one promo code can be used per order, but promo codes can often be combined with ongoing sales and free shipping offers. Rewards points can be redeemed in addition to promo codes. The discount providing the best value will be automatically applied at checkout.',
    popular: true,
    tags: ['multiple codes', 'stacking discounts', 'promo rules'],
    lastUpdated: '2025-12-17'
  },
  {
    id: 36,
    category: 'Offers & Discounts',
    question: 'What is your rewards program?',
    answer: 'Our Kuchu Rewards program is free to join! Earn 1 point for every dollar spent. 100 points = $5 reward. Get bonus points on your birthday, referring friends (500 points per referral), and writing product reviews (50 points). VIP members (5000+ points annually) get early access to sales and free shipping.',
    popular: false,
    tags: ['rewards', 'loyalty program', 'points'],
    lastUpdated: '2025-12-17'
  }
];

// ==================== UTILITY FUNCTIONS ====================

/**
 * Get FAQs filtered by category
 * @param {string} category - Category name to filter by
 * @returns {Array} Array of FAQ objects in the specified category
 */
export const getFaqsByCategory = (category) => {
  if (!category) return faqsData;
  return faqsData.filter(faq => 
    faq.category.toLowerCase() === category.toLowerCase()
  );
};

/**
 * Search FAQs by keyword in questions, answers, and tags
 * @param {string} searchTerm - Search keyword
 * @returns {Array} Array of matching FAQ objects
 */
export const searchFaqs = (searchTerm) => {
  if (!searchTerm || searchTerm.trim() === '') return faqsData;
  
  const term = searchTerm.toLowerCase().trim();
  return faqsData.filter(faq => 
    faq.question.toLowerCase().includes(term) ||
    faq.answer.toLowerCase().includes(term) ||
    faq.tags.some(tag => tag.toLowerCase().includes(term)) ||
    faq.category.toLowerCase().includes(term)
  );
};

/**
 * Get a specific FAQ by ID
 * @param {number} id - FAQ ID
 * @returns {Object|null} FAQ object or null if not found
 */
export const getFaqById = (id) => {
  return faqsData.find(faq => faq.id === id) || null;
};

/**
 * Get all unique categories
 * @returns {Array} Array of category names
 */
export const getAllCategories = () => {
  const categories = [...new Set(faqsData.map(faq => faq.category))];
  return categories.sort();
};

/**
 * Get FAQ count for a specific category
 * @param {string} category - Category name
 * @returns {number} Number of FAQs in the category
 */
export const getFaqCountByCategory = (category) => {
  if (!category) return faqsData.length;
  return faqsData.filter(faq => 
    faq.category.toLowerCase() === category.toLowerCase()
  ).length;
};

/**
 * Get popular/frequently asked questions
 * @param {number} limit - Maximum number of FAQs to return (default: all)
 * @returns {Array} Array of popular FAQ objects
 */
export const getPopularFaqs = (limit = null) => {
  const popularFaqs = faqsData.filter(faq => faq.popular === true);
  return limit ? popularFaqs.slice(0, limit) : popularFaqs;
};

/**
 * Get total number of FAQs
 * @returns {number} Total FAQ count
 */
export const getTotalFaqCount = () => {
  return faqsData.length;
};

/**
 * Get comprehensive FAQ statistics
 * @returns {Object} Statistics object with various metrics
 */
export const getFaqStats = () => {
  const categories = getAllCategories();
  const categoryStats = {};
  
  categories.forEach(category => {
    categoryStats[category] = {
      count: getFaqCountByCategory(category),
      popularCount: faqsData.filter(faq => 
        faq.category === category && faq.popular === true
      ).length
    };
  });

  return {
    totalFaqs: getTotalFaqCount(),
    totalCategories: categories.length,
    popularFaqsCount: getPopularFaqs().length,
    categoryBreakdown: categoryStats,
    lastUpdated: '2025-12-17',
    averageFaqsPerCategory: (getTotalFaqCount() / categories.length).toFixed(1)
  };
};

/**
 * Get FAQs by multiple tags
 * @param {Array} tags - Array of tag strings
 * @returns {Array} FAQs that match any of the provided tags
 */
export const getFaqsByTags = (tags) => {
  if (!tags || !Array.isArray(tags) || tags.length === 0) return [];
  
  const lowerTags = tags.map(tag => tag.toLowerCase());
  return faqsData.filter(faq => 
    faq.tags.some(tag => lowerTags.includes(tag.toLowerCase()))
  );
};

/**
 * Get random FAQs
 * @param {number} count - Number of random FAQs to return
 * @returns {Array} Array of random FAQ objects
 */
export const getRandomFaqs = (count = 5) => {
  const shuffled = [...faqsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, faqsData.length));
};

/**
 * Get recently updated FAQs
 * @param {number} limit - Maximum number of FAQs to return
 * @returns {Array} Array of recently updated FAQ objects
 */
export const getRecentlyUpdatedFaqs = (limit = 10) => {
  const sorted = [...faqsData].sort((a, b) => 
    new Date(b.lastUpdated) - new Date(a.lastUpdated)
  );
  return sorted.slice(0, limit);
};

// Default export
export default {
  faqs: faqsData,
  getFaqsByCategory,
  searchFaqs,
  getFaqById,
  getAllCategories,
  getFaqCountByCategory,
  getPopularFaqs,
  getTotalFaqCount,
  getFaqStats,
  getFaqsByTags,
  getRandomFaqs,
  getRecentlyUpdatedFaqs
};
