export default function Statistics() {
  return (
    <section className="bg-white rounded-2xl p-5 shadow-soft">
      <h3 className="font-bold mb-4 border-l-4 border-orange-theme pl-2">統計情報</h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">📝 投稿</span>
          <span className="font-bold">6</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">📁 カテゴリー</span>
          <span className="font-bold">3</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">🏷️ タグ</span>
          <span className="font-bold">10</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">⌨️ 文字数の合計</span>
          <span className="font-bold">2,431</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">📅 稼働日数</span>
          <span className="font-bold">449日</span>
        </div>
      </div>
    </section>
  );
}