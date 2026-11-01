
import BGSLATE from "../assets/bg-slate.png";
import CoffeeMain from "../assets/coffee-cup.png";

const bgImage ={
    backgroundImage: `url(${BGSLATE})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}

const Hero = () => {
    return (
        <main style={bgImage}>
            <section className="min-h-[750] w-full">
                <div className="container">
                    {/* Navbar section */}
                    {/* Hero Section */}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                        {/* Text content section */}
                        <div className="text-light-orange mt-[100px] md:mt-0 p-4 space-y-28">
                            <h1 className="text-7xl font-bold leading-tight ml-14">Blvck Tumber</h1>
                            <div className="relative">
                                <div className="relative z-10 space-y-4">
                                    <h1 className="text-2xl">Black Lifestyle Lovers.</h1>
                                    <h1 className="text-sm opacity-55 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corporis, delectus optio recusandae exercitationem modi. Quod quaerat mollitia tempora, fuga nobis unde maiores hic dolore, nemo consequatur, porro sequi alias?</h1>
                                </div>
                                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
                            </div>

                        </div>

                        {/* Hero Image section */}
                        <div className="relative">
                            <img src={CoffeeMain} alt="Coffee" className="relative z-40 h-[400px] md:h-[700px] img-shadow" />
                        </div>
                        {/* third div section */}
                        <div></div>
                    </div>
                </div>    
            </section>
        </main>
    );
};

export default Hero;