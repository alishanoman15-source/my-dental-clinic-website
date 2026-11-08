import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const BlogDetails = () => {
  const [commentForm, setCommentForm] = useState({ name: '', email: '', message: '' });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log("Comment Submitted", commentForm);
  };

  const tipsList = [
    { title: "Brush Twice a Day—Properly", desc: "Brushing your teeth in the morning and before bed is essential. Use a soft-bristled toothbrush and fluoride toothpaste. Take at least two minutes, making sure to clean all surfaces of your teeth gently but thoroughly." },
    { title: "Don't Forget to Floss", desc: "Flossing removes plaque and food particles between teeth that brushing alone can't reach. Daily flossing helps prevent gum disease and cavities, especially in those hard-to-reach spots." },
    { title: "Use Mouthwash for Extra Protection", desc: "An antimicrobial or fluoride mouthwash can help reduce plaque, fight bad breath, and strengthen enamel. Use it as a finishing touch to your brushing and flossing routine." },
    { title: "Limit Sugary and Acidic Foods", desc: "Sugar feeds harmful bacteria in your mouth, while acidic foods and drinks can erode enamel. Reduce consumption of soda, candy, and citrus fruits, and rinse your mouth with water afterward if you do indulge." },
    { title: "Stay Hydrated", desc: "Drinking plenty of water helps wash away food debris and bacteria. It also promotes saliva production, which naturally protects your teeth and gums." },
    { title: "Eat a Tooth-Friendly Diet", desc: "Include crunchy fruits and vegetables like apples and carrots, which naturally clean your teeth. Dairy products are rich in calcium and phosphates that help strengthen enamel." },
    { title: "Avoid Tobacco Products", desc: "Smoking and chewing tobacco stain teeth and increase the risk of gum disease and oral cancer. Quitting is one of the best things you can do for your overall and oral health." },
    { title: "Visit Your Dentist Regularly", desc: "Don't skip your biannual dental check-ups. Professional cleanings remove tartar buildup and your dentist can spot early signs of decay or gum disease before they become serious problems." },
    { title: "Whiten Safely", desc: "If you're looking for a brighter smile, consult your dentist before using whitening products. Some over-the-counter options can cause sensitivity or damage enamel if not used correctly." },
    { title: "Protect Your Teeth", desc: "If you grind your teeth at night or play contact sports, use a mouthguard. This protects against unnecessary wear or injury that can affect the look and health of your smile." }
  ];

  const popularPosts = [
    { title: "Sustainable Waste Management Strategies for a Cleaner, Greener, and Healthier Planet", date: "January 15, 2023", img: "/ppic13.webp" },
    { title: "Innovative Waste Management Solutions to Reduce Pollution and Promote Sustainability", date: "January 15, 2023", img: "/ppic14.webp" },
    { title: "Community Engagement in Waste Management: Empowering Citizens for a Cleaner Future", date: "January 15, 2023", img: "/ppic15.webp" },
    { title: "The Role of Technology in Modern Waste Management Systems and Operations", date: "January 15, 2023", img: "/ppic16.webp" }
  ];

  const commentsData = [
    { author: "Merrill Rayos", date: "2 days ago", msg: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", avatar: "https://i.pravatar.cc/100?img=33", isReply: false },
    { author: "Jacqueline Sprang", date: "2 days ago", msg: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", avatar: "https://i.pravatar.cc/100?img=32", isReply: true },
    { author: "Sanford Crowley", date: "2 days ago", msg: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", avatar: "https://i.pravatar.cc/100?img=12", isReply: false },
    { author: "Lyndon Pocekay", date: "2 days ago", msg: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", avatar: "https://i.pravatar.cc/100?img=60", isReply: true },
    { author: "Aleen Crigger", date: "2 days ago", msg: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", avatar: "https://i.pravatar.cc/100?img=45", isReply: false }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Header Banner */}
      <div className="bg-[#f0f4fa] text-center pt-36 pb-20 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#000a3d] max-w-4xl mx-auto leading-tight mb-4">
          Discover 10 Easy Tips to Maintain a Healthier and Brighter Smile Today
        </h1>
        <div className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wide">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link> &gt;{' '}
          <span className="text-gray-400">Blog</span>
        </div>
      </div>

      {/* 2. Main Dual-Column Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT ARTICLE CONTAINER */}
          <div className="lg:col-span-8 flex flex-col">
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A bright, confident smile isn't just about looks—it's a sign of good oral health and self-care. Whether you're trying to maintain pearly whites or improve your dental routine, small daily habits can make a big difference. Here are 10 easy tips to help you keep your smile healthy and radiant.
            </p>

            {/* Main Featured Image Card */}
            <div className="w-full rounded-[24px] overflow-hidden aspect-[16/10] shadow-sm mb-8">
              <img 
                src="/ppic13.webp" 
                alt="Two people brushing teeth happily" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Numeric Step List rendering matching screenshot parameters */}
            <div className="flex flex-col gap-6 mb-12">
              {tipsList.map((tip, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-blue-600 text-white font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#000a3d] mb-1">{tip.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* --- COMMENTS CONTAINER MODULE --- */}
            <div className="border-t border-gray-100 pt-10">
              <h3 className="text-base font-bold text-[#000a3d] mb-8 uppercase tracking-wider">
                Comments ({commentsData.length})
              </h3>
              
              <div className="flex flex-col gap-6 mb-12">
                {commentsData.map((comment, idx) => (
                  <div key={idx} className={`flex gap-4 items-start ${comment.isReply ? 'pl-12 sm:pl-16' : ''} border-b border-gray-50 pb-6`}>
                    <img 
                      src={comment.avatar} 
                      alt={comment.author} 
                      className="w-11 h-11 rounded-full object-cover shrink-0 shadow-sm"
                    />
                    <div className="flex flex-col w-full">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-[#000a3d]">{comment.author}</span>
                        <span className="text-[10px] sm:text-xs text-gray-400 font-medium">| {comment.date}</span>
                        <button className="text-[10px] font-bold text-blue-600 hover:text-[#000a3d] ml-auto transition-colors">Reply</button>
                      </div>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium mt-2">
                        {comment.msg}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* --- LEAVE A COMMENT FORM INTERFACE --- */}
              <div className="pt-4">
                <h3 className="text-sm sm:text-base font-bold text-[#000a3d] mb-6 uppercase tracking-wider">
                  Leave a Comment
                </h3>
                <form onSubmit={handleCommentSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500">Name</label>
                      <input 
                        type="text"
                        required
                        className="w-full bg-[#f4f7fc] border border-gray-100 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium outline-none focus:border-blue-500 transition-colors"
                        value={commentForm.name}
                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500">Email *</label>
                      <input 
                        type="email"
                        required
                        className="w-full bg-[#f4f7fc] border border-gray-100 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium outline-none focus:border-blue-500 transition-colors"
                        value={commentForm.email}
                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-500">Message *</label>
                    <textarea 
                      rows="6"
                      required
                      className="w-full bg-[#f4f7fc] border border-gray-100 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium outline-none focus:border-blue-500 transition-colors resize-none"
                      value={commentForm.message}
                      onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-[#000a3d] text-white font-bold text-xs px-6 py-3 rounded-md transition-all shadow-sm w-max uppercase tracking-wider mt-2 cursor-pointer"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR WRAPPER PANEL */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            
            {/* Component A: Popular Posts Grid Row Link Structure */}
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-[#000a3d] mb-4 uppercase tracking-wider relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-600 after:mt-1">
                Popular Posts
              </h4>
              <div className="flex flex-col gap-4">
                {popularPosts.map((post, idx) => (
                  <div key={idx} className="flex gap-3 items-center group cursor-pointer">
                    <img 
                      src={post.img} 
                      alt="Thumbnail snippet" 
                      className="w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm group-hover:opacity-85 transition-opacity"
                    />
                    <div className="flex flex-col">
                      <h5 className="text-[11px] sm:text-xs font-bold text-gray-700 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h5>
                      <span className="text-[10px] text-gray-400 font-medium mt-1">📅 {post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Component B: About Us Informational Text Card */}
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-[#000a3d] mb-3 uppercase tracking-wider relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-600 after:mt-1">
                About Us
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            {/* Component C: Dynamic Tags Badge Grid Group */}
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-[#000a3d] mb-4 uppercase tracking-wider relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-600 after:mt-1">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Dental', 'Medical', 'Braces', 'Surgery', 'Health', 'Teeth'].map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] sm:text-xs font-bold text-gray-500 bg-[#f4f7fc] border border-gray-100 rounded-lg px-3 py-1.5 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetails;