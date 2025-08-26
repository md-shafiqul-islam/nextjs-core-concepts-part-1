import Link from "next/link";

export default function PostDetails({ params }) {
  const id = params?.id;

  const data = [
    {
      id: 1,
      title: "Exploring the Mountains",
      image: "https://picsum.photos/seed/mountains/400/250",
      description:
        "A thrilling journey through the highest peaks and breathtaking landscapes.",
      author: "Ethan Harper",
      category: "Travel",
      publishedDate: "2025-07-12",
      content:
        "Full article content goes here about the mountains, hiking tips, and experiences in nature.",
    },
    {
      id: 2,
      title: "The Art of Cooking",
      image: "https://picsum.photos/seed/cooking/400/250",
      description:
        "Discover culinary secrets and delicious recipes from around the world.",
      author: "Sophia Martinez",
      category: "Cooking",
      publishedDate: "2025-06-28",
      content:
        "This full article explains cooking techniques, recipes, and kitchen hacks for beginners and pros.",
    },
    {
      id: 3,
      title: "Tech Trends 2025",
      image: "https://picsum.photos/seed/tech/400/250",
      description:
        "Stay ahead in technology with the latest innovations and trends.",
      author: "Liam Zhang",
      category: "Technology",
      publishedDate: "2025-08-10",
      content:
        "A deep dive into AI, blockchain, and future tech that will shape industries in 2025 and beyond.",
    },
    {
      id: 4,
      title: "Mindfulness and Meditation",
      image: "https://picsum.photos/seed/mindfulness/400/250",
      description:
        "Learn techniques to calm your mind and enhance your daily life.",
      author: "Amara Lin",
      category: "Self-Help",
      publishedDate: "2025-07-05",
      content:
        "This article explains meditation practices, mindfulness exercises, and mental health tips.",
    },
    {
      id: 5,
      title: "Travel on a Budget",
      image: "https://picsum.photos/seed/travel/400/250",
      description:
        "Tips and tricks to explore the world without breaking the bank.",
      author: "Noah Patel",
      category: "Travel",
      publishedDate: "2025-05-18",
      content:
        "Detailed guide on budget travel, cheap accommodations, food tips, and local experiences.",
    },
  ];

  const singlePost = data.find((dt) => dt.id === parseInt(id));

  if (!singlePost) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-semibold text-red-600">Post not found!</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Information of a single post no of {id} is showing here.</h1>

      <div className="max-w-4xl mx-auto p-8 space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-purple-700">
          {singlePost.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
          <span>Author: {singlePost.author}</span>
          <span>Category: {singlePost.category}</span>
          <span>Published: {singlePost.publishedDate}</span>
        </div>

        {/* Image */}
        <img
          src={singlePost.image}
          alt={singlePost.title}
          className="w-full rounded-lg shadow-md"
        />

        {/* Description */}
        <p className="text-lg text-gray-700 font-medium">
          {singlePost.description}
        </p>

        {/* Full Content */}
        <div className="text-gray-800 leading-relaxed space-y-4">
          <p>{singlePost.content}</p>
        </div>

        {/* Back Button */}
        <Link href="/posts">
          <button className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}
