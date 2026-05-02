// ─── HOW TO ADD A TRACK ───────────────────────────────────────────────────────
// 1. Drop the MP3 file into  public/music/
// 2. Add an entry to the array below.
//    - file: filename only, e.g. "my-song.mp3"  (placed in public/music/)
//    - durationStr: display label, e.g. "3:45"  (shown in the playlist; optional)
// ─────────────────────────────────────────────────────────────────────────────

export interface Track {
  id: number;
  title: string;
  artist: string;
  file: string;       // filename inside public/music/
  durationStr?: string;
}

export const playlist: Track[] = [
  { id: 1, title: "ただ声一つ", artist: "Rokedenashi", file: "ロクデナシただ声一つ Rokudenashi - One VoiceOfficial Music Video.mp3", durationStr: "2:41" },
  { id: 2, title: "ray 超かぐや姫！", artist: "夏吉ゆうこ, 月見ヤチヨ", file: "ray-kaguyahime.mp3", durationStr: "2:29" },
  { id: 3, title: "Egao No Mahou", artist: "CHOCOBYTES", file: "Fairy Tail - Opening 5  Egao No Mahou.mp3", durationStr: "1:27" },
  { id: 4, title: "Kimiiro Signal", artist: "Luna Haruna", file: "Luna Haruna - Kimiiro Signal.mp3", durationStr: "4:42" },
  // { id: 1, title: "Secret Base", artist: "AnoHana ED", file: "secret-base.mp3", durationStr: "5:12" },
  // { id: 2, title: "Suzume",      artist: "RADWIMPS",   file: "suzume.mp3",      durationStr: "3:58" },
  // { id: 3, title: "Idol",        artist: "YOASOBI",    file: "idol.mp3",        durationStr: "3:33" },
  // { id: 4, title: "Gurenge",     artist: "LiSA",       file: "gurenge.mp3",     durationStr: "3:56" },
];
