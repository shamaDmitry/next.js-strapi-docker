"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/lib/store/features/counter/counterSlice";
import { useState } from "react";

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState(10);

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="inline-flex rounded shadow-lg border bg-white p-4 items-center gap-4 flex-wrap w-full mb-8">
      <div className="w-full border-b pb-2">
        <span className="font-bold">{count}</span>
      </div>

      <div className="w-full flex justify-center items-center gap-4">
        <Button
          className="flex-1 font-bold"
          onClick={() => dispatch(decrement())}
        >
          -1
        </Button>

        <Button
          className="flex-1 font-bold"
          onClick={() => dispatch(increment())}
        >
          + 1
        </Button>
      </div>

      <div className="flex gap-4">
        <input
          className="border block p-2 rounded w-full"
          placeholder="enter value"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value) || 0)}
        />

        <Button
          className="flex-1 font-bold"
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          Increment
        </Button>
      </div>
    </div>
  );
}
