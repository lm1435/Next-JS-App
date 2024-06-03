'use client'

import { Fragment, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types/CustomFilterProps";
import { updateSearchParams } from "@/utils";


const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams = (e: {title: string, value: string}) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase())
    router.push(newPathName);
  }

  return <div className="w-fit">
    <Listbox value={selected} onChange={(e) => {setSelected(e); handleUpdateParams(e)}}>
      <div className="relative w-fit z-10">
        <ListboxButton className="custom-filter__btn">
          <span className="block truncate">{title}</span>
          <Image src="/chevron-up-down.svg" width={20} height={20} className="ml-4 object-contain" alt="chevron up down"/>
        </ListboxButton>
        <Transition
        as={Fragment}
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ListboxOptions className="custom-filter__options">
          {options.map(option => (
            <ListboxOption key={option.title} value={option} className={({ focus }) =>
              `relative cursor-default select-none py-2 px-4 ${
                focus ? "bg-primary-blue" : "text-gray-900"
              }`
            }>
              {option.title}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Transition>
      </div>
    </Listbox>
  </div>;
};

export default CustomFilter;
