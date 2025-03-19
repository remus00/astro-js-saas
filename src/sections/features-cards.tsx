import { FeaturesCard } from '../components/features-card';
import { featuresData } from '../contants';

export const FeaturesCards = () => {
    return (
        <section className="overflow-x-clip py-24 md:-mt-28">
            <div className="container">
                <h2 className="text-center font-heading text-4xl font-black md:text-5xl lg:text-6xl">
                    Discover the future of blockchain with Blockforge
                </h2>

                <div className="mt-36 flex lg:mt-48">
                    {/* CARD */}
                    <div className="flex flex-none gap-8">
                        {featuresData.map((item, idx) => (
                            <FeaturesCard data={item} key={idx} />
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <div className="inline-flex gap-4 rounded-full bg-zinc-950 p-2.5">
                        {featuresData.map((_, idx) => (
                            <div
                                key={idx}
                                className="size-2.5 cursor-pointer rounded-full bg-zinc-500"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
