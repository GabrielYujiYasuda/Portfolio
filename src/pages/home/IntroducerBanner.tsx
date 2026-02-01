const IntroducerBanner = () => {
  return (
    <div className=" mt-30 mb-20 px-[20%]">
      <div className="text-[14px] bg-orange-200 p-2 px-6 rounded-full w-fit">Welcome to my corner of the internet</div>
      <div className="text-[60px]">Thoughts on Code, Life, and Everything in Between</div>
      <div className="mt-5">
        Hi! I'm a developer passionate about building great products and sharing what I learn along the way. Dive into
        my portfolio or explore my latest writings.
      </div>
      <div className="flex mt-10 gap-5">
        <button className="btn btn-active">Read the blog</button>
        <button className="btn btn-outline">View Portifolio</button>
      </div>
    </div>
  );
};

export default IntroducerBanner;
