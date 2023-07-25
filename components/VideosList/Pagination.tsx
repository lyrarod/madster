type PropsPagination = {
  totalVideos: number;
  videosPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

export function Pagination({
  totalVideos,
  videosPerPage,
  setCurrentPage,
  currentPage,
}: PropsPagination) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-x-2 md:gap-x-4 text-text-color font-bold text-2xl my-4 md:my-8">
      <span className="text-xl md:text-2xl select-none">Página</span>
      {pages.map((page, index) => {
        const isPage: boolean = page === currentPage;

        return (
          <button
            key={index}
            disabled={isPage}
            onClick={() => {
              setCurrentPage(page);
            }}
            className={`duration-100 ${
              isPage
                ? "text-blue-secondary font-bold border border-blue-primary py-0 md:py-1 px-3 md:px-4 rounded"
                : "text-text-color font-medium border border-transparent py-1 px-1 rounded hover:text-blue-primary "
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
