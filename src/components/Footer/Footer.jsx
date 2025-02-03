import React from 'react'

const Footer = () => {
  return (
<footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="!" className="hover:text-blue-400">Facebook</a>
          <a href="!" className="hover:text-blue-500">Twitter</a>
          <a href="!" className="hover:text-red-500">YouTube</a>
          <a href="!" className="hover:text-purple-500">Instagram</a>
        </div>
      </div>
    </footer>  )
}

export default Footer