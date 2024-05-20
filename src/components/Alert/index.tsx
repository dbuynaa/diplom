import { FC } from "react";
import {
  ArrowPathIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  GlobeAmericasIcon,
  LockClosedIcon,
  NewspaperIcon,
  ServerIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-900 absolute inset-0 h-screen w-screen bg-opacity-50 blur-sm"></div>

      <div className="relative rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="bg-gray-200 hover:bg-gray-300 absolute right-2 top-2 rounded-full p-2 transition duration-200 focus:outline-none"
        >
          <XMarkIcon className="text-gray-800 h-5 w-5" />
        </button>
        <h2 className="mb-6 text-left text-2xl font-semibold">Device Detail</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <div className="flex">
              <NewspaperIcon className="mr-3 h-5 w-5" />
              <div className="flex gap-2">
                <p className="text-gray-700">Serial Number:</p>
                <p className="text-gray-800">GZ21120231108913</p>
              </div>
            </div>
            <div className="flex">
              <ServerIcon className="mr-3 h-5 w-5" />
              <div className="flex gap-2">
                <p className="text-gray-700">Product:</p>
                <p className="text-gray-800">SN6B6AL_EU127</p>
              </div>
            </div>
            <div className="flex">
              <ComputerDesktopIcon className="mr-3 h-5 w-5" />
              <div className="flex gap-2">
                <p className="text-gray-700">Status:</p>
                <p className="text-gray-800">Online</p>
              </div>
            </div>
            <div className="flex">
              <LockClosedIcon className="mr-3 h-5 w-5" />
              <div className="flex gap-2">
                <p className="text-gray-700">Lock Status:</p>
                <p className="text-gray-800">Unlocked</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex">
              <NewspaperIcon className="mr-3 h-5 w-5" />
              <div className="flex-2 flex">
                <p className="text-gray-700">Last Report Time:</p>
                <p className="text-gray-800">2023-08-31 08:46:13</p>
              </div>
            </div>
            <div className="flex">
              <ArrowPathIcon className="mr-3 h-5 w-5" />
              <div className="flex-2 flex">
                <p className="text-gray-700">Last online time:</p>
                <p className="text-gray-800">2023-08-31 08:03:07</p>
              </div>
            </div>
            <div className="flex">
              <GlobeAltIcon className="mr-3 h-5 w-5" />
              <div className="flex-2 flex">
                <p className="text-gray-700">Network Type:</p>
                <p className="text-gray-800">Ethernet</p>
              </div>
            </div>
            <div className="flex">
              <GlobeAmericasIcon className="mr-3 h-5 w-5" />
              <div className="flex-2 flex">
                <p className="text-gray-700">MAC:</p>
                <p className="text-gray-800">D4:CF:F9:8E:5A:A5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-end">
          <div className="flex gap-2">
            <button className="rounded-md bg-orange-400 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-orange-500 focus:bg-orange-500 focus:outline-none">
              Lock
            </button>
            <button className="rounded-md bg-orange-400 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-orange-500 focus:bg-orange-500 focus:outline-none">
              Unlock
            </button>
            <button className="rounded-md bg-green-500 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-green-600 focus:bg-green-600 focus:outline-none">
              Unlock
            </button>
            <button className="rounded-md bg-teal-500 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-teal-600 focus:bg-teal-600 focus:outline-none">
              Reboot
            </button>
            <button className="rounded-md bg-green-500 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-green-600 focus:bg-green-600 focus:outline-none">
              Unlock
            </button>
            <button className="rounded-md bg-yellow-500 px-4 py-2 font-semibold text-white transition duration-200 hover:bg-yellow-600 focus:bg-yellow-600 focus:outline-none">
              Restore Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
