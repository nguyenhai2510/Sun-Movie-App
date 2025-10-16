import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import useFetch from "@hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const FeatureMovies = () => {
  // const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();
  const { data: popularMoviesResponse } = useFetch({
    url: "/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&include_video=true",
  });

  const { data: videoResponse } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId },
  );

  console.log({ videoResponse });

  const movies = (popularMoviesResponse.results || []).slice(0, 4);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);

  useEffect(() => {
    // Đảm bảo autoplay bắt đầu khi component mount
    if (swiperInstance && movies.length > 0) {
      swiperInstance.autoplay.start();
    }
  }, [swiperInstance, movies.length]);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    if (movies[activeIndex]) {
      setActiveMovieId(movies[activeIndex].id);
    }
  };

  const handlePaginateClick = (movieId) => {
    setActiveMovieId(movieId);
    if (swiperInstance) {
      const movieIndex = movies.findIndex((movie) => movie.id === movieId);
      swiperInstance.slideTo(movieIndex);
    }
  };

  return (
    <div className="relative text-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        speed={800}
        allowTouchMove={true}
        grabCursor={true}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        className="feature-movies-swiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Movie
              data={movie}
              trailerVideoKey={
                movie.id === activeMovieId
                  ? (videoResponse?.results || []).find(
                      (video) =>
                        video.type === "Trailer" && video.site === "YouTube",
                    )?.key
                  : null
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute left-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer"></div>
      <div className="swiper-button-next-custom absolute right-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer"></div>

      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={handlePaginateClick}
      />
    </div>
  );
};
export default FeatureMovies;
