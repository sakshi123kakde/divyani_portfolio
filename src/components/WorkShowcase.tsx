import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, ExternalLink, Instagram, X, ZoomIn } from "lucide-react";
import krishnPoster from "../assets/krushnakunj-2.jpg.jpeg";
import krishnPoster2 from "../assets/krushnakunj.jpg.jpeg";

gsap.registerPlugin(ScrollTrigger);

/* ✅ Categories */
const categories = ["All", "Reels", "Posters"];

interface WorkItem {
  title: string;
  category: string;
  type: "video" | "image";
  description: string;
  reelUrl?: string;
  image?: string;
  instagramHandle?: string;
}

/* ✅ Works Data */
const works: WorkItem[] = [
  /* ---------------- REELS ---------------- */
  {
    title: "Falcon Screens Reel",
    category: "Reels",
    type: "video",
    description: "Instagram reel for Falcon Screens",
    reelUrl: "https://www.instagram.com/falconscreens/",
    instagramHandle: "falconscreens",
  },
  {
    title: "Promo Video Reel",
    category: "Reels",
    type: "video",
    description: "YouTube promotional reel project",
    reelUrl: "https://youtu.be/ccpVvbvSVOA?si=BEhUdEusgB_Mbtr6",
  },
  {
    title: "NutriSpray Campaign",
    category: "Reels",
    type: "video",
    description: "Instagram marketing reel for NutriSpray",
    reelUrl: "https://www.instagram.com/nutrispray.official/",
    instagramHandle: "nutrispray.official",
  },
  {
    title: "Oral Care Centre Reel",
    category: "Reels",
    type: "video",
    description: "Instagram reel for Balkrishna Oral Care Centre",
    reelUrl: "https://www.instagram.com/balkrishnaoralcarecentre/",
    instagramHandle: "balkrishnaoralcarecentre",
  },
  {
    title: "RJG Logistics Reel",
    category: "Reels",
    type: "video",
    description: "Instagram reel for RJG Logistics",
    reelUrl: "https://www.instagram.com/rjglogistics/",
    instagramHandle: "rjglogistics",
  },
  {
    title: "Creative Video Edit",
    category: "Reels",
    type: "video",
    description: "YouTube motion reel editing project",
    reelUrl: "https://youtu.be/WEI8Mit54dE?si=LX3qDx4D7bgGGamK",
  },

  /* ---------------- POSTERS ---------------- */
  {
    title: "Krishn Kunj Poster",
    category: "Posters",
    type: "image",
    description: "",
    image: krishnPoster2,
  },
  {
    title: "Krishn Kunj Poster",
    category: "Posters",
    type: "image",
    description: "",
    image: krishnPoster,
  },
];

/* ✅ Instagram Profile Preview Component */
const InstagramProfilePreview = ({ username }: { username: string }) => {
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading Instagram profile preview
    // In production, you would fetch this from Instagram's API or oEmbed
    const timer = setTimeout(() => {
      setProfileData({
        username,
        avatar: `https://ui-avatars.com/api/?name=${username}&background=random&size=200`,
      });
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

  if (loading) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 animate-pulse" />
    );
  }

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 flex flex-col items-center justify-center p-6 text-white">
      {/* Instagram Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-3 gap-1 h-full">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-white rounded" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white mb-4 mx-auto overflow-hidden">
          <img
            src={profileData.avatar}
            alt={username}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Instagram className="w-5 h-5" />
          <h4 className="font-bold text-lg">@{username}</h4>
        </div>
        <p className="text-sm text-white/90 mb-4">View Instagram Profile</p>
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 inline-block">
          <span className="text-xs font-medium">Instagram Reels</span>
        </div>
      </div>
    </div>
  );
};

/* ✅ YouTube Preview Component */
const YouTubePreview = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center">
      {/* YouTube Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-8 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-l-8 border-l-white ml-2" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <svg className="w-20 h-20 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        <p className="text-lg font-bold mb-2">YouTube Video</p>
        <p className="text-sm text-white/90">Promotional Reel</p>
      </div>
    </div>
  );
};

/* ✅ Component */
const WorkShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  /* Filter */
  const filtered =
    activeCategory === "All"
      ? works
      : works.filter((w) => w.category === activeCategory);

  /* Animations */
  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".work-item");
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, [activeCategory]);

  /* Modal/Lightbox open */
  useEffect(() => {
    if (selectedWork || lightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedWork, lightboxImage]);

  /* Open Video Modal */
  const handleVideoClick = (work: WorkItem) => {
    setSelectedWork(work);
  };

  /* Open Image Lightbox */
  const handleImageClick = (work: WorkItem) => {
    if (work.image) {
      setLightboxImage(work.image);
    }
  };

  const closeModal = () => setSelectedWork(null);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <>
      {/* SECTION */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My Work
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore my reels and creative poster designs. Click any reel to open it.
          </p>

          {/* CATEGORY FILTER */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-primary/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div
            ref={sectionRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((work, i) => (
              <div
                key={i}
                className="work-item group cursor-pointer relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                onClick={() => {
                  if (work.type === "video") {
                    handleVideoClick(work);
                  } else {
                    handleImageClick(work);
                  }
                }}
              >
                {/* Card Content */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Poster Image */}
                  {work.type === "image" && work.image && (
                    <>
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Zoom Icon Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <ZoomIn className="w-8 h-8 text-gray-800" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Reel Card with Instagram/YouTube Preview */}
                  {work.type === "video" && (
                    <>
                      {work.instagramHandle ? (
                        <InstagramProfilePreview username={work.instagramHandle} />
                      ) : (
                        <YouTubePreview />
                      )}

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white rounded-full p-6 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Play className="w-10 h-10 text-gray-800 fill-gray-800" />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{work.title}</h3>
                  <p className="text-sm text-white/80">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {selectedWork && selectedWork.reelUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold mb-2">{selectedWork.title}</h3>
            <p className="text-muted-foreground mb-6">
              {selectedWork.description}
            </p>

            {/* Open Reel */}
            <a
              href={selectedWork.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              {selectedWork.reelUrl.includes("instagram") ? (
                <Instagram className="w-5 h-5" />
              ) : (
                <ExternalLink className="w-5 h-5" />
              )}
              Open {selectedWork.reelUrl.includes("instagram") ? "Instagram" : "YouTube"}
            </a>
          </div>
        </div>
      )}

      {/* IMAGE LIGHTBOX */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={lightboxImage}
              alt="Poster preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WorkShowcase;