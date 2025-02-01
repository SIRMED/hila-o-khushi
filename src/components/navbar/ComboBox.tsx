"use client"

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { redirect, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const frameworks = [
  {
    value: "education",
    label: "For Education",
  },
  {
    value: "women",
    label: "For Women Empowerment",
  }
]

export function ComboboxDemo() {
  const path = usePathname().split("/")[1]
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(path)

  useEffect(() => {
    if (value !== path) {
      redirect(`/${value}`)
    }
  }, [value])

  return (<>
    {(path === "education" || path === "women") ? <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" style={{ zIndex: "99999999999999999999999999999999999999999999999999999999999999999999999999999999" }}>
        <Command>
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue: any) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover> : <span>&nbsp;&nbsp; <span className="text-red-500">404</span> - This page does not exist</span>}
  </>)
}
