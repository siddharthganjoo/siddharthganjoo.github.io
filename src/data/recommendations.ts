export interface RecommendationItem {
  id: string;
  name: string;
  title: string;
  photo: string;
  quote: string;
}

export const recommendationsData: RecommendationItem[] = [
  {
    id: "yanja",
    name: "Yanja Dajsuren",
    title: "Assistant Professor, TU/e",
    photo: "assets/recommendations/yanja.jpg",
    quote: "Siddharth is amazing. He's smart, humble and he gets things done."
  },
  {
    id: "gert",
    name: "Gert Guri",
    title: "CTO, Loopit.ai",
    photo: "assets/recommendations/gert.jpg",
    quote: "Siddharth combines technical excellence with practical business acumen."
  },
  {
    id: "bert",
    name: "Bert Sadowski",
    title: "Associate Professor, TU/e",
    photo: "assets/recommendations/bert.jpg",
    quote: "A talented researcher with strong analytical and problem-solving skills."
  },
  {
    id: "alexander",
    name: "Alexander Serebrenik",
    title: "Full Professor, TU/e",
    photo: "assets/recommendations/alexander.jpg",
    quote: "Siddharth's dedication to quality and innovation is exceptional."
  }
];
