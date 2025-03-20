import type { FeaturesDataType } from '../types';

const featuresData = [
    {
        image: '/assets/images/pill.png',
        title: 'Revolutionary Blockchainb API',
        description:
            'Effortlessly integrate and mange blockchain data with our cutting-edge API, designed for seamless connectivity.',
        color: 'fuchsia',
    },
    {
        image: '/assets/images/cuboid.png',
        title: 'Decentralize Data Solutions',
        description:
            'Empower your applications with decentralized data solutions, ensuring security and transparency at every step.',
        color: 'lime',
    },
    {
        image: '/assets/images/cone.png',
        title: 'Next-Gen Smart Contracts',
        description:
            'Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.',
        color: 'cyan',
    },
    {
        image: '/assets/images/icosahedron.png',
        title: 'Seamless Blockchain Integration',
        description:
            'Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.',
        color: 'violet',
    },
] satisfies FeaturesDataType[];

const listItems = [
    'Experience unparalleled security and scalability',
    'Fully benefit from scalable network effects',
    'Unlock the potential of decentralized networks',
];

export { featuresData, listItems };
