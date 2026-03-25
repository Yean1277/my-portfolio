interface BlogPostProps {
  title: string;
  date: string;
  category: string;
  wordCount: number;
  description: string;
  tags: string[];
  image?: string;
  isEncrypted?: boolean;
}

export default function BlogPost({ title, date, category, wordCount, description, tags, image, isEncrypted }: BlogPostProps) {
  return (
    <article className={`bg-white rounded-2xl p-6 shadow-soft post-card flex justify-between items-center group cursor-pointer ${isEncrypted ? 'opacity-80' : ''}`}>
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-orange-theme text-xs">📌</span>
          <h3 className="text-lg font-bold group-hover:text-orange-theme transition-colors">
            {title} {isEncrypted && <span className="text-sm">🔒</span>}
          </h3>
        </div>
        <div className="flex items-center space-x-4 text-[10px] text-gray-400 mb-2">
          <span className="flex items-center">📅 {date}</span>
          <span className="flex items-center">📁 {category}</span>
          <span className="flex items-center">📝 {wordCount} 文字</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mb-3">{description}</p>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-[10px]">#{tag}</span>
          ))}
        </div>
      </div>
      {image && (
        <div className="w-40 h-40 overflow-hidden shrink-0 ml-4">
          <img
            alt="Post Preview"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={image}
          />
        </div>
      )}
      <div className="text-gray-300 group-hover:text-orange-theme px-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      </div>
    </article>
  );
}