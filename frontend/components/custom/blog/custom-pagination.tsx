"use client";

import { FC } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import usePagination from "@/hooks/usePagination";
import { notFound, useSearchParams } from "next/navigation";

export const dotts = "...";

interface CustomPaginationProps {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  path: string;
}

const CustomPagination: FC<CustomPaginationProps> = ({
  totalItems,
  currentPage,
  itemsPerPage,
  path,
}) => {
  const searchParams = useSearchParams();

  const pages = usePagination(totalItems, currentPage, itemsPerPage);

  const setParams = (path: string, pageNumber: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", pageNumber);
    return `/${path}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* render prev button */}
        {currentPage !== 1 && (
          <PaginationItem>
            {/* <PaginationPrevious href={`/${path}?page=${currentPage - 1}`} /> */}
            <PaginationPrevious
              href={setParams(path, (currentPage - 1).toString())}
            />
          </PaginationItem>
        )}

        {pages.map((pageNumber, index) => {
          // render dotts
          if (pageNumber === dotts) {
            return (
              <PaginationItem key={pageNumber}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          // render pagination links
          else {
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href={setParams(path, pageNumber.toString())}
                  isActive={pageNumber === currentPage}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          }
        })}

        {/* render next button */}
        {currentPage < pages.length && (
          <PaginationItem>
            <PaginationNext href={`/${path}?page=${currentPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
