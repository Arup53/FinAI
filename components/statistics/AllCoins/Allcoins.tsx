"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import CoinsTable from "./CoinsTable";

const AllCoins = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10; // Items per page
  const [loading, setLoading] = useState(false);
  const totalPages = 10; // Assuming 100 results, 10 per page
  const firstRender = useRef(true);
  const lastRequestTime = useRef(0);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/coins?page=${page}&item=${perPage}`
        );
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchCoins();
  }, [page]);

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4">Crypto Market</h2>

      <CoinsTable coins={coins} loading={loading} />

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={`cursor-pointer ${
                  page === 1 ? "pointer-events-none opacity-50" : ""
                }`}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              />
            </PaginationItem>
            <span className="px-4 py-2">
              Page {page} of {totalPages}
            </span>
            <PaginationItem>
              <PaginationNext
                className={`cursor-pointer ${
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }`}
                onClick={() =>
                  setPage((prev) => (prev < totalPages ? prev + 1 : prev))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AllCoins;
