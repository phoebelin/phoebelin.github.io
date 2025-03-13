import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to Our Wedding
        </h1>
        <p className="text-gray-600">
          Please enter your name to view your personalized details
        </p>
      </header>

      <form className="space-y-4">
        <div>
          <label 
            htmlFor="guestName" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Guest Name
          </label>
          <input
            type="text"
            id="guestName"
            name="guestName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition"
            placeholder="Enter your full name"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition duration-200 shadow-sm"
        >
          View My Details
        </button>
      </form>
    </div>
  )
} 