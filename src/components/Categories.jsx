import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  const categories = [
    { id: 1, name: 'Work', color: 'blue' },
    { id: 2, name: 'School', color: 'green' },
    { id: 3, name: 'Personal', color: 'gray' },
  ];
  
  const Category = ({ style, className }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    const handleSelectCategory = (category) => {
      setSelectedCategory(category);
    };
    
    const clearCategory = () => {
      setSelectedCategory(null);
    };
    
    return (
      <div className={cn("border border-gray-200 rounded-md w-full h-6", className)} style={style}>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button 
              type="button"
              className="w-full h-full flex items-center justify-center text-center text-xs font-normal border rounded-md px-1 py-0"
              style={{ 
                backgroundColor: selectedCategory ? selectedCategory.color : '',
                color: selectedCategory ? 'white' : 'black',
              }}
            >
              {selectedCategory ? selectedCategory.name : "Category"}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="min-w-[8rem] p-0 z-50"
            align="start"
            sideOffset={4}
          >
              <DropdownMenuLabel className="py-1 text-xs">Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((category) => (
                  <DropdownMenuItem 
                    key={category.id}
                    onClick={() => handleSelectCategory(category)}
                    className="py-1 text-xs"
                  >
                    {category.name}
                  </DropdownMenuItem>
              ))}
              {selectedCategory && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={clearCategory}
                    className="py-1 text-xs text-red-500"
                  >
                    Clear
                  </DropdownMenuItem>
                </>
              )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  };

  export default Category;

