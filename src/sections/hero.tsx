import { Circle } from '../components/circle';
import { CutCornerButton } from '../components/cut-corner-button';
import { Hexagon } from '../components/hexagon';

export const Hero = () => {
    return (
        <section className="overflow-x-clip py-24 md:py-52">
            <div className="container">
                <p className="text-center font-extrabold uppercase tracking-wider text-zinc-500">
                    Introducing Blockforge
                </p>
                <h1 className="mx-auto mt-4 max-w-2xl text-center font-heading text-5xl font-black md:text-6xl lg:text-7xl">
                    The Future of Blockchain is Here.
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-center text-xl text-zinc-400 md:text-2xl">
                    Blockforge is pioneering smart contract integrity with cutting-edge
                    data solutions.
                </p>
                <div className="mt-10 flex items-center justify-center">
                    <CutCornerButton>Get started</CutCornerButton>
                </div>
                <div className="mt-24 flex justify-center">
                    <div className="relative z-0 inline-flex">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Hexagon className="size-[1100px]" />
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Hexagon className="size-[1800px]" />
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute -top-[900px] left-[200px]">
                                <img
                                    src="/assets/images/cube.png"
                                    alt="cube 3d img"
                                    className="size-[140px]"
                                />
                            </Circle>
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute left-[200px] top-[270px]">
                                <img
                                    src="/assets/images/cuboid.png"
                                    alt="cuboid 3d img"
                                    className="size-[140px]"
                                />
                            </Circle>
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Circle className="absolute -left-[600px] -top-[80px]">
                                <img
                                    src="/assets/images/torus.png"
                                    alt="torus 3d img"
                                    className="size-[140px]"
                                />
                            </Circle>
                        </div>

                        <img
                            src="/assets/images/icosahedron.png"
                            alt=""
                            className="absolute left-1/2 top-1/2 -z-10 w-[calc(100%+100px)] max-w-none -translate-x-1/2 -translate-y-1/2 brightness-[4%] hue-rotate-[240deg] saturate-[10%]"
                        />
                        <img
                            src="/assets/images/icosahedron.png"
                            alt="icosahedron 3d image"
                            className="w-[500px]"
                        />
                    </div>
                </div>

                <div className="mt-40 flex flex-col items-center justify-center gap-4 md:mt-80">
                    <div className="flex h-10 w-5 justify-center rounded-full pt-2 outline outline-[6px] outline-fuchsia-500/10">
                        <div className="h-3 w-1 rounded-full bg-fuchsia-500" />
                    </div>
                    <p className="font-extrabold uppercase tracking-wider text-zinc-500">
                        Scroll to learn more
                    </p>
                </div>
            </div>
        </section>
    );
};
