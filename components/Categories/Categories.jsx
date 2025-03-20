"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Categories = ({ categories, selected }) => {
  const router = useRouter();

  const onClick = (categoryId) => {
    router.push(categoryId ? `/categories/${categoryId}` : "/courses");
  };

  return (
    <div className="flex flex-wrap justify-center md:gap-7 gap-5 my-10 px-4">
      <Button
        variant={selected === null ? "default" : "outline"}
        onClick={() => onClick(null)}
      >
        All Categories
      </Button>
      {categories?.map((category) => (
        <Button
          key={category.id}
          variant={selected === category.id ? "default" : "outline"}
          onClick={() => onClick(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
