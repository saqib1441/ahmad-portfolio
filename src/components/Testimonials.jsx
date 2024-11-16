import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="wrapper py-20 lg:py-28">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">
          <span className="text-primary">Testimonials</span>
        </h1>
        <p className="text-secondary text-sm">What other says about us</p>
      </div>
      <div className="lg:w-[80%] lg:mx-auto">
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
