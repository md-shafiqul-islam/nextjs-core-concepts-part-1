import Link from "next/link";

export default function Posts() {
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

  return (
    <div>
      <h1>This is posts page.</h1>

      <div className="grid grid-cols-3 gap-5">
        {data.map((dt) => (
          <div key={dt.id}>
            <h1>{dt.id}</h1>
            <p>{dt.title}</p>
            <img src={dt.image} alt="" />
            <p>{dt.description}</p>

            <Link href={`/posts/${dt.id}`}>
              <button className="bg-yellow-600 px-2 py-3 cursor-pointer rounded-xl">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
