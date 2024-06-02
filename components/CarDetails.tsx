import { CarDetailsProps } from "@/types/CarDetailsProps";
import Image from "next/image";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  Transition,
} from "@headlessui/react";
import { fetchCarImage } from "@/utils";

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
        <Dialog onClose={closeModal} className="relative z-50 " as="div">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-3000"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md max-h-[85%] overflow-scroll rounded-xl shadow-xl p-6 bg-gray-700">
                <button type="button" onClick={closeModal}>
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain absolute top-2 right-2 z-10 w-fit bg-white p-1 rounded-full"
                  />
                </button>
                <div className="flex-1 flex flex-col gap-3">
                  <div className="relative w-full h-40 bg-gradient-to-r from-purple-500 to-pink-500 bg-cover bg-center rounded-lg">
                    <Image
                      src={fetchCarImage(car)}
                      alt="logo"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={fetchCarImage(car, '29')}
                        alt="logo"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={fetchCarImage(car, '33')}
                        alt="logo"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={fetchCarImage(car, '13')}
                        alt="logo"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <DialogTitle
                  as="h2"
                  className="text-base/7 font-medium text-white mt-2 capitalize"
                >
                  {car.year} {car.make} {car.model}
                </DialogTitle>
                <div className="mt-3 flex flex-wrap gap-4 capitalize">
                  {Object.entries(car)?.map(([key, value]) => (
                    <div
                      className="flex justify-between gap-5 w-full text-right text-white"
                      key={key}
                    >
                      <h4>{key?.split("_")?.join(" ")}</h4>
                      <p>{value}</p>
                    </div>
                  ))}
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
