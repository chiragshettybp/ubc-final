
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star, Filter, Search, ThumbsUp, Verified } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  helpful: number;
  image?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "California, USA",
    rating: 5,
    date: "2024-05-15",
    title: "Absolutely perfect gift!",
    content: "I bought this for my grandmother's 85th birthday. She was so moved watching our family videos on this beautiful frame. The quality is outstanding and it was so easy to set up. Worth every penny!",
    verified: true,
    helpful: 24,
    image: "/lovable-uploads/9d9f43cd-945c-4cf8-a3a1-f711494390d2.png"
  },
  {
    id: 2,
    name: "Michael R.",
    location: "Texas, USA",
    rating: 5,
    date: "2024-05-12",
    title: "Amazing quality and fast delivery",
    content: "The RememberFrame exceeded my expectations. The picture quality is crystal clear and the touch interface is very intuitive. My wife loved seeing our wedding videos play automatically.",
    verified: true,
    helpful: 18,
    image: "/lovable-uploads/0b2d2384-45de-457f-b15e-c9788faf1422.png"
  },
  {
    id: 3,
    name: "Emma L.",
    location: "New York, USA",
    rating: 4,
    date: "2024-05-10",
    title: "Great product, minor setup issues",
    content: "Love the concept and execution. Had some trouble with the initial WiFi setup but customer service was very helpful. Now it works perfectly and everyone asks where I got it!",
    verified: true,
    helpful: 12
  },
  {
    id: 4,
    name: "David K.",
    location: "Florida, USA",
    rating: 5,
    date: "2024-05-08",
    title: "Perfect for elderly parents",
    content: "Bought this for my parents who aren't tech-savvy. They absolutely love it! So simple to use and they can see photos and videos of their grandkids anytime. Highly recommend!",
    verified: true,
    helpful: 31,
    image: "/lovable-uploads/8bdd08f8-f1a6-4ddf-a8be-9eb0b5a5689b.png"
  },
  {
    id: 5,
    name: "Jennifer W.",
    location: "Washington, USA",
    rating: 5,
    date: "2024-05-05",
    title: "Brought tears of joy",
    content: "This frame made my mom cry happy tears. She lost my dad last year and being able to watch their old videos together brings her so much comfort. Thank you for creating something so meaningful.",
    verified: true,
    helpful: 45
  },
  {
    id: 6,
    name: "Robert T.",
    location: "Arizona, USA",
    rating: 4,
    date: "2024-05-03",
    title: "Solid build quality",
    content: "The frame feels premium and well-made. Picture quality is excellent. Only wish the screen was slightly larger, but overall very satisfied with the purchase.",
    verified: true,
    helpful: 8
  },
  {
    id: 7,
    name: "Lisa H.",
    location: "Colorado, USA",
    rating: 5,
    date: "2024-05-01",
    title: "Best investment ever!",
    content: "I can't believe how much joy this little frame brings to our family. The kids love recording messages for grandma and she treasures every single one. 10/10 would buy again!",
    verified: true,
    helpful: 22
  },
  {
    id: 8,
    name: "Mark S.",
    location: "Illinois, USA",
    rating: 5,
    date: "2024-04-28",
    title: "Exceeded expectations",
    content: "Was skeptical at first but this product is genuinely amazing. The video quality is crisp, setup was straightforward, and my wife hasn't stopped using it since we got it.",
    verified: true,
    helpful: 15
  },
  {
    id: 9,
    name: "Amanda J.",
    location: "Oregon, USA",
    rating: 5,
    date: "2024-04-25",
    title: "Perfect wedding gift",
    content: "Gave this to my newlywed sister with all our family photos and videos loaded. She was in tears! Such a thoughtful and unique gift that will be treasured forever.",
    verified: true,
    helpful: 19
  },
  {
    id: 10,
    name: "Christopher B.",
    location: "Nevada, USA",
    rating: 4,
    date: "2024-04-22",
    title: "Great customer service",
    content: "Had an issue with my first unit, but the customer service team was incredible. They sent a replacement immediately and it works perfectly. Really impressed with the company.",
    verified: true,
    helpful: 11
  },
  {
    id: 11,
    name: "Rachel P.",
    location: "Georgia, USA",
    rating: 5,
    date: "2024-04-20",
    title: "Memories come alive",
    content: "This frame has brought our family closer together. We share videos and photos instantly and my grandmother feels so connected to all of us. Absolutely love it!",
    verified: true,
    helpful: 27
  },
  {
    id: 12,
    name: "Kevin D.",
    location: "Michigan, USA",
    rating: 5,
    date: "2024-04-18",
    title: "Technology made simple",
    content: "Finally, a tech product that my elderly father can actually use! He's 82 and figured it out in minutes. Now he watches videos of his great-grandkids all day long.",
    verified: true,
    helpful: 33
  },
  {
    id: 13,
    name: "Michelle A.",
    location: "North Carolina, USA",
    rating: 4,
    date: "2024-04-15",
    title: "Beautiful design",
    content: "The frame looks elegant in our living room and the display quality is fantastic. Only minor complaint is the sound could be a bit louder, but overall very happy.",
    verified: true,
    helpful: 9
  },
  {
    id: 14,
    name: "Steven L.",
    location: "Ohio, USA",
    rating: 5,
    date: "2024-04-12",
    title: "Worth every penny",
    content: "Initially thought it was pricey, but after seeing how much joy it brings my family, it's worth every cent. The build quality and functionality are top-notch.",
    verified: true,
    helpful: 16
  },
  {
    id: 15,
    name: "Nicole C.",
    location: "Virginia, USA",
    rating: 5,
    date: "2024-04-10",
    title: "Connects families",
    content: "Living across the country from my parents, this frame helps us stay connected. They see photos and videos of their grandkids daily. It's like we're there with them.",
    verified: true,
    helpful: 21
  },
  {
    id: 16,
    name: "Brian M.",
    location: "Pennsylvania, USA",
    rating: 5,
    date: "2024-04-08",
    title: "Incredibly user-friendly",
    content: "Set this up for my 78-year-old mother and she mastered it immediately. The interface is so intuitive and she loves showing it off to her friends.",
    verified: true,
    helpful: 14
  },
  {
    id: 17,
    name: "Stephanie K.",
    location: "Indiana, USA",
    rating: 4,
    date: "2024-04-05",
    title: "Great for busy families",
    content: "With our hectic schedules, this frame helps us share precious moments instantly. Kids love seeing themselves on the big screen. Minor wifi connectivity issues initially.",
    verified: true,
    helpful: 7
  },
  {
    id: 18,
    name: "Gregory F.",
    location: "Tennessee, USA",
    rating: 5,
    date: "2024-04-03",
    title: "Premium quality",
    content: "The attention to detail in this product is impressive. From the packaging to the frame itself, everything screams quality. My wife is obsessed with it!",
    verified: true,
    helpful: 13
  },
  {
    id: 19,
    name: "Karen R.",
    location: "Missouri, USA",
    rating: 5,
    date: "2024-04-01",
    title: "Emotional connection",
    content: "This frame has become the centerpiece of our home. Every visitor comments on it and wants to know where to get one. It's brought so much happiness to our family.",
    verified: true,
    helpful: 25
  },
  {
    id: 20,
    name: "Daniel W.",
    location: "Wisconsin, USA",
    rating: 4,
    date: "2024-03-29",
    title: "Good value for money",
    content: "Compared to other digital frames, this offers great value. The video feature sets it apart and the quality is excellent. Would recommend to anyone.",
    verified: true,
    helpful: 10
  },
  {
    id: 21,
    name: "Jessica T.",
    location: "Minnesota, USA",
    rating: 5,
    date: "2024-03-27",
    title: "Life-changing product",
    content: "Sounds dramatic, but this frame has genuinely changed how our family stays connected. My elderly aunt feels less isolated and loves receiving daily updates.",
    verified: true,
    helpful: 29
  },
  {
    id: 22,
    name: "Timothy H.",
    location: "Iowa, USA",
    rating: 5,
    date: "2024-03-25",
    title: "Sleek and modern",
    content: "The design is beautiful and fits perfectly with our home decor. The touch screen is responsive and the picture quality is stunning. Highly recommend!",
    verified: true,
    helpful: 12
  },
  {
    id: 23,
    name: "Melissa G.",
    location: "Kansas, USA",
    rating: 4,
    date: "2024-03-22",
    title: "Easy setup process",
    content: "Even though I'm not tech-savvy, I had this up and running in 20 minutes. The instructions were clear and customer support was helpful when I had questions.",
    verified: true,
    helpful: 8
  },
  {
    id: 24,
    name: "Jonathan B.",
    location: "Arkansas, USA",
    rating: 5,
    date: "2024-03-20",
    title: "Perfect for seniors",
    content: "Bought this for my 85-year-old grandfather. He was amazed by the technology and now spends hours watching family videos. It's brought him so much joy.",
    verified: true,
    helpful: 20
  },
  {
    id: 25,
    name: "Ashley D.",
    location: "Louisiana, USA",
    rating: 5,
    date: "2024-03-18",
    title: "Outstanding customer service",
    content: "Had a question about compatibility and the support team went above and beyond to help. The product itself is fantastic and works exactly as advertised.",
    verified: true,
    helpful: 15
  },
  {
    id: 26,
    name: "Ryan C.",
    location: "Mississippi, USA",
    rating: 4,
    date: "2024-03-15",
    title: "Great addition to any home",
    content: "This frame has become a conversation starter in our home. Guests are always impressed by the quality and functionality. Minor issues with app connectivity.",
    verified: true,
    helpful: 6
  },
  {
    id: 27,
    name: "Heather M.",
    location: "Alabama, USA",
    rating: 5,
    date: "2024-03-12",
    title: "Brings family together",
    content: "Since getting this frame, our whole family is more engaged in sharing memories. It's created new traditions and brought us closer together. Love it!",
    verified: true,
    helpful: 23
  },
  {
    id: 28,
    name: "Patrick L.",
    location: "South Carolina, USA",
    rating: 5,
    date: "2024-03-10",
    title: "Impressive technology",
    content: "The seamless way photos and videos display is impressive. The quality is professional-grade and the user interface is intuitive. Exceeded all expectations.",
    verified: true,
    helpful: 17
  },
  {
    id: 29,
    name: "Christina S.",
    location: "Kentucky, USA",
    rating: 4,
    date: "2024-03-08",
    title: "Worth the investment",
    content: "Initially hesitant about the price, but after using it for a month, I can say it's worth every dollar. The happiness it brings to my family is priceless.",
    verified: true,
    helpful: 11
  },
  {
    id: 30,
    name: "Nathan J.",
    location: "Oklahoma, USA",
    rating: 5,
    date: "2024-03-05",
    title: "Revolutionary product",
    content: "This isn't just a digital frame - it's a way to stay connected with loved ones. The ease of use and quality construction make this a must-have for any family.",
    verified: true,
    helpful: 26
  },
  {
    id: 31,
    name: "Victoria P.",
    location: "West Virginia, USA",
    rating: 5,
    date: "2024-03-03",
    title: "Perfect memorial gift",
    content: "Gave this to my aunt after she lost her husband. Loading it with memories of their 50-year marriage brought her so much comfort. Thank you for creating something so meaningful.",
    verified: true,
    helpful: 34
  },
  {
    id: 32,
    name: "Benjamin K.",
    location: "Utah, USA",
    rating: 4,
    date: "2024-03-01",
    title: "Solid product overall",
    content: "Great build quality and features. The display is crisp and the frame looks premium. Only wished it had more storage space, but cloud features make up for it.",
    verified: true,
    helpful: 9
  }
];

