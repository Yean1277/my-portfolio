export default function ProfileCard() {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-soft text-center">
      <img
        alt="Avatar"
        className="w-32 h-32 mx-auto rounded-2xl mb-4 object-cover border-4 border-white shadow-md"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9SpdSWL3MFxFc7esuRQuN_hdDaSACF2lIHUXWMNrjhmH_6QJah6dLXKaLZ36rJLssUp-3vkuCWuYMTvxZpPzE_BkvjX7KFdgrR6I7iMpP9XwGabWcXRlIFM-GHuJ-tt57Mwu_lhqaN-RbkZ49SvkhIwGqKe3Z9CgWpSQuM7da1y7C-hzhdO_gWCpcHya_XfOR0oQcOoa2U6FEm7hmEI0BfpbzZHH6Ny5v_BSdzUuGgTPexKGbBU5UVfKBiMuBrYYtjjrL_9n7Eg"
      />
      <h2 className="text-xl font-bold mb-1">まつどみ ゆき</h2>
      <p className="text-xs text-gray-400 mb-4 tracking-tighter">世界は広いけど、思い出す場所はここがいい</p>
      <div className="flex justify-center space-x-3 mb-6">
        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-orange-100">☕</span>
        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-orange-100">📷</span>
        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-orange-100">🎨</span>
        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-orange-100">🏠</span>
        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-orange-100">💬</span>
      </div>
      <hr className="border-beige mb-6" />
      <div className="text-left text-sm space-y-4">
        <h3 className="font-bold border-l-4 border-orange-theme pl-2">お知らせ</h3>
        <p className="text-xs leading-relaxed text-gray-500">
          ブログへようこそ！これはサンプルサイトです。
        </p>
        <button className="w-full py-2 bg-orange-100 text-orange-700 rounded-lg text-xs font-bold hover:bg-orange-200 transition-colors">
          Read More
        </button>
      </div>
    </section>
  );
}