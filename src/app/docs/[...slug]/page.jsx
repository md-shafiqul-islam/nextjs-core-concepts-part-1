export default function Slugs({ params }) {
  const { slug } = params;

  // slug is an array if there are segments, otherwise undefined
  const path = slug ? slug.join("/") : "index"; // "index" = default page for /docs

  // content mapping
  const content = {
    api: "API Docs here",
    "api-reference": "API Reference here",
    "file-conventions": "File Conventions here",
  };

  // if no content found, show Not Found
  if (!content[path]) {
    return <div>404 - Not Found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Docs: {path}</h1>
      <p>{content[path]}</p>
    </div>
  );
}
