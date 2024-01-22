import { Swiper, SwiperSlide } from 'swiper/react';

const FeaturedBrands = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <Swiper loop slidesPerView={'auto'}>
          <SwiperSlide className="flex items-center justify-center h-[300px]">
            <img
              className="text-center mx-auto h-auto w-28"
              src="/apple.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-[300px]">
            <img
              className="text-center mx-auto h-auto w-28"
              src="/samsung.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-[300px]">
            <img
              className="text-center mx-auto h-auto w-28"
              src="/jbl.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-[300px]">
            <img
              className="text-center mx-auto h-auto w-28"
              src="/a4tech.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-[300px]">
            <img
              className="text-center mx-auto h-auto w-28"
              src="/a4tech.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-[300px]">
            <img
              className="text-center mx-auto h-auto w-28"
              src="/a4tech.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-[300px]">
            <img
              className="text-center mx-auto h-auto w-28"
              src="/a4tech.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedBrands;
