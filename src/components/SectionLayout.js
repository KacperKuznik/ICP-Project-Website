export default function SectionLayout({ header, description, children }) {
  return (
    <div className="w-4/6 mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2 tracking-tight relative inline-block">
        {header}
        <span className="block h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded mt-1"></span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-base mb-6">{description}</p>

      {/* Children */}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}
