export enum MUSIC_CASES {
  LOAD_SONG = 'game/LOAD_SONG',
  SELECT_SONG = 'SELECT_SONG'
}

const pathToClaireDeLunaMp3 = "/music/Claire_De_Luna.mp3";
const pathToClaireDeLunaPdf = "/pdfs/debussyclairedeluna.pdf";

const pathToNocturnesMp3 = "/music/Nocturnes.mp3";
const pathToNocturnesPdf = "/pdfs/Nocturnes.pdf";

const pathToPolonaiseMp3 = "/music/Polonaise.mp3";
const pathToPolonaisePdf = "/pdfs/Polonaise.pdf";

const pathToScherzoMp3 = "/music/Scherzo.mp3";
const pathToScherzoPdf = "/pdfs/Scherzo.pdf";

type SongObject = {
  name: string,
  songUrl: string,
  pdfUrl: string
}

export const songList: SongObject[] = [
  {
    name: "Claire_De_Luna",
    songUrl: pathToClaireDeLunaMp3,
    pdfUrl: pathToClaireDeLunaPdf
  },
  {
    name: "Nocturnes",
    songUrl: pathToNocturnesMp3,
    pdfUrl: pathToNocturnesPdf
  },
  {
    name: "Polonaise",
    songUrl: pathToPolonaiseMp3,
    pdfUrl: pathToPolonaisePdf
  },
  {
    name: "Scherzo",
    songUrl: pathToScherzoMp3,
    pdfUrl: pathToScherzoPdf
  },

]