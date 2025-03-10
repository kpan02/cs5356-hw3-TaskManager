import React from 'react';
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DatePicker = ({ date, onDateChange, className }) => {
    return (
        <div className={cn(className, "border border-gray-200 rounded-md")}>
            <Popover>
                <PopoverTrigger asChild>
                    <button
                        type="button"
                        className={cn(
                            "w-full h-full flex items-center justify-center text-center font-normal border rounded-md px-4 py-2",
                            !date && "text-muted-foreground",
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4 my-auto"/>
                        {date ? format(date, 'MM/dd/yyyy') : <span>Pick a date</span>}
                    </button>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date || undefined}
                        onSelect={onDateChange}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default DatePicker;