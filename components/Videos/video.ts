type VideosInfo = { src: string; alt: string; text: string};
type VideosCollection = { [key: string]: VideosInfo };

const videos: VideosCollection = {
  circle: {
    src: "/videos/circle.mp4",
    alt: "Circle to Search",
    text: "Circle to Search ile bir nesneyi daire içine alarak Google arama sonuçlarını görebilirsiniz.",
  },
  translate: {
    src: "/videos/translate.mp4",
    alt: "Live Translate",
    text: "Yapay zeka ile siz telefonda konuşurken kendi dilinizin dışında iletişim kurabilirsiniz.",
  },
  ses: {
    src: "/videos/ses.mp4",
    alt: "Ses Kaydı Asistanı",
    text: "Ses kaydedin, AI not alsın, metne dönüştürsün ve ardından özetlesin.",
  },
  foto: {
    src: "/videos/foto.mp4",
    alt: "Foto Asistanı",
    text: "Yapay zeka destekli yeni fotoğraf düzenleme seçeneklerini keşfedebilirsiniz.",
  },
};

export default videos;