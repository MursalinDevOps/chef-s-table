const Banner = () => {
    return (
        <div className="mt-8 h-[600px] rounded-3xl flex flex-col items-center justify-center bg-hero-bg bg-no-repeat bg-cover">
            {/* Title */}
            <div className="md:w-[900px] text-white text-center space-y-5">
                <h2 className="text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h2>
                {/* Subtitle */}
                <p className="text-lg">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                {/* Buttons */}
                <div className="flex gap-10 justify-center">
                    <button className="btn bg-[#0BE58A]">Explore Now</button>
                    <button className="btn btn-outline outline-white text-white hover:bg-[#0BE58A] hover:text-black">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};
export default Banner;