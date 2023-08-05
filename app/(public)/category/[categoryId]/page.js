"use client";

import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const {categoryId} = useParams();
  console.log(categoryId);
  return (
    <main className="">
      Category !
    </main>
  )
}