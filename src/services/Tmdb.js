const API_KEY = '493217b537f79630a1285988c5031da0';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const response = await fetch(`${API_BASE}${endpoint}`);
  const json = await response.json();

  return json.results;
};

export const Tmdb = {
  getHomeList: async () => {
    return [
      {
        slug: 'trend',
        title: 'Trending Now',
        item: [
          await basicFetch(
            `/trending/al1/week?language=en-US&api_key=${API_KEY}`
          ),
        ],
      },
      {
        slug: 'rated',
        title: 'Top Rated ',
        item: [
          await basicFetch(
            `/movie/top_rated?language=en-US&api_key=${API_KEY}`
          ),
        ],
      },
      {
        slug: 'action',
        title: 'Action Movies',
        item: [
          await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`),
        ],
      },
      {
        slug: 'comedy',
        title: 'Comedy Movies',
        item: [
          await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`),
        ],
      },
      {
        slug: 'horror',
        title: 'Horror Movies',
        item: [
          await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`),
        ],
      },
      {
        slug: 'romance',
        title: 'Romance Movies',
        item: [
          await basicFetch(
            `/discover/movie?with_genres=10749&api_key=${API_KEY}`
          ),
        ],
      },
      {
        slug: 'documentaries',
        title: 'Documentaries',
        item: [
          await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`),
        ],
      },
    ];
  },
  getNetflixOriginals: async () => {
    return {
      slug: 'originals',
      title: 'Netflix Originals',
      item: [
        await basicFetch(`/discover/tv?with_networks=213&api_key=${API_KEY}`),
      ],
    };
  },
};
