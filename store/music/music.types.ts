export enum MUSIC_CASES {
  LOAD_SONG = 'game/LOAD_SONG',
  SELECT_SONG = 'SELECT_SONG',
  LOAD_SONG_BY_ID = 'game/LOAD_SONG_BY_ID'
}

const pathToClaireDeLunaMp3 = "/music/Claire_De_Luna.mp3";
const pathToClaireDeLunaPdf = "/pdfs/debussyclairdelune.pdf";

const pathToNocturnesMp3 = "/music/Nocturnes.mp3";
const pathToNocturnesPdf = "/pdfs/Nocturnes.pdf";

const pathToPolonaiseMp3 = "/music/Polonaise.mp3";
const pathToPolonaisePdf = "/pdfs/Polonaise.pdf";

const pathToScherzoMp3 = "/music/Scherzo.mp3";
const pathToScherzoPdf = "/pdfs/Scherzo.pdf";

export type SongObject = {
  name: string,
  composer: string,
  imageUrl: string,
  songUrl: string,
  pdfUrl: string,
  songID: string,


}

export const songList: SongObject[] = [
  {
    name: "Claire De Luna",
    composer: "Claude Debussy",
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    songUrl: pathToClaireDeLunaMp3,
    pdfUrl: pathToClaireDeLunaPdf,
    songID: '00001'
  },
  {
    name: "Nocturnes",
    composer: "Frédéric Chopin",
    imageUrl: "https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    songUrl: pathToNocturnesMp3,
    pdfUrl: pathToNocturnesPdf,
    songID: '00002'
  },
  {
    name: "Polonaise",
    composer: "Frédéric Chopin",
    imageUrl: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80",
    songUrl: pathToPolonaiseMp3,
    pdfUrl: pathToPolonaisePdf,
    songID: '00003'
  },
  {
    name: "Scherzo",
    composer: "Frédéric Chopin",
    imageUrl: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    songUrl: pathToScherzoMp3,
    pdfUrl: pathToScherzoPdf,
    songID: '00004'
  },

]