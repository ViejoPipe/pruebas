import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/CommentSection.css';
import img1 from './../assets/review.jpg';
import img2 from './../assets/review.jpg';
import img3 from './../assets/review.jpg';

const testimonials = [
  {
    image: img1,
    title: 'Awesome Coding',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 5,
    name: 'Person Name',
    description: 'Description',
  },
  {
    image: img2,
    title: 'Great Experience',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    rating: 5,
    name: 'Person Name',
    description: 'Description',
  },
  {
    image: img3,
    title: 'Highly Recommend',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    rating: 5,
    name: 'Person Name',
    description: 'Description',
  },
];

const CommentSection = () => {
  return (
    <div className="testimonials-section">
      <header className="section-header">
        <h1>¿Que opinan nuestros asegurados?</h1>
      </header>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 6000 }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
        }}
        className="testimonials-container"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>{testimonial.title}</h2>
                </div>
                <p>{testimonial.text}</p>
                <div className="ratings">
                  {Array(testimonial.rating)
                    .fill()
                    .map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="profile-desc">
                  <span>{testimonial.name}</span>
                  <span>{testimonial.description}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommentSection;