import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from 'react-icons/ri'

const Social = () => {
  return (
    <div className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md">
      
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="w-5 h-5" />
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className="text-gray600 truncate inline-block max-w-full">
          Social According text{" "}
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">Time aayega</div>
    </div>
  )
}

export default Social
