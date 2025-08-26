export default function HelloWorld() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
            Hello World
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-md mx-auto leading-relaxed">
          Welcome to your new Next.js application
        </p>
        
        <div className="pt-8">
          <div className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 shadow-lg">
            Getting Started
          </div>
        </div>
        
        <div className="pt-6 text-sm text-gray-500">
          Built with Next.js & Tailwind CSS
        </div>
      </div>
    </main>
  )
}