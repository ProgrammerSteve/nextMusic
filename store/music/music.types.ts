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
    imageUrl: "",
    songUrl: pathToClaireDeLunaMp3,
    pdfUrl: pathToClaireDeLunaPdf,
    songID: '00001'
  },
  {
    name: "Nocturnes",
    composer: "Frédéric Chopin",
    imageUrl: "",
    songUrl: pathToNocturnesMp3,
    pdfUrl: pathToNocturnesPdf,
    songID: '00002'
  },
  {
    name: "Polonaise",
    composer: "Frédéric Chopin",
    imageUrl: "",
    songUrl: pathToPolonaiseMp3,
    pdfUrl: pathToPolonaisePdf,
    songID: '00003'
  },
  {
    name: "Scherzo",
    composer: "Frédéric Chopin",
    imageUrl: "",
    songUrl: pathToScherzoMp3,
    pdfUrl: pathToScherzoPdf,
    songID: '00004'
  },

]