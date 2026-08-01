import { Carousel, TestimonialCard, type iTestimonial } from "@/components/ui/retro-testimonial";

type TestimonialDetails = {
  [key: string]: iTestimonial & { id: string };
};

const testimonialData = {
  ids: [
    "e60aa346-f6da-11ed-b67e-0242ac120002",
    "e60aa346-f6da-11ed-b67e-0242ac120003",
    "e60aa346-f6da-11ed-b67e-0242ac120004",
    "e60aa346-f6da-11ed-b67e-0242ac120005",
    "e60aa346-f6da-11ed-b67e-0242ac120006",
    "e60aa346-f6da-11ed-b67e-0242ac120007",
  ],
  details: {
    "e60aa346-f6da-11ed-b67e-0242ac120002": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120002",
      description:
        "The component library has revolutionized our development workflow. The pre-built components are not only beautiful but also highly customizable. It's saved us countless hours of development time.",
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      name: "Sarah Chen",
      designation: "Senior Frontend Developer",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120003": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120003",
      description:
        "As a startup founder, I needed a quick way to build a professional-looking product. This component library was exactly what I needed. The documentation is clear, and the components are production-ready.",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      name: "Michael Rodriguez",
      designation: "Founder, TechStart",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120004": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120004",
      description:
        "The attention to detail in these components is impressive. From accessibility features to responsive design, everything is well thought out. It's become an essential part of our tech stack.",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "David Kim",
      designation: "UI/UX Lead",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120005": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120005",
      description:
        "What sets this component library apart is its flexibility. We've been able to maintain consistency across our applications while still customizing components to match our brand identity perfectly.",
      profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "Emily Thompson",
      designation: "Product Designer",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120006": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120006",
      description:
        "The performance optimization in these components is outstanding. We've seen significant improvements in our application's load times and overall user experience since implementing them.",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      name: "James Wilson",
      designation: "Performance Engineer",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120007": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120007",
      description:
        "The community support and regular updates make this component library a reliable choice for our projects. It's clear that the team behind it is committed to maintaining high quality and adding new features.",
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      name: "Sophia Martinez",
      designation: "Full Stack Developer",
    },
  },
};

const cards = testimonialData.ids.map((cardId: string, index: number) => {
  const details = testimonialData.details as TestimonialDetails;
  return <TestimonialCard key={cardId} testimonial={details[cardId]} index={index} />;
});

const DemoOne = () => {
  return (
    <div className="min-h-screen">
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <Carousel items={cards} />
        </div>
      </section>
    </div>
  );
};

export { DemoOne };
