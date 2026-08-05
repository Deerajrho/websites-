import { Carousel, TestimonialCard, type iTestimonial } from "@/components/ui/retro-testimonial";
import salonInterior from "@/assets/hero/salon-interior.png";

const REVIEWS: iTestimonial[] = [
  {
    name: "Deeraj Babu",
    designation: "Google review",
    rating: 5,
    description:
      "I started going to hair salon when I came to Nagpur, I went to him with no expectations but the very first thing that surprised me is that the salon is very neat and exquisite. Shout out to Aman bhayya — there's magic in his hands, I love it whenever he does my haircut and beard. Say hi to the whiskey for me ❤️❤️",
  },
  {
    name: "Pradnya Wadkar",
    designation: "Google review · 9 months ago",
    rating: 4.5,
    description:
      "The space is calm, bright, and beautifully curated — every detail feels intentional. My stylist took the time to understand exactly what I wanted, and the result was effortless and natural. Walking out, I felt refreshed and confident. This salon is a true hidden gem.",
  },
  {
    name: "Prachi Londhi",
    designation: "Google review · 6 months ago",
    rating: 5,
    description:
      "I had a great experience. The staff was polite and welcoming. My stylist Aman understood exactly what I wanted and suggested what would suit my face and hair type. The service was done with care and the results were amazing. The salon was clean and hygienic, and the overall experience was worth the price. Highly recommended!",
  },
  {
    name: "Ashiya Handa",
    designation: "Google review · 3 weeks ago",
    rating: 4.5,
    description:
      "I had an amazing experience at Hair Master Salon. I am extremely happy with my hair treatment. The entire team was professional, friendly, and welcoming from start to finish. They took great care of my hair and gave me exactly the look I wanted. The service, cleanliness, and attention to detail were excellent. I highly recommend Hair Master Salon to anyone looking for quality hair care. Thank you for making my experience so wonderful 😊😍",
  },
  {
    name: "Supriya Kale",
    designation: "Google review · 2 months ago",
    rating: 4.5,
    description:
      "It was a wonderful experience at Hair Master Salon! This was my first visit, and I came here on my friend's recommendation. The staff is very friendly and welcomed us warmly by offering buttermilk, which was so refreshing in this hot weather 🌞. I got a pedicure done — wow, what an amazing service, so relaxing I felt like I was dreaming. I also got my hair coloured, and I really appreciated how professionally everything was explained. The next day I took my son for a haircut — he was very happy with the result, and they even gave him a small gift. Overall, a fantastic experience. Highly recommended!",
  },
  {
    name: "Shraddha Dhanvij",
    designation: "Google review · 2 weeks ago",
    rating: 5,
    description:
      "Got hair mirroring / hair treatment done by Aman, and the results are incredible. He is highly skilled, precise, and took the time to understand exactly what my hair needed. The shine and texture are amazing. Highly recommend \"Hair Master\"",
  },
];

export default function Reviews() {
  const cards = REVIEWS.map((testimonial, index) => (
    <TestimonialCard
      key={testimonial.name}
      testimonial={testimonial}
      index={index}
      backgroundImage={salonInterior}
    />
  ));

  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <p className="eyebrow">Reviews</p>
        <h2 className="section-title">What clients say.</h2>
        <p className="section-lede">
          Tap a card to read the whole thing. Scroll or use the arrows for more.
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  );
}
