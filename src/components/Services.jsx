import { services } from "../constants"


const ServiceCard=({icon, title, content, index})=>{
    return(
        <div className="w-auto md:w-1/2 lg:w-1/3">
                        <div
                            className="py-8 px-5 mb-12 transform transition duration-300 ease-in-out hover:-translate-y-2"
                        >
                            <div
                                className=" text-gray-900 mb-4" 
                            >
                                <img className="w-10 mx-auto" src={icon} />
                            </div>
                            <h1 className="text-2xl  leading-normal mb-2 font-semibold text-black">
                               {title}
                            </h1>
                            <p className="text-black">
                              {content}
                            </p>
                        </div>
                    </div>
    )
}

export default function Services() {
    return (

        <section className="pt-20 pb-12 mt-auto lg:pt-[100px] lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <h2
                                className="text-gradient mb-4 font-bold xs:text-[48px] text-[40px]"
                            >
                                What We Offer
                            </h2>
                            <p className="text-black text-base">
                                There are many variations of passages of Lorem Ipsum available but
                                the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap  flex-row text-center">
                
                    {
                        services.map((service, index) => (
                            <ServiceCard
                            icon={service.icon}
                            title={service.title}
                            content={service.content}
                            index={index}
                            key={service.id}
                            />
                        ))
                    }
                


                </div>
            </div>
        </section>


    )
}