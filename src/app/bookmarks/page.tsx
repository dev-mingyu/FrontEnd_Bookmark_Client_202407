import NavBar from "@/app/components/NavBar";

export default function BookmarkPage()  {
  const { titles } = getData()
  
  return (
    <div>
        <h1>Welcome to Bookmarker</h1>
        {
          titles.map((title,idx) => <h2 key={idx}>{title}</h2>)
        }
    </div>
  );
}

function getData()  {
  return {
      titles: ['Bookmark1', 'Bookmark2']
  }
}
