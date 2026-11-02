import { motion } from 'framer-motion';
import img1 from "../assets/coffee1.png";
import img2 from "../assets/coffee2.png";
import img3 from "../assets/coffee3.png";

const servicesData=[
    {   id: 1,
        title: "Coffee1",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus possimus, ab veniam similique, ullam incidunt",
        image: img1
    },
    {   id: 2,
        title: "Coffee2",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus possimus, ab veniam similique, ullam incidunt",
        image: img2
    },
    {   id: 3,
        title: "Coffee3",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus possimus, ab veniam similique, ullam incidunt",
        image: img3
    }
]

const Services = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="text-center max-w-lg mx-auto space-y-2 mt-4">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.2
                    }}
                    className="text-3xl font-bold text-light-gray"
                >
                    Fresh and <span className="text-primary">Tasty</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.4
                    }}
                    className="text-sm opacity-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam repellendus possimus, ab veniam similique, ullam incidunt </motion.p>
            </div>
            {/* card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 container">
                {servicesData.map((service) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 10,
                            delay: 0.2
                        }}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img src={service.image} alt={service.title} className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer" />
                        <div className="space-y-2 text-center p-4">
                            <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                            <p className="text-gray-700">{service.subtitle}</p>
                        </div>
                    </motion.div>  
                ))}
            </div>
        </div>
    );
};

export default Services;