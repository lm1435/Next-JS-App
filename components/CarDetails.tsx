import { CarDetailsProps } from "@/types/CarDetailsProps";
import Image from "next/image";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  Transition,
} from "@headlessui/react";
import { CustomButton } from ".";

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition
        show={isOpen}
        enter="ease-out duration-3000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        appear
      >
        <Dialog onClose={closeModal} className="relative z-50" as="div">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-3000"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md rounded-xl p-6 bg-gray-800">
                <button type="button" onClick={closeModal}>
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain absolute top-2 right-2 z-10 w-fit bg-white p-1 rounded-full"
                  />
                </button>
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-white"
                >
                  <span className="capitalize">
                    {car.year} {car.make} {car.model}
                  </span>
                </DialogTitle>
                <p className="mt-2 text-sm/6 text-white"></p>
                <div className="mt-4">
                  <CustomButton
                    containerStyles="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                    handleClick={closeModal}
                    title="Close Modal"
                  />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
