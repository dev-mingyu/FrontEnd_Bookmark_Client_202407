import { getAllBookmarks } from "@/lib/bookmarkApi";
import { BookmarkType, BookmarksResponse } from "@/types";
import Bookmarks from '@/app/components/Bookmarks';

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
        <Bookmarks bookmarks={bookmarks} />
    </div>
  );
}