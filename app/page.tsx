export default function Home() {
  const projectName = "XPCU"; 
  const season = 1;
  return (
    <main className="flex min-h-screen flex =-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">
        wellcome to project XPCU season {season}
      </h1>
      <p className="text-xl">
      {projectName}
      </p>


      <p className="text-xl">
        Starting Season: {season}
      </p>

     
      <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Start Reading
      </button>

    </main>
  );
 
}
