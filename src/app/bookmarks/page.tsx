import { getAllBookmarks } from "@/lib/bookmarkApi";
import { BookmarkType, BookmarksResponse } from "@/types";

type Props = {
  searchParams: { page: string, size: string }
}


export default async function BookmarkPage(props: Props)  {
  const { page = "1", size } = props.searchParams

  const bookmarksData: Promise<BookmarksResponse> = getAllBookmarks(parseInt(page), parseInt(size))
  const { data } = await bookmarksData
  const bookmarks: BookmarkType[] = data

  return (
    <div>
        <h1>Welcome to Bookmarker</h1>
        {
          bookmarks.map(bookmark => {
            return (
                <p key={bookmark.id}>{bookmark.title}</p>
            )
          })
        }
    </div>
  );
}