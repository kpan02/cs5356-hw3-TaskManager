import React from 'react';
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import categories from '../data/categories';

const CategoryFilter = ({ selectedCategory, onCategoryChange, className }) => {
  return (
    <div className={cn("relative", className)}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button 
            type="button"
            className="flex items-center justify-between w-full px-3 py-2 text-sm border rounded-md"
            style={{ 
              backgroundColor: selectedCategory ? selectedCategory.color : '',
              color: selectedCategory ? 'white' : 'black',
            }}
          >
            {selectedCategory ? `Filter: ${selectedCategory.name}` : "Filter by Category"}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="min-w-[12rem] p-0 z-50"
          align="start"
          sideOffset={4}
        >
          <DropdownMenuLabel className="py-1 text-sm">Filter by Category</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {categories.map((category) => (
            <DropdownMenuItem 
              key={category.id}
              onClick={() => onCategoryChange(category)}
              className="py-1 text-sm"
            >
              {category.name}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            onClick={() => onCategoryChange(null)}
            className="py-1 text-sm"
          >
            Show All
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CategoryFilter; 