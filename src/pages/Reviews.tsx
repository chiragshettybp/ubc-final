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
    title: "Perfect for hand rehabilitation!",
    content: "Bought this kit after wrist surgery. The adjustable resistance from 22-132 lbs was perfect for my recovery. Started with the lightest setting and gradually increased. My physical therapist was impressed with my progress!",
    verified: true,
    helpful: 24,
    image: "https://i.postimg.cc/L69VqV4N/61-VVt6-Mw-L.jpg"
  },
  {
    id: 2,
    name: "Michael R.",
    location: "Texas, USA",
    rating: 5,
    date: "2024-05-12",
    title: "Amazing for rock climbing training",
    content: "This hand grip kit completely transformed my climbing performance. The finger exerciser and grip ring are game-changers. My grip strength increased dramatically in just 4 weeks. Worth every penny!",
    verified: true,
    helpful: 18,
    image: "https://i.postimg.cc/vH0t56cM/6153-Sz-Ubqu-L.jpg"
  },
  {
    id: 3,
    name: "Emma L.",
    location: "New York, USA",
    rating: 4,
    date: "2024-05-10",
    title: "Great for stress relief at work",
    content: "Love using the stress relief grip ball during work breaks. Helps me focus and reduces anxiety. The finger stretcher is also great for counteracting typing strain. Minor issue with the carry bag zipper.",
    verified: true,
    helpful: 12,
    image: "https://i.postimg.cc/G2nFbFSP/616-WQSk-SCk-L.jpg"
  },
  {
    id: 4,
    name: "David K.",
    location: "Florida, USA",
    rating: 5,
    date: "2024-05-08",
    title: "Perfect for elderly hand mobility",
    content: "Bought this for my 78-year-old father who has arthritis. The adjustable resistance and variety of tools help him maintain hand strength and mobility. Easy to use and very effective!",
    verified: true,
    helpful: 31,
    image: "https://i.postimg.cc/T3Sj4MV4/617z-MEVBj3-L.jpg"
  },
  {
    id: 5,
    name: "Jennifer W.",
    location: "Washington, USA",
    rating: 5,
    date: "2024-05-05",
    title: "Essential for piano practice",
    content: "As a piano teacher, finger strength and dexterity are crucial. This kit, especially the finger exerciser, has improved my playing significantly. My students notice the difference in my technique!",
    verified: true,
    helpful: 45,
    image: "https://i.postimg.cc/mkRyyYYZ/61-JQA-GWFNL.jpg"
  },
  {
    id: 6,
    name: "Robert T.",
    location: "Arizona, USA",
    rating: 4,
    date: "2024-05-03",
    title: "Solid build quality, great variety",
    content: "The stainless steel springs feel premium and durable. Love having 5 different tools for various hand exercises. The carry bag is convenient for travel. Only wish the grip ring had slightly more resistance options.",
    verified: true,
    helpful: 8,
    image: "https://i.postimg.cc/2jFw8tY1/61rwg-J24ue-L.jpg"
  },
  {
    id: 7,
    name: "Lisa H.",
    location: "Colorado, USA",
    rating: 5,
    date: "2024-05-01",
    title: "Best investment for hand health!",
    content: "After years of computer work, my hands were weak and stiff. This kit completely changed that. Use it daily - the finger stretcher for relief and the grip strengthener for building power. Amazing results!",
    verified: true,
    helpful: 22,
    image: "https://i.postimg.cc/NMRxXJrP/713ukr-X41-UL.jpg"
  },
  {
    id: 8,
    name: "Mark S.",
    location: "Illinois, USA",
    rating: 5,
    date: "2024-04-28",
    title: "Perfect for tennis players",
    content: "My tennis game improved dramatically after using this kit for 6 weeks. Stronger grip means more control and power in my shots. The adjustable resistance is perfect for progressive training.",
    verified: true,
    helpful: 15,
    image: "https://i.postimg.cc/KjNrq1fP/71a-ZOTnb-WLL.jpg"
  },
  {
    id: 9,
    name: "Amanda J.",
    location: "Oregon, USA",
    rating: 5,
    date: "2024-04-25",
    title: "Great for carpal tunnel prevention",
    content: "Working in data entry, I was developing carpal tunnel symptoms. This kit, especially the finger stretcher and grip ball, has been a lifesaver. Pain is gone and my hands feel stronger than ever.",
    verified: true,
    helpful: 19,
    image: "https://i.postimg.cc/W4kmRWSb/71j-N-HQi-ZYL.jpg"
  },
  {
    id: 10,
    name: "Christopher B.",
    location: "Nevada, USA",
    rating: 4,
    date: "2024-04-22",
    title: "Outstanding customer service",
    content: "Had a question about proper usage for my specific needs. FitBeast's 24/7 support was incredible - got detailed guidance and exercise recommendations. The product works exactly as advertised.",
    verified: true,
    helpful: 11,
    image: "https://i.postimg.cc/6qYnVD6z/71-Pkl-Mj-Sx9-L.jpg"
  },
  {
    id: 11,
    name: "Rachel P.",
    location: "Georgia, USA",
    rating: 5,
    date: "2024-04-20",
    title: "Guitar playing improvement",
    content: "As a guitarist, finger strength and independence are crucial. This kit's finger exerciser and grip strengthener have dramatically improved my playing technique and endurance. Highly recommend for musicians!",
    verified: true,
    helpful: 27,
    image: "https://i.postimg.cc/vZDLhHVn/71s-Sjb8-Y0e-L.jpg"
  },
  {
    id: 12,
    name: "Kevin D.",
    location: "Michigan, USA",
    rating: 5,
    date: "2024-04-18",
    title: "Perfect for seniors",
    content: "At 82, maintaining hand strength is important for daily activities. This kit is gentle yet effective. The adjustable resistance lets me progress safely. Feel more confident with everyday tasks now.",
    verified: true,
    helpful: 33,
    image: "https://i.postimg.cc/yxV0ZVKk/71w-Gx-ALC-f-L.jpg"
  },
  {
    id: 13,
    name: "Michelle A.",
    location: "North Carolina, USA",
    rating: 4,
    date: "2024-04-15",
    title: "Great for office workers",
    content: "The stress relief ball is perfect for desk use. Helps with focus and reduces hand tension from typing. The whole kit is well-designed and portable. Minor complaint - wish instructions were more detailed.",
    verified: true,
    helpful: 9,
    image: "https://i.postimg.cc/593BMF5v/71zk1m-Aqd-L.jpg"
  },
  {
    id: 14,
    name: "Steven L.",
    location: "Ohio, USA",
    rating: 5,
    date: "2024-04-12",
    title: "Worth every penny for athletes",
    content: "Initially thought it was pricey, but after seeing my weightlifting performance improve, it's worth every cent. Grip strength was my limiting factor - not anymore! Build quality is exceptional.",
    verified: true,
    helpful: 16,
    image: "https://i.postimg.cc/L68z46vW/815mfdrat-PL.jpg"
  },
  {
    id: 15,
    name: "Nicole C.",
    location: "Virginia, USA",
    rating: 5,
    date: "2024-04-10",
    title: "Helps with arthritis management",
    content: "My rheumatologist recommended grip exercises for my arthritis. This kit provides the perfect variety and resistance levels. Regular use has significantly reduced stiffness and improved mobility.",
    verified: true,
    helpful: 21,
    image: "https://i.postimg.cc/tTdhJsLK/81s2ztdbmq-L.jpg"
  },
  {
    id: 16,
    name: "Brian M.",
    location: "Pennsylvania, USA",
    rating: 5,
    date: "2024-04-08",
    title: "Incredibly versatile kit",
    content: "Love having 5 different tools for various exercises. From rehabilitation to strength building to stress relief - this kit covers everything. The video tutorials are also very helpful.",
    verified: true,
    helpful: 14
  },
  {
    id: 17,
    name: "Stephanie K.",
    location: "Indiana, USA",
    rating: 4,
    date: "2024-04-05",
    title: "Great for busy professionals",
    content: "As a surgeon, hand strength and dexterity are critical. This portable kit lets me maintain and improve my hand fitness anywhere. The finger exerciser is particularly beneficial for fine motor skills.",
    verified: true,
    helpful: 7
  },
  {
    id: 18,
    name: "Gregory F.",
    location: "Tennessee, USA",
    rating: 5,
    date: "2024-04-03",
    title: "Premium quality materials",
    content: "The stainless steel springs and ergonomic design show attention to quality. Each tool feels durable and well-engineered. After 3 months of daily use, everything still works perfectly.",
    verified: true,
    helpful: 13
  },
  {
    id: 19,
    name: "Karen R.",
    location: "Missouri, USA",
    rating: 5,
    date: "2024-04-01",
    title: "Perfect for drummers",
    content: "My drumming endurance and control improved dramatically using this kit. The finger exerciser and grip strengthener target exactly the muscles drummers need. Essential gear for any serious musician.",
    verified: true,
    helpful: 25
  },
  {
    id: 20,
    name: "Daniel W.",
    location: "Wisconsin, USA",
    rating: 4,
    date: "2024-03-29",
    title: "Good value for complete kit",
    content: "Compared to buying individual hand exercise tools, this 5-pack offers great value. The variety ensures I never get bored with my hand workout routine. Quality is excellent across all items.",
    verified: true,
    helpful: 10
  },
  {
    id: 21,
    name: "Jessica T.",
    location: "Minnesota, USA",
    rating: 5,
    date: "2024-03-27",
    title: "Life-changing for hand pain",
    content: "Suffered from chronic hand pain due to repetitive strain. This kit's combination of strengthening and stretching tools has virtually eliminated my pain. Feel like I have new hands!",
    verified: true,
    helpful: 29
  },
  {
    id: 22,
    name: "Timothy H.",
    location: "Iowa, USA",
    rating: 5,
    date: "2024-03-25",
    title: "Compact yet comprehensive",
    content: "Amazing how much functionality they packed into such a portable kit. The carry bag fits easily in my gym bag or briefcase. No excuses not to maintain hand strength anywhere.",
    verified: true,
    helpful: 12
  },
  {
    id: 23,
    name: "Melissa G.",
    location: "Kansas, USA",
    rating: 4,
    date: "2024-03-22",
    title: "Easy to use for all ages",
    content: "Bought this for family use - from my teenage athlete son to my elderly mother. The adjustable resistance and variety of tools work for everyone's needs and abilities.",
    verified: true,
    helpful: 8
  },
  {
    id: 24,
    name: "Jonathan B.",
    location: "Arkansas, USA",
    rating: 5,
    date: "2024-03-20",
    title: "Perfect for physical therapy",
    content: "My physical therapist recommended this kit for my hand rehabilitation program. The progressive resistance options and different exercise types are exactly what I needed for recovery.",
    verified: true,
    helpful: 20
  },
  {
    id: 25,
    name: "Ashley D.",
    location: "Louisiana, USA",
    rating: 5,
    date: "2024-03-18",
    title: "Outstanding support and product",
    content: "Had questions about which exercises to focus on for my goals. FitBeast's support team provided personalized recommendations. The product quality and customer service are both top-notch.",
    verified: true,
    helpful: 15
  },
  {
    id: 26,
    name: "Ryan C.",
    location: "Mississippi, USA",
    rating: 4,
    date: "2024-03-15",
    title: "Great addition to home gym",
    content: "This kit complements my home workout routine perfectly. Hand and forearm strength often gets neglected, but this comprehensive kit ensures I don't skip this important aspect of fitness.",
    verified: true,
    helpful: 6
  },
  {
    id: 27,
    name: "Heather M.",
    location: "Alabama, USA",
    rating: 5,
    date: "2024-03-12",
    title: "Helps with daily activities",
    content: "After a stroke, rebuilding hand strength was crucial for independence. This kit's variety and adjustable resistance helped me progress from basic grip to complex fine motor tasks.",
    verified: true,
    helpful: 23
  },
  {
    id: 28,
    name: "Patrick L.",
    location: "South Carolina, USA",
    rating: 5,
    date: "2024-03-10",
    title: "Impressive engineering",
    content: "The ergonomic design and quality materials show thoughtful engineering. Each tool targets different aspects of hand fitness. As an engineer myself, I appreciate the attention to detail.",
    verified: true,
    helpful: 17
  },
  {
    id: 29,
    name: "Christina S.",
    location: "Kentucky, USA",
    rating: 4,
    date: "2024-03-08",
    title: "Worth the investment for health",
    content: "Initially hesitant about the price, but hand health is invaluable. After using this kit for 2 months, my grip strength and dexterity have improved significantly. Worth every dollar.",
    verified: true,
    helpful: 11
  },
  {
    id: 30,
    name: "Nathan J.",
    location: "Oklahoma, USA",
    rating: 5,
    date: "2024-03-05",
    title: "Revolutionary hand training kit",
    content: "This isn't just a grip strengthener - it's a complete hand fitness system. The combination of tools covers every aspect of hand and forearm development. A must-have for serious training.",
    verified: true,
    helpful: 26
  },
  {
    id: 31,
    name: "Victoria P.",
    location: "West Virginia, USA",
    rating: 5,
    date: "2024-03-03",
    title: "Perfect for martial arts training",
    content: "As a martial artist, grip strength is crucial for grappling and weapon training. This kit has significantly improved my performance. The finger exerciser is particularly beneficial for technique.",
    verified: true,
    helpful: 34
  },
  {
    id: 32,
    name: "Benjamin K.",
    location: "Utah, USA",
    rating: 4,
    date: "2024-03-01",
    title: "Solid product for active lifestyle",
    content: "Great build quality and comprehensive tools for hand fitness. The portable design means I can maintain my hand strength routine even when traveling. Wish it included more exercise variations guide.",
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
          <h1 className="text-2xl font-bold mb-2 text-white">Hand Grip Kit Reviews</h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            {renderStars(Math.round(averageRating), "w-5 h-5")}
            <span className="text-lg font-semibold text-white">{averageRating.toFixed(1)}</span>
            <span className="text-gray-400">({reviews.length} reviews)</span>
          </div>
          <p className="text-sm text-gray-400">Based on verified Hand Grips Strengthener Kit purchases</p>
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
                
                {/* Customer Review Image */}
                {review.image && (
                  <div className="mb-3">
                    <img 
                      src={review.image} 
                      alt="Customer review photo"
                      className="w-full max-w-xs h-auto rounded-lg object-cover border border-gray-600"
                    />
                  </div>
                )}
                
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
