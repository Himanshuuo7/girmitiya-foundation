import { Quote } from 'lucide-react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '../data/siteData';

export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop
      grabCursor
      speed={800}
      spaceBetween={24}
      breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
      className="pb-12"
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.name}>
          <article className="h-full rounded-[1.6rem] border border-primary/20 bg-darker/80 p-7 shadow-premium transition hover:border-primary/30">
            <Quote className="text-primary" />
            <p className="mt-5 leading-8 text-light/80">“{item.quote}”</p>
            <div className="mt-6">
              <p className="font-bold text-primary">{item.name}</p>
              <p className="text-sm text-light/60">{item.role}</p>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