const Reviews = () => {
  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const [filterRating, setFilterRating] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10;

  const handleFilter = (rating: number) => {
    setFilterRating(rating);
    setCurrentPage(1);
    filterReviews(rating, searchTerm);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
    filterReviews(filterRating, term);
  };

  const filterReviews = (rating: number, search: string) => {
    let filtered = reviews;
    
    if (rating > 0) {
      filtered = filtered.filter(review => review.rating === rating);
    }
    
    if (search) {
      filtered = filtered.filter(review => 
        review.content.toLowerCase().includes(search.toLowerCase()) ||
        review.title.toLowerCase().includes(search.toLowerCase()) ||
        review.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    setFilteredReviews(filtered);
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(review => review.rating === rating).length
  );

  // Pagination
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = filteredReviews.slice(startIndex, startIndex + reviewsPerPage);

  const renderStars = (rating: number, size: string = "w-4 h-4") => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto bg-black text-white">
      <Header />
      
      <div className="px-4 py-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2 text-white">Customer Reviews</h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            {renderStars(Math.round(averageRating), "w-5 h-5")}
            <span className="text-lg font-semibold text-white">{averageRating.toFixed(1)}</span>
            <span className="text-gray-400">({reviews.length} reviews)</span>
          </div>
          <p className="text-sm text-gray-400">Based on verified customer purchases</p>
        </div>

        {/* Rating Distribution */}
        <div className="bg-gray-900 rounded-lg p-4 mb-6 border border-gray-700">
          <h3 className="font-semibold mb-3 text-white">Rating Breakdown</h3>
          {[5, 4, 3, 2, 1].map((rating, index) => (
            <div key={rating} className="flex items-center gap-2 mb-1">
              <span className="text-sm w-6 text-gray-300">{rating}</span>
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <div className="flex-1 bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(ratingCounts[index] / reviews.length) * 100}%` }}
                />
              </div>
              <span className="text-sm text-gray-400 w-8">{ratingCounts[index]}</span>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-300">Filter by rating:</span>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => handleFilter(0)}
              className={`px-3 py-1 text-xs rounded-full border ${
                filterRating === 0 
                  ? 'bg-gray-600 text-white border-gray-600' 
                  : 'bg-gray-900 text-gray-400 border-gray-600 hover:border-gray-500'
              }`}
            >
              All
            </button>
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() => handleFilter(rating)}
                className={`px-3 py-1 text-xs rounded-full border flex items-center gap-1 ${
                  filterRating === rating 
                    ? 'bg-gray-600 text-white border-gray-600' 
                    : 'bg-gray-900 text-gray-400 border-gray-600 hover:border-gray-500'
                }`}
              >
                {rating} <Star className="w-3 h-3 fill-current" />
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {currentReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-3">
                  {review.image ? (
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-gray-300 font-semibold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm text-white">{review.name}</span>
                      {review.verified && (
                        <div className="flex items-center gap-1 bg-green-900 px-2 py-0.5 rounded-full">
                          <Verified className="w-3 h-3 text-green-400" />
                          <span className="text-xs text-green-300 font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      {renderStars(review.rating)}
                      <span className="text-xs text-gray-500">{review.location}</span>
                    </div>
                    <span className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h4 className="font-semibold text-sm mb-2 text-white">{review.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-3">{review.content}</p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <button className="flex items-center gap-1 hover:text-gray-400 transition-colors">
                    <ThumbsUp className="w-3 h-3" />
                    Helpful ({review.helpful})
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm border border-gray-600 bg-gray-800 text-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:border-gray-500"
            >
              Previous
            </button>
            
            <div className="flex gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-2 text-sm border rounded-md ${
                      currentPage === pageNum
                        ? 'bg-gray-600 text-white border-gray-600'
                        : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm border border-gray-600 bg-gray-800 text-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:border-gray-500"
            >
              Next
            </button>
          </div>
        )}

        {/* No results message */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No reviews found matching your criteria.</p>
            <button
              onClick={() => {
                setFilterRating(0);
                setSearchTerm('');
                setFilteredReviews(reviews);
              }}
              className="mt-2 text-gray-400 text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Reviews;
